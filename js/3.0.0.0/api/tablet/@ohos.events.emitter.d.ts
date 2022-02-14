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
 * Provides methods for sending and processing in-process events.
 *
 * @since 7
 * @import import events_emitter from '@ohos.events.emitter';
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
declare namespace emitter {
  /**
   * Subscribes to a certain event in persistent manner and receives the event callback.
   *
   * @param event indicate event to subscribe to.
   * @param callback indicate callback used to receive the event.
   */
  function on(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * Subscribes to a certain event in one-shot manner and unsubscribes from it
   * after the event callback is received.
   *
   * @param event indicate event to subscribe to in one shot.
   * @param callback indicate callback used to receive the event.
   */
  function once(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * Unsubscribes from an event.
   *
   * @param eventId indicate ID of the event to unsubscribe from.
   */
  function off(eventId: number): void;

  /**
   * Emits an event to the event queue.
   *
   * @param event indicate event to emit.
   * @param data indicate data carried by the event.
   */
  function emit(event: InnerEvent, data?: EventData): void;

  /**
   * Describes data passed in the event.
   */
  export interface EventData {
    /**
     * Data carried by the event.
     */
    data?: {[key: string]: any};
  }

  /**
   * Describes an intra-process event.
   */
  export interface InnerEvent {
    /**
     * Event ID, which is used to identify an event.
     */
    eventId: number;

    /**
     * Emit priority of the event. The default priority is {@link EventPriority.LOW}.
     */
    priority?: EventPriority;
  }

  /**
   * Indicates the emit priority of the event.
   */
  export enum EventPriority {
    /**
     * Indicates that the event will be emitted immediately.
     */
    IMMEDIATE = 0,

    /**
     * Indicates that the event will be emitted before low-priority events.
     */
    HIGH,

    /**
     * Indicates that the event will be emitted before idle-priority events. By default, an event is in LOW priority.
     */
    LOW,

    /**
     * Indicates that the event will be emitted after all the other events.
     */
    IDLE,
  }
}

export default emitter;