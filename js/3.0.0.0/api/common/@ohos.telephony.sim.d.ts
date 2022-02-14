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

import {AsyncCallback} from "./basic";

/**
 * Provides applications with APIs for obtaining SIM card status, card file information, and card specifications.
 * SIM cards include SIM, USIM, and CSIM cards.
 *
 * @since 7
 * @sysCap SystemCapability.Telephony.Telephony
 * @devices phone, tablet, wearable
 */
declare namespace sim {
  /**
   * Checks whether the SIM card in a specified slot is activated.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param callback Returns {@code true} if the SIM card is activated; returns {@code false} otherwise.
   */
  function isSimActive(slotId: number, callback: AsyncCallback<boolean>): void;
  function isSimActive(slotId: number): Promise<boolean>;

  /**
   * Obtains the default card slot for the voice service.
   *
   * @param callback Returns {@code 0} if card 1 is used as the default card slot for the voice service;
   * returns {@code 1} if card 2 is used as the default card slot for the voice service;
   * returns {@code -1} if no card is available for the voice service.
   */
  function getDefaultVoiceSlotId(callback: AsyncCallback<number>): void;
  function getDefaultVoiceSlotId(): Promise<number>;

  /**
   * Checks whether your application (the caller) has been granted the operator permissions.
   *
   * @param slotId Indicates the ID of the SIM card slot.
   * @param callback Returns {@code true} if your application has been granted the operator permissions;
   * returns {@code false} otherwise.
   */
  function hasOperatorPrivileges(slotId: number, callback: AsyncCallback<boolean>): void;
  function hasOperatorPrivileges(slotId: number): Promise<boolean>;

  /**
   * Obtains the ISO country code of the SIM card in a specified slot.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns the country code defined in ISO 3166-2; returns an empty string if no SIM card is inserted.
   */
  function getISOCountryCodeForSim(slotId: number, callback: AsyncCallback<string>): void;
  function getISOCountryCodeForSim(slotId: number): Promise<string>;

  /**
   * Obtains the home PLMN number of the SIM card in a specified slot.
   *
   * <p>The value is recorded in the SIM card and is irrelevant to the network
   * with which the SIM card is currently registered.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns the PLMN number; returns an empty string if no SIM card is inserted.
   */
  function getSimOperatorNumeric(slotId: number, callback: AsyncCallback<string>): void;
  function getSimOperatorNumeric(slotId: number): Promise<string>;

  /**
   * Obtains the service provider name (SPN) of the SIM card in a specified slot.
   *
   * <p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network
   * with which the SIM card is currently registered.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns the SPN; returns an empty string if no SIM card is inserted or
   * no EFSPN file in the SIM card.
   */
  function getSimSpn(slotId: number, callback: AsyncCallback<string>): void;
  function getSimSpn(slotId: number): Promise<string>;

  /**
   * Obtains the state of the SIM card in a specified slot.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param callback Returns one of the following SIM card states:
   * <ul>
   * <li>{@code SimState#SIM_STATE_UNKNOWN}
   * <li>{@code SimState#SIM_STATE_NOT_PRESENT}
   * <li>{@code SimState#SIM_STATE_LOCKED}
   * <li>{@code SimState#SIM_STATE_NOT_READY}
   * <li>{@code SimState#SIM_STATE_READY}
   * <li>{@code SimState#SIM_STATE_LOADED}
   * </ul>
   */
  function getSimState(slotId: number, callback: AsyncCallback<SimState>): void;
  function getSimState(slotId: number): Promise<SimState>;

  /**
   * Obtains the type of the SIM card installed in a specified slot.
   *
   * @param slotId Indicates the ID of the specified slot.
   * @param callback Returns the SIM card type.
   */
  function getCardType(slotId: number, callback: AsyncCallback<CardType>): void;
  function getCardType(slotId: number): Promise<CardType>;

