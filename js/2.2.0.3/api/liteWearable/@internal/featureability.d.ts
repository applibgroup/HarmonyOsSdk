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

export interface IResponse {
  /**
   * Peer device ID.
   */
  deviceId: string;

  /**
   * Name of the bundle where the peer ability locates. The name is case sensitive.
   */
  bundleName: string;

  /**
   * Peer ability name, which is case sensitive.
   */
  abilityName: string;

  /**
   * Messages received from the device.
   */
  message: string;
}

export declare class FeatureAbility {
  /**
   * Sends messages to the destination device.
   * @param options Options.
   */
  static sendMsg(options: {
    /**
     * Destination device ID.
     */
    deviceId: string;

    /**
     * Name of the destination bundle where the ability locates. The name is case sensitive.
     */
    bundleName: string;

    /**
     * Destination ability name, which is case sensitive.
     */
    abilityName: string;

    /**
     * Messages sent to the destination device.
     * A maximum of 1 KB of data can be transmitted at a time.
     * If more than 1 KB of data needs to be transmitted, split the messages into multiple parts to transmit.
     */
    message?: string;

    /**
     * Called when the messages are sent successfully.
     */
    success?: () => void;

    /**
     * Called when the messages fail to be sent.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Listens for messages sent from other devices.
   * @param options
   */
  static subscribeMsg(options: {
    /**
     * Called when the messages are sent successfully.
     */
    success?: (data: IResponse) => void;

    /**
     * Called when the messages fail to be sent.
     */
    fail?: (data: string, code: number) => void;
  }): void;

  /**
   * Cancels the listening for messages sent from other devices.
   */
  static unsubscribeMsg(): void;
}
