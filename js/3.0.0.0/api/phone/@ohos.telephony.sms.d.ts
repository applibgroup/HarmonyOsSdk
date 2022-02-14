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
 * Provides the capabilities and methods for obtaining Short Message Service (SMS) management objects.
 *
 * @since 7
 * @sysCap SystemCapability.Telephony.Telephony
 * @devices phone, tablet, wearable
 */
declare namespace sms {
  /**
   * Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.
   *
   * <p>After receiving the original PDU data, the system creates an SMS message instance according to the specified
   * SMS protocol.
   *
   * @param pdu Indicates the original data, which is obtained from the received SMS.
   * @param specification Indicates the SMS protocol type. The value {@code 3gpp} indicates GSM/UMTS/LTE SMS,
   *     and the value {@code 3gpp2} indicates CDMA/LTE SMS.
   * @param callback Returns an SMS message instance; returns {@code null} if {@code pdu} is empty or
   *     {@code specification} is not supported.
   */
  function createMessage(pdu: Array<number>, specification: string, callback: AsyncCallback<ShortMessage>): void;
  function createMessage(pdu: Array<number>, specification: string): Promise<ShortMessage>;

  /**
   * Sends a text or data SMS message.
   *
   * <p>This method checks whether the length of an SMS message exceeds the maximum length. If the
   * maximum length is exceeded, the SMS message is split into multiple parts and sent separately.
   * <p>You need to obtain the following permission before calling this method:
   * {@code ohos.permission.SEND_MESSAGES}
   *
   * @param options Indicates the parameters and callback for sending the SMS message.
   * @permission ohos.permission.SEND_MESSAGES
   */
  function sendMessage(options: SendMessageOptions): void;

  /**
   * Obtains the default SIM card for sending SMS messages.
   *
   * @param callback Returns {@code 0} if the default SIM card for sending SMS messages is in card slot 1;
   *     returns {@code 1} if the default SIM card for sending SMS messages is in card slot 2.
   */
  function getDefaultSmsSlotId(callback: AsyncCallback<number>): void;
  function getDefaultSmsSlotId(): Promise<number>;

  /**
   * Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID.
   *
   * <p><b>Permissions: </b>{@link ohos.security.SystemPermission#SET_TELEPHONY_STATE}
   *
   * @param slotId Indicates the ID of the slot holding the SIM card for sending SMS messages.
   * @param smscAddr Indicates the SMSC address.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   */
  function setSmscAddr(slotId: number, smscAddr: string, callback: AsyncCallback<void>): void;
  function setSmscAddr(slotId: number, smscAddr: string): Promise<void>;

  /**
   * Obtains the SMSC address based on a specified slot ID.
   *
   * <p><b>Permissions: </b>{@link ohos.security.SystemPermission#GET_TELEPHONY_STATE}
   *
   * @param slotId Indicates the ID of the slot holding the SIM card for sending SMS messages.
   * @param callback Returns the SMSC address.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function getSmscAddr(slotId: number, callback: AsyncCallback<string>): void;
  function getSmscAddr(slotId: number): Promise<string>;

  /**
   * Returns whether a device is capable of sending and receiving SMS messages.
   *
   * @return Returns {@code true} if the device is capable of sending and receiving SMS messages;
   *     returns {@code false} otherwise.
   */
  function hasSmsCapability(): boolean;

  export interface ShortMessage {
    /** Indicates the SMS message body. */
    visibleMessageBody: string;
    /** Indicates the address of the sender, which is to be displayed on the UI. */
    visibleRawAddress: string;
    /** Indicates the SMS type. */
    messageClass: ShortMessageClass;
    /** Indicates the protocol identifier. */
    protocolId: number;
    /** Indicates the short message service center (SMSC) address. */
    scAddress: string;
    /** Indicates the SMSC timestamp. */
    scTimestamp: number;
    /** Indicates whether the received SMS is a "replace short message". */
    isReplaceMessage: boolean;
    /** Indicates whether the received SMS contains "TP-Reply-Path". */
    hasReplyPath: boolean;
    /** Indicates Protocol Data Units (PDUs) from an SMS message. */
    pdu: Array<number>;
    /**
     * Indicates the SMS message status from the SMS-STATUS-REPORT message sent by the
     * Short Message Service Center (SMSC).
     */
    status: number;
    /** Indicates whether the current message is SMS-STATUS-REPORT. */
    isSmsStatusReportMessage: boolean;
    /** Indicates the email message address. */
    emailAddress: string;
    /** Indicates the email message body. */
    emailMessageBody: string;
    /** Indicates the user data excluding the data header. */
    userRawData: Array<number>;
    /** Indicates whether the received SMS is an email message. */
    isEmailMessage: boolean;
  }

  export enum ShortMessageClass {
    /** Indicates an unknown type. */
    UNKNOWN,
    /** Indicates an instant message, which is displayed immediately after being received. */
    INSTANT_MESSAGE,
    /** Indicates an SMS message that can be stored on the device or SIM card based on the storage status. */
    OPTIONAL_MESSAGE,
    /** Indicates an SMS message containing SIM card information, which is to be stored in a SIM card. */
    SIM_MESSAGE,
    /** Indicates an SMS message to be forwarded to another device. */
    FORWARD_MESSAGE
  }

  export interface SendMessageOptions {
    /** Indicates the ID of the SIM card slot used for sending the SMS message. */
    slotId: number;
    /** Indicates the address to which the SMS message is sent. */
    destinationHost: string;
    /** Indicates the SMSC address. If the value is {@code null}, the default SMSC address of the SIM card*/
    serviceCenter?: string;
    /** If the content is a string, this is a short message. If the content is a byte array, this is a data message. */
    content: string | Array<number>;
    /** If send data message, destinationPort is mandatory. Otherwise is optional. */
    destinationPort?: number;
    /** Indicates the callback invoked after the SMS message is sent. */
    sendCallback?: AsyncCallback<ISendShortMessageCallback>;
    /** Indicates the callback invoked after the SMS message is delivered. */
    deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>;
  }

  export interface ISendShortMessageCallback {
    /** Indicates the SMS message sending result. */
    result: SendSmsResult;
    /** Indicates the URI to store the sent SMS message. */
    url: string;
    /** Specifies whether this is the last part of a multi-part SMS message. */
    isLastPart: boolean;
  }

  export interface IDeliveryShortMessageCallback {
    /** Indicates the SMS delivery report. */
    pdu: Array<number>;
  }

  export enum SendSmsResult {
    /**
     * Indicates that the SMS message is successfully sent.
     */
    SEND_SMS_SUCCESS = 0,

    /**
     * Indicates that sending the SMS message fails due to an unknown reason.
     */
    SEND_SMS_FAILURE_UNKNOWN = 1,

    /**
     * Indicates that sending the SMS fails because the modem is powered off.
     */
    SEND_SMS_FAILURE_RADIO_OFF = 2,

    /**
     * Indicates that sending the SMS message fails because the network is unavailable
     * or does not support sending or reception of SMS messages.
     */
    SEND_SMS_FAILURE_SERVICE_UNAVAILABLE = 3
  }
}

export default sms;
