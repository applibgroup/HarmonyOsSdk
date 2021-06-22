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

export interface DeviceResponse {
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
   * Product.
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
   * Window width.
   */
  windowWidth: number;

  /**
   * Window height.
   */
  windowHeight: number;

  /**
   * Screen density of the device.
   */
  screenDensity: number;

  /**
   * Screen shape The options are as follows:
   * 1. rect: Rectangle screen
   * 2. circle: Circle screen
   */
  screenShape: string;
}

export interface GetDeviceOptions {
  /**
   * Called when the device information is obtained.
   */
  success?: (data: DeviceResponse) => void;

  /**
   * Called when the device information fails to be obtained.
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Device {
  /**
   * Obtains the device information.
   * @param options Options.
   */
  static getInfo(options?: GetDeviceOptions): void;
}
