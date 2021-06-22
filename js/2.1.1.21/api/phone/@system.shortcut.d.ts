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

export interface CreateShortcutOptions {
  /**
   * Called when the shortcut is created successfully.
   */
  success?: (data: any) => void;

  /**
   * Called when the shortcut fails to be created.
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;

  /**
   * URL of the page that can be opened through the shortcut.
   * If this parameter is left empty, the home page URL is used.
   */
  page?: string;

  /**
   * Name of the shortcut.
   * If this parameter is left empty, the name of this ability is used.
   */
  label?: string;

  /**
   * Description of the shortcut.
   * If this parameter is left empty, the description of this ability is used.
   */
  description?: string;

  /**
   * Absolute path of a specified icon.
   * If this parameter is left empty, the icon in this ability is used.
   * If the ability does not have an icon, the application icon is used.
   */
  icon?: string;

  /**
   * Shortcut bundle name.
   * If this parameter is left empty, the current bundle name is used.
   */
  bundleName?: string;

  /**
   * Name of the ability to which the shortcut belongs.
   * If this parameter is left empty, the current ability is used.
   */
  abilityName?: string;
}

export interface CheckShortcutHasCreatedResponse {
  /**
   * true: The shortcut has been created.
   * false: The shortcut does not exist.
   */
  exists: boolean;
}

export interface CheckShortcutHasCreatedOptions {
  /**
   * Called when the shortcut is created successfully.
   */
  success?: (data: CheckShortcutHasCreatedResponse) => void;

  /**
   * Called when the shortcut fails to be created.
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;

  /**
   * URL of the page that can be opened through the shortcut.
   * If this parameter is left empty, the home page URL is used.
   */
  page?: string;

  /**
   * Name of the ability to which the shortcut belongs.
   * If this parameter is left empty, the current ability is used.
   */
  abilityName?: string;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class ShortCut {
  /**
   * Creates a desktop shortcut.
   * @param options Options.
   */
  static create(options?: CreateShortcutOptions): void;

  /**
   * Checks whether a desktop shortcut has been created.
   * @param options Options.
   */
  static hasCreated(options?: CheckShortcutHasCreatedOptions);
}