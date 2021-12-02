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
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Vibrator {
  /**
   * Triggers device vibration.
   * @param options Options.
   */
  static vibrate(options?: {
    /**
     * Vibration mode.
     * The value long indicates long vibration, and short indicates short vibration.
     * The default value is long.
     * @since 3
     */
    mode?: "long" | "short";

    /**
     * Called when success to trigger vibration.
     * @since 3
     */
    success: () => void;

    /**
     * Called when fail to trigger vibration.
     * @since 3
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     * @since 3
     */
    complete?: () => void;
  }): void;
}
