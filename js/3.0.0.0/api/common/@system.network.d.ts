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

export interface NetworkResponse {
  /**
   * Network type. The value can be 2G, 3G, 4G, WiFi, or none.
   * @since 3
   */
  type: string;

  /**
   * Whether the billing is based on the data volume.
   * @since 3
   */
  metered: boolean;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export interface GetNetworkTypeOptions {
  /**
   * Called when the network type is obtained.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  success?: (data: NetworkResponse) => void;

  /**
   * Called when the network type fails to be obtained.
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
export interface SubscribeNetworkOptions {
  /**
   * Called when the network connection state changes.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  success?: (data: NetworkResponse) => void;

  /**
   * Called when the listening fails.
   * @devices tv, phone, tablet, wearable
   * @since 3
   */
  fail?: (data: any, code: number) => void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
export default class Network {
  /**
   * Obtains the network type.
   * @devices tv, phone, tablet, wearable
   * @param options Options.
   */
  static getType(options?: GetNetworkTypeOptions): void;

  /**
   * Listens to the network connection state. If this method is called multiple times, the last call takes effect.
   * @param options Options.
   * @devices tv, phone, tablet, wearable
   */
  static subscribe(options?: SubscribeNetworkOptions): void;

  /**
   * Cancels listening to the network connection state.
   * @devices tv, phone, tablet, wearable
   */
  static unsubscribe(): void;
}
