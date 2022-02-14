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

/**
 * Provides options that can be set for the worker to create.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
export interface WorkerOptions {
  /**
   * Mode in which the worker executes the script.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  type?: "classic" | "module";

  /**
   * Name of the worker.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  name?: string;

  /**
   * Whether the worker is shared.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  shared?: boolean;
}

/**
 * Defines the event.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
export interface Event {
  /**
   * Type of the event.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly type: string;

  /**
   * Timestamp (accurate to millisecond) when the event is created.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly timeStamp: number;
}

/**
 * Provides detailed information about the exception occurred during worker execution.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
interface ErrorEvent extends Event {
  /**
   * Information about the exception.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly message: string;

  /**
   * File where the exception is located.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly filename: string;

  /**
   * Number of the line where the exception is located.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly lineno: number;

  /**
   * Number of the column where the exception is located.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly colno: number;

  /**
   * Type of the exception.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly error: Object;
}

/**
 * Holds the data transferred between worker threads.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
declare interface MessageEvent<T = Object> extends Event {
  /**
   * Data transferred when an exception occurs.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly data: T;
}

/**
 * Specifies the object whose ownership needs to be transferred during data transfer.
 * The object must be ArrayBuffer.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
export interface PostMessageOptions {
  /**
   * ArrayBuffer array used to transfer the ownership.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  transfer?: Object[];
}

/**
 * Implements event listening.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
export interface EventListener {
  /**
   * Specifies the callback to invoke.
   * @param evt Event class for the callback to invoke.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  (evt: Event): void | Promise<void>;
}

/**
 * type of message, only "message" and "messageerror".
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
type MessageType = "message" | "messageerror";

/**
 * specific event features.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
declare interface EventTarget {
  /**
   * Adds an event listener to the worker.
   * @param type Type of the event to listen for.
   * @param listener Callback to invoke when an event of the specified type occurs.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  addEventListener(
    type: string,
    listener: EventListener
  ): void;

  /**
   * Dispatches the event defined for the worker.
   * @param event Event to dispatch.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  dispatchEvent(event: Event): boolean;

  /**
   * Removes an event listener for the worker.
   * @param type Type of the event for which the event listener is removed.
   * @param callback Callback of the event listener to remove.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  removeEventListener(
    type: string,
    callback?: EventListener
  ): void;

  /**
   * Removes all event listeners for the worker.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  removeAllListener(): void;
}

/**
 * Specifies the worker thread running environment, which is isolated from the host thread environment.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
declare interface WorkerGlobalScope extends EventTarget {
  /**
   * Worker name specified when there is a new worker.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  readonly name: string;

  /**
   * The onerror attribute of parentPort specifies
   * the event handler to be called when an exception occurs during worker execution.
   * The event handler is executed in the worker thread.
   * @param ev Error data.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  onerror?: (ev: ErrorEvent) => void;

  readonly self: WorkerGlobalScope & typeof globalThis;
}

/**
 * Specifies the worker thread running environment, which is isolated from the host thread environment.
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
declare interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
  /**
   * The onmessage attribute of parentPort specifies the event handler
   * to be called when the worker thread receives a message sent by
   * the host thread through worker.postMessage.
   * The event handler is executed in the worker thread.
   * @param ev Message received.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  /**
   * The onmessageerror attribute of parentPort specifies the event handler
   * to be called when the worker receives a message that cannot be deserialized.
   * The event handler is executed in the worker thread.
   * @param ev Error data.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  /**
   * Closes the worker thread to stop the worker from receiving messages.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  close(): void;

  /**
   * Sends a message to the host thread from the worker.
   * @param messageObject Data to be sent to the worker.
   * @param transfer ArrayBuffer instances that can be transferred.
   * The transferList array cannot contain null.
   * @devices phone, tablet, wearable, tv, car
   * @since 7
   */
  postMessage(messageObject: Object, transfer: Transferable[]): void;
  postMessage(messageObject: Object, options?: PostMessageOptions): void;
}

/**
 * JS cross-thread communication tool
 * @devices phone, tablet, wearable, tv, car
 * @since 7
 */
declare namespace worker {
  class Worker extends EventTarget {
      /**
       * Creates a worker instance.
       * @param scriptURL URL of the script to be executed by the worker.
       * @param options Options that can be set for the worker.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      constructor(scriptURL: string, options?: WorkerOptions);

      /**
       * The onexit attribute of the worker specifies the event handler to be called
       * when the worker exits. The handler is executed in the host thread.
       * @param code Code indicating the worker exit state.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      onexit?: (code: number) => void;

      /**
       * The onerror attribute of the worker specifies the event handler to be called
       * when an exception occurs during worker execution.
       * The event handler is executed in the host thread.
       * @param err Error data.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      onerror?: (err: ErrorEvent) => void;

      /**
       * The onmessage attribute of the worker specifies the event handler to be called
       * when the host thread receives a message created by itself
       * and sent by the worker through the parentPort.postMessage.
       * The event handler is executed in the host thread.
       * @param event Message received.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      onmessage?: (event: MessageEvent) => void;

      /**
       * The onmessageerror attribute of the worker specifies the event handler to be called
       * when the worker receives a message that cannot be serialized.
       * The event handler is executed in the host thread.
       * @param event Error data.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      onmessageerror?: (event: MessageEvent) => void;

      /**
       * Sends a message to the worker thread.
       * The data is transferred using the structured clone algorithm.
       * @param message Data to be sent to the worker.
       * @param transfer  ArrayBuffer instances that can be transferred.
       * The transferList array cannot contain null.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      postMessage(message: Object, transfer: ArrayBuffer[]): void;
      postMessage(message: Object, options?: PostMessageOptions): void;

      /**
       * Adds an event listener to the worker.
       * @param type Adds an event listener to the worker.
       * @param listener Callback to invoke when an event of the specified type occurs.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      on(type: string, listener: EventListener): void;

      /**
       * Adds an event listener to the worker
       * and removes the event listener automatically after it is invoked once.
       * @param type Type of the event to listen for.
       * @param listener Callback to invoke when an event of the specified type occurs.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      once(type: string, listener: EventListener): void;

      /**
       * Removes an event listener for the worker.
       * @param type Type of the event for which the event listener is removed.
       * @param listener Callback of the event listener to remove.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      off(type: string, listener?: EventListener): void;

      /**
       * Terminates the worker thread to stop the worker from receiving messages.
       * @devices phone, tablet, wearable, tv, car
       * @since 7
       */
      terminate(): void;
  }
  const parentPort: DedicatedWorkerGlobalScope;
}

export default worker;
