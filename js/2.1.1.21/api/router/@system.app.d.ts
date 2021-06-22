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

export interface IAppInfo {
  /**
   * Application name.
   */
  appName: string;

  /**
   * Application version name.
   */
  versionName: string;

  /**
   * Application version.
   */
  versionCode: number;
}

export default class App {
  /**
   * Obtains the declared information in the config.json file of an application.
   */
  static getInfo(): IAppInfo;
}
