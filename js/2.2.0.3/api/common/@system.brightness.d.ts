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
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface BrightnessResponse {
  /**
   * Screen brightness, which ranges from 1 to 255.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  value: number;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface GetBrightnessOptions {
  /**
   * Called when the current screen brightness is obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: (data: BrightnessResponse) => void;

  /**
   * Called when the current screen brightness fails to be obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface SetBrightnessOptions {
  /**
   * Screen brightness. The value is an integer ranging from 1 to 255.
   * If the value is less than or equal to 0, value 1 will be used.
   * If the value is greater than 255, value 255 will be used.
   * If the value contains decimals, the integral part of the value will be used.
   * For example, if value 8.1 is set, value 8 will be used.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  value: number;

  /**
   * Called when the setting is successful.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the setting fails.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution os completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

export interface BrightnessModeResponse {
  /**
   * The value can be 0 or 1.
   * 0: The screen brightness is manually adjusted.
   * 1: The screen brightness is automatically adjusted.
   * @since 3
   */
  mode: number;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface GetBrightnessModeOptions {
  /**
   * Called when the screen brightness adjustment mode is obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: (data: BrightnessModeResponse) => void;

  /**
   * Called when the screen brightness adjustment mode fails to be obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface SetBrightnessModeOptions {
  /**
   * The screen brightness mode.
   * 0: The screen brightness is manually adjusted.
   * 1: The screen brightness is automatically adjusted.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  mode: number;

  /**
   * Called when the setting is successful.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the setting fails.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface SetKeepScreenOnOptions {
  /**
   * Whether to always keep the screen on.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  keepScreenOn: boolean;

  /**
   * Called when the setting is successful.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the setting fails.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export default class Brightness {
  /**
   * Obtains the current screen brightness.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static getValue(options?: GetBrightnessOptions): void;

  /**
   * Sets the screen brightness.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static setValue(options: SetBrightnessOptions): void;

  /**
   * Obtains the screen brightness adjustment mode.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static getMode(options?: GetBrightnessModeOptions): void;

  /**
   * Sets the screen brightness adjustment mode.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static setMode(options: SetBrightnessModeOptions): void;

  /**
   * Sets whether to always keep the screen on.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static setKeepScreenOn(options: SetKeepScreenOnOptions): void;
}
