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
   */
  message: string;

  /**
   * Duration of toast dialog box. The default value is 1500. The recommended value ranges from 1500 ms to 10000ms.
   * NOTE:
   * A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.
   */
  duration?: number;
}

export interface Button {
  text: string;
  color: string;
}

export interface ShowDialogOptions {
  /**
   * Title of the text to display.
   */
  title?: string;

  /**
   * Text body.
   */
  message?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   */
  buttons?: [Button, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   */
  success?: (data: { index: number }) => void;

  /**
   * Called when the operation is cancelled.
   */
  cancel?: (data: string, code: string) => void;

  /**
   * Called when the dialog box is closed.
   */
  complete?: (data: string) => void;
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
}
