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

export declare class console {
  static debug(message: string, ...arguments: any[]): void;
  static log(message: string, ...arguments: any[]): void;
  static info(message: string, ...arguments: any[]): void;
  static warn(message: string, ...arguments: any[]): void;
  static error(message: string, ...arguments: any[]): void;
}
export interface Result {
  code: number;
  data: object;
}
export interface SubscribeMessageResponse {
  deviceId: string;
  bundleName: string;
  abilityName: string;
  message: string;
}
export interface CallAbilityParam {
  bundleName: string;
  abilityName: string;
  messageCode: number;
  abilityType: number;
  data?: object;
  syncOption?: number;
}
export interface SubscribeAbilityEventParam {
  bundleName: string;
  abilityName: string;
  messageCode: number;
  abilityType: number;
  syncOption?: number;
}
export interface SendMessageOptions {
  deviceId: string;
  bundleName: string;
  abilityName: string;
  message?: string;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface SubscribeMessageOptions {
  success?: (data: SubscribeMessageResponse) => void;
  fail?: (data: string, code: number) => void;
}
export declare class FeatureAbility {
  static callAbility(param: CallAbilityParam): Promise<string>;
  static subscribeAbilityEvent(
    param: SubscribeAbilityEventParam,
    func: Function
  ): Promise<string>;
  static unsubscribeAbilityEvent(
    param: SubscribeAbilityEventParam
  ): Promise<string>;
  static sendMsg(options: SendMessageOptions): void;
  static subscribeMsg(options: SubscribeMessageOptions): void;
  static unsubscribeMsg(): void;
}
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;
export declare function clearInterval(intervalID?: number): void;
export declare function clearTimeout(timeoutID?: number): void;
export declare function createLocalParticleAbility(timeoutID?: number): any;
