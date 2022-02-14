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

import rpc from '../@ohos.rpc';
import { ElementName } from '../bundle/elementName';

/**
 * Device connect.
 *
 * @name ConnectOptions
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
export interface ConnectOptions  {
  /**
   * Called back after an ability connects to an ability of the Service type.
   *
   * <p>This method is called back to receive the connection result after an ability calls the
   * connectAbility(request: Want, options: ConnectOptions) method to connect it to an ability of the Service
   * type.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param elementName Indicates information about the connected ability of the Service type.
   * @param remote Indicates the remote proxy object of the ability of the Service type.
   * @return -
   */
  onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void;

  /**
   * Called back after all connections to an ability of the Service type are disconnected.
   *
   * <p>This method is called back to receive the disconnection result after the connected ability of the Service
   * type crashes or is killed. If the Service exits unexpectedly, all its connections are disconnected, and each
   * ability previously connected to it will call back onDisconnect(ElementName).</p>
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param elementName Indicates information about the disconnected ability of the Service type.
   * @return -
   */
  onDisconnect(elementName: ElementName): void;

  /**
   * This callback is called when connect fails.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param code error code.
   * @return -
   */
  onFailed(code: number):void;
}