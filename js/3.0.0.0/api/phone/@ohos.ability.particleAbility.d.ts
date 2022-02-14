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
import { ConnectOptions } from './ability/ConnectOptions';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { NotificationRequest } from './notification/notificationRequest';

/**
 * A Particle Ability represents an ability with service.
 *
 * @name particleAbility
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace particleAbility {
  /**
   * Service ability uses this method to start a specific ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param parameter Indicates the ability to start.
   * @return -
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<void>): void;
  function startAbility(parameter: StartAbilityParameter): Promise<void>;

  /**
   * Connects an ability to a Service ability.
   *
   * <p>This method can be called by a Page or Service ability, but the destination of the connection must be a
   * Service ability. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
   * Service ability when the Service ability is connected.</p>
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param request Indicates the Service ability to connect.
   * @return connection id, int value.
   */
   function connectAbility(request: Want, options: ConnectOptions): number;

  /**
   * Disconnects an ability to a Service ability, in contrast to
   * {@link connectAbility}.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param connection the connection id returned from connectAbility api.
   * @return -
   */
   function disconnectAbility(connection: number, callback:AsyncCallback<void>): void;
   function disconnectAbility(connection: number): Promise<void>;

  /**
   * Destroys this service ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  function terminateSelf(callback: AsyncCallback<void>): void;
  function terminateSelf(): Promise<void>;

  /**
   * Obtains the dataAbilityHelper.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the path of the file to open.
   * @return Returns the dataAbilityHelper.
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

  /**
   * Keeps this Service ability in the background and displays a notification bar.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param id Identifies the notification bar information..
   * @param request Indicates the notificationRequest instance containing information for displaying a notification bar.
   * @return -
   */
  function startBackgroundRunning(id: number, request: NotificationRequest, callback: AsyncCallback<void>): void;
  function startBackgroundRunning(id: number,  request: NotificationRequest): Promise<void>;

  /**
   * Cancels background running of this ability to free up system memory.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  function cancelBackgroundRunning(callback: AsyncCallback<void>): void;
  function cancelBackgroundRunning(): Promise<void>;

  /**
   * Obtain the errorCode.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  export enum ErrorCode {
    INVALID_PARAMETER = -1
  }
}
export default particleAbility;