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
 * @devices tv, phone, tablet, wearable
 */
export interface FetchResponse {
  /**
   * Server status code.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  code: number;

  /**
   * Data returned by the success function.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  data: string | object;

  /**
   * All headers in the response from the server.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  headers: Object;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface FetchOptions {
  /**
   * Resource URL.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  url: string;

  /**
   * Request parameter, which can be of the string type or a JSON object.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  data?: string | object;

  /**
   * Request header.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  header?: Object;

  /**
   * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE.
   * The default value is GET.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE";

  /**
   * The return type can be text, or JSON.
   * By default, the return type is determined based on Content-Type in the header returned by the server.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  responseType?: string;

  /**
   * Called when the network data is obtained successfully.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  success?: (data: FetchResponse) => void;

  /**
   * Called when the network data fails to be obtained.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export default class Fetch {
  /**
   * Obtains data through the network.
   * @param options Options.
   * @devices tv, phone, tablet, wearable
   */
  static fetch(options: FetchOptions): void;
}
