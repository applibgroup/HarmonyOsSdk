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

export interface BrightnessResponse {
  /**
   * Screen brightness, which ranges from 1 to 255.
   */
  value: number;
}

export interface BrightnessModeResponse {
  /**
   * The value can be 0 or 1.
   * 0: The screen brightness is manually adjusted.
   * 1: The screen brightness is automatically adjusted.
   */
  mode: number;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Brightness {
  /**
   * Obtains the current screen brightness.
   * @param options Options.
   */
  static getValue(options?: {
    /**
     * Called when the current screen brightness is obtained.
     */
    success?: (data: BrightnessResponse) => void;

    /**
     * Called when the current screen brightness fails to be obtained.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Sets the screen brightness.
   * @param options Options.
   */
  static setValue(options: {
    /**
     * Screen brightness.
     * The value is an integer from 1 to 255.
     * If the value set is less than or equal to 0, value 1 will be used.
     * If the value set is greater than 255, value 255 will be used.
     * If the value set contains decimals, the integral part of the value will be used.
     * For example, if value 1.8 is set, value 1 will be used.
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

  /**
   * Obtains the screen brightness adjustment mode.
   * @param options Options.
   */
  static getMode(options?: {
    /**
     * Called when the screen brightness adjustment mode is obtained.
     */
    success?: (data: BrightnessModeResponse) => void;

    /**
     * Called when the screen brightness adjustment mode fails to be obtained.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Sets the screen brightness adjustment mode.
   * @param options Options.
   */
  static setMode(options: {
    /**
     * Screen brightness adjustment mode:
     * 0: The screen brightness is manually adjusted.
     * 1: The screen brightness is automatically adjusted.
     */
    mode: number;

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

  /**
   * Sets whether to always keep the screen on.
   * @param options Options.
   */
  static setKeepScreenOn(options: {
    /**
     * Whether to always keep the screen on.
     */
    keepScreenOn: boolean;

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
