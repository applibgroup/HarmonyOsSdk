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
const argv = require('yargs').argv;
const { PLATFORM }= require('./lib/lite/lite-enum')

let projectPath = process.env.aceModuleRoot || process.cwd();
let buildPath = process.env.aceModuleBuild || path.resolve(projectPath, 'build');
if (argv.aceModuleRoot && argv.aceModuleBuild) {
  projectPath = argv.aceModuleRoot;
  buildPath = argv.aceModuleBuild;
}
const manifestFilePath = process.env.aceManifestPath || path.resolve(projectPath, 'manifest.json');
const appJSPath = path.resolve(projectPath, 'app.js');
const red = '\u001b[31m';
const reset = '\u001b[39m';
let entryObj = {};

function readManifest() {
  let manifest = {};
  try {
    const jsonString = fs.readFileSync(manifestFilePath).toString()
    manifest = JSON.parse(jsonString)
  } catch (e) {
    throw Error('\u001b[31m' + 'ERROR: the manifest file is lost or format is invalid.' + '\u001b[39m').message
  }
  return manifest;
}

function loadEntryObj(manifest) {
  if (process.env.DEVICE_LEVEL === 'card') {
    addPageEntryObj(manifest);
  } else {
    if (!fs.existsSync(appJSPath)) {
      throw Error(red + 'ERROR: missing app.js' + reset).message;
    }
    entryObj['./app'] = projectPath + '/app.js?entry';
  }
  getPlatformVersion(manifest)
  return entryObj;
}

function addPageEntryObj(manifest) {
  entryObj = {};
  const pages = manifest.pages;
  if (pages === undefined) {
    throw Error('ERROR: missing pages').message;
  }
  pages.forEach((element) => {
    entryObj['./' + element] = projectPath + path.sep + element + '.hml?entry'
  })
}

function getPlatformVersion(manifest) {
  process.env.PLATFORM_VERSION = PLATFORM.VERSION6;
  const version = parseInt(manifest.minPlatformVersion);
  if (version == 5) {
    process.env.PLATFORM_VERSION = PLATFORM.VERSION5;
  }
  if (version <= 4) {
    process.env.PLATFORM_VERSION = PLATFORM.VERSION3;
  }
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
  readManifest: readManifest,
  loadEntryObj: loadEntryObj,
};
