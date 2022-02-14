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
 * @since 7
 * @import request from '@ohos.request';
 * @devices phone, tablet, tv, wearable, car
 * @permission {@code ohos.permission.INTERNET}
 */
declare namespace request {

  /**
   * Bit flag indicating download is allowed when using the cellular network.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const NETWORK_MOBILE: number;

  /**
  * Bit flag indicating download is allowed when using the WLAN.
  *
  * @since 7
  * @devices phone, tablet, tv, wearable, car
  * @permission {@code ohos.permission.INTERNET}
  */
  const NETWORK_WIFI: number;

  /**
   * Indicates that the download cannot be resumed for some temporary errors.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_CANNOT_RESUME: number;

  /**
   * Indicates that no storage device, such as an SD card, is found.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_DEVICE_NOT_FOUND: number;

  /**
   * Indicates that files to be downloaded already exist, and that the download session cannot overwrite the existing files.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_FILE_ALREADY_EXISTS: number;

  /**
   * Indicates that a file operation fails.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_FILE_ERROR: number;

  /**
   * Indicates that the HTTP transmission fails.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_HTTP_DATA_ERROR: number;

  /**
   * Indicates insufficient storage space.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_INSUFFICIENT_SPACE: number;

  /**
   * Indicates an error caused by too many network redirections.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_TOO_MANY_REDIRECTS: number;

  /**
   * Indicates an HTTP code that cannot be identified.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_UNHANDLED_HTTP_CODE: number;

  /**
   * Indicates an undefined error.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const ERROR_UNKNOWN: number;

  /**
   * Indicates that the download is paused and waiting for a WLAN connection, because the file size exceeds the maximum allowed for a session using the cellular network.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const PAUSED_QUEUED_FOR_WIFI: number;

  /**
   * Indicates that the download is paused for some reasons.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const PAUSED_UNKNOWN: number;

  /**
   * Indicates that the download is paused due to a network problem, for example, network disconnection.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const PAUSED_WAITING_FOR_NETWORK: number;

  /**
   * Indicates that a network error occurs, and the download session will be retried.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const PAUSED_WAITING_TO_RETRY: number;

  /**
   * Indicates that the download session has failed and will not be retried.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const SESSION_FAILED: number;

  /**
   * Indicates that the download session has been paused.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const SESSION_PAUSED: number;

  /**
   * Indicates that the download session is being scheduled.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const SESSION_PENDING: number;

  /**
   * Indicates that the download session is in progress.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const SESSION_RUNNING: number;

  /**
   * Indicates that the download session is completed.
   *
   * @since 7
   * @devices phone, tablet, tv, wearable, car
   * @permission {@code ohos.permission.INTERNET}
   */
  const SESSION_SUCCESSFUL: number;

