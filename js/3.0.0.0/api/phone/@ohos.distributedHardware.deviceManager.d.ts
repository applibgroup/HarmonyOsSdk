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

import { AsyncCallback, Callback } from './basic';
/**
 * devicemanager
 *
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace deviceManager {
  /**
   * DeviceInfo
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   */
  interface DeviceInfo {
    /**
     * DeviceId ID.
     */
    deviceId: string;

    /**
     * Device name of the device.
     */
    deviceName: string;

    /**
     * Device type of the device.
     */
    deviceType: DeviceType;
  }

  /**
   * Device Type definitions
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   */
  enum DeviceType {
    /**
     * Indicates an unknown device type.
     */
    UNKNOWN_TYPE = 0,

    /**
     * Indicates a speaker.
     */
    SPEAKER = 0x0A,

    /**
     * Indicates a smartphone.
     */
    PHONE = 0x0E,

    /**
     * Indicates a tablet.
     */
    TABLET = 0x11,

    /**
     * Indicates a smart watch.
     */
    WEARABLE = 0x6D,

    /**
     * Indicates a car.
     */
    CAR = 0x83,

    /**
     * Indicates a smart TV.
     */
    TV = 0x9C
  }

  /**
   * Device Sort Type definitions
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   */
  enum DeviceSortType {
    /**
     * Most Recent Use.
     */
    MOST_RECENT_USE= 0,

    /**
     * Most Frequently Use.
     */
    MOST_FREQUENT_USE = 1,

    /**
     * Intelligence Mode.
     */
    AI = 2,
  }

  /**
   * Device Filter Options
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   */
  interface FilterOptions {
    /**
     * Filter application-level trusted devices is it exits.
     */
    targetPkgName?: string;

    /**
     * device sortType
     */
    sortType?: DeviceSortType;

    /**
     * filters, json string
     */
    filter?: string;
}

  /**
   * Device state change event definition
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   */
  enum DeviceStateChangeAction {
    /**
     * device online action
     */
    ONLINE = 0,

    /**
     * device ready action, the device information synchronization was completed.
     */
    READY = 1,

    /**
     * device offline action
     */
    OFFLINE = 2,

    /**
     * device change action
     */
    CHANGE = 3
  }

  /**
   * Creates a {@code DeviceManager} instance.
   *
   * <p>To manage devices, you must first call this method to obtain a {@code DeviceManager} instance and then
   * use this instance to call other device management methods.
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   * @param bundleName Indicates the bundle name of the application.
   * @param callback Indicates the callback to be invoked upon {@code DeviceManager} instance creation.
   */
  function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void;

  /**
   * Provides methods for managing devices.
   *
   * @since 7
   * @sysCap N/A
   * @devices phone, tablet, tv, wearable, car
   */
  interface DeviceManager {
    /**
     * Releases the {@code DeviceManager} instance after the methods for device management are no longer used.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    release(): void;

    /**
     * Obtains a list of trusted devices.
     *
     * @param options Indicates the extra parameters to be passed to this method for device filtering or sorting.
     * This parameter can be null. For details about available values, see {@link #TARGET_PACKAGE_NAME} and
     * {@link #SORT_TYPE}.
     * @return Returns a list of trusted devices.
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    getTrustedDeviceListSync(): Array<DeviceInfo>;
    getTrustedDeviceList(callback: AsyncCallback<Array<DeviceInfo>>): void;
    getTrustedDeviceList(options: FilterOptions, callback: AsyncCallback<Array<DeviceInfo>>): void;
    getTrustedDeviceList(options?: FilterOptions): Promise<Array<DeviceInfo>>;

    /**
      * Obtains the local device information.
      *
      * @return Returns the {@link DeviceInfo} object containing the local device information.
      * @since 7
      * @sysCap N/A
      * @devices phone, tablet, tv, wearable, car
      */
    getLocalDeviceInfoSync(): DeviceInfo;
    getLocalDeviceInfo(callback: AsyncCallback<DeviceInfo>): void;
    getLocalDeviceInfo(): Promise<DeviceInfo>;

    /**
     * Register a device state callback so that the application can be notified upon device state changes based on
     * the application bundle name.
     *
     * @param bundleName Indicates the bundle name of the application.
     * @param callback Indicates the device state callback to register.
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;
    on(type: 'deviceStateChange', options: FilterOptions, callback: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * UnRegister device state callback based on the application bundle name.
     *
     * @param bundleName Indicates the bundle name of the application.
     * @param callback Indicates the device state callback to register.
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @param callback Indicates the service error callback to register.
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    on(type: 'serviceDie', callback: () => void): void;

    /**
     * UnRegister a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @param callback Indicates the service error callback to register.
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    off(type: 'serviceDie', callback?: () => void): void;
  }
}

export default deviceManager;
