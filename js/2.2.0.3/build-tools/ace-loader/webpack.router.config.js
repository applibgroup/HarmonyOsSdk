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

const main = require("./router/main.product.router.js");
const path = require("path");

module.exports = {
  entry: main.appJSPath,
  output: {
    path: main.buildPath,
    filename: "app.js",
    libraryTarget: "this",
    library: main.pkgName,
    libraryExport: "default",
  },
  target: "node",
  mode: "production",
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
          loader: path.resolve(__dirname, "node_modules/babel-loader"),
          options: {
            presets: [
              path.resolve(__dirname, "node_modules/@babel/preset-env"),
            ],
            configFile: false
          },
        },
        {
          loader: path.resolve(__dirname, "router/module-scipt-router.js"),
          options: {
            pkgName: main.pkgName,
          },
        },
      ],
    }],
  },
};