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
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface GeolocationResponse {
  /**
   * Longitude.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  longitude: number;

  /**
   * Latitude.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  latitude: number;

  /**
   * Altitude.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  altitude: number;

  /**
   * Accuracy.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  accuracy: number;

  /**
   * Time.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  time: number;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface GetLocationOption {
  /**
   * Timeout duration, in milliseconds.
   * For the rich device, the default value is 30000.
   * For the lite wearable device, the default value is 180000.
   * The timeout duration is necessary in case no result is returned if the request to obtain the geographic location is rejected for the lack of the required permission, weak positioning signal, or incorrect location settings. After the timeout duration expires, the fail function will be called.
   * The value is a 32-digit positive integer.
   * If the value set is less than or equal to 0, the default value will be used.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  timeout?: number;

  /**
   * Coordinate system type. Available types can be obtained using getSupportedCoordTypes.
   * The default type is wgs84.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  coordType?: string;

  /**
   * Called when the geographic location is obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: (data: GeolocationResponse) => void;

  /**
   * Called when the location types fail to be obtained
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface GetLocationTypeResponse {
  /**
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  types: Array<string>;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface GetLocationTypeOption {
  /**
   * Called when the location types are obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: (data: GetLocationTypeResponse) => void;

  /**
   * Called when the location types fail to be obtained.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export interface SubscribeLocationOption {
  /**
   * Coordinate system type. Available types can be obtained using getSupportedCoordTypes.
   * The default type is wgs84.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  coordType?: string;

  /**
   * Called whenever the geographical location changes.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  success: (data: GeolocationResponse) => void;

  /**
   * Called when the listening fails.
   * @devices tv, phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 */
export default class Geolocation {
  /**
   * Obtains the geographic location.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static getLocation(options?: GetLocationOption): void;

  /**
   * Obtains the location types supported by the system.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static getLocationType(options?: GetLocationTypeOption): void;

  /**
   * Listens to the geographical location. If this method is called multiple times, the last call takes effect.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static subscribe(options: SubscribeLocationOption): void;

  /**
   * Cancels listening to the geographical location.
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static unsubscribe(): void;

  /**
   * Obtains the supported coordinate system types.
   * @returns A string array of the supported coordinate system types, for example, ['wgs84'].
   * @devices tv, phone, tablet, wearable, liteWearable
   */
  static getSupportedCoordTypes(): Array<string>;
}
