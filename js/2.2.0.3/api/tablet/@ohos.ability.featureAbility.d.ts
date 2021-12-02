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
import { AsyncCallback } from './basic';
import { Want } from './ability/want';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { Context } from './app/context';

/**
 * A Feature Ability represents an ability with a UI and is designed to interact with users.
 * @name featureAbility
 * @since 6
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable
 * @permission N/A
 */
declare namespace featureAbility {
  /**
   * Obtain the want sended from the source ability.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @param parameter Indicates the ability to start.
   * @return -
   */
  function getWant(callback: AsyncCallback<Want>): void;
  function getWant(): Promise<Want>;

  /**
   * Starts a new ability.
   * @devices phone, tablet, tv, wearable
   * @since 6
   * @sysCap AAFwk
   * @param parameter Indicates the ability to start.
   * @return -
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>): void;
  function startAbility(parameter: StartAbilityParameter): Promise<number>;

  /**
   * Obtains the application context.
   *
   * @return Returns the application context.
   * @since 6
   */
  function getContext(): Context;

  export enum AbilityWindowConfiguration {
    WINDOW_MODE_UNDEFINED = 0,
    WINDOW_MODE_FULLSCREEN = 1,
    WINDOW_MODE_SPLIT_PRIMARY = 100,
    WINDOW_MODE_SPLIT_SECONDARY = 101,
    WINDOW_MODE_FLOATING = 102
  }

  export enum AbilityStartSetting {
    BOUNDS_KEY = "abilityBounds",
    WINDOW_MODE_KEY = "windowMode",
    DISPLAY_ID_KEY = "displayId"
  }

  export enum ErrorCode {
    NO_ERROR = 0,
    INVALID_PARAMETER = -1,
    ABILITY_NOT_FOUND = -2,
    PERMISSION_DENY = -3
  }
}
export default featureAbility;