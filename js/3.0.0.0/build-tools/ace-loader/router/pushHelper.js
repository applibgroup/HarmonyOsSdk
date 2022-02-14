/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

let ip = undefined;
let pwd = undefined;
let csrf = {};
let globalCookie = '';

const defaultHeader = {
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/json, text/javascript, */*; q=0.01',
  'Content-Type': 'application/json; charset=utf-8'
}

module.exports = { decryptStr2Str, login, GET, POST };

function login(ipParam, pwdParam) {
  return new Promise(async resolve => {
    if (!ipParam || pwdParam == undefined) {
      resolve();
    }
    ip = ipParam;
    pwd = pwdParam;

    await GET(`http://${ip}/api/system/deviceinfo`);

    let count = 0;
    let proofData = undefined;
    do {
      let firstNonce = crypto.createHash('sha256').update(crypto.randomBytes(8)).digest("hex");
      let res = await POST(`http://${ip}/api/system/user_login_nonce`, { username: 'admin', firstnonce: firstNonce })

      if (res.err != 0) {
        continue;
      }

      proofData = getProofData(res, firstNonce);
    } while (!proofData && ++count < 5);

    if (proofData == undefined) {
      resolve();
      return;
    }

    res = await POST(`http://${ip}/api/system/user_login_proof`, proofData)
    resolve(res);
  });
};

function getProofData(res, firstNonce) {
  if (!res || res.err != 0) {
    return undefined;
  }

  let iter = res.iterations;
  let finalNonce = res.servernonce;
  let salt = res.salt;
  if (!iter || !finalNonce || !salt) {
    return undefined;
  }

  let authMsg = firstNonce + "," + finalNonce + "," + finalNonce;
  let saltPwd = crypto.pbkdf2Sync(Buffer.from(stringToByte(pwd)), hexStringToByte(salt), iter, 32, "sha256");
  let clientKey = crypto.createHmac("sha256", "Client Key").update(saltPwd).digest();
  let storekey = crypto.createHash("sha256").update(clientKey).digest();
  let clientsignature = crypto.createHmac("sha256", authMsg).update(storekey).digest();
  let len = clientKey.byteLength;
  let clientproof = Buffer.alloc(len);

  for (let i = 0; i < len; i++) {
    clientproof.writeUInt8(clientKey.readUInt8(i) ^ clientsignature.readUInt8(i), i);
  }

  clientproof = clientproof.toString("hex")

  return {
    clientproof: clientproof,
    finalnonce: finalNonce
  }
}


function refreshSession(header, ret) {
  let cookie = header && header["set-cookie"] && header["set-cookie"][0];

  cookie && (globalCookie = (cookie.substring(0, cookie.indexOf(";"))));
  ret.csrf_param && (csrf.csrf_param = ret.csrf_param);
  ret.csrf_token && (csrf.csrf_token = ret.csrf_token);
}

function POST(url, data) {
  return new Promise(resolve => {
    let req = http.request(url, {
      method: "post",
      timeout: 300,
      headers: {
        ...defaultHeader,
        Cookie: globalCookie
      }
    }, resp => {
      if (resp.statusCode != 200) {
        resolve({errCode: 404});
        return;
      }

      let ret = "";
      resp.on('data', chunk => ret += chunk);
      resp.on('end', () => {
        try{
          ret = JSON.parse(ret);
        }catch(err) {
          resolve(null);
          return;
        }
        refreshSession(resp.headers, ret);
        resolve(ret);
      });
    });

    req.write(JSON.stringify({
      data,
      csrf,
    }));
    req.end();

    req.on("error", () => {
      req.destroy();
      resolve(null);
    }).on("timeout", () => {
      req.destroy();
      resolve(null);
    });
  });
}

function GET(url) {
  return new Promise(resolve => {
    let req = http.get(url, {
      timeout: 300, headers: {
        ...defaultHeader,
        Cookie: globalCookie
      }
    }, resp => {
      let ret = "";
      resp.on('data', chunk => ret += chunk);
      resp.on('end', () => {
        ret = JSON.parse(ret);
        refreshSession(resp.headers, ret);
        resolve(ret);
      });
    });

    req.on("error", () => {
      req.destroy();
      resolve(null);
    }).on("timeout", () => {
      req.destroy();
      resolve(null);
    });
  });
}


/**
 * fd Root key component directory.
 * ac Directory for storing the salt used to generate the final root key in iteration mode.
 * ce work key material directory
 */
const comDirs = ["fd", "ac", "ce"];

/**
 * Root path of key materials. All materials are stored in this path.
 */
const meteDir = "material";

/**
 * A part of the root key component. It must work with other components to form a root key.
 * For details, see the Key Management Security Specifications V1.3.
 */
let COMPONENT = Array.from(new Int8Array([
  0x31, 0xf3, 0x09, 0x73, 0xd6, 0xaf, 0x5b, 0xb8,
  0xd3, 0xbe, 0xb1, 0x58, 0x65, 0x83, 0xc0, 0x77
]));

function decryptStr2Str(rootPath, input) {
  let metePath = path.resolve(rootPath, meteDir);
  let components = readComponents(metePath);
  let saltDir = path.resolve(metePath, comDirs[1]);
  let salt = readDirBytes(saltDir);
  let rootKey = deriveRootKey(components, salt);
  let workMeteDir = path.resolve(metePath, comDirs[2]);
  let workMete = readDirBytes(workMeteDir);
  let key = decrypt(rootKey, workMete);
  let bts = hexStringToByte(input);

  let output = decrypt(key, bts);
  return (Buffer.from(output).toString("utf-8"));
}

function hexStringToByte(str) {
  if (!str) {
    return new Uint8Array();
  }

  var a = [];
  for (var i = 0, len = str.length; i < len; i += 2) {
    a.push(parseInt(str.substr(i, 2), 16));
  }

  return new Int8Array(a);
}

function decrypt(rootKey, workMete) {
  if (workMete.length < 32) {
    return null;
  }
  let bodyLength = ((workMete[0] & 0xFF) << 24) | ((workMete[1] & 0xFF) << 16) | ((workMete[2] & 0xFF) <<
    8) | ((workMete[3] & 0xFF));

  let iv = workMete.slice(4, workMete.length - bodyLength);

  let cipher = crypto.createCipheriv("aes-128-gcm", new Int8Array(rootKey), new Int8Array(iv), {
    authTagLength: 16
  });
  let encrypted = cipher.update(new Int8Array(workMete.slice(workMete.length - bodyLength)))
  cipher.final();
  return new Int8Array(encrypted).slice(0, bodyLength - 16);

}

function deriveRootKey(components, salt) {
  let fullComponents = components;
  fullComponents.push(COMPONENT);
  let finalComponent = sortFullComponent(fullComponents);
  let key = Array.from(new Int8Array(crypto.pbkdf2Sync(finalComponent, new Int8Array(salt), 10000, 16, "sha256")));
  return key;
}

function sortFullComponent(fullComponents) {
  let ret = fullComponents[0];
  for (let i = 1; i < fullComponents.length; i++) {
    ret = xor(ret, fullComponents[i]);
  }
  return new Int8Array(stringToByte(Buffer.from(ret).toString("utf-8")));
}

function stringToByte(str) {
  var bytes = new Array();
  var len, c;
  len = str.length;
  for (var i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x010000 && c <= 0x10FFFF) {
      bytes.push(((c >> 18) & 0x07) | 0xF0);
      bytes.push(((c >> 12) & 0x3F) | 0x80);
      bytes.push(((c >> 6) & 0x3F) | 0x80);
      bytes.push((c & 0x3F) | 0x80);
    } else if (c >= 0x000800 && c <= 0x00FFFF) {
      bytes.push(((c >> 12) & 0x0F) | 0xE0);
      bytes.push(((c >> 6) & 0x3F) | 0x80);
      bytes.push((c & 0x3F) | 0x80);
    } else if (c >= 0x000080 && c <= 0x0007FF) {
      bytes.push(((c >> 6) & 0x1F) | 0xC0);
      bytes.push((c & 0x3F) | 0x80);
    } else {
      bytes.push(c & 0xFF);
    }
  }
  return bytes;
}

function xor(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length != arr2.length) {
    return null;
  }

  let ret = [];
  for (let i = 0; i < arr1.length; i++) {
    ret.push(arr1[i] ^ arr2[i]);
  }
  return ret;
}

function readDirBytes(dir) {
  let files = fs.readdirSync(dir);
  if (files.length != 1) {
    return null;
  }

  return Array.from(new Int8Array(fs.readFileSync(path.resolve(dir, files[0]))));
}

function readComponents(dir) {
  let files = fs.readdirSync(path.resolve(dir, comDirs[0]));
  if (files == null || files.length != 3) {
    return null;
  }
  let ret = [];
  for (let i = 0; i < files.length; i++) {
    ret.push(readDirBytes(path.resolve(dir, comDirs[0], files[i])));
  }
  return ret;
}