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

import {Callback} from "./basic";
import radio from "./@ohos.telephony.radio";
import data from "./@ohos.telephony.data";
import call from "./@ohos.telephony.call";
import sim from "./@ohos.telephony.sim";

/**
 * Monitors telephony state updates of a device, including updates of the network state,
 * signal strength, call state, the data link connection state and others.
 *
 * @since 7
 * @sysCap SystemCapability.Telephony.Telephony
 * @devices phone, tablet, wearable
 */
declare namespace observer {
  type NetworkState = radio.NetworkState;
  type SignalInformation = radio.SignalInformation;
  type CellInformation = radio.CellInformation;
  type DataConnectState = data.DataConnectState;
  type RatType = radio.RadioTechnology;
  type DataFlowType = data.DataFlowType;
  type CallState = call.CallState;
  type CardType = sim.CardType;
  type SimState = sim.SimState;

  /**
   * Called when the network state corresponding to a monitored {@code slotId} updates.
   *
   * <p>Applications must have the {@code ohos.permission.GET_NETWORK_INFO} permission
   * to register this event.
   *
   * @param type networkStateChange
   * @param options including slotId Indicates the ID of the target card slot.
   *   The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param callback including an instance of the {@code NetworkState} class.
   * @permission ohos.permission.GET_NETWORK_INFO
   */
  function on(type: 'networkStateChange', callback: Callback<NetworkState>): void;
  function on(type: 'networkStateChange', options: { slotId: number }, callback: Callback<NetworkState>): void;

  function once(type: 'networkStateChange', callback: Callback<NetworkState>): void;
  function once(type: 'networkStateChange', options: { slotId: number }, callback: Callback<NetworkState>): void;

  function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void;

  /**
   * Called when the signal strength corresponding to a monitored {@code slotId} updates.
   *
   * @param type signalInfoChange
   * @param options including slotId Indicates the ID of the target card slot.
   *   The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param callback including an array of instances of the classes derived from {@link SignalInformation}.
   */
  function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void;
  function on(type: 'signalInfoChange', options: { slotId: number },
    callback: Callback<Array<SignalInformation>>): void;

  function once(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void;
  function once(type: 'signalInfoChange', options: { slotId: number },
    callback: Callback<Array<SignalInformation>>): void;

  function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void;

  function once(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void;
  function once(type: 'cellInfoChange', options: { slotId: number },
    callback: Callback<Array<CellInformation>>): void;

  function off(type: 'cellInfoChange', callback?: Callback<Array<CellInformation>>): void;

  /**
   * Called when the cellular data link connection state updates.
   *
   * @param type cellularDataConnectionStateChange
   * @param options including slotId Indicates the ID of the target card slot.
   *   The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param callback including state Indicates the cellular data link connection state,
   *   and networkType Indicates the radio access technology for cellular data services.
   */
  function on(type: 'cellularDataConnectionStateChange',
    callback: Callback<{ state: DataConnectState, network: RatType }>): void;
  function on(type: 'cellularDataConnectionStateChange', options: { slotId: number },
    callback: Callback<{ state: DataConnectState, network: RatType }>): void;

  function once(type: 'cellularDataConnectionStateChange',
    callback: Callback<{ state: DataConnectState, network: RatType }>): void;
  function once(type: 'cellularDataConnectionStateChange', options: { slotId: number },
    callback: Callback<{ state: DataConnectState, network: RatType }>): void;

  function off(type: 'cellularDataConnectionStateChange',
    callback?: Callback<{ state: DataConnectState, network: RatType }>): void;

  /**
   * Called when the uplink and downlink data flow state of cellular data services updates.
   *
   * @param type cellularDataFlowChange
   * @param options including slotId Indicates the ID of the target card slot.
   *   The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param callback including the cellular data flow state.
   */
  function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void;
  function on(type: 'cellularDataFlowChange', options: { slotId: number },
    callback: Callback<DataFlowType>): void;

  function once(type: 'cellularDataFlowChange', options: { slotId: number },
    callback: Callback<DataFlowType>): void;
  function once(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void;

  function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void;

  /**
   * Receives a call state change. This callback is invoked when the call state of a specified card updates
   * and the observer is added to monitor the updates.
   *
   * @param type callStateChange
   * @param options including slotId Indicates the ID of the target card slot.
   *   The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param callback including state Indicates the call state, and number Indicates the called number.
   *   The value of number is an empty string if the application does not have
   *     the {@code ohos.permission#READ_CALL_LOG READ_CALL_LOG} permission.
   */
  function on(type: 'callStateChange', callback: Callback<{ state: CallState, number: string }>): void;
  function on(type: 'callStateChange', options: { slotId: number },
    callback: Callback<{ state: CallState, number: string }>): void;

  function once(type: 'callStateChange', callback: Callback<{ state: CallState, number: string }>): void;
  function once(type: 'callStateChange', options: { slotId: number },
    callback: Callback<{ state: CallState, number: string }>): void;

  function off(type: 'callStateChange', callback?: Callback<{ state: CallState, number: string }>): void;

  /**
   * If type is ’cfuIndicatorChange‘, Receives a CFU setting update. This callback is invoked when the CFU setting
   * of a specified card updates and the observer is added to monitor the updates.
   *
   * If type is ‘voiceMailMsgIndicatorChange’, Receives a voice mailbox state change. This callback is invoked when
   * the voice mailbox state of a specified card updates and the observer is added to monitor the updates.
   *
   * <p>Applications must have the {@code ohos.permission.GET_TELEPHONY_STATE} permission
   * to register these events.
   *
   * @param type cfuIndicatorChange or voiceMailMsgIndicatorChange
   * @param options including slotId Indicates the ID of the target card slot.
   *   The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param callback If type is ’cfuIndicatorChange‘, specifies whether the CFU function is enabled.
   *   If type is ‘voiceMailMsgIndicatorChange, specifies whether a voice mailbox message exists.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   */
  function on(type: 'cfuIndicatorChange' | 'voiceMailMsgIndicatorChange',
    callback: Callback<boolean>): void;
  function on(type: 'cfuIndicatorChange' | 'voiceMailMsgIndicatorChange', options: { slotId: number },
    callback: Callback<boolean>): void;

  function once(type: 'cfuIndicatorChange' | 'voiceMailMsgIndicatorChange',
    callback: Callback<boolean>): void;
  function once(type: 'cfuIndicatorChange' | 'voiceMailMsgIndicatorChange', options: { slotId: number },
    callback: Callback<boolean>): void;

  function off(type: 'cfuIndicatorChange' | 'voiceMailMsgIndicatorChange', callback?: Callback<boolean>): void;

  function on(type: 'simStateChange', callback: Callback<SimStateData>): void;
  function on(type: 'simStateChange', options: { slotId: number }, callback: Callback<SimStateData>): void;

  function once(type: 'simStateChange', options: { slotId: number }, callback: Callback<SimStateData>): void;
  function once(type: 'simStateChange', callback: Callback<SimStateData>): void;

  function off(type: 'simStateChange', callback?: Callback<SimStateData>): void;

  export interface SimStateData {
    type: CardType,
    state: SimState
  }
}

export default observer;