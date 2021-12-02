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

export default class Device {
  /**
   * Obtains the device information.
   * @param options Options.
   */
  static getInfo(options: {
    /**
     * Called when the device information is obtained.
     */
    success: (result: {
      /**
       * Brand.
       */
      brand: string;

      /**
       * Manufacturer.
       */
      manufacturer: string;

      /**
       * Model.
       */
      model: string;

      /**
       * Product number.
       */
      product: string;

      /**
       * System language.
       */
      language: string;

      /**
       * System region.
       */
      region: string;

      /**
       * System API version.
       */
      apiVersion: number;

      /**
       * Device type.
       */
      deviceType: string;
    }) => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Subscribe to events related to the router network status.
   * @param options Options.
   */
  static subscribeWanStatus(options: {
    /**
     * Callback function that is successfully invoked.
     * @param The value can be 0 (uplink disconnection event) or 1 (uplink access event).
     */
    success: (data: 0 | 1) => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;
  }): void;

  /**
   * Unsubscribe from events related to the router network status.
   */
  static unsubscribeWanStatus(): void;

  /**
   * Subscribing to events related to the LAN status of a router.
   * @param options Options.
   */
  static subscribeLanStatus(options: {
    /**
     * This function is called back after an event is issued.
     * @param ip LAN IP after change.
     */
    success: (ip: string) => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;
  }): void;

  /**
   * Unsubscribing from events related to the LAN status of a router.
   */
  static unsubscribeLanStatus(): void;

  /**
   * Subscribing to Router Restart Events.
   * @param options Options.
   */
  static subscribeReboot(options: {
    /**
     * This function is called back after an event is issued.
     */
    success: () => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;
  }): void;

  /**
   * Unsubscribing from Router Restart Events.
   */
  static unsubscribeReboot(): void;

  /**
   * Subscribing to Router Factory Restoration Events.
   * @param options Options.
   */
  static subscribeRestore(options: {
    /**
     * This function is called back after an event is issued.
     */
    success: () => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;
  }): void;

  /**
   * Unsubscribing from Router Factory Restoration Events.
   */
  static unsubscribeRestore(): void;

  /**
   * Subscribing to the Event of Connecting a Router to a New Device.
   */
  static subscribeNewDevAccess(options: {
    /**
     * This function is called back after an event is issued.
     * @param ip LAN IP after change.
     */
    success: (ip: string) => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail: () => void;
  }): void;

  /**
   * Unsubscribing from the Event of Connecting a Router to a New Device.
   */
  static unsubscribeNewDevAccess(): void;

  /**
   * Subscribing to Router Unbinding Events.
   */
  static subscribeUnbind(options: {
    /**
     * This function is called back after an event is issued.
     */
    success: () => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;
  }): void;

  /**
   * Unsubscribing from Router Unbinding Events.
   */
  static unsubscribeUnbind(): void;

  /**
   * Subscribing to the USB Plugging Event of a Router.
   */
  static subscribeUsbStatus(options: {
    /**
     * This function is called back after an event is issued.
     * @param type The value can be 0 (the USB removed) or 1 (The USB inserted).
     */
    success: (type: 0 | 1) => void;

    /**
     * Called when the device information fails to be obtained.
     */
    fail?: () => void;
  }): void;

  /**
   * Unsubscribing from the USB Insertion Event of a Route.
   */
  static unsubscribeUsbStatus(): void;
}