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

export interface StartBLEScanOptions {
  interval: number;

  success: () => void;

  fail: (data: string, code: number) => void;

  complete: () => void;
}

export interface StopBLEScanOptions {
  success: () => void;

  fail: (data: string, code: number) => void;

  complete: () => void;
}

export interface BluetoothDevice {
  addrType: "public" | "random";

  addr: string;

  rssi: number;

  txpower: string;

  data: string;
}

export interface BLEFoundResponse {
  devices: Array<BluetoothDevice>;
}

export interface SubscribeBLEFoundOptions{
    success: (data: BLEFoundResponse) => void;

    fail: (data: string, code: number) => void;
}

/**
 * @devices phone, tv, wearable
 */
export default class Bluetooth {
  /**
   * Start BLE scan
   * @devices phone, tablet, tv, wearable
   * @param options Options
   */
  static startBLEScan(options: StartBLEScanOptions): void;

  /**
   * Stop BLE scan
   * @devices phone, tablet, tv, wearable
   * @param options Options
   */
  static stopBLEScan(options: StopBLEScanOptions): void;

  /**
   * Subscribe BLE found
   * @devices phone, tablet, tv, wearable
   * @param options Options
   */
  static subscribeBLEFound(options: SubscribeBLEFoundOptions): void;

  /**
   * Stop the subscription of BLE found
   * @devices phone, tablet, tv, wearable
   */
  static unsubscribeBLEFound(): void;
}