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

const path = require("path");
const fs = require("fs");

let aceModuleRoot = process.env.aceModuleRoot;
const buildPath = process.env.aceModuleBuild;

const config = path.join(aceModuleRoot, "../../config.json");
const appJSPath = path.join(aceModuleRoot, "app.js");
let pluginInfo = {};

loadEntryObj();

function loadEntryObj() {
  const red = "\u001b[31m";
  const reset = "\u001b[39m";

  if (!fs.existsSync(config)) {
    throw Error(red + "ERROR: missing config" + reset).message;
  }

  if (!fs.existsSync(appJSPath)) {
    throw Error(red + "ERROR: missing app.js" + reset).message;
  }

  pluginInfo = JSON.parse(fs.readFileSync(config, {
    encoding: "utf-8"
  }));

  if (!(pluginInfo && pluginInfo.app && pluginInfo.app.bundleName && pluginInfo.app.version.name)) {
    throw Error(red + "ERROR: mainfest context invalid" + JSON.stringify(pluginInfo)).message;
  }
}

module.exports = {
  appJSPath,
  pluginInfo,
  buildPath: buildPath,
  projectPath: aceModuleRoot,
  manifestFilePath: config,
  pkgName: pluginInfo.app.bundleName,
  hapName: pluginInfo.app.bundleName + "-" + pluginInfo.app.version.name + "_unsigned",
};