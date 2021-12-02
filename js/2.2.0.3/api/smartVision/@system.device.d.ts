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
   * @since 3
   */
  brand: string;

  /**
   * Manufacturer.
   * @since 3
   */
  manufacturer: string;

  /**
   * Model.
   * @since 3
   */
  model: string;

  /**
   * Product.
   * @since 3
   */
  product: string;

  /**
   * Window width.
   * @since 3
   */
  windowWidth: number;

  /**
   * Window height.
   * @since 3
   */
  windowHeight: number;
}

export interface GetDeviceOptions {
  /**
   * Called when the device information is obtained.
   * @since 3
   */
  success?: (data: DeviceResponse) => void;

  /**
   * Called when the device information fails to be obtained.
   * @since 3
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   * @since 3
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
