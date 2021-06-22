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

export interface BatteryResponse {
  /**
   * Whether the battery is being charged
   */
  charging: boolean;

  /**
   * Current battery level, which ranges from 0.00 to 1.00
   */
  level: number;
}

export interface GetStatusOptions {
  /**
   * Called when the current charging state and battery level are obtained.
   */
  success?: (data: BatteryResponse) => void;

  /**
   * Called when the current charging state and battery level fail to be obtained.
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed
   */
  complete?: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Battery {
  /**
   * Obtains the current charging state and battery level.
   * @param options Options.
   */
  static getStatus(options?: GetStatusOptions): void;
}
