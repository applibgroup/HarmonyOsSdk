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
   * Application name
   */
  appName: string;

  /**
   * Application version name
   */
  versionName: string;

  /**
   * Application version
   */
  versionCode: number;
}

export interface ScreenOnVisibleOptions {
  /**
   * Whether to keep the application visible. The default value is false.
   */
  visible?: boolean;

  /**
   * Called when the application always keeps visible.
   */
  success?: () => void;

  /**
   * Called when the application fails to keep visible.
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
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
   * Keeps the application visible after the screen is woken up.
   * This method prevents the system from returning to the home screen when the screen is locked.
   */
  static screenOnVisible(options?: ScreenOnVisibleOptions): void;
}
