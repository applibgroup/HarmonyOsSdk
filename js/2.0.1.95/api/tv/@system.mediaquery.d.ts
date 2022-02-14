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

export interface MediaQueryList {
  /**
  * Serialized media query condition.
  * This parameter is read-only.
  */
  media?: string;

  /**
  * Whether the query is successful. True if the query condition is matched successfully, false otherwise.
  * This parameter is read-only.
  */
  matches?: boolean;

  /**
  * Called when the matches value changes.
  */
  onchange?: (e: boolean) => void;

  /**
   * Adds a listening function to MediaQueryList.
   * The listening function must be added before onShow is called, that is, added to the onInit or onReady function.
   */
  addListener (callback: (e: { matches: boolean }) => void) : void;

  /**
   * Removes a listening function from MediaQueryList.
   */
  removeListener (callback: (e: { matches: boolean }) => void) : void;
}

export default class MediaQuery {
  /**
   * Queries a media item and returns a MediaQueryList object.
   */
  static matchMedia(condition: string): MediaQueryList;
}
