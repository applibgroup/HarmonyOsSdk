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
 * @devices tv, phone, tablet, wearable
 */
export interface ShowToastOptions {
  /**
   * Text to display.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  message: string;

  /**
   * Duration of toast dialog box. The default value is 1500.
   * The recommended value ranges from 1500 ms to 10000ms.
   * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  duration?: number;

  /**
   * The distance between toast dialog box and the bottom of screen.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  bottom?: string | number;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface Button {
  /**
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  text: string;

  /**
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  color: string;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface ShowDialogSuccessResponse {
  /**
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  index: number;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface ShowDialogOptions {
  /**
   * Title of the text to display.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  title?: string;

  /**
   * Text body.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  message?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  buttons?: [Button, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  success?: (data: ShowDialogSuccessResponse) => void;

  /**
   * Called when the operation is cancelled.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  cancel?: (data: string, code: string) => void;

  /**
   * Called when the dialog box is closed.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  complete?: (data: string) => void;
}

/**
 * @devices phone, tablet
 */
export interface ShowActionMenuOptions {
  /**
   * Title of the text to display.
   * @devices phone, tablet
   * @since 6
   */
  title?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   * @devices phone, tablet
   * @since 6
   */
  buttons: [Button, Button?, Button?, Button?, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   * @devices phone, tablet
   * @since 6
   */
  success?: (tapIndex: number, errMsg: string) => void;

  /**
   * Called when the operation is cancelled.
   * @devices phone, tablet
   * @since 6
   */
  fail?: (errMsg: string) => void;

  /**
   * Called when the dialog box is closed.
   * @devices phone, tablet
   * @since 6
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export default class Prompt {
  /**
   * Displays the notification text.
   * @param options Options.
   * @devices tv, phone, tablet, wearable
   */
  static showToast(options: ShowToastOptions): void;

  /**
   * Displays the dialog box.
   * @param options Options.
   * @devices tv, phone, tablet, wearable
   */
  static showDialog(options: ShowDialogOptions): void;

  /**
   * Displays the menu.
   * @param options Options.
   * @devices phone, tablet
   */
  static showActionMenu(options: ShowActionMenuOptions): void;
}
