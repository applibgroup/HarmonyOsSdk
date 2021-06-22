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

export default class Featch {
  /**
   * Obtains data through the network.
   * @param options Options.
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
     * Request header, which accommodates all attributes of the request.
     */
    header?: object;

    /**
     * Certificate path.
     */
    credentials?: string;

    /**
     * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.
     */
    method?: "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE";

    /**
     * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.
     */
    responseType?: "text" | "json";

    /**
     * Callback function that is successfully invoked.
     */
    success?: (code: number, data: string | object, header: object) => void;

    /**
     * Callback function that fails to be invoked.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;
}
