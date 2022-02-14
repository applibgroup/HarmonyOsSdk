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

const fs = require('fs');
const path = require('path');

const { readFile } = require('./lib/utils');
const { WORKERS_DIR } = require('./lib/pre_define');

const {
  configure,
  getLogger
} = require('log4js');

configure({
  appenders: { 'ETS': {type: 'stderr', layout: {type: 'messagePassThrough'}}},
  categories: {'default': {appenders: ['ETS'], level: 'info'}}
});
const logger = getLogger('ETS');

const staticPreviewPage = process.env.aceStaticPreview;
const abilityConfig = {
  abilityType: process.env.abilityType || 'page',
  abilityEntryFile: null
};
const projectConfig = {};
const resources = {
  app: {},
  sys: {}
};

function initProjectConfig(projectConfig) {
  projectConfig.entryObj = {};
  projectConfig.projectPath = projectConfig.projectPath || process.env.aceModuleRoot ||
    path.join(process.cwd(), 'sample');
  projectConfig.buildPath = projectConfig.buildPath || process.env.aceModuleBuild ||
    path.resolve(projectConfig.projectPath, 'build');
  projectConfig.manifestFilePath = projectConfig.manifestFilePath || process.env.aceManifestPath ||
    path.join(projectConfig.projectPath, 'manifest.json');
}

function loadEntryObj(projectConfig) {
  initProjectConfig(projectConfig);
  setEntryFile(projectConfig);

  if(staticPreviewPage) {
    projectConfig.entryObj['./' + staticPreviewPage] = projectConfig.projectPath + path.sep +
      staticPreviewPage + '.ets?entry';
  } else if (abilityConfig.abilityType === 'page') {
    let manifest = {};
    try {
      const jsonString = fs.readFileSync(projectConfig.manifestFilePath).toString();
      manifest = JSON.parse(jsonString);
    } catch (error) {
      throw Error(`\u001b[31m ERROR: the manifest file '${projectConfig.manifestFilePath}' is lost or format is invalid. \u001b[39m`).message;
    }
    if (manifest.pages) {
      const pages = manifest.pages;
      pages.forEach((element) => {
        const fileName = projectConfig.projectPath + path.sep + element + '.ets';
        if (fs.existsSync(fileName)) {
          projectConfig.entryObj['./' + element] = fileName + '?entry';
        } else {
          throw Error(`\u001b[31m ERROR: page '${fileName}' does not exist. \u001b[39m`).message;
        }
      });
    } else {
      throw Error(`\u001b[31m ERROR: missing pages attribute in '${projectConfig.manifestFilePath}'. \u001b[39m`).message;
    }
  }
}

function setEntryFile(projectConfig) {
  const entryFileName = abilityConfig.abilityType === 'page' ? 'app' : abilityConfig.abilityType;
  const extendFile = entryFileName === 'app' ? '.ets' : '.ts';
  abilityConfig.abilityEntryFile = entryFileName + extendFile;
  const entryFilePath = path.join(projectConfig.projectPath, abilityConfig.abilityEntryFile);
  if (!fs.existsSync(entryFilePath)) {
    throw Error(`\u001b[31m ERROR: missing ${entryFilePath}. \u001b[39m`).message;
  }
  projectConfig.entryObj[`./${entryFileName}`] = projectConfig.projectPath + `/${abilityConfig.abilityEntryFile}?entry`;
}

function loadWorker(projectConfig) {
  const workerPath = path.resolve(projectConfig.projectPath, WORKERS_DIR);
  if (fs.existsSync(workerPath)) {
    const workerFiles = [];
    readFile(workerPath, workerFiles);
    workerFiles.forEach((item) => {
      if (/\.(ts|js)$/.test(item)) {
        const relativePath = path.relative(workerPath, item).replace(/\.(ts|js)$/, '');
        projectConfig.entryObj[`./${WORKERS_DIR}/` + relativePath] = item;
      }
    })
  }
}

;(function initSystemResource() {
  const sysResourcePath = path.resolve('./sysResource.js');
  if (fs.existsSync(sysResourcePath)) {
    resources.sys = require(sysResourcePath).sys;
  }
})()

function readAppResource(resources, filePath) {
  if (fs.existsSync(filePath)) {
    const appResource = fs.readFileSync(filePath, "utf-8");
    const resourceArr = appResource.split(/\n/);
    let resourceMap = new Map();
    for (let i = 0; i < resourceArr.length; i++) {
      if (!resourceArr[i].length) {
        continue;
      }
      const resourceData = resourceArr[i].split(/\s/);
      if (resourceData.length === 3 && Number(resourceData[2]) !== NaN ) {
        if (resourceMap.get(resourceData[0])) {
          const resourceKeys = resourceMap.get(resourceData[0]);
          if (!resourceKeys[resourceData[1]] || resourceKeys[resourceData[1]] !== Number(resourceData[2])) {
            resourceKeys[resourceData[1]] = Number(resourceData[2]);
          }
        } else {
          let obj = {};
          obj[resourceData[1]] = Number(resourceData[2]);
          resourceMap.set(resourceData[0], obj);
        }
      } else {
        logger.warn(`\u001b[31m ETS:WARN The format of file '${filePath}' is incorrect. \u001b[39m`);
        break;
      }
    }
    for (let [key, value] of resourceMap) {
      resources.app[key] = value;
    }
  }
}

exports.projectConfig = projectConfig;
exports.loadEntryObj = loadEntryObj;
exports.readAppResource = readAppResource;
exports.resources = resources;
exports.loadWorker = loadWorker;
exports.abilityConfig = abilityConfig;
