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

export default class Hilink {
  /**
   * Obtains information about all HiLink devices connected to a route.
   * @param options Options.
   */
  static getAllDevices(options: {
    /**
     * Called when the all devices information is obtained.
     */
    success?: (devs: Array<HilinkDevice>) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains information about the HiLink device with a specified SN connected to a route.
   * @param options Options.
   */
  static getDeviceById(options: {
    /**
     * device ID.
     */
    id: string;

    /**
     * Indicates the callback function that is successfully called.
     * It returns information about the HiLink device with a specified
     * SN connected to the route.
     */
    success?: (dev: HilinkDevice) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains device information based on the device type.
   * @param options Options.
   */
  static getDevicesByDevType(options: {
    /**
     * Device type.
     */
    devType: string;

    /**
     * Callback function that is successfully called. Information about all
     * connected HiLink devices that meet the conditions is returned.
     */
    success?: (devs: Array<HilinkDevice>) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains device information based on the service id.
   * @param options Options.
   */
  static getDevicesByServiceId(options: {
    /**
     * Specified service id.
     */
    serviceId: string;

    /**
     * Callback function that is successfully called. Information about all
     * connected HiLink devices that meet the conditions is returned.
     */
    success?: (devs: Array<HilinkDevice>) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains real-time service data of all HiLink devices connected to a route.
   * @param options Options.
   */
  static getAllData(options: {
    /**
     * Callback function that is invoked successfully.
     * The status data of all connected HiLink devices is returned.
     */
    success?: (dev: Array<HilinkData>) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains the status data of the HiLink device of a specified SN.
   * @param options Options.
   */
  static getDataById(options: {
    /**
     * Device ID.
     */
    id: string;

    /**
     * Callback function that is invoked successfully.
     * The status data of all connected HiLink devices is returned.
     */
    success?: (dev: HilinkData) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  });

  /**
   * Obtains the device status data that meets the conditions based on the device type.
   * @param options Options.
   */
  static getDataByDevType(options: {
    /**
     * Device type.
     */
    devType: string;

    /**
     * Callback function that is invoked successfully.
     * The status data of all connected HiLink devices is returned.
     */
    success?: (dev: Array<HilinkData>) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains the device status data that meets the conditions based on the service id.
   * @param options Options.
   */
  static getDataByServiceId(options: {
    /**
     * Device service id.
     */
    serviceId: string;

    /**
     * Callback function that is invoked successfully.
     * The status data of all connected HiLink devices is returned.
     */
    success?: (dev: Array<HilinkData>) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Runs a command to control IoT devices connected to a specified route.
   * @param options Options.
   */
  static command(options: {
    /**
     * Device ID.
     */
    id: string;

    /**
     * Control command.
     */
    body: Array<{
      /**
       * Controlled service ID.
       */
      sid: string;

      /**
       * Controlled instruction data.
       */
      data: object;
    }>;

    /**
     * Callback function that is successfully invoked.
     */
    success?: () => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Delivers command control commands to subdevices of a bridge in batches.
   * @param options Options.
   */
  static batchCommand(options: {
    /**
     * ID of a bridge device.
     */
    id: string;

    /**
     * The device data.
     */
    body: {
      /**
       * List of IDs of devices to be controlled in batches.
       */
      subDevices: Array<string>;

      /**
       * Commands for Batch Control.
       */
      actions: Array<{
        services: {
          sid: string;
          data: object;
        }
      }>
    };

    /**
     * Callback function that is successfully invoked.
     */
    success?: () => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Subscribing to Device Status Reporting Events.
   * @param options Options.
   */
  static subscribeAllStatus(options: {
    /**
     * Callback function that is successfully invoked.
     */
    success?: (result: {
      status: 0 | 1 | 2 | 3;
      data: HilinkDevice
    }) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Unsubscribing from Device Status Reporting Events.
   */
  static unsubscribeStatus(): void;

  /**
   * Subscribing to device data reported by device ID, including third-party devices.
   * @param options Options.
   */
  static subscribeDataById(options: {
    /**
     * ID list of subscribed devices.
     */
    id: Array<string>;

    /**
     * Callback function that is successfully invoked.
     */
    success?: (result: HilinkSubData) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Subscribing to device data reported by device type, including third-party devices.
   * @param options Options.
   */
  static subscribeDataByDevType(options: {
    /**
     * Device Type.
     */
    devType: string;

    /**
     * Callback function that is successfully invoked.
     */
    success?: (result: HilinkSubData) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Subscribing to device data reported by service id, including third-party devices.
   * @param options Options.
   */
  static subscribeDataByServiceId(options: {
    /**
     * Device service id.
     */
    serviceId: string;

    /**
     * Callback function that is successfully invoked.
     */
    success?: (result: HilinkSubData) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Unsubscribing from Device Status Reporting Events.
   */
  static unsubscribeData(): void;
}

export interface HilinkSubData {
  /**
   * Device ID.
   */
  id: string;

  /**
   * Service capabilities and data of devices.
   */
  services: {
    /**
     * Specific service identification, corresponding to specific capabilities.
     */
    sid: string;

    /**
     * Status data of the service.
     * For example, if the switch capability is enabled, the value of data is {"on":1}.
     */
    data: object;
  }
}


/**
 * Describes the HiLink device data.
 */
export interface HilinkData {
  /**
   * Device Id.
   */
  id: string;
  /**
   * Device service information.
   * @param sid Service ID.
   * @param data Status data of the service.
   */
  services: Array<{
    sid: string;
    data: object;
  }>;
}

/**
 * Describes the HiLink device information.
 */
export interface HilinkDevice {
  /**
   * Device Id.
   */
  id: string;

  /**
   * Indicates the online status of a device. 0: offline; 1: online.
   */
  status?: 0 | 1;

  /**
   * Device name.
   */
  devName: string;

  /**
   * Indicates the name of the room where the device is located.
   */
  roomName: string;

  /**
   * Device information.
   */
  devInfo: {
    /**
     * Device model.
     */
    model: string;

    /**
     * Device type.
     */
    devType: string;

    /**
     * Device manu.
     */
    manu: string;

    /**
     * Product ID allocated by the device during HiLink authentication.
     */
    prodId: string;

    /**
     * HiLink protocol version.
     */
    hiv: string;

    /**
     * Device firmware version.
     */
    fwv: string;

    /**
     *  Device hardware version.
     */
    hwv: string;

    /**
     * Device software version.
     */
    swv: string;

    /**
     * Device protocol type(1:wifi,2:z-wifi,3:ZIGBEE).
     */
    protType: 1 | 2 | 3;
  };

  /**
   * Device service information.
   * @param st service type.
   * @param sid service ID.
   */
  services: Array<{
    st: string;
    sid: string;
  }>;
}