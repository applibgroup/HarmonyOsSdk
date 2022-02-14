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
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const SnapshotPlugin = require('./lib/lite/lite-snapshot-plugin');
const ImageCoverterPlugin = require('./lib/lite/lite-image-coverter-plugin');
const ReturnExportsPlugin = require('./lib/lite/lite-return-exports-plugin');
const ResourcePlugin = require('./lib/resource-plugin');
const ResultStates = require('./lib/compile-plugin');
const { checkFilePath } = require('./lib/lite/lite-customize');
const CopyPlugin = require("copy-webpack-plugin");

process.env.DEVICE_LEVEL = 'lite';
process.env.DEVICE_TYPE = 'smartVision';

const watchMode = (process.env.watchMode && process.env.watchMode === 'true') || false;
const pictrueSwitch = process.env.img2bin !== 'false';
const util = require('./lib/util');
const { PLATFORM }= require('./lib/lite/lite-enum');
const { deleteFolderRecursive, readManifest, loadEntryObj } = require('./main.product');

const webpackConfig = {
  target: ['web', 'es5'],
  cache: {
    type: 'filesystem'
  },
  watch: watchMode,
  watchOptions: {
    aggregateTimeout: 10,
    poll: false,
    ignored: /node_modules/,
  },
  output: {
    filename: '[name].js',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
  devtool: 'nosources-source-map',
  mode: 'development',
  module: {
    rules: [
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
            name: '[name].[ext]', outputPath: 'common'
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
            loader: path.resolve(__dirname, 'lib/module-script.js'),
          },
          {
            loader: util.loadBabelModule('babel-loader'),
            options: {
              presets: [util.loadBabelModule('@babel/preset-env')],
              plugins: [util.loadBabelModule('@babel/plugin-transform-modules-commonjs'),
              util.loadBabelModule('@babel/plugin-proposal-class-properties')],
            },
          },
        ]
      }
    ]
  },
  node: {
    global: false,
  },
  stats: 'none',
};

function setConfigs(env) {
  process.env.error = env.error === undefined ? true : env.error
  process.env.warning = env.warning === undefined ? true : env.warning
  process.env.note = env.note === undefined ? true : env.note
  process.env.buildMode = env.buildMode || 'debug'
  process.env.logLevel = env.logLevel || '1'
  process.env.projectPath = env.aceModuleRoot || process.env.aceModuleRoot || process.cwd();
  process.env.buildPath = env.aceModuleBuild || process.env.aceModuleBuild || path.resolve(process.env.projectPath, 'build');
  process.env.cachePath = env.cachePath || process.env.cachePath || path.resolve(__dirname, 'node_modules/.cache');
  process.env.aceManifestPath = process.env.aceManifestPath || path.resolve(process.env.projectPath, 'manifest.json');
  process.env.abilityType = 'page';
  const manifest = readManifest(process.env.aceManifestPath)
  process.env.PLATFORM_VERSION = PLATFORM.VERSION6;
  const version = parseInt(manifest.minPlatformVersion);
  if (version == 5) {
    process.env.PLATFORM_VERSION = PLATFORM.VERSION5;
  }
  if (version <= 4) {
    process.env.PLATFORM_VERSION = PLATFORM.VERSION3;
  }
}

module.exports = (env) => {
  setConfigs(env)
  deleteFolderRecursive(process.env.buildPath);
  webpackConfig.cache.cacheDirectory = path.resolve(process.env.cachePath, '.lite_cache'),
  webpackConfig.entry = loadEntryObj(process.env.projectPath, process.env.DEVICE_LEVEL, process.env.abilityType, process.env.aceManifestPath)
  webpackConfig.output.path = path.resolve(__dirname, process.env.buildPath)
  webpackConfig.plugins = [
    new ResourcePlugin(process.env.projectPath, process.env.buildPath, process.env.aceManifestPath),
    new ResultStates({
      build: process.env.buildPath
    }),
    new ReturnExportsPlugin(),
  ]
  webpackConfig.resolve = {
    modules: [
      process.env.projectPath,
      path.join(process.env.projectPath, '../../../../../'),
      path.join(__dirname, 'node_modules'),
      './node_modules'
    ]
  }
  if (fs.existsSync(path.resolve(process.env.projectPath, 'i18n'))) {
    webpackConfig.plugins.push(new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.env.projectPath, 'i18n'),
          to: path.resolve(process.env.buildPath, 'i18n'),
          noErrorOnMissing: true
        }
      ]
    }))
  }

  if (process.env.hapMode && process.env.hapMode === 'true') {
    webpackConfig.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: false,
          mangle: true,
        },
      },
      )],
    };
  }

  if (pictrueSwitch) {
    webpackConfig.plugins.push(
      new ImageCoverterPlugin({ build: process.env.buildPath }),
    );
  }

  if (env.deviceType) {
    const deviceArr = env.deviceType.split(/,/);
    if (deviceArr.includes('liteWearable')) {
      process.env.DEVICE_TYPE = 'liteWearable';
    }
  }

  if (env.sourceMap === 'none') {
    webpackConfig.devtool = false
  }
  if (env.buildMode === 'release') {
    webpackConfig.devtool = 'source-map'
    webpackConfig.mode = 'production';
    webpackConfig.plugins.push(
      new SnapshotPlugin({ build: process.env.buildPath })
    );
    webpackConfig.output.sourceMapFilename = '_releaseMap/[name].js.map'
  }
  checkFilePath();
  return webpackConfig;
};
