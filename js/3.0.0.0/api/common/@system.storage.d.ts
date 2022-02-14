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
 */
export interface GetStorageOptions {
  /**
   * Content index.
   * For liteWearable and smartVision, the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  key: string;

  /**
   * Default value returned when the key does not exist.
   * If this parameter is not specified, an empty string is returned.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  default?: string;

  /**
   * Called when the stored content is read successfully.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  success?: (data: any) => void;

  /**
   * Called when the stored content fails to be read.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface SetStorageOptions {
  /**
   * Index of the stored content to be modified.
   * For liteWearable and smartVision, the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  key: string;

  /**
   * Target storage content. If the content is an empty string, the data item with the key as the index will be deleted.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  value: string;

  /**
   * Called when the stored content is modified successfully.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the stored content fails to be modified.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface ClearStorageOptions {
  /**
   * Called when the stored content is cleared successfully.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the stored content fails to be cleared.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface DeleteStorageOptions {
  /**
   * Content index.
   * For liteWearable and smartVision, the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  key: string;

  /**
   * Called when the stored content is deleted successfully.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  success?: () => void;

  /**
   * Called when the stored content fails to be deleted.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export default class Storage {
  /**
   * Reads the stored content.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static get(options: GetStorageOptions): void;

  /**
   * Modifies the stored content.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static set(options: SetStorageOptions): void;

  /**
   * Clears the stored content.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static clear(options?: ClearStorageOptions): void;

  /**
   * Deletes the stored content.
   * @param options Options.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  static delete(options: DeleteStorageOptions): void;
}
