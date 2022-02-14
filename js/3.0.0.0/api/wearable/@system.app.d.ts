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

export interface ScreenOnVisibleOptions {
  /**
   * Whether to keep the application visible. The default value is false.
   * @since 3
   */
  visible?: boolean;

  /**
   * Called when the application always keeps visible.
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the application fails to keep visible.
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @since 3
   */
  complete?: () => void;
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
   * Keeps the application visible after the screen is woken up.
   * This method prevents the system from returning to the home screen when the screen is locked.
   */
  static screenOnVisible(options?: ScreenOnVisibleOptions): void;

  /**
   * Set image cache capacity of decoded image count.
   * If not set, the application will not cache any decoded image.
   * @param value  capacity of decoded image count
   */
  static setImageCacheCount(value: number): void;

  /**
   * Set image cache capacity of raw image data size in Bytes before decode.
   * If not set, the application will not cache any raw image data.
   * @param value  capacity of raw image data size in Bytes.
   */
  static setImageRawDataCacheSize(value: number): void;

  /**
   * Set image file cache size in Bytes on disk before decode.
   * If not set, the application will not cache 100MB image files on disk.
   * @param value  capacity of image file size in Bytes.
   */
  static setImageFileCacheSize(value: number): void;
}
