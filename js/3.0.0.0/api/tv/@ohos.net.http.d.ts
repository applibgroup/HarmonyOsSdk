/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import {AsyncCallback} from "./basic";

/**
 * Provides http related APIs.
 *
 * @since 6
 * @sysCap SystemCapability.Communication.NetManager
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace http {
  function createHttp(): HttpRequest;

  export interface HttpRequestOptions {
    method?: RequestMethod; // default is GET
    extraData?: string | Object;
    header?: Object; // default is 'content-type': 'application/json'
    readTimeout?: number; // default is 60s
    connectTimeout?: number; // default is 60s
  }

  export interface HttpRequest {
    request(url: string, callback: AsyncCallback<HttpResponse>): void;
    request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>): void;
    request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;

    destroy(): void;
    on(type: "headerReceive", callback: AsyncCallback<Object>): void;
    off(type: "headerReceive", callback?: AsyncCallback<Object>): void;
  }

  export enum RequestMethod {
    OPTIONS = "OPTIONS",
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    TRACE = "TRACE",
    CONNECT = "CONNECT"
  }

  export enum ResponseCode {
    OK = 200,
    CREATED,
    ACCEPTED,
    NOT_AUTHORITATIVE,
    NO_CONTENT,
    RESET,
    PARTIAL,
    MULT_CHOICE = 300,
    MOVED_PERM,
    MOVED_TEMP,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    BAD_REQUEST = 400,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    BAD_METHOD,
    NOT_ACCEPTABLE,
    PROXY_AUTH,
    CLIENT_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECON_FAILED,
    ENTITY_TOO_LARGE,
    REQ_TOO_LONG,
    UNSUPPORTED_TYPE,
    INTERNAL_ERROR = 500,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    UNAVAILABLE,
    GATEWAY_TIMEOUT,
    VERSION
  }

  export interface HttpResponse {
    result: string | Object;
    responseCode: ResponseCode | number;
    header: Object;
  }
}

export default http;