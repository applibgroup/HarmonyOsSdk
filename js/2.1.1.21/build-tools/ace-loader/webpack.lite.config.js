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
const main = require('./main.product');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const SnapshotPlugin = require('./lib/lite/lite-snapshot-plugin');
const ImageCoverterPlugin = require('./lib/lite/lite-image-coverter-plugin');
const ResourcePlugin = require('./lib/resource-plugin');
const ResultStates = require('./lib/compile-plugin');
const { checkFilePath } = require('./lib/lite/lite-customize')
process.env.DEVICE_LEVEL = 'lite';
process.env.DEVICE_TYPE = 'smartVision';
const watchMode = (process.env.watchMode && process.env.watchMode === 'true') || false;
const pictrueSwitch = process.env.img2bin !== 'false';
const util = require('./lib/util');
const manifest = main.readManifest();
main.entryObj = main.loadEntryObj(manifest);
const webpackConfig = {
  entry: main.entryObj,
  watch: watchMode,
  watchOptions: {
    aggregateTimeout: 10,
    poll: false,
    ignored: /node_modules/,
  },
  output: {
    path: path.resolve(__dirname, main.buildPath),
    filename: '[name].js',
  },
  devtool: 'nosources-source-map',
  mode: 'none',
  module: {
    rules: [
      {
        test: /(\.hml|app\.js)(\?[^?]+)?$/,
        loaders: [path.resolve(__dirname, './index.js')],
      },
      {
        test: /\.png$/, loader: 'file-loader',
        options: { name: '[name].[ext]', outputPath: 'common' },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader',
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
        ],
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    global: false,
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules'), './node_modules'],
  },
  stats: 'none',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        weex: {
          lang: {
            sass: ['sass-loader'],
            scss: ['sass-loader'],
            less: ['less-loader'],
          },
        },
        manifestFilePath: main.manifestFilePath,
      },
    }),
    new ResourcePlugin(main.projectPath, main.buildPath, main.manifestFilePath),
    new ResultStates({ build: main.buildPath }),
  ],
};

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
    new ImageCoverterPlugin({ build: main.buildPath }),
  );
}

module.exports = (env, argv) => {
  if (argv.deviceType) {
    const deviceArr = argv.deviceType.split(/,/);
    if (deviceArr.includes('liteWearable')) {
      process.env.DEVICE_TYPE = 'liteWearable';
    }
  }
  if (argv.sourceMap === 'none') {
    webpackConfig.devtool = 'none'
  }
  if (argv.buildMode === 'release') {
    webpackConfig.devtool = 'none';
  }
  if (argv.isPreview !== "true") {
    webpackConfig.plugins.push(
      new SnapshotPlugin({ build: main.buildPath })
    );
  }
  checkFilePath();
  return webpackConfig;
};
