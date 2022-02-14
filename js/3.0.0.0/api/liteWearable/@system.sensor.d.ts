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
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.ACTIVITY_MOTION
 * @since 3
 */
export interface StepCounterResponse {
  /**
   * Number of steps counted.
   * Each time the device restarts, the value is recalculated from 0.
   * @since 3
   */
  steps: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.ACTIVITY_MOTION
 * @since 3
 */
export interface SubscribeStepCounterOptions {
  /**
   * Called when step counter sensor data changes.
   * @since 3
   */
  success: (data: StepCounterResponse) => void;

  /**
   * Called when the listening fails.
   * @since 3
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface BarometerResponse {
  /**
   * Pressure, in pascal.
   * @since 3
   */
  pressure: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface SubscribeBarometerOptions {
  /**
   * Called when the barometer sensor data changes.
   * @since 3
   */
  success: (data: BarometerResponse) => void;

  /**
   * Called when the listening fails.
   * @since 3
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.READ_HEALTH_DATA
 * @since 3
 */
export interface HeartRateResponse  {
  /**
   * Heart rate.
   * @since 3
   */
  heartRate: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.READ_HEALTH_DATA
 * @since 3
 */
export interface SubscribeHeartRateOptions {
  /**
   * Called when the heart rate sensor data changes.
   * @since 3
   */
  success: (data: HeartRateResponse) => void;

  /**
   * Called when the listening fails
   * @since 3
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface OnBodyStateResponse {
  /**
   * Whether the sensor is worn.
   * @since 3
   */
  value: boolean;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface SubscribeOnBodyStateOptions {
  /**
   * Called when the wearing status changes.
   * @since 3
   */
  success: (data: OnBodyStateResponse) => void;

  /**
   * Called when the listening fails.
   * @since 3
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface GetOnBodyStateOptions {
  /**
   * Called when the sensor wearing state is obtained
   * @since 3
   */
  success: (data: OnBodyStateResponse) => void;

  /**
   * Called when the sensor wearing state fails to be obtained
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed
   * @since 3
   */
  complete?: () => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export default class Sensor {
  /**
   * Listens to step counter sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.ACTIVITY_MOTION
   * @since 3
   */
  static subscribeStepCounter(options: SubscribeStepCounterOptions): void;

  /**
   * Cancels listening to step counter sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.ACTIVITY_MOTION
   * @since 3
   */
  static unsubscribeStepCounter(): void;

  /**
   * Listens to barometer sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static subscribeBarometer(options: SubscribeBarometerOptions): void;

  /**
   * Cancels listening to barometer sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static unsubscribeBarometer(): void;

  /**
   * Listens to changes of heart rate sensor data.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.READ_HEALTH_DATA
   * @since 3
   */
  static subscribeHeartRate(options: SubscribeHeartRateOptions): void;

  /**
   * Cancels listening to heart rate sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.READ_HEALTH_DATA
   * @since 3
   */
  static unsubscribeHeartRate(): void;

  /**
   * Listens to whether a sensor is worn.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void;

  /**
   * Cancels listening to whether the sensor is worn.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static unsubscribeOnBodyState(): void;

  /**
   * Obtains the sensor wearing state.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static getOnBodyState(options: GetOnBodyStateOptions): void;
}
