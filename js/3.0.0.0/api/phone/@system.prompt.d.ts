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

export interface ShowToastOptions {
  /**
   * Text to display.
   * @since 3
   */
  message: string;

  /**
   * Duration of toast dialog box. The default value is 1500. The recommended value ranges from 1500 ms to 10000ms.
   * NOTE:
   * A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.
   * @since 3
   */
  duration?: number;

  /**
   * The distance between toast dialog box and the bottom of screen.
   * @since 5
   */
  bottom?: string | number;
}

export interface Button {
  text: string;
  color: string;
}

export interface ShowDialogOptions {
  /**
   * Title of the text to display.
   * @since 3
   */
  title?: string;

  /**
   * Text body.
   * @since 3
   */
  message?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   * @since 3
   */
  buttons?: [Button, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   * @since 3
   */
  success?: (data: { index: number }) => void;

  /**
   * Called when the operation is cancelled.
   * @since 3
   */
  cancel?: (data: string, code: string) => void;

  /**
   * Called when the dialog box is closed.
   * @since 3
   */
  complete?: (data: string) => void;
}

export interface ShowActionMenuOptions {
  /**
   * Title of the text to display.
   * @since 6
   */
  title?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   * @since 6
   */
  buttons: [Button, Button?, Button?, Button?, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   * @since 6
   */
  success?: (tapIndex: number, errMsg: string) => void;

  /**
   * Called when the operation is cancelled.
   * @since 6
   */
  fail?: (errMsg: string) => void;

  /**
   * Called when the dialog box is closed.
   * @since 6
   */
  complete?: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class Prompt {
  /**
   * Displays the notification text.
   * @param toast
   */
  static showToast(toast: ShowToastOptions): void;

  /**
   * Displays the dialog box.
   * @param dialog
   */
  static showDialog(dialog: ShowDialogOptions): void;

    /**
   * Displays the menu.
   * @param options Options.
   */
  static showActionMenu(options: ShowActionMenuOptions): void;
}
