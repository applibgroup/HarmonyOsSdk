/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

const path = require('path');
const fs = require('fs');

const projectPath = process.env.aceModuleRoot || process.cwd();
const buildPath = process.env.aceModuleBuild || path.resolve(projectPath, 'build');
const manifestFilePath = process.env.aceManifestPath || path.join(projectPath, 'manifest.json');
const appJSPath = path.join(projectPath, 'app.js');
const entryObj = {};
const red = '\u001b[31m';
const reset = '\u001b[39m';

loadEntryObj();
function loadEntryObj() {
  if (!fs.existsSync(manifestFilePath)) {
    throw Error(red + 'ERROR: missing manifest' + reset).message;
  }
  if (!fs.existsSync(appJSPath)) {
    throw Error(red + 'ERROR: missing app.js' + reset).message;
  }
  entryObj['./app'] = projectPath + '/app.js?entry';
}

deleteFolderRecursive(buildPath);
function deleteFolderRecursive(url) {
  let files = [];
  if (fs.existsSync(url)) {
    files = fs.readdirSync(url);
    files.forEach(function(file, index) {
      const curPath = path.join(url, file);
      if (fs.statSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdir(url, function(err) {});
  }
}

module.exports = {
  entryObj: entryObj,
  buildPath: buildPath,
  projectPath: projectPath,
  manifestFilePath: manifestFilePath,
};
