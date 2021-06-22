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

export interface RouterOptions {
  /**
   * URI of the destination page, which supports the following formats:
   * 1. Absolute path of the page, which is provided by the pages list in the config.json file.
   *    Example:
  *       a. pages/index/index
   *      b. pages/detail/detail
   * 2. Particular path. If the URI is a slash (/), the home page is displayed.
   */
  uri: string;

  /**
   * Data that needs to be passed to the destination page during navigation.
   * After the destination page is displayed, the parameter can be directly used for the page.
   * For example, this.data1 (data1 is the key value of the params used for page navigation.)
   */
  params?: object;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Router {
  /**
   * Replaces the current page with another one in the application.
   * The current page is destroyed after replacement.
   * @param route route options.
   */
  static replace(route: RouterOptions): void;
}
