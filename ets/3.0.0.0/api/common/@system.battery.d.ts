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
 * @devices phone, tablet, wearable, liteWearable
 */
export interface BatteryResponse {
  /**
   * Whether the battery is being charged
   * @devices phone, tablet, wearable, liteWearable
   * @since 3
   */
  charging: boolean;

  /**
   * Current battery level, which ranges from 0.00 to 1.00
   * @devices phone, tablet, wearable, liteWearable
   * @since 3
   */
  level: number;
}

/**
 * @devices phone, tablet, wearable, liteWearable
 */
export interface GetStatusOptions {
  /**
   * Called when the current charging state and battery level are obtained.
   * @devices phone, tablet, wearable, liteWearable
   * @since 3
   */
  success?: (data: BatteryResponse) => void;

  /**
   * Called when the current charging state and battery level fail to be obtained.
   * @devices phone, tablet, wearable, liteWearable
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed
   * @devices phone, tablet, wearable, liteWearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices phone, tablet, wearable, liteWearable
 */
export default class Battery {
  /**
   * Obtains the current charging state and battery level.
   * @param options Options.
   * @devices phone, tablet, wearable, liteWearable
   */
  static getStatus(options?: GetStatusOptions): void;
}
