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
 * The screen brightness mode.
 */
export enum BrightnessModeResponse {
  /**
   * The screen brightness is manually adjusted.
   * @since 3
   */
  MANUAL,

  /**
   * The screen brightness is automatically adjusted.
   * @since 3
   */
  AUTO
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class Brightness {
  /**
   * Obtains the current screen brightness.
   * @param options
   */
  static getValue(options?: {
    /**
     * Called when the current screen brightness is obtains.
     * @since 3
     */
    success?: (data: { value: number }) => void;

    /**
     * Called when the current screen bightness fails to be obtained.
     * @since 3
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution is completed.
     * @since 3
     */
    complete?: () => void;
  }): void;

  /**
   * Sets the screen brightness.
   * @param options
   */
  static setValue(options: {
    /**
     * Screen brightness. The value is an integer ranging from 1 to 255.
     * If the value is less than or equal to 0, value 1 will be used.
     * If the value is greater than 255, value 255 will be used.
     * If the value contains decimals, the integral part of the value will be used.
     * For example, if value 8.1 is set, value 8 will be used.
     * @since 3
     */
    value: number;

    /**
     * Called when the setting is successful.
     * @since 3
     */
    success?: () => void;

    /**
     * Called when the setting fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution os completed.
     * @since 3
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains the screen brightness adjustment mode.
   * @param options
   */
  static getMode(options?: {
    /**
     * Called when the screen brightness adjustment mode is obtained.
     * @since 3
     */
    success?: (data: { mode: BrightnessModeResponse }) => void;

    /**
     * Called when the screen brightness adjustment mode fails to be obtained.
     * @since 3
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution is completed.
     * @since 3
     */
    complete?: () => void;
  }): void;

  /**
   * Sets the screen brightness adjustment mode.
   * @param options
   */
  static setMode(options: {
    /**
     * The screen brightness mode
     * 0: The screen brightness is manually adjusted.
     * 1: The screen brightness is automatically adjusted.
     * @since 3
     */
    mode: BrightnessModeResponse;

    /**
     * Called when the setting is successful.
     * @since 3
     */
    success?: () => void;

    /**
     * Called when the setting fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution is completed.
     * @since 3
     */
    complete?: () => void;
  }): void;

  /**
   * Sets whether to always keep the screen on.
   * @param options
   */
  static setKeepScreenOn(options: {
    /**
     * Whether to always keep the screen on.
     * @since 3
     */
    keepScreenOn: boolean;

    /**
     * Called when the setting is successful.
     * @since 3
     */
    success?: () => void;

    /**
     * Called when the setting fails.
     * @since 3
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution is completed.
     * @since 3
     */
    complete?: () => void;
  }): void;
}
