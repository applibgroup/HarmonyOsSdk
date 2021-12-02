/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
  * Want is the basic communication component of the system.
  * @name Want
  * @since 6
  * @sysCap AAFwk
  * @devices phone, tablet, tv, wearable
  * @permission N/A
  */
export declare interface Want {
  /**
   * device id
   * @default -
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   */
  deviceId?: string;

  /**
   * bundle name
   * @default -
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   */
  bundleName?: string;

  /**
   * ability name
   * @default -
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   */
  abilityName?: string;

  /**
   * The description of a URI in a Want.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @default -
   */
  uri?: string;

  /**
   * The description of the type in this Want.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @default -
   */
  type?: string;

  /**
   * The options of the flags in this Want.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @default -
   */
  flags?: number;

  /**
   * The description of an action in an want.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @default -
   */
  action?: string;

  /**
   * The description of the WantParams object in an Want
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @default -
   */
  parameters?: {[key: string]: any};

  /**
   * The description of a entities in a Want.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @default -
   */
  entities?: Array<string>;
}