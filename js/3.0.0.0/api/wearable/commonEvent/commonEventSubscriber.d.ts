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
import { AsyncCallback } from './../basic';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';

/**
 * Provides callbacks that will be invoked when a subscriber receives a new common event.
 * @name CommonEventSubscriber
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @sysCap SystemCapability.Notification.CES
 */
export interface CommonEventSubscriber {
  /**
   * Obtains the result code of the current ordered common event.
   *
   * @param Callback used to return the result.
   * @return -
   */
  getCode(callback: AsyncCallback<number>): void;

  /**
   * Obtains the result code of the current ordered common event.
   *
   * @return Promise used to return the result.
   */
  getCode(): Promise<number>;

  /**
   * Sets the result code of the current ordered common event.
   *
   * @param Result code of the ordered common event.
   * @param Callback used to return the result.
   * @return -
   */
  setCode(code: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code of the current ordered common event.
   *
   * @param Result code of the ordered common event.
   * @return Promise used to return the result.
   */
  setCode(code: number): Promise<void>;

  /**
   * Obtains the result data of the current ordered common event.
   *
   * @param Callback used to return the result.
   * @return -
   */
  getData(callback: AsyncCallback<string>): void;

  /**
   * Obtains the result data of the current ordered common event.
   *
   * @return Obtains the result data of the current ordered common event.
   */
  getData(): Promise<string>;

  /**
   * Sets the result data of the current ordered common event.
   *
   * @param Result data of the ordered common event.
   * @param Callback used to return the result.
   * @return -
   */
  setData(data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result data of the current ordered common event.
   *
   * @param Result data of the ordered common event.
   * @return Promise used to return the result.
   */
  setData(data: string): Promise<void>;

  /**
   * Sets the result code and data of the current ordered common event.
   *
   * @param Result code of the ordered common event.
   * @param Result data of the ordered common event.
   * @param Callback used to return the result.
   * @return -
   */
  setCodeAndData(code: number, data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code and data of the current ordered common event.
   *
   * @param Result code of the ordered common event.
   * @param Result data of the ordered common event.
   * @return Promise used to return the result.
   */
  setCodeAndData(code: number, data: string): Promise<void>;

  /**
   * Checks whether the received common event is an ordered common event.
   *
   * @param Callback used to return the result.
   * @return -
   */
  isOrderedCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the received common event is an ordered common event.
   *
   * @return Promise used to return the result.
   */
  isOrderedCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the received common event is a sticky common event.
   *
   * @param Callback used to return the result.
   * @return -
   */
  isStickyCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the received common event is a sticky common event.
   *
   * @return Promise used to return the result.
   */
  isStickyCommonEvent(): Promise<boolean>;

  /**
   * Aborts the current ordered common event.
   *
   * @param Callback used to return the result.
   * @return -
   */
  abortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Aborts the current ordered common event.
   *
   * @return Promise used to return the result.
   */
  abortCommonEvent(): Promise<void>;

  /**
   * Clears the abort state of the current ordered common event.
   *
   * @param Callback used to return the result.
   * @return -
   */
  clearAbortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Clears the abort state of the current ordered common event.
   *
   * @return Promise used to return the result.
   */
  clearAbortCommonEvent(): Promise<void>;

  /**
   * Checks whether the current ordered common event has been aborted.
   *
   * @param Callback used to return the result.
   * @return -
   */
  getAbortCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current ordered common event has been aborted.
   *
   * @return Promise used to return the result.
   */
  getAbortCommonEvent(): Promise<boolean>;

  /**
   * Obtains the current CommonEventSubscribeInfo object.
   *
   * @param Callback used to return the result.
   * @return -
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void;

  /**
   * Obtains the current CommonEventSubscribeInfo object.
   *
   * @return Promise used to return the result.
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo>;
}
