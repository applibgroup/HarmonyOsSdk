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
import {ResultSet} from './data/rdb/rdbResultSet';

/**
 * Provides methods related to call management.
 *
 * @since 7
 * @sysCap SystemCapability.Telephony.DCall
 * @devices phone, tablet, wearable, car
 */
declare namespace call {
  /**
   * Makes a call.
   *
   * <p>Applications must have the {@code ohos.permission.PLACE_CALL} permission to call this method.
   *
   * @param phoneNumber Indicates the called number.
   * @param options Indicates additional information carried in the call.
   * @param callback Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @permission ohos.permission.PLACE_CALL
   * @since 6
   */
  function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void;
  function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void;
  function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>;

  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param phoneNumber Indicates the called number.
   * @sysCap SystemCapability.SysAppComponents.CONTACT
   * @devices phone, tablet
   */
  function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void;
  function makeCall(phoneNumber: string): Promise<void>;

  /**
   * Checks whether a call is ongoing.
   *
   * @param callback Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE}
   * state; returns {@code false} otherwise.
   */
  function hasCall(callback: AsyncCallback<boolean>): void;
  function hasCall(): Promise<boolean>;

  /**
   * Obtains the call state.
   *
   * <p>If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.
   * If at least one call is in the active, hold, or dialing state, the system returns
   * {@code CallState#CALL_STATE_OFFHOOK}.
   * In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.
   *
   * @param callback Returns the call state.
   */
  function getCallState(callback: AsyncCallback<CallState>): void;
  function getCallState(): Promise<CallState>;

  /**
   * Switches the call screen to the foreground.
   *
   * <p>The system performs the switching only if there is an ongoing call.
   *
   * @param showDialpad Indicates whether the dialer is displayed on the call screen.
   */
  function displayCallScreen(showDialpad: boolean, callback: AsyncCallback<void>): void;
  function displayCallScreen(showDialpad: boolean): Promise<void>;

  /**
   * Checks whether a device supports voice calls.
   *
   * <p>The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia
   * subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching
   * (even if the device supports OTT calls), {@code false} is returned.
   *
   * @param callback Returns {@code true} if the device supports voice calls; returns {@code false} otherwise.
   */
  function hasVoiceCapability(): boolean;

  /**
   * Checks whether video calling is enabled on this device.
   *
   * @param callback Returns {@code true} if video calling is enabled; returns {@code false} otherwise.
   */
  function isVideoCallingEnabled(callback: AsyncCallback<boolean>): void;
  function isVideoCallingEnabled(): Promise<boolean>;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param phoneNumber Indicates the phone number to check.
   * @param callback Returns {@code true} if the phone number is on the emergency number list;
   * returns {@code false} otherwise.
   */
  function isEmergencyPhoneNumber(phoneNumber: string, callback: AsyncCallback<boolean>): void;
  function isEmergencyPhoneNumber(phoneNumber: string, options: EmergencyNumberOptions, callback: AsyncCallback<boolean>): void;
  function isEmergencyPhoneNumber(phoneNumber: string, options?: EmergencyNumberOptions): Promise<boolean>;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param phoneNumber Indicates the phone number to format.
   * @param callback Returns the phone number after being formatted; returns an empty string
   * if the input phone number is invalid.
   */
  function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void;
  function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void;
  function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>;

  /**
   * Formats a phone number into an E.164 representation.
   *
   * @param phoneNumber Indicates the phone number to format.
   * @param countryCode Indicates a two-digit country code defined in ISO 3166-1.
   * @param callback Returns an E.164 number; returns an empty string if the input phone number is invalid.
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void;
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>;

  /**
   * Obtains the ISO country code of a phone number from the database.
   *
   * @param phoneNumber Indicates the phone number to query.
   * @param callback Returns the ISO country code obtained from the database.
   */
  function getCountryCodeFromDbNumber(phoneNumber: string, callback: AsyncCallback<string>): void;
  function getCountryCodeFromDbNumber(phoneNumber: string): Promise<string>;

  /**
   * Obtains the prefix length of a specified phone number.
   *
   * @param phoneNumber Indicates the specified phone number.
   * @param callback Returns the prefix length.
   */
  function getIntlPrefixAndCountryCodeLen(phoneNumber: string, callback: AsyncCallback<number>): void;
  function getIntlPrefixAndCountryCodeLen(phoneNumber: string): Promise<number>;

  export enum CallState {
    /**
     * Indicates an invalid state, which is used when the call state fails to be obtained.
     */
    CALL_STATE_UNKNOWN = -1,

    /**
     * Indicates that there is no ongoing call.
     */
    CALL_STATE_IDLE = 0,

    /**
     * Indicates that an incoming call is ringing or waiting.
     */
    CALL_STATE_RINGING = 1,

    /**
     * Indicates that a least one call is in the dialing, active, or hold state, and there is no new incoming call
     * ringing or waiting.
     */
    CALL_STATE_OFFHOOK = 2
  }

  export interface DialOptions {
    /**
     * boolean means whether the call to be made is a video call. The value {@code false} indicates a voice call.
     */
    extras?: boolean;
  }

  export interface EmergencyNumberOptions {
    slotId?: number;
  }

  export interface NumberFormatOptions {
    countryCode?: string;
  }

  export interface NumberCompareOptions {
    numA: string;
    netISOA: string;
    numB: string;
    netISOB: string;
  }
}

export default call;
