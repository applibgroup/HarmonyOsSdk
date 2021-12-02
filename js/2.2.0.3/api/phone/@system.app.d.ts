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

export interface AppResponse {
  /**
   * Application bundleName.
   * @since 6
   */
  appID: string;

  /**
   * Application name.
   * @since 3
   */
  appName: string;

  /**
   * Application version name.
   * @since 3
   */
  versionName: string;

  /**
   * Application version.
   * @since 3
   */
  versionCode: number;
}

export interface RequestFullWindowOptions {
  /**
   * Duration for transition from non-full window to full window, in milliseconds.
   * By default, the value is in direct proportion to the distance between the non-full window and the full window.
   * @devices phone, tablet
   * @since 3
   */
  duration?: number
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class App {
  /**
   * Obtains the declared information in the config.json file of an application.
   */
  static getInfo(): AppResponse;

  /**
   * Destroys the current ability.
   */
  static terminate(): void;

  /**
   * Requests the application to run in full window.
   * In some scenarios, such as semi-modal FA, the FA runs in non-full window.
   * In this case, you can call this API.
   * This API is invalid for an application already in full-window mode.
   * @param obj Transition time from non-full window to full window, in milliseconds.
   * By default, the value is in direct proportion to the distance between the non-full window and the full window.
   */
  static requestFullWindow(options?: RequestFullWindowOptions): void;
}
