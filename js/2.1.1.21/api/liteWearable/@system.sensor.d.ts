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

export interface StepCounterResponse {
  /**
   * Number of steps counted.
   */
  steps: number;
}

export interface BarometerResponse {
  /**
   * Pressure, in pascal
   */
  pressure: number;
}

export interface HeartRateResponse {
  /**
   * Heart rate. 255 indicates an invalid value.
   */
  heartRate: number;
}

export interface OnBodyStateResponse {
  /**
   * Whether the sensor is worn.
   */
  value: boolean;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Sensor {
  /**
   * Listens to step counter sensor data.
   * If this method is called multiple times, the last call takes effect.
   * @param options Options.
   */
  static subscribeStepCounter(options: {
    /**
     * Called when step counter sensor data changes.
     */
    success: (data: StepCounterResponse) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Cancels listening to step counter sensor data.
   */
  static unsubscribeStepCounter(): void;

  /**
   * Listens to barometer sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   */
  static subscribeBarometer(options: {
    /**
     * Called when the barometer sensor data changes.
     */
    success: (data: BarometerResponse) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Cancels listening to barometer sensor data.
   */
  static unsubscribeBarometer(): void;

  /**
   * Listens to changes of heart rate sensor data.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   */
  static subscribeHeartRate(options: {
    /**
     * Called when the heart rate sensor data changes.
     */
    success: (data: HeartRateResponse) => void;

    /**
     * Called when the listening fails
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Cancels listening to heart rate sensor data.
   */
  static unsubscribeHeartRate(): void;

  /**
   * Listens to whether a sensor is worn.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   */
  static subscribeOnBodyState(options: {
    /**
     * Called when the wearing status changes.
     */
    success: (data: OnBodyStateResponse) => void;

    /**
     * Called when the listening fails.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Cancels listening to whether the sensor is worn.
   */
  static unsubscribeOnBodyState(): void;

  /**
   * Obtains the sensor wearing state.
   * @param options Options.
   */
  static getOnBodyState(options: {
    /**
     * Called when the sensor wearing state is obtained
     */
    success: (data: OnBodyStateResponse) => void;

    /**
     * Called when the sensor wearing state fails to be obtained
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed
     */
    complete?: () => void;
  }): void;
}
