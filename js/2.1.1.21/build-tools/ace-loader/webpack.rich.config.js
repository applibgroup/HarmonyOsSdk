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
var webpack = require('webpack')

var ResourcePlugin = require('./lib/resource-plugin')
var ResultStates = require('./lib/compile-plugin')
var GenBinPlugin = require('./lib/genBin-plugin')
var AfterEmitPlugin = require('./lib/cardJson-plugin').AfterEmitPlugin
const main = require('./main.product')
const util = require('./lib/util')
const watchMode = (process.env.watchMode && process.env.watchMode === 'true') || false

;(function setDeviceType() {
  const manifest = main.readManifest()
  process.env.DEVICE_LEVEL = manifest.type === 'form' ? 'card' : 'rich'
  main.entryObj = main.loadEntryObj(manifest)
})()

const richModule = {
  rules: [
    {
      test: /(\.hml|app\.js)(\?[^?]+)?$/,
      loaders: [path.resolve(__dirname, './index.js')]
    },
    {
      test: /\.png$/, loader: 'file-loader',
      options: { name: '[name].[ext]', outputPath: 'common' }
    },
    {
      test: /\.css$/,
      loader: 'css-loader'
    },
    {
      test: /\.less$/,
      loader: 'less-loader'
    },
    {
      test: /\.(scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader'
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
      ],
      exclude: /node_modules/
    }
  ]
}

const cardModule = {
  rules: [
    {
      test: /\.hml$/,
      loader: [path.resolve(__dirname, './lib/card-loader.js')]
    },
    {
      test: /\.css$/,
      loader: 'css-loader'
    },
    {
      test: /\.less$/,
      loader: 'less-loader'
    },
    {
      test: /\.(scss|sass)$/,
      loader: 'css-loader!sass-loader'
    }
  ]
}

let config = {
  entry: main.entryObj,
  watch: watchMode,
  watchOptions: {
    aggregateTimeout: 10,
    poll: false,
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname, main.buildPath),
    filename: '[name].js'
  },
  devtool: 'nosources-source-map',
  mode: 'development',
  module: richModule,
  node: {
    global: false
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules'), './node_modules']
  },
  stats: 'none',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        weex: {
          lang: {
            sass:['sass-loader'],
            scss:['sass-loader'],
            less:['less-loader']
          }
        },
        manifestFilePath: main.manifestFilePath
      }
    }),
    new ResourcePlugin(main.projectPath, main.buildPath, main.manifestFilePath),
    new ResultStates({ build: main.buildPath })
  ]
}

module.exports = (env, argv) => {
  if (process.env.DEVICE_LEVEL === 'card') {
    config.module = cardModule
    config.plugins.push(new AfterEmitPlugin(main.buildPath))
  } else {
    if (argv.deviceType) {
      let deviceArr = argv.deviceType.split(/,/)
      let isDefault = deviceArr.indexOf('tv') >= 0 || deviceArr.indexOf('wearable') >= 0 ? true : false
      if (isDefault && argv.isPreview !== "true") {
        config.plugins.push(new GenBinPlugin(main.buildPath, path.join(__dirname, 'bin')))
      }
    }
    if (argv.sourceMap === 'none') {
      config.devtool = 'none'
    }
    if (argv.buildMode === 'release') {
      config.devtool = 'none'
      config.mode = 'production'
    }
  }
  return config
}
