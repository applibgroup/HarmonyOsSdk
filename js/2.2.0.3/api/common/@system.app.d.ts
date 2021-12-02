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

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface AppResponse {
  /**
   * Application bundleName.
   * @devices tv, phone, tablet, wearable
   * @since 6
   */
  appID: string;

  /**
   * Application name.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  appName: string;

  /**
   * Application version name.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  versionName: string;

  /**
   * Application version.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  versionCode: number;
}

/**
 * @devices phone, tablet
 */
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
 * @devices wearable, liteWearable
 */
export interface ScreenOnVisibleOptions {
  /**
   * Whether to keep the application visible. The default value is false.
   * @devices wearable, liteWearable
   * @since 3
   */
  visible?: boolean;

  /**
   * Called when the application always keeps visible.
   * @devices wearable, liteWearable
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the application fails to keep visible.
   * @devices wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export default class App {
  /**
   * Obtains the declared information in the config.json file of an application.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static getInfo(): AppResponse;

  /**
   * Destroys the current ability.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static terminate(): void;

  /**
   * Keeps the application visible after the screen is woken up.
   * This method prevents the system from returning to the home screen when the screen is locked.
   * @devices wearable, liteWearable
   */
  static screenOnVisible(options?: ScreenOnVisibleOptions): void;

  /**
   * Requests the application to run in full window.
   * In some scenarios, such as semi-modal FA, the FA runs in non-full window.
   * In this case, you can call this API.
   * This API is invalid for an application already in full-window mode.
   * @param options Transition time from non-full window to full window, in milliseconds.
   * By default, the value is in direct proportion to the distance between the non-full window and the full window.
   * @devices phone, tablet
   */
  static requestFullWindow(options?: RequestFullWindowOptions): void;
}
