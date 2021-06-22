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

export interface FileResponse {
  /**
   * File URI.
   */
  uri: string;

  /**
   * File size, in bytes.
   * If type is dir, the length value is fixed to 0.
   */
  length: number;

  /**
   * Timestamp when the file is stored, which is the number of milliseconds elapsed since 1970/01/01 00:00:00 GMT.
   * For lite wearables, the value is fixed to 0, because this parameter is restricted by the underlying file system.
   */
  lastModifiedTime: number;

  /**
   * File type. Available values are as follows:
   * dir: directory
   * file: file
   */
  type: "dir" | "file";

  /**
   * File list.
   * When the recursive value is true and the type is dir, the file information under the subdirectory will be returned.
   * Otherwise, no value will be returned.
   */
  subFiles?: Array<FileResponse>;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class File {
  /**
   * Moves a specified file to a given location.
   * @param options Options.
   */
  static move(options: {
    /**
     * URI of the file to move.
     * Restricted by the underlying file system of lite wearabless, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    srcUri: string;

    /**
     * URI of the location to which the file is to move.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    dstUri: string;

    /**
     * Called when the source file is moved to the specified location successfully.
     * This function returns the URI of the file moved to the target location.
     */
    success?: (uri: string) => void;

    /**
     * Called when moving fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Copies a file and save the copy to a specified location.
   * @param options Options.
   */
  static copy(options: {
    /**
     * URI of the file to copy.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    srcUri: string;

    /**
     * URI of the location to which the copy is to save.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    dstUri: string;

    /**
     * Called when the source file is copied and saved to the specified location successfully.
     * This function returns the URI of the file saved to the target location.
     */
    success?: (uri: string) => void;

    /**
     * Called when the copy or save operation fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains the list of all files in a specified directory.
   * @param options Options.
   */
  static list(options: {
    /**
     * URI of the directory.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Called when the list is obtained successfully.
     */
    success?: (data: { fileList: Array<FileResponse> }) => void;

    /**
     * Called when the list fails to be obtained.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Obtains information about a specified local file.
   * @param options Options.
   */
  static get(options: {
    /**
     * File URI, which cannot be an application resource path.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Whether to recursively obtain the file list under a subdirectory.
     * The default value is false.
     */
    recursive?: boolean;

    /**
     * Called when file information is obtained successfully.
     */
    success?: (file: FileResponse) => void;

    /**
     * Called when file information fails to be obtained.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Deletes a local file.
   * @param options Options.
   */
  static delete(options: {
    /**
     * URI of the file to be deleted, which cannot be an application resource path.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Called when local files are deleted successfully.
     */
    success?: () => void;

    /**
     * Called when the deletion fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Writes texts into a specified file.
   * @param options Options.
   */
  static writeText(options: {
    /**
     * URI of a local file. If it does not exist, a file will be created.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Character string to write into the local file.
     */
    text: string;

    /**
     * Encoding format. The default format is UTF-8.
     * Currently, only UTF-8 is supported.
     */
    encoding?: string;

    /**
     * Whether to enable the append mode.
     * The default value is false.
     */
    append?: boolean;

    /**
     * Called when texts are written into a file successfully.
     */
    success?: () => void;

    /**
     * Called when texts fail to be written into a file.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Reads texts from a specified file.
   * @param options Options.
   */
  static readText(options: {
    /**
     * URI of a local file.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Encoding format. The default format is UTF-8.
     * Currently, only UTF-8 is supported.
     */
    encoding?: string;

    /**
     * Position where the reading starts.
     * The default value is the start position of the file.
     */
    position?: number;

    /**
     * Position where the reading starts.
     * The default value is the start position of the file.
     */
    length?: number;

    /**
     * Called when texts are read successfully.
     */
    success?: (data: { text: string }) => void;

    /**
     * Called when texts fail to be read.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Writes buffer data into a specified file.
   * @param options Options.
   */
  static writeArrayBuffer(options: {
    /**
     * URI of a local file. If it does not exist, a file will be created.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Buffer from which the data is derived.
     */
    buffer: Uint8Array;

    /**
     * Offset to the position where the writing starts.
     * The default value is 0.
     */
    position?: number;

    /**
     * Whether to enable the append mode. The default value is false.
     * If the value is true, the position parameter will become invalid.
     */
    append?: boolean;

    /**
     * Called when data from a buffer is written into a file successfully.
     */
    success?: () => void;

    /**
     * Called when data from a buffer fails to be written into a file.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Reads buffer data from a specified file.
   * @param options Options.
   */
  static readArrayBuffer(options: {
    /**
     * URI of a local file.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Position where the reading starts.
     * The default value is the start position of the file.
     */
    position?: number;

    /**
     * Length of the content to read.
     * If this parameter is not set, all content of the file will be read.
     */
    length?: number;

    /**
     * Called when the buffer data is read successfully.
     */
    success?: (data: { buffer: Uint8Array }) => void;

    /**
     * Called when the buffer data fails to be read.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Checks whether a specified file or directory exists.
   * @param options Options.
   */
  static access(options: {
    /**
     * URI of the directory or file.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Called when the check result is obtained successfully.
     */
    success?: () => void;

    /**
     * Called when the check fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Create a specified directory.
   * @param options Options.
   */
  static mkdir(options: {
    /**
     * URI of the directory.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     * 3. A maximum of five recursions are allowed for creating the directory.
     */
    uri: string;

    /**
     * Whether to recursively create upper-level directories of the specified directory.
     * The default value is false.
     */
    recursive?: boolean;

    /**
     * Called when the directory is created successfully.
     */
    success?: () => void;

    /**
     * Called when the creation fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Deletes a specified directory.
   * @param options Options.
   */
  static rmdir(options: {
    /**
     * URI of the directory.
     * Restricted by the underlying file system of lite wearables, the value must meet the following requirements:
     * 1. The URI cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     * 2. The maximum number of characters allowed is 128.
     */
    uri: string;

    /**
     * Whether to recursively delete sub files and subdirectories of the specified directory.
     * The default value is false.
     */
    recursive?: boolean;

    /**
     * Called when the directory is deleted successfully.
     */
    success?: () => void;

    /**
     * Called when the deletion fails.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;
}
