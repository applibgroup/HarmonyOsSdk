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

import {AsyncCallback, ErrorCallback} from "./basic";

/**
 * Provides WebSocket APIs.
 *
 * @since 6
 * @sysCap SystemCapability.Communication.NetManager
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace webSocket {
  function createWebSocket(): WebSocket;

  export interface WebSocketRequestOptions {
    header?: Object;
  }

  export interface WebSocketCloseOptions {
    code?: number;
    reason?: string;
  }

  export interface WebSocket {
    connect(url: string, callback: AsyncCallback<boolean>): void;
    connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void;
    connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>;

    /**
     * Transmits data using the WebSocket connection. data can be a string.
     */
    send(data: string, callback: AsyncCallback<boolean>): void;
    send(data: string): Promise<boolean>;

    /**
     * Closes the WebSocket connection, optionally using code as the the WebSocket connection close code
     * and reason as the the WebSocket connection close reason.
     */
    close(callback: AsyncCallback<boolean>): void;
    close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void;
    close(options?: WebSocketCloseOptions): Promise<boolean>;

    on(type: 'open', callback: AsyncCallback<Object>): void;
    off(type: 'open', callback?: AsyncCallback<Object>): void;

    on(type: 'message', callback: AsyncCallback<string>): void;
    off(type: 'message', callback?: AsyncCallback<string>): void;

    on(type: 'close', callback: AsyncCallback<{ code: number, reason: string }>): void;
    off(type: 'close', callback?: AsyncCallback<{ code: number, reason: string }>): void;

    on(type: 'error', callback: ErrorCallback): void;
    off(type: 'error', callback?: ErrorCallback): void;
  }
}

export default webSocket;