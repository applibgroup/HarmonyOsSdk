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

import {AsyncCallback, Callback, ErrorCallback} from "./basic";
import connection from "./@ohos.net.connection";

/**
 * Provides TCP and UDP Socket APIs.
 *
 * @since 7
 * @sysCap SystemCapability.Communication.NetManager
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace socket {
  export import NetAddress = connection.NetAddress;

  function constructUDPSocketInstance(): UDPSocket;
  function constructTCPSocketInstance(): TCPSocket;

  export interface UDPSendOptions {
    data: string | ArrayBuffer;
    address: NetAddress;
  }

  export interface ExtraOptionsBase {
    receiveBufferSize?: number;
    sendBufferSize?: number;
    reuseAddress?: boolean;
    socketTimeout?: number;
  }

  export interface UDPExtraOptions extends ExtraOptionsBase {
    broadcast?: boolean;
  }

  export interface SocketStateBase {
    isBound: boolean;
    isClose: boolean;
    isConnected: boolean;
  }

  export interface SocketRemoteInfo {
    address: string;
    family: 'IPv4' | 'IPv6';
    port: number;
    size: number;
  }

  export interface UDPSocket {
    bind(address: NetAddress, callback: AsyncCallback<void>): void;
    bind(address: NetAddress): Promise<void>;

    send(options: UDPSendOptions, callback: AsyncCallback<void>): void;
    send(options: UDPSendOptions): Promise<void>;

    close(callback: AsyncCallback<void>): void;
    close(): Promise<void>;

    getState(callback: AsyncCallback<SocketStateBase>): void;
    getState(): Promise<SocketStateBase>;

    setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void;
    setExtraOptions(options: UDPExtraOptions): Promise<void>;

    on(type: 'message', callback: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;
    off(type: 'message', callback?: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    on(type: 'listening' | 'close', callback: Callback<void>): void;
    off(type: 'listening' | 'close', callback?: Callback<void>): void;

    on(type: 'error', callback: ErrorCallback): void;
    off(type: 'error', callback?: ErrorCallback): void;
  }

  export interface TCPConnectOptions {
    address: NetAddress;
    timeout?: number;
  }

  export interface TCPSendOptions {
    data: string | ArrayBuffer;
    encoding?: string;
  }

  export interface TCPExtraOptions extends ExtraOptionsBase {
    keepAlive?: boolean;
    OOBInline?: boolean;
    TCPNoDelay?: boolean;
    socketLinger: {on: boolean, linger: number};
  }

  export interface TCPSocket {
    bind(address: NetAddress, callback: AsyncCallback<void>): void;
    bind(address: NetAddress): Promise<void>;

    connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void;
    connect(options: TCPConnectOptions): Promise<void>;

    send(options: TCPSendOptions, callback: AsyncCallback<void>): void;
    send(options: TCPSendOptions): Promise<void>;

    close(callback: AsyncCallback<void>): void;
    close(): Promise<void>;

    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
    getRemoteAddress(): Promise<NetAddress>;

    getState(callback: AsyncCallback<SocketStateBase>): void;
    getState(): Promise<SocketStateBase>;

    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    on(type: 'message', callback: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;
    off(type: 'message', callback?: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    on(type: 'connect' | 'close', callback: Callback<void>): void;
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    on(type: 'error', callback: ErrorCallback): void;
    off(type: 'error', callback?: ErrorCallback): void;
  }
}

export default socket;