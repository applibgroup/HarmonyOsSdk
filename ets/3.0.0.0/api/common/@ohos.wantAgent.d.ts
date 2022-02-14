/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback , Callback} from './basic';
import { Want } from './ability/want';
import { WantAgentInfo } from './wantAgent/wantAgentInfo';
import { TriggerInfo } from './wantAgent/triggerInfo';

/**
 * Provide the method obtain trigger, cancel, and compare and to obtain
 * the bundle name, UID of an {@link WantAgent} object.
 *
 * @name wantAgent
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 * @import import wantAgent from '@ohos.wantAgent';
 * @permission N/A
 */
declare namespace wantAgent {
  /**
   * Obtains the bundle name of a WantAgent.
   *
   * @param WantAgent whose bundle name to obtain.
   * @return Returns the bundle name of the {@link WantAgent} if any.
   */
  function getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void;
  function getBundleName(agent: WantAgent): Promise<string>;

  /**
   * Obtains the UID of a WantAgent.
   *
   * @param WantAgent whose UID to obtain.
   * @return Returns the UID of the {@link WantAgent} if any; returns {@code -1} otherwise.
   */
  function getUid(agent: WantAgent, callback: AsyncCallback<number>): void;
  function getUid(agent: WantAgent): Promise<number>;

  /**
   * Cancels a WantAgent. Only the application that creates the WantAgent can cancel it.
   *
   * @param WantAgent to cancel.
   */
  function cancel(agent: WantAgent, callback: AsyncCallback<void>): void;
  function cancel(agent: WantAgent): Promise<void>;

  /**
   * Triggers a WantAgent.
   *
   * @param WantAgent to trigger.
   * @param Trigger parameters.
   * @param callback Indicates the callback method to be called after the {@link WantAgent} is triggered.
   */
  function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: Callback<CompleteData>): void;

  /**
   * Checks whether two WantAgent objects are equal.
   *
   * @param WantAgent to compare.
   * @param WantAgent to compare.
   * @return Returns {@code true} If the two objects are the same; returns {@code false} otherwise.
   */
  function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void;
  function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>;

  /**
   * Obtains a WantAgent object.
   *
   * @param Information about the WantAgent object to obtain.
   * @return Returns the created {@link WantAgent} object.
   */
  function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void;
  function getWantAgent(info: WantAgentInfo): Promise<WantAgent>;

  /**
   * Enumerates flags for using a WantAgent.
   */
  export enum WantAgentFlags {
    /**
     * Indicates that the WantAgent can be used only once.
     * This flag is valid only when OperationType is set to START_ABILITY, START_SERVICE, or SEND_COMMON_EVENT.
     */
    ONE_TIME_FLAG = 0,

    /**
     * Indicates that null is returned if the WantAgent does not exist.
     * This flag is valid only when OperationType is set to START_ABILITY, START_SERVICE, or SEND_COMMON_EVENT.
     */
    NO_BUILD_FLAG,

    /**
     * Indicates that the existing WantAgent should be canceled before a new object is generated.
     * This flag is valid only when OperationType is set to START_ABILITY, START_SERVICE, or SEND_COMMON_EVENT.
     */
    CANCEL_PRESENT_FLAG,

    /**
     * Indicates that the system only replaces the extra data of the existing WantAgent with that of the new object.
     * This flag is valid only when OperationType is set to START_ABILITY, START_SERVICE, or SEND_COMMON_EVENT.
     */
    UPDATE_PRESENT_FLAG,

    /**
     * Indicates that the created WantAgent should be immutable.
     */
    CONSTANT_FLAG,

    /**
     * Indicates that the current value of element can be replaced when the WantAgent is triggered.
     */
    REPLACE_ELEMENT,

    /**
     * Indicates that the current value of action can be replaced when the WantAgent is triggered.
     */
    REPLACE_ACTION,

    /**
     * Indicates that the current value of uri can be replaced when the WantAgent is triggered.
     */
    REPLACE_URI,

    /**
     * Indicates that the current value of entities can be replaced when the WantAgent is triggered.
     */
    REPLACE_ENTITIES,

    /**
     * Indicates that the current value of packageName can be replaced when the WantAgent is triggered.
     */
    REPLACE_BUNDLE
  }

  /**
   * Identifies the operation for using a WantAgent, such as starting an ability or sending a common event.
   */
  export enum OperationType {
    /**
     * Unknown operation.
     */
    UNKNOWN_TYPE = 0,

    /**
     * Starts an ability with a UI.
     */
    START_ABILITY,

    /**
     * Starts multiple abilities with a UI.
     */
    START_ABILITIES,

    /**
     * Starts an ability without a UI.
     */
    START_SERVICE,

    /**
     * Sends a common event.
     */
    SEND_COMMON_EVENT
  }

  /**
   * Describes the data returned by after wantAgent.trigger is called.
   */
  export interface CompleteData {
    /**
     * Triggered WantAgent.
     */
    info: WantAgent;

    /**
     * Existing Want that is triggered.
     */
    want: Want;

    /**
     * Request code used to trigger the WantAgent.
     */
    finalCode: number;

    /**
     * Final data collected by the common event.
     */
    finalData: string;

    /**
     * Extra data collected by the common event.
     */
    extraInfo?: {[key: string]: any};
  }
}

/**
 * WantAgent object.
 */
export type WantAgent = object;

export default wantAgent;