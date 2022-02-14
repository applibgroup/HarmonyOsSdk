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

export interface IAccelerometerData {
  /**
   * X-coordinate
   * Y-coordinate
   * Z-coordinate
   */
  x: number;
  y: number;
  z: number;
}

export interface ICompassData {
  /**
   * Direction of the device (in degrees).
   */
  direction: number;
}

export interface ILightData {
  /**
   * Light intensity, in lux.
   */
  intensity: number;
}

export interface IStepCounter {
  /**
   * Number of steps counted.
   * Each time the device restarts, the value is recalculated from 0.
   */
  steps: number;
}

export interface IBarometer {
  /**
   * Pressure, in pascal.
   */
  pressure: number;
}

export interface IHeartRate {
  /**
   * Heart rate.
   */
  heartRate: number;
}

export default class Sensor {
  /**
   * Listens to acceleration sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeAccelerometer(options: {
    /**
     * Execution frequency of the callback function for listening to acceleration sensor data.
     * The default value is normal.
     */
    interval: string;

    /**
     * Called when acceleration sensor data changes.
     */
    success: (data: IAccelerometerData) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to acceleration sensor data.
   */
  static unsubscribeAccelerometer(): void;

  /**
   * Listens to compass sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options options
   */
  static subscribeCompass(options: {
    /**
     * Called when compass sensor data changes.
     */
    success: (data: ICompassData) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to compass sensor data.
   */
  static unsubscribeCompass(): void;

  /**
   * Listens to ambient light sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeLight(options: {
    /**
     * Called when ambient light sensor data changes.
     */
    success: (data: ILightData) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to ambient light sensor data.
   */
  static unsubscribeLight(): void;

  /**
   * Listens to barometer sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeBarometer(options: {
    /**
     * Called when the barometer sensor data changes.
     */
    success: (data: IBarometer) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to barometer sensor data.
   */
  static unsubscribeBarometer(): void;

  /**
   * Listens to changes of heart rate sensor data.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeHeartRate(options: {
    /**
     * Called when the heart rate sensor data changes. The default frequency is five seconds per callback.
     */
    success: (data: IHeartRate) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to heart rate sensor data.
   */
  static unsubscribeHeartRate(): void;
}
