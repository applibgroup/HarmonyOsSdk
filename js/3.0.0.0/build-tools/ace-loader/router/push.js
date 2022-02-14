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

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const http = require("http");
const os = require("os");
const { login, GET, POST, decryptStr2Str } = require("./pushHelper");

let localIp = undefined;
let argv = getArgv();

checkArgv();

let pwd = decryptStr2Str(argv.metePath, argv.session);
if (pwd == undefined) {
  finish(12, "incorrect password.");
}

function constainsKey(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].pkgName === key) {
      return true;
    }
  }
  return false;
}

let cnt = 0;
function getErr(data) {
  if (cnt == 20) {
    POST(`http://${argv.ip}/api/system/user_logout`);
    finish(41, "install timeout");
  }
  cnt++;

  GET(`http://${argv.ip}/api/hap/all_infos`).then(
    allInfos => {
      if (constainsKey(allInfos.installedHap, data.pkgName)) {
        POST(`http://${argv.ip}/api/system/user_logout`);
        finish(31, "install success.");
      }
      if (constainsKey(allInfos.installingHap, data.pkgName)) {
        return;
      }
      return POST(`http://${argv.ip}/api/acelite/get_err`, data);
    }
  ).then(
    errInfo => {
      POST(`http://${argv.ip}/api/system/user_logout`);
      if (errInfo.errCode == 404) {
        finish(30, "no interface.");
      }
      finish(errInfo.errCode, "install fail");
    }
  );
}

login(argv.ip, pwd).then(res => {
  if (res == undefined) {
    finish(10, "internal error.");
  };

  if (res.err == 0) {
    let port = createListen(argv.file);
    if (port == null) {
      finish(8, "create the file server failed.");
    }

    let data = {
      pkgName: argv.pkgName,
      name: argv.name,
      versionName: argv.versionName || "1.0.0",
      versionCode: parseInt(argv.versionCode) || 1,
      appId: argv.appId || "C" + new Date().getTime(),
      downloadUrl: `http://${localIp}:${port}/signed.hap`,
      iconUrl: "https://appimg.dbankcdn.com/application/icon144/a02cb676dfdf49ccad87471b421a5276.png",
      isDebug: 1,
    };

    POST(`http://${argv.ip}/api/acelite/hap_delete`, data).then(
      () => {
        return POST(`http://${argv.ip}/api/acelite/hap_debug`, data);
      }
    ).then(
      res => {
        if (res.errcode != 0) {
          finish(14, "push fail.");
        }
        setInterval(()=>getErr(data), 3000);
      }
    );
  } else if ((res.err == 4784230 || res.err == 4784231) && res.waitTime) {
    finish(13, "too many errors. Please try again later.");
  } else {
    finish(9, "login failed.");
  }
}).catch(err => {
  finish(10, "internal error.");
});

if (!argv.file) {
  finish(2, "Path is null")
}

function checkArgv() {
  if (!argv.ip || !(localIp = getLocalIp(argv.ip))) {
    finish(1, "ip error")
  }
  if (!argv.file || !fs.existsSync(argv.file)) {
    finish(2, "file error.")
  }
  if (!argv.metePath || !fs.statSync(argv.metePath).isDirectory()) {
    finish(3, "metePath error.")
  }
  if (!argv.session) {
    finish(4, "session error.")
  }
  if (!argv.pkgName) {
    finish(5, "pkgName error.")
  }
  if (!argv.name) {
    finish(6, "name error.")
  }
}

function finish(code, msg) {
  process.exit(code)
}

/**
 * Listen to external download requirements on random port from 9000 to 9100.
 * @param {String} hapPath hap file path.
 * @return {Number} service port.
 */
function createListen(hapPath) {
  /* Generate a random number 9000~9100. randomBytes() return number is 0~255. */
  let port = 9000 + Math.round(new Uint8Array(crypto.randomBytes(1))[0] * 100 / 255);

  let server = http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=' + path.basename(hapPath),
      "Content-Length": fs.statSync(hapPath).size
    });
    fs.createReadStream(hapPath).pipe(res);
    server.close();
  }).listen(port);

  server.on("error", () => {
    finish(8, "create the file server failed.");
  })

  return port;
}

/**
 * Get parameter from command.
 * @return {Object} Object of parameter
 */
function getArgv() {
  let ret = {};
  process.argv.splice(2).forEach((value, index, array) => {
    if (/^--[a-zA-Z]+/.test(value)) {
      if (index < array.length - 1 && /[^-]+/.test(array[index + 1])) {
        ret[value.substr(2)] = array[index + 1];
      } else {
        ret[value.substr(2)] = true;
      }
    }
  });
  return ret;
}

function getLocalIp(ip) {
  let localIp = undefined;
  Object.values(os.networkInterfaces()).forEach(
    iface => {
      iface.forEach(
        alias => {
          if (alias.address.replace(/\.\d+$/, '.1') == ip) {
            localIp = alias.address;
            return;
          }
        }
      );
      if (localIp) {
        return;
      }
    }
  );
  return localIp;
}
