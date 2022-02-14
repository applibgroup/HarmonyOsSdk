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

import { Callback } from './basic';

/**
 * Provides methods to operate or manage NFC.
 *
 * @import import controller from '@ohos.nfc.controller';
 * @since 7
 * @sysCap SystemCapability.Communication.NFC
 * @devices phone, tablet, wearable, car
 */
declare namespace nfcController {
  enum NfcState {
    /** Indicates that NFC is disabled. */
    STATE_OFF = 1,

    /** Indicates that NFC is being enabled. */
    STATE_TURNING_ON = 2,

    /** Indicates that NFC is enabled. */
    STATE_ON = 3,

    /** Indicates that NFC is being disabled. */
    STATE_TURNING_OFF = 4,
  }

  /**
   * Checks whether a device supports NFC.
   *
   * @return Returns {@code true} if the device supports NFC; returns {@code false} otherwise.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   */
  function isNfcAvailable(): boolean

  /**
   * register nfc state changed event.
   *
   * @param type the type to register.
   * @param state the state received.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   */
  function on(type: "nfcStateChange", callback: Callback<NfcState>): void

  /**
   * unregister nfc state changed event.
   *
   * @param type the type to unregister.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   */
  function off(type: "nfcStateChange", callback?: Callback<NfcState>): void

  /**
   * Enables NFC.
   *
   * @return Returns {@code true} if NFC is enabled or has been enabled; returns {@code false} otherwise.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@code ohos.permission.MANAGE_SECURE_SETTINGS}
   */
  function openNfc(): boolean

  /**
   * Disables NFC.
   *
   * @return Returns {@code true} if NFC is disabled or has been disabled; returns {@code false} otherwise.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@code ohos.permission.MANAGE_SECURE_SETTINGS}
   */
  function closeNfc(): boolean

  /**
   * Checks whether NFC is enabled.
   *
   * @return Returns {@code true} if NFC is enabled; returns {@code false} otherwise.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   */
  function isNfcOpen(): boolean

  /**
   * Obtains the NFC status.
   *
   * <p>The NFC status can be any of the following: <ul><li>{@link #STATE_OFF}: Indicates that NFC
   * is disabled. <li>{@link #STATE_TURNING_ON}: Indicates that NFC is being enabled.
   * <li>{@link #STATE_ON}: Indicates that NFC is enabled. <li>{@link #STATE_TURNING_OFF}: Indicates
   * that NFC is being disabled.</ul>
   *
   * @return Returns the NFC status.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   */
  function getNfcState(): NfcState
}

export default nfcController;