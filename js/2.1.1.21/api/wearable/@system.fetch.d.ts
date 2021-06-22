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

export interface FetchResponse {
  /**
   * Server status code.
   */
  code: number;

  /**
   * Data returned by the success function.
   */
  data: string | object;

  /**
   * All headers in the response from the server.
   */
  headers: Object;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class Fetch {
  /**
   * Obtains data through the network.
   * @param options
   */
  static fetch(options: {
    /**
     * Resource URL.
     */
    url: string;

    /**
     * Request parameter, which can be of the string type or a JSON object.
     */
    data?: string | object;

    /**
     * Request header.
     */
    header?: Object;

    /**
     * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.
     */
    method?: string;

    /**
     * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.
     */
    responseType?: string;

    /**
     * Called when the network data is obtained successfully.
     */
    success?: (data: FetchResponse) => void;

    /**
     * Called when the network data fails to be obtained.
     */
    fail?: (data: any, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;
}
