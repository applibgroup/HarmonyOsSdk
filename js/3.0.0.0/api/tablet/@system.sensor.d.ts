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

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.ACCELEROMETER
 * @since 3
 */
export interface AccelerometerResponse {
  /**
   * X-coordinate
   * @since 3
   */
  x: number;

  /**
   * Y-coordinate
   * @since 3
   */
  y: number;

  /**
   * Z-coordinate
   * @since 3
   */
  z: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.ACCELEROMETER
 * @since 3
 */
export interface subscribeAccelerometerOptions {
  /**
   * Execution frequency of the callback function for listening to acceleration sensor data.
   * Available values are as follows:
   *   1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
   *   2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
   *   3. normal: Regular frequency (200 ms per callback), which is application to low power consumption.
   * The default value is normal.
   * @since 3
   */
  interval: string;

  /**
   * Called when acceleration sensor data changes.
   * @since 3
   */
  success: (data: AccelerometerResponse) => void;

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
export interface CompassResponse {
  /**
   * Direction of the device (in degrees).
   * @since 3
   */
  direction: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface SubscribeCompassOptions {
  /**
   * Called when compass sensor data changes.
   * @since 3
   */
  success: (data: CompassResponse) => void;

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
export interface ProximityResponse {
  /**
   * Distance between a visible object and the device screen
   * @since 3
   */
  distance: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface SubscribeProximityOptions {
  /**
   * Called when distance sensor data changes.
   * @since 3
   */
  success: (data: ProximityResponse) => void;

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
export interface LightResponse {
  /**
   * Light intensity, in lux.
   * @since 3
   */
  intensity: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 3
 */
export interface SubscribeLightOptions {
  /**
   * Called when ambient light sensor data changes.
   * @since 3
   */
  success: (data: LightResponse) => void;

  /**
   * Called when the listening fails.
   * @since 3
   */
  fail?: (data: string, code: number) => void;
}

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
 * @since 6
 */
export interface DeviceOrientationResponse {
  /**
   * alpha
   * @since 6
   */
  alpha: number;

  /**
   * beta
   * @since 6
   */
  beta: number;

  /**
   * gamma
   * @since 6
   */
  gamma: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 6
 */
export interface SubscribeDeviceOrientationOptions {
  /**
   * Execution frequency of the callback function for listening to device orientation sensor data.
   * Available values are as follows:
   *   1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
   *   2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
   *   3. normal: Regular frequency (200 ms per callback), which is application to low power consumption.
   * The default value is normal.
   * @since 6
   */
  interval: string;

  /**
   * Called when device orientation sensor data changes.
   * @since 6
   */
  success: (data: DeviceOrientationResponse) => void;

  /**
   * Called when the listening fails.
   * @since 6
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.GYROSCOPE
 * @since 6
 */
export interface GyroscopeResponse {
  /**
   * X-coordinate
   * @since 6
   */
  x: number;

  /**
   * Y-coordinate
   * @since 6
   */
  y: number;

  /**
   * Z-coordinate
   * @since 6
   */
  z: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @permission ohos.permission.GYROSCOPE
 * @since 6
 */
export interface SubscribeGyroscopeOptions {
  /**
   * Execution frequency of the callback function for listening to gyroscope sensor data.
   * Available values are as follows:
   *   1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
   *   2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
   *   3. normal: Regular frequency (200 ms per callback), which is application to low power consumption.
   * The default value is normal.
   * @since 6
   */
  interval: string;

  /**
   * Called when gyroscope sensor data changes.
   * @since 6
   */
  success: (data: GyroscopeResponse) => void;

  /**
   * Called when the listening fails.
   * @since 6
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export interface GravityResponse {
  /**
   * X-coordinate
   * @since 7
   */
  x: number;

  /**
   * Y-coordinate
   * @since 7
   */
  y: number;

  /**
   * Z-coordinate
   * @since 7
   */
  z: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export interface SubscribeGravityOptions {
  /**
   * Execution frequency of the callback function for listening to gravity sensor data.
   * Available values are as follows:
   *   1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
   *   2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
   *   3. normal: Regular frequency (200 ms per callback), which is application to low power consumption.
   * The default value is normal.
   * @since 7
   */
  interval: string;

  /**
   * Called when gravity sensor data changes.
   * @since 7
   */
  success: (data: GravityResponse) => void;

  /**
   * Called when the listening fails.
   * @since 7
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export interface MagneticResponse {
  /**
   * X-coordinate
   * @since 7
   */
  x: number;

  /**
   * Y-coordinate
   * @since 7
   */
  y: number;

  /**
   * Z-coordinate
   * @since 7
   */
  z: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export interface SubscribeMagneticOptions {
  /**
   * Execution frequency of the callback function for listening to magnetic sensor data.
   * Available values are as follows:
   *   1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
   *   2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
   *   3. normal: Regular frequency (200 ms per callback), which is application to low power consumption.
   * The default value is normal.
   * @since 7
   */
  interval: string;

  /**
   * Called when magnetic sensor data changes.
   * @since 7
   */
  success: (data: MagneticResponse) => void;

  /**
   * Called when the listening fails.
   * @since 7
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export interface HallResponse {
  /**
   * Indicates the hall sensor data.
   * @since 7
   */
  value: number;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export interface SubscribeHallOptions {
  /**
   * Execution frequency of the callback function for listening to hall sensor data.
   * Available values are as follows:
   *   1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
   *   2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
   *   3. normal: Regular frequency (200 ms per callback), which is application to low power consumption.
   * The default value is normal.
   * @since 7
   */
  interval: string;

  /**
   * Called when hall sensor data changes.
   * @since 7
   */
  success: (data: HallResponse) => void;

  /**
   * Called when the listening fails.
   * @since 7
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @SysCap SystemCapability.Sensors.Sensor
 * @import import sensor from '@system.sensor';
 * @since 7
 */
export default class Sensor {
  /**
   * Listens to acceleration sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.ACCELEROMETER
   * @since 3
   */
  static subscribeAccelerometer(options: subscribeAccelerometerOptions): void;

  /**
   * Cancels listening to acceleration sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.ACCELEROMETER
   * @since 3
   */
  static unsubscribeAccelerometer(): void;

  /**
   * Listens to compass sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static subscribeCompass(options: SubscribeCompassOptions): void;

  /**
   * Cancels listening to compass sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static unsubscribeCompass(): void;

  /**
   * Listens to distance sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static subscribeProximity(options: SubscribeProximityOptions): void;

  /**
   * Cancels listening to distance sensor data.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static unsubscribeProximity(): void;

  /**
   * Listens to ambient light sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static subscribeLight(options: SubscribeLightOptions): void;

  /**
   * Cancels listening to ambient light sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 3
   */
  static unsubscribeLight(): void;

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
   * Listens to device orientation sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 6
   */
  static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void;

  /**
   * Cancels listening to device orientation sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 6
   */
  static unsubscribeDeviceOrientation(): void;

  /**
   * Listens to gyroscope sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.GYROSCOPE
   * @since 6
   */
  static subscribeGyroscope(options: SubscribeGyroscopeOptions): void;

  /**
   * Cancels listening to gyroscope sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @permission ohos.permission.GYROSCOPE
   * @since 6
   */
  static unsubscribeGyroscope(): void;

  /**
   * Listens to gravity sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 7
   */
  static subscribeGravity(options: SubscribeGravityOptions): void;

  /**
   * Cancels listening to gravity sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 7
   */
  static unsubscribeGravity(): void;

  /**
   * Listens to magnetic sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 7
   */
  static subscribeMagnetic(options: SubscribeMagneticOptions): void;

  /**
   * Cancels listening to magnetic sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 7
   */
  static unsubscribeMagnetic(): void;

  /**
   * Listens to hall sensor data changes.
   * If this API is called multiple times, the last call takes effect.
   * @param options Options.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 7
   */
  static subscribeHall(options: SubscribeHallOptions): void;

  /**
   * Cancels listening to hall sensor data.
   * @SysCap SystemCapability.Sensors.Sensor
   * @since 7
   */
  static unsubscribeHall(): void;
}
