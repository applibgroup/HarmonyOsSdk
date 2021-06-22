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

export interface AccelerometerResponse {
  /**
   * X-coordinate
   */
  x: number;

  /**
   * Y-coordinate
   */
  y: number;

  /**
   * Z-coordinate
   */
  z: number;
}

export interface CompassResponse {
  /**
   * Direction of the device (in degrees).
   */
  direction: number;
}

export interface LightResponse {
  /**
   * Light intensity, in lux.
   */
  intensity: number;
}

export interface StepCounterResponse {
  /**
   * Number of steps counted.
   * Each time the device restarts, the value is recalculated from 0.
   */
  steps: number;
}

export interface BarometerResponse {
  /**
   * Pressure, in pascal.
   */
  pressure: number;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
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
    success: (data: AccelerometerResponse) => void;

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
   * @param options Options.
   */
  static subscribeCompass(options: {
    /**
     * Called when compass sensor data changes.
     */
    success: (data: CompassResponse) => void;

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
   * Listens to distance sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeProximity(options: {
    /**
     * Called when distance sensor data changes.
     */
    success: (ret: { distance: number}) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to distance sensor data.
   * @param options
   */
  static unsubscribeProximity(): void;

  /**
   * Listens to ambient light sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeLight(options: {
    /**
     * Called when ambient light sensor data changes.
     */
    success: (data: LightResponse) => void;

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
   * Listens to step counter sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeStepCounter(options: {
    /**
     * Called when step counter sensor data changes.
     */
    success: (data: StepCounterResponse) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to step counter sensor data.
   */
  static unsubscribeStepCounter(): void;

  /**
   * Listens to barometer sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options
   */
  static subscribeBarometer(options: {
    /**
     * Called when the barometer sensor data changes.
     */
    success: (data: BarometerResponse) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * Cancels listening to barometer sensor data.
   */
  static unsubscribeBarometer(): void;
}