  /**
   * Starts a download session.
   *
   * @since 6
   * @devices phone, tablet, tv, wearable, car
   * @param config download config
   * @param callback Indicate the callback function to receive DownloadTask.
   * @permission {@code ohos.permission.INTERNET}
   * @return -
   */
  function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Starts a download session.
   *
   * @since 6
   * @devices phone, tablet, tv, wearable, car
   * @param config download config
   * @permission {@code ohos.permission.INTERNET}
   * @return -
   */
  function download(config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Starts a upload session.
   *
   * @since 6
   * @devices phone, tablet, tv, wearable, car
   * @param config upload config
   * @param callback Indicate the callback function to receive UploadTask.
   * @permission {@code ohos.permission.INTERNET}
   * @return -
   */
  function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Starts a upload session.
   *
   * @since 6
   * @devices phone, tablet, tv, wearable, car
   * @param config upload config
   * @permission {@code ohos.permission.INTERNET}
   * @return -
   */
  function upload(config: UploadConfig): Promise<UploadTask>;

  interface DownloadConfig {
    url: string; // Resource address.
    header?: Object; // Adds an HTTP or HTTPS header to be included with the download request.
    enableMetered?: boolean; // Allows download under a metered connection.
    enableRoaming?: boolean; // Allows download in a roaming network.
    description?: string; // Sets the description of a download session.
    networkType?: number; // Sets the network type allowed for download.
    filePath?: string; // Sets the path for downloads.
    title?: string; // Sets a download session title.
  }

  interface DownloadInfo {
    description: string; // the description of a file to be downloaded.
    downloadedBytes: number; // the real-time downloads size (in bytes).
    downloadId: number; // the ID of a file to be downloaded.
    failedReason: number; // a download failure cause, which can be any DownloadSession.ERROR_* constant.
    fileName: string; // the name of a file to be downloaded.
    filePath: string; // the URI of a stored file.
    pausedReason: number; // the reason why a session is paused, which can be any DownloadSession.PAUSED_* constant.
    status: number; // the download status code, which can be any DownloadSession.SESSION_* constant.
    targetURI: string; // the URI of files to be downloaded.
    downloadTitle: string; // the title of a file to be downloaded.
    downloadTotalBytes: number; // the total size of files to be downloaded (in bytes).
  }

  interface DownloadTask {
    /**
     * Called when the current download session is in process.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @param type progress Indicates the download task progress.
     * @param callback The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize he length of data expected to be downloaded, in bytes.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    on(type: 'progress', callback: (receivedSize: number, totalSize: number) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @param type progress Indicates the download task progress.
     * @param callback The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize he length of data expected to be downloaded, in bytes.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    off(type: 'progress', callback?: (receivedSize: number, totalSize: number) => void): void;

    /**
     * Called when the current download session complete、pause or remove.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param callback The callback function for the download complete、pause or remove change event.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    on(type: 'complete' | 'pause' | 'remove', callback: () => void): void;

    /**
     * Called when the current download session complete、pause or remove.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param callback The callback function for the download complete、pause or remove change event.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void;

    /**
     * Called when the current download session fails.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param type Indicates the download session type, fail: download task has failed.
     * @param callback The callback function for the download fail change event
     *        err The error code for download task.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    on(type: 'fail', callback: (err: number) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param type Indicates the download session type, fail: download task has failed.
     * @param callback Indicate the callback function to receive err.
     *        err The error code for download task.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    off(type: 'fail', callback?: (err: number) => void): void;

    /**
     * Deletes a download session and the downloaded files.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates asynchronous invoking Result.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes a download session and the downloaded files.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    remove(): Promise<boolean>;

    /**
     * Pause a download session.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates asynchronous invoking Result.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * Pause a download session.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    pause(): Promise<void>;

    /**
     * Resume a paused download session.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates asynchronous invoking Result.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    resume(callback: AsyncCallback<void>): void;

    /**
     * Resume a paused download session.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    resume(): Promise<void>;

    /**
     * Queries download information of a session, which is defined in DownloadSession.DownloadInfo.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicate the callback function to receive download info.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    query(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Queries download information of a session, which is defined in DownloadSession.DownloadInfo.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    query(): Promise<DownloadInfo>;

    /**
     * Queries the MIME type of the download file.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicate the callback function to receive download file MIME type.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    queryMimeType(callback: AsyncCallback<string>): void;

    /**
     * Queries the MIME type of the download file.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    queryMimeType(): Promise<string>;
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
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @param type progress Indicates the upload task progress.
     * @param callback The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    on(type: 'progress', callback: (uploadedSize: number, totalSize: number) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @param type progress Indicates the upload task progress.
     * @param callback The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    off(type: 'progress', callback?: (uploadedSize: number, totalSize: number) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param type headerReceive Indicates the upload task headed receive.
     * @param callback The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    on(type: 'headerReceive', callback: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @param type headerReceive Indicates the upload task headed receive.
     * @param callback The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    off(type: 'headerReceive', callback?: (header: object) => void): void;

    /**
     * Deletes a upload session.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates asynchronous invoking Result.
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes a upload session.
     *
     * @since 6
     * @devices phone, tablet, tv, wearable, car
     * @permission {@code ohos.permission.INTERNET}
     * @return -
     */
    remove(): Promise<boolean>;
  }
}

export default request;
