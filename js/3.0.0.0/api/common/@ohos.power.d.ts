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

import {AsyncCallback} from './basic';

/**
 * Provides interfaces to manage power.
 *
 * @SysCap SystemCapability.PowerMgr.PowerManager
 * @devices phone, wearable, tablet, tv, car
 * @since 7
 */
declare namespace power {
  /**
   * Checks whether the screen of a device is on or off.
   *
   * @return Returns true if the screen is on; returns false otherwise.
   * @since 7
   */
  function isScreenOn(callback: AsyncCallback<boolean>): void;
  function isScreenOn(): Promise<boolean>;
}
export default power;

