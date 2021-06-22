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

export interface UploadResponse {
  /**
   * Status code returned by the server.
   */
  code: number;

  /**
   * Content returned by the server. The value type is determined by the returned content.
   */
  data: string;

  /**
   * Headers returned by the server.
   */
  headers: Object;
}

export interface DownloadResponse {
  /**
   * Download token, which is used to obtain the download status.
   */
  token: string;
}

export interface OnDownloadCompleteResponse {
  /**
   * URI of the download file.
   */
  uri: string;
}

export interface RequestFile {
  /**
   * File name in the header when multipart is used.
   */
  filename?: string;

  /**
   * Name of a form item when multipart is used. The default value is file.
   */
  name?: string;

  /**
   * Local storage directory of a file.
   */
  uri: string;

  /**
   * Type of the file content. By default, the type is obtained based on the suffix of the filename or URI.
   */
  type?: string;
}

export interface RequestData {
  /**
   * Name of the form element.
   */
  name: string;

  /**
   * Value of the form element.
   */
  value: string;
}

export interface UploadRequestOptions {
  /**
   * Resource URL.
   */
  url: string;

  /**
   * Form data in the request body.
   */
  data?: Array<RequestData>;

  /**
   * List of files to upload, which is submitted through multipart/form-data.
   */
  files: Array<RequestFile>;

  /**
   * Request header.
   */
  header?: Object;

  /**
   * Request methods available: POST and PUT. The default value is POST.
   */
  method?: string;

  /**
   * Called when the files are uploaded successfully.
   */
  success?: (data: UploadResponse) => void;

  /**
   * Called when uploading fails.
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

export interface DownloadRequestOptions {
  /**
   * Resource URL.
   */
  url: string;

  /**
   * Name of the file to downloaded.
   * The value is obtained from the current request or resource URL by default.
   */
  filename?: string;

  /**
   * Request header.
   */
  header?: string;

  /**
   * Download description.
   * The default value is the file name.
   */
  description?: string;

  /**
   * Called when the files are successfully downloaded.
   */
  success?: (data: DownloadResponse) => void;

  /**
   * Called when downloading fails.
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

export interface OnDownloadCompleteOptions {
  /**
   * Token of the result returned by the download function.
   */
  token: string;

  /**
   * Called when the downloads are successfully obtained
   */
  success?: (data: OnDownloadCompleteResponse) => void;

  /**
   * Called when the downloads fail to be obtained.
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class Request {
  /**
   * Upload files.
   * @param options Options.
   */
  static upload(options: UploadRequestOptions): void;

  /**
   * This API is used to download files.
   * @param options Options.
   */
  static download(options: DownloadRequestOptions): void;

  /**
   * Listens to download task status.
   * @param options Options.
   */
  static onDownloadComplete(options: OnDownloadCompleteOptions): void;
}

