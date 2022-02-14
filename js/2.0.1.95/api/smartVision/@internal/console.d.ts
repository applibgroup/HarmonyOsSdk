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

export declare class console {
  /**
   * Prints "debug" logs.
   * @param message Text to print
   */
  static debug(message: string): void;

  /**
   * Prints "log" logs.
   * @param message Text to print
   */
  static log(message: string): void;

  /**
   * Prints "info" logs.
   * @param message Text to print
   */
  static info(message: string): void;

  /**
   * Prints "warn" logs.
   * @param message Text to print
   */
  static warn(message: string): void;

  /**
   * Prints "error" logs.
   * @param message Text to print
   */
  static error(message: string): void;
}
