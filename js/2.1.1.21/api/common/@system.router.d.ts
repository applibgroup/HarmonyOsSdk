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
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface RouterOptions {
  /**
   * URI of the destination page, which supports the following formats:
   * 1. Absolute path of the page, which is provided by the pages list in the config.json file.
   *    Example:
   *      pages/index/index
   *      pages/detail/detail
   * 2. Particular path. If the URI is a slash (/), the home page is displayed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  uri: string;

  /**
   * Data that needs to be passed to the destination page during navigation.
   * After the destination page is displayed, the parameter can be directly used for the page.
   * For example, this.data1 (data1 is the key value of the params used for page navigation.)
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  params?: Object;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface BackRouterOptions {
  /**
   * Returns to the page of the specified path.
   * If the page with the specified path does not exist in the page stack, router.back() is called by default.
   * @devices tv, phone, tablet, wearable
   */
  path?: string;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface RouterState {
  /**
   * Index of the current page in the stack.
   * NOTE: The index starts from 1 from the bottom to the top of the stack.
   * @devices tv, phone, tablet, wearable
   */
  index: number;

  /**
   * Name of the current page, that is, the file name.
   * @devices tv, phone, tablet, wearable
   */
  name: string;

  /**
   * Path of the current page.
   * @devices tv, phone, tablet, wearable
   */
  path: string;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export default class Router {
  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param options Options.
   * @devices tv, phone, tablet, wearable
   */
  static push(options: RouterOptions): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static replace(options: RouterOptions): void;

  /**
   * Returns to the previous page or a specified page.
   * @param options Options.
   * @devices tv, phone, tablet, wearable
   */
  static back(options?: BackRouterOptions): void;

  /**
   * Clears all historical pages and retains only the current page at the top of the stack.
   * @devices tv, phone, tablet, wearable
   */
  static clear(): void;

  /**
   * Obtains the number of pages in the current stack.
   * @returns Number of pages in the stack. The maximum value is 32.
   * @devices tv, phone, tablet, wearable
   */
  static getLength(): string;

  /**
   * Obtains information about the current page state.
   * @returns Page state.
   * @devices tv, phone, tablet, wearable
   */
  static getState(): RouterState;
}
