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
import { AsyncCallback } from './basic';

/**
 * upload and download
 *
 * @since 6
 * @import request from '@ohos.request';
 * @devices phone, tablet, tv, wearable
 */
declare namespace request {

  // Bit flag indicating download is allowed when using the cellular network.
  const NETWORK_MOBILE: number;

  // Bit flag indicating download is allowed when using the WLAN.
  const NETWORK_WIFI: number;

  // Indicates that the download cannot be resumed for some temporary errors.
  const ERROR_CANNOT_RESUME: number;

  // Indicates that no storage device, such as an SD card, is found.
  const ERROR_DEVICE_NOT_FOUND: number;

  // Indicates that files to be downloaded already exist, and that the download session cannot overwrite the existing files.
  const ERROR_FILE_ALREADY_EXISTS: number;

  // Indicates that a file operation fails.
  const ERROR_FILE_ERROR: number;

  // Indicates that the HTTP transmission fails.
  const ERROR_HTTP_DATA_ERROR: number;

  // Indicates insufficient storage space.
  const ERROR_INSUFFICIENT_SPACE: number;

  // Indicates an error caused by too many network redirections.
  const ERROR_TOO_MANY_REDIRECTS: number;

  // Indicates an HTTP code that cannot be identified.
  const ERROR_UNHANDLED_HTTP_CODE: number;

  // Indicates an undefined error.
  const ERROR_UNKNOWN: number;

  // Indicates that the download is paused and waiting for a WLAN connection, because the file size exceeds the maximum allowed for a session using the cellular network.
  const PAUSED_QUEUED_FOR_WIFI: number;

  // Indicates that the download is paused for some reasons.
  const PAUSED_UNKNOWN: number;

  // Indicates that the download is paused due to a network problem, for example, network disconnection.
  const PAUSED_WAITING_FOR_NETWORK: number;

  // Indicates that a network error occurs, and the download session will be retried.
  const PAUSED_WAITING_TO_RETRY: number;

  // Indicates that the download session has failed and will not be retried.
  const SESSION_FAILED: number;

  // Indicates that the download session has been paused.
  const SESSION_PAUSED: number;

  // Indicates that the download session is being scheduled.
  const SESSION_PENDING: number;

  // Indicates that the download session is in progress.
  const SESSION_RUNNING: number;

  // Indicates that the download session is completed.
  const SESSION_SUCCESSFUL: number;

  /**
   * Starts a download session.
   *
   * @param config download config
   */
  function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;
  function download(config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Starts a upload session.
   *
   * @param config upload config
   */
  function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void;
  function upload(config: UploadConfig): Promise<UploadTask>;

  interface DownloadConfig {
    url: string; // Resource address.
    header?: Object; // Adds an HTTP or HTTPS header to be included with the download request.
    enableMetered?: boolean; // Allows download under a metered connection.
    enableRoaming?: boolean; // Allows download in a roaming network.
    description?: string; // Sets the description of a download session.
    networkType?: number; // Sets the network type allowed for download.
    title?: string; // Sets a download session title.
  }

  interface DownloadTask {
    /**
     * Called when the current download session is in process.
     */
    on(type: 'progress', callback: (receivedSize: number, totalSize: number) => void): void;
    off(type: 'progress', callback?: (receivedSize: number, totalSize: number) => void): void;

    /**
     * Deletes a download session and the downloaded files.
     */
    remove(callback: AsyncCallback<boolean>): void;
    remove(): Promise<boolean>;
  }

  interface File {
    filename: string; // When multipart is submitted, the file name in the request header.
    name: string; // When multipart is submitted, the name of the form item. The default is file.
    uri: string; // The local storage path of the file (please refer to the storage directory definition for path usage).
    type: string; // The content type of the file is obtained by default according to the suffix of the file name or path.
  }

  interface RequestData {
    name: string; // Represents the name of the form element.
    value: string; // Represents the value of the form element.
  }

  interface UploadConfig {
    url: string; // Resource address.
    header: Object; // Adds an HTTP or HTTPS header to be included with the upload request.
    method: string; // Request method: POST, PUT. The default POST.
    files: Array<File>; // A list of files to be uploaded. Please use multipart/form-data to submit.
    data: Array<RequestData>; // The requested form data.
  }

  interface UploadTask {
    /**
     * Called when the current upload session is in process.
     */
    on(type: 'progress', callback: (uploadedSize: number, totalSize: number) => void): void;
    off(type: 'progress', callback?: (uploadedSize: number, totalSize: number) => void): void;

    /**
     * Deletes a upload session.
     */
    remove(callback: AsyncCallback<boolean>): void;
    remove(): Promise<boolean>;
  }
}

export default request;
