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
 * @since 3
 */
export declare class console {
  /**
   * Prints "debug" logs.
   * @param message Text to print.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * Prints "log" logs.
   * @param message Text to print.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * Prints "info" logs.
   * @param message Text to print.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * Prints "warn" logs.
   * @param message Text to print.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * Prints "error" logs.
   * @param message Text to print.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static error(message: string, ...arguments: any[]): void;
}