  /**
   * Obtains the ICCID of the SIM card in a specified slot.
   *
   * <p>The ICCID is a unique identifier of a SIM card. It consists of 20 digits
   * and is recorded in the EFICCID file of the SIM card.
   *
   * <p>Requires Permission: {@code ohos.permission.GET_TELEPHONY_STATE}.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns the ICCID; returns an empty string if no SIM card is inserted.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getSimIccId(slotId: number, callback: AsyncCallback<string>): void;
  function getSimIccId(slotId: number): Promise<string>;

  /**
   * Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot.
   *
   * <p>Only applications with the {@code ohos.permission.GET_TELEPHONY_STATE} permission can call this method.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param callback Returns the voice mailbox alpha identifier;
   * returns an empty string if no voice mailbox alpha identifier is written into the SIM card.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getVoiceMailIdentifier(slotId: number, callback: AsyncCallback<string>): void;
  function getVoiceMailIdentifier(slotId: number): Promise<string>;

  /**
   * Obtains the voice mailbox number of the SIM card in a specified slot.
   *
   * <p>Only applications with the {@code ohos.permission.GET_TELEPHONY_STATE} permission can call this method.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param callback Returns the voice mailbox number;
   * returns an empty string if no voice mailbox number is written into the SIM card.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getVoiceMailNumber(slotId: number, callback: AsyncCallback<string>): void;
  function getVoiceMailNumber(slotId: number): Promise<string>;

  /**
   * Obtains the number of messages in the voice mailbox of the SIM card in the specified slot.
   *
   * <p>Only applications with the {@code ohos.permission.GET_TELEPHONY_STATE} permission can call this method.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param callback Returns the number of messages in the voice mailbox.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getVoiceMailCount(slotId: number, callback: AsyncCallback<number>): void;
  function getVoiceMailCount(slotId: number): Promise<number>;

  /**
   * Obtains the MSISDN of the SIM card in a specified slot.
   * The MSISDN is recorded in the EFMSISDN file of the SIM card.
   *
   * <p>Requires Permission: {@code ohos.permission.GET_TELEPHONY_STATE}.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns the MSISDN; returns an empty string if no SIM card is inserted or
   * no MSISDN is recorded in the EFMSISDN file.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getSimTelephoneNumber(slotId: number, callback: AsyncCallback<string>): void;
  function getSimTelephoneNumber(slotId: number): Promise<string>;

  /**
   * Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot.
   * The GID1 is recorded in the EFGID1 file of the SIM card.
   *
   * <p>Requires Permission: {@code ohos.permission.GET_TELEPHONY_STATE}.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns the GID1; returns an empty string if no SIM card is inserted or
   * no GID1 in the SIM card.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getSimGid1(slotId: number, callback: AsyncCallback<string>): void;
  function getSimGid1(slotId: number): Promise<string>;

  /**
   * Obtains the alpha identifier of the phone number of the SIM card in a specified slot.
   *
   * <p>Only applications with the {@code ohos.permission.GET_TELEPHONY_STATE} permission can call this method.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param callback Returns the alpha identifier of the phone number;
   * returns an empty string if no phone number alpha identifier is written into the SIM card.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getSimTeleNumberIdentifier(slotId: number, callback: AsyncCallback<string>): void;
  function getSimTeleNumberIdentifier(slotId: number): Promise<string>;

  /**
   * Obtains the Line 1 phone number from the registered IP multimedia subsystem (IMS) based on a specified slot ID.
   *
   * <p><b>Permissions: </b>{@link ohos.security.SystemPermission#GET_TELEPHONY_STATE}
   *
   * @param slotId Indicates the ID of the specified slot.
   * @param callback Returns a string representation of the Line 1 phone number.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getLine1NumberFromImpu(slotId: number, callback: AsyncCallback<string>): void;
  function getLine1NumberFromImpu(slotId: number): Promise<string>;

  /**
   * Obtains the maximum number of SIM cards that can be used simultaneously on the device,
   * that is, the maximum number of SIM card slots.
   *
   * @return Returns the maximum number of SIM card slots.
   */
  function getMaxSimCount(): number;

  /**
   * Checks whether a SIM card is inserted in a specified slot.
   *
   * @param slotId Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param callback Returns true if a SIM card is inserted; return false otherwise.
   */
  function hasSimCard(slotId: number, callback: AsyncCallback<boolean>): void;
  function hasSimCard(slotId: number): Promise<boolean>;

  export enum CardType {
    /** Icc card type: Unknow type Card. */
    UNKNOWN_CARD = -1,

    /** Icc card type: Single sim card type. */
    SINGLE_MODE_SIM_CARD = 10,

    /** Icc card type: Single usim card type. */
    SINGLE_MODE_USIM_CARD = 20,

    /** Icc card type: Single ruim card type. */
    SINGLE_MODE_RUIM_CARD = 30,

    /** Icc card type: Double card C+G. */
    DUAL_MODE_CG_CARD = 40,

    /** Icc card type: China Telecom Internal Roaming Card (Dual Mode). */
    CT_NATIONAL_ROAMING_CARD = 41,

    /** Icc card type: China Unicom Dual Mode Card. */
    CU_DUAL_MODE_CARD = 42,

    /** Icc card type: China Telecom LTE Card (Dual Mode). */
    DUAL_MODE_TELECOM_LTE_CARD = 43,

    /** Icc card type: Double card U+G. */
    DUAL_MODE_UG_CARD = 50
  }

  export enum SimState {
    /**
     * Indicates unknown SIM card state, that is, the accurate status cannot be obtained.
     */
    SIM_STATE_UNKNOWN,

    /**
     * Indicates that the SIM card is in the <b>not present</b> state, that is, no SIM card is inserted
     * into the card slot.
     */
    SIM_STATE_NOT_PRESENT,

    /**
     * Indicates that the SIM card is in the <b>locked</b> state, that is, the SIM card is locked by the
     * personal identification number (PIN)/PIN unblocking key (PUK) or network.
     */
    SIM_STATE_LOCKED,

    /**
     * Indicates that the SIM card is in the <b>not ready</b> state, that is, the SIM card is in position
     * but cannot work properly.
     */
    SIM_STATE_NOT_READY,

    /**
     * Indicates that the SIM card is in the <b>ready</b> state, that is, the SIM card is in position and
     * is working properly.
     */
    SIM_STATE_READY,

    /**
     * Indicates that the SIM card is in the <b>loaded</b> state, that is, the SIM card is in position and
     * is working properly.
     */
    SIM_STATE_LOADED
  }
}

export default sim;