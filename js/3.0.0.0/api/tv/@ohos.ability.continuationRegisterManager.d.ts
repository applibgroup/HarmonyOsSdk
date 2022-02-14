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
import { Callback } from './basic';
import { AsyncCallback } from './basic';
import { ContinuationResult } from './ability/continuationResult'
import { ContinuationExtraParams } from './ability/continuationExtraParams'

/**
 * Provides methods for interacting with the hop task management service, including methods for registering and
 * unregistering the ability to hop, updating the device connection state, and showing the list of devices
 * that can be selected for hopping.
 *
 * @name continuationRegisterManager
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, car
 */
declare namespace continuationRegisterManager {
  /**
   * Called when the user selects a device from the candidate device list.
   * You can implement your own processing logic in this callback to initiate the hop process.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @param type deviceConnect.
   * @return callback Indicates the information about the selected device.
   */
  function on(type: "deviceConnect", callback: Callback<ContinuationResult>): void;
  function off(type: "deviceConnect",callback?: Callback<ContinuationResult>): void;

  /**
   * Called when a device is disconnected from the hop task management service.
   * You can implement your own processing logic in this callback, such as notifying the user of the disconnection.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @param type deviceDisconnect.
   * @return callback Indicates the ID of the disconnected device.
   */
  function on(type: "deviceDisconnect", callback: Callback<string>): void;
  function off(type: "deviceDisconnect", callback?: Callback<string>): void;

  /**
   * Registers an ability to be hopped with the hop task management service and obtains the registration token
   * assigned to the ability.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @permission ohos.permission.DISTRIBUTED_DATASYNC.
   * @param bundle Indicates the bundle name of the application whose ability is to be hopped.
   * @param extraParams Indicates the {@link ContinuationExtraParams} object containing the extra parameters used to filter
   * the list of available devices.
   * @return callback Indicates the callback to be invoked when the hop task management service is connected.
   */
  function register(bundle: string, callback: AsyncCallback<number>): void;
  function register(bundle: string, extraParams: ContinuationExtraParams, callback: AsyncCallback<number>): void;
  function register(bundle: string, extraParams?: ContinuationExtraParams): Promise<number>;

  /**
   * Unregisters a specified ability from the hop task management service based on the token obtained during ability
   * registration.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @param token Indicates the registration token of the ability.
   * @return callback Indicates the callback to be invoked when the hop task management service is connected.
   */
  function unregister(token: number, callback: AsyncCallback<void>): void;
  function unregister(token: number): Promise<void>;

  /**
   * Updates the connection state of the device where the specified ability is successfully hopped.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @param token Indicates the registration token of the ability.
   * @param deviceId Indicates the ID of the device whose connection state is to be updated.
   * @param status Indicates the connection state to update.
   * @return callback Indicates the callback to be invoked when the hop task management service is connected.
   */
  function updateConnectStatus(token: number, deviceId: string, status: DeviceConnectState, callback: AsyncCallback<number>): void;
  function updateConnectStatus(token: number, deviceId: string, status: DeviceConnectState): Promise<number>;

  /**
   * Shows the list of devices that can be selected for ability hopping on the distributed network.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @param token Indicates the registration token of the ability.
   * @param parameter Indicates the {@link ContinuationExtraParams} object containing the extra parameters used to filter
   * the list of available devices. This parameter can be null.
   * @param status Indicates the connection state to update.
   * @return callback Indicates the callback to be invoked when the hop task management service is connected.
   */
  function showDeviceList(token: number, callback: AsyncCallback<number>): void;
  function showDeviceList(token: number, extraParams: ContinuationExtraParams, callback: AsyncCallback<number>): void;
  function showDeviceList(token: number, extraParams?: ContinuationExtraParams): Promise<number>;

  /**
   * Disconnects from the hop task management service.
   *
   * @devices phone, tablet, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  function disconnect(callback: AsyncCallback<void>): void;
  function disconnect(): Promise<void>;

  /**
   * Device connection status data structure.
   * @name DeviceConnectState
   * @since 7
   * @sysCap AAFwk
   * @devices phone, tablet, car
   */
  export enum DeviceConnectState {
    IDLE = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    DISCONNECTING = 3
  }

}
export default continuationRegisterManager;