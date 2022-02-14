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

var path = require('path')
var fs = require('fs')

var ResourcePlugin = require('./lib/resource-plugin')
var ResultStates = require('./lib/compile-plugin')
var GenBinPlugin = require('./lib/genBin-plugin')
var GenAbcPlugin = require('./lib/genAbc-plugin')
var AfterEmitPlugin = require('./lib/cardJson-plugin').AfterEmitPlugin
var ModuleCollectionPlugin = require('./lib/module-collection-plugin')

const { PLATFORM }= require('./lib/lite/lite-enum')
const util = require('./lib/util')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const watchMode = (process.env.watchMode && process.env.watchMode === 'true') || false

const { deleteFolderRecursive, readManifest, loadEntryObj } = require('./main.product')

const richModule = {
  rules: [
    {
      test: /\.visual$/,
      use: [{
        loader: path.resolve(__dirname, './lib/loader-gen.js')
      }]
    },
    {
      test: /(\.hml|app\.js)(\?[^?]+)?$/,
      use: [{
        loader: path.resolve(__dirname, './index.js')
      }]
    },
    {
      test: /\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'common'
        }
      }]
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'css-loader'
      }]
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'less-loader'
      }]
    },
    {
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'style-loader!css-loader!sass-loader'
      }]
    },
    {
      test: /\.jsx?$/,
      use: [
        {
          loader: path.resolve(__dirname, 'lib/module-script.js')
        },
        {
          loader: util.loadBabelModule('babel-loader'),
          options: {
            presets: [util.loadBabelModule('@babel/preset-env')],
            plugins: [util.loadBabelModule('@babel/plugin-transform-modules-commonjs'),
            util.loadBabelModule('@babel/plugin-proposal-class-properties')]
          }
        }
      ]
    }
  ]
}

const cardModule = {
  rules: [
    {
      test: /\.visual$/,
      use: [{
        loader: path.resolve(__dirname, './lib/loader-gen.js')
      }]
    },
    {
      test: /\.hml$/,
      use: [{
        loader: path.resolve(__dirname, './lib/card-loader.js')
      }]
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'css-loader'
      }]
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'less-loader'
      }]
    },
    {
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'css-loader!sass-loader'
      }]
    }
  ]
}

let config = {
  cache: {
    type: 'filesystem'
  },
  watch: watchMode,
  watchOptions: {
    aggregateTimeout: 10,
    poll: false,
    ignored: /node_modules/
  },
  output: {
    filename: '[name].js',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
  devtool: 'nosources-source-map',
  mode: 'development',
  module: richModule,
  node: {
    global: false
  },
  stats: 'none'
}

function setConfigs(env) {
  process.env.error = env.error === undefined ? true : env.error
  process.env.warning = env.warning === undefined ? true : env.warning
  process.env.note = env.note === undefined ? true : env.note
  process.env.buildMode = env.buildMode || 'debug'
  process.env.logLevel = env.logLevel || '1'
  process.env.isPreview = env.isPreview || false
  process.env.projectPath = env.aceModuleRoot || process.env.aceModuleRoot || process.cwd();
  process.env.buildPath = env.aceModuleBuild || process.env.aceModuleBuild || path.resolve(process.env.projectPath, 'build');
  process.env.cachePath = env.cachePath || process.env.cachePath || path.resolve(__dirname, 'node_modules/.cache');
  process.env.aceManifestPath = process.env.aceManifestPath || path.resolve(process.env.projectPath, 'manifest.json');
  process.env.abilityType = process.env.abilityType || 'page'
  process.env.DEVICE_LEVEL = process.env.DEVICE_LEVEL || 'rich'
  if (process.env.abilityType === 'page') {
    const manifest = readManifest(process.env.aceManifestPath)
    process.env.DEVICE_LEVEL = manifest.type === 'form' ? 'card' : 'rich'
    process.env.PLATFORM_VERSION = PLATFORM.VERSION6;
    const version = parseInt(manifest.minPlatformVersion);
    if (version == 5) {
      process.env.PLATFORM_VERSION = PLATFORM.VERSION5;
    }
    if (version <= 4) {
      process.env.PLATFORM_VERSION = PLATFORM.VERSION3;
    }
  }
}


module.exports = (env) => {
  setConfigs(env)
  deleteFolderRecursive(process.env.buildPath);
  config.cache.cacheDirectory = path.resolve(process.env.cachePath, '.rich_cache')
  config.module.rules.push({
    test: new RegExp("(" + (process.env.abilityType === 'page' ? 'app' : process.env.abilityType) + "\.js)(\\?[^?]+)?$"),
    use: [{
      loader: path.resolve(__dirname, './index.js')
    }]
  })
  config.entry = loadEntryObj(process.env.projectPath, process.env.DEVICE_LEVEL, process.env.abilityType, process.env.aceManifestPath)
  config.output.path = path.resolve(__dirname, process.env.buildPath)
  config.plugins = [
    new ResourcePlugin(process.env.projectPath, process.env.buildPath, process.env.aceManifestPath),
    new ResultStates({
      build: process.env.buildPath
    })
  ]
  config.resolve = {
    modules: [
      process.env.projectPath,
      path.join(process.env.projectPath, '../../../../../'),
      path.join(__dirname, 'node_modules'),
      './node_modules'
    ]
  }
  if (fs.existsSync(path.resolve(process.env.projectPath, 'i18n'))) {
    config.plugins.push(new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.env.projectPath, 'i18n'),
          to: path.resolve(process.env.buildPath, 'i18n'),
          noErrorOnMissing: true
        }
      ]
    }))
  }
  if (process.env.DEVICE_LEVEL === 'card') {
    config.module = cardModule
    config.plugins.push(new AfterEmitPlugin())
  } else {
    if (env.isPreview !== "true") {
      config.plugins.push(new ModuleCollectionPlugin())
      if (env.compilerType && env.compilerType === 'ark') {
        config.plugins.push(new GenAbcPlugin(process.env.buildPath, path.join(__dirname, 'bin'), env.buildMode === 'debug'))
      } else {
        if (env.deviceType) {
          let deviceArr = env.deviceType.split(/,/)
          let isDefault = deviceArr.indexOf('tv') >= 0 || deviceArr.indexOf('wearable') >= 0 ? true : false
          if (isDefault) {
            config.plugins.push(new GenBinPlugin(process.env.buildPath, path.join(__dirname, 'bin')))
          }
        }
      }
    }
    if (env.sourceMap === 'none') {
      config.devtool = false
    }
    if (env.buildMode === 'release') {
      config.mode = 'production'
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              keep_fnames: true
            },
            minify: (file, sourceMap) => {
              const uglifyEsOptions = {
                compress: {
                  unused: true
                },
                sourceMap: true
              };
              if (process.env.DEVICE_LEVEL === 'rich' && /\/workers\//.test(Object.keys(file)[0])) {
                uglifyEsOptions.compress.unused = false;
              }
              return require('uglify-es').minify(file, uglifyEsOptions);
            },
          })
        ]
      }
      config.output.sourceMapFilename = '_releaseMap/[name].js.map'
    }
  }
  return config
}
