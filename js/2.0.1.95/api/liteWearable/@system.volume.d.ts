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

export default class Volume {
  /**
   * Obtains the multimedia volume.
   * @param options options.
   */
  static getMediaValue(options?: {
    /**
     * Called when the multimedia volume is obtained.
     */
    success?: (data: { value: number }) => void;

    /**
     * Called when the multimedia volume fails to be obtained.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Sets the multimedia volume.
   * @param options options.
   */
  static setMediaValue(options: {
    /**
     * Volume, which ranges from 0.0 to 1.0
     */
    value: number;

    /**
     * Called when the setting is successful.
     */
    success?: () => void;

    /**
     * Called when the setting fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;
}
