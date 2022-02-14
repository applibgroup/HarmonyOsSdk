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

const os = require("os")
const http = require("http");
const crypto = require('crypto');

const localHost = '127.0.0.1'
const uri = '/api/system/deviceinfo'
const timeout = 300
const IPv4 = 'IPv4'
const SHA256 = 'SHA256'
const hex = 'hex'

function fliterAlias(alias) {
  return alias.family === IPv4 && alias.address !== localHost && !alias.internal
}

function getIP() {
  let IPAdress = [];
  Object.values(os.networkInterfaces()).forEach(
    iface => iface.filter(fliterAlias).forEach(
      alias => {
        ip = alias.address.replace(/\.\d+$/, '.1')
        !IPAdress.includes(ip) && IPAdress.push(ip)
      }
    )
  );
  return IPAdress;
}

async function getName(ip) {
  return await new Promise(resolve => {
    let req = http.get(`http://${ip}${uri}`, { timeout: timeout }, resp => {
      if (resp.statusCode != 200) {
        req.destroy();
        resolve(null);
        return;
      }

      resp.setEncoding('utf8');
      let ret = "";
      resp.on('data', chunk => ret += chunk);
      resp.on('end', () => {
        try {
          const parsedData = JSON.parse(ret)
          resolve({ ip, name: parsedData.FriendlyName, udid: crypto.createHash(SHA256).update(parsedData.uuid).digest(hex) });
        } catch (error) {
          resolve(null);
        }
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

async function main() {
  let ipArr = getIP();
  let ret = [];
  for (let i = 0; i < ipArr.length; i++) {
    let route = await getName(ipArr[i]);
    route && ret.push(route)
  }
  console.info("resp : 200");
  console.info(JSON.stringify(ret));
}

main();