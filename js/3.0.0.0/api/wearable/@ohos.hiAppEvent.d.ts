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

import { AsyncCallback } from './basic';

/**
 * Provides the event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @since 7
 * @sysCap N/A
 * @devices phone, tablet, tv, wearable, car
 * @import import hiAppEvent from '@ohos.hiAppEvent'
 * @permission N/A
 */
declare namespace hiAppEvent {
    /**
     * Enumerate application event types.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    enum EventType {
      /**
       * Fault event
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      FAULT = 1,

      /**
       * Statistic event
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      STATISTIC = 2,

      /**
       * Security event
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      SECURITY = 3,

      /**
       * User behavior event
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      BEHAVIOR = 4
    }

    /**
     * Preset event.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    namespace Event {
      /**
       * user login event.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      const USER_LOGIN: string;

      /**
       * user logout event.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      const USER_LOGOUT: string;

      /**
       * distributed service event.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      const DISTRIBUTED_SERVICE_START: string;
    }

    /**
     * Preset param.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    namespace Param {
      /**
       * user id.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      const USER_ID: string;

      /**
       * distributed service name.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      const DISTRIBUTED_SERVICE_NAME: string;

      /**
       * distributed service instance id.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      const DISTRIBUTED_SERVICE_INSTANCE_ID: string;
    }

    /**
     * write application event.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     * @static
     * @param {string} eventName application event name.
     * @param {EventType} eventType application event type.
     * @param {object} keyValues application event key-value pair params.
     * @param {AsyncCallback} [callback] callback function.
     * @return {void | Promise<void>} no callback return Promise otherwise return void.
     */
    function write(eventName: string, eventType: EventType, keyValues: object): Promise<void>;
    function write(eventName: string, eventType: EventType, keyValues: object, callback: AsyncCallback<void>): void;

    /**
     * application event logging configuration interface.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     * @static
     * @param {ConfigOption} config application logging configuration item object.
     * @return {boolean} configuration result.
     */
    function configure(config: ConfigOption): boolean;

    /**
     * Describe the options for the configuration.
     *
     * @since 7
     * @sysCap N/A
     * @devices phone, tablet, tv, wearable, car
     */
    interface ConfigOption {
      /**
       * configuration item: application event logging switch.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      disable?: boolean;

      /**
       * configuration item: event file directory storage quota size.
       *
       * @since 7
       * @sysCap N/A
       * @devices phone, tablet, tv, wearable, car
       */
      maxStorage?: string;
    }
}

export default hiAppEvent;