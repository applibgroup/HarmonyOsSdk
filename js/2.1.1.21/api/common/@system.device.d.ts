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

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface DeviceResponse {
  /**
   * Brand.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  brand: string;

  /**
   * Manufacturer.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  manufacturer: string;

  /**
   * Model.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  model: string;

  /**
   * Product number.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  product: string;

  /**
   * System language.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  language: string;

  /**
   * System region.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  region: string;

  /**
   * Window width.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  windowWidth: number;

  /**
   * Window Height.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  windowHeight: number;

  /**
   * Screen density.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  screenDensity: number;

  /**
   * Screen shape. The options are as follows:
   * rect: Rectangle screen.
   * circle: Circle screen.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  screenShape: "rect" | "circle";
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
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export default class Device {
  /**
   * Obtains the device information.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static getInfo(options?: GetDeviceOptions): void;
}
