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

import {AsyncCallback, Callback} from "./basic";
import connection from "./@ohos.net.connection";

/**
 * Provides interfaces to discover DNS based services on a local network over Multicast DNS.
 *
 * @since 7
 * @sysCap SystemCapability.Communication.NetManager
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace mdns {
  type NetAddress = connection.NetAddress;

  function on(type: 'serviceAdd',
    callback: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;
  function off(type: 'serviceAdd',
    callback?: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;

  function on(type: 'serviceRemove',
    callback: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;
  function off(type: 'serviceRemove',
    callback?: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;

  function on(type: 'serviceStart',
    callback: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;
  function off(type: 'serviceStart',
    callback?: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;

  function on(type: 'serviceStop',
    callback: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;
  function off(type: 'serviceStop',
    callback?: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;

  function on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void;
  function off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void;

  function on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void;
  function off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void;

  function on(type: 'serviceResolve',
    callback: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;
  function off(type: 'serviceResolve',
    callback?: Callback<{serviceInfo: LocalServiceInfo, errorCode?: MDNS_ERR}>): void;

  function addLocalService(serviceInfo: LocalServiceInfo, callback: AsyncCallback<void>): void;
  function addLocalService(serviceInfo: LocalServiceInfo): Promise<void>;

  function removeLocalService(serviceInfo: LocalServiceInfo, callback: AsyncCallback<void>): void;
  function removeLocalService(serviceInfo: LocalServiceInfo): Promise<void>;

  function startSearchingMDNS(serviceType: string, callback: AsyncCallback<void>): void;
  function startSearchingMDNS(serviceType: string): Promise<void>;

  function stopSearchingMDNS(callback: AsyncCallback<void>): void;
  function stopSearchingMDNS(): Promise<void>;

  export interface LocalServiceInfo {
    serviceType: string;
    serviceName?: string;
    port?: number;
    host?: NetAddress;
  }

  export enum MDNS_ERR {
    /**
     * Indicates that the operation failed due to an internal error.
     */
    INTERNAL_ERROR = 0,

    /**
     * Indicates that the operation failed because it is already active.
     */
    ALREADY_ACTIVE = 1,

    /**
     * Indicates that the operation failed because the maximum outstanding
     * requests from the applications have reached.
     */
    MAX_LIMIT = 2
  }
}

export default mdns;