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

/**
 * Provides interfaces to track a task for performance measure, the logs can be capture by the
 * bytrace cmdline available on the device.
 *
 * <p>This interfaces can track the start, end, and value changes of key processes that last for at least 3 ms.
 *
 * <p>Example:
 * To track a task verification that is expected to complete within 5 ms:
 * <pre>{@code
 * bytrace.startTrace("checkName", 111, 5);
 * //your process
 * bytrace.finishTrace("checkName", 111);
 * }</pre>
 * To track the value of layers, which is from 3 to 5:
 * <pre>{@code
 * bytrace.traceByValue("layers", 3);
 * //your process
 * bytrace.traceByValue("layers", 5);
 * }</pre>
 *
 * <p>Each {@code startTrace} matches one {@code finishTrace}, and they must have the same name
 * and taskId.
 *
 * @since 7
 * @sysCap SystemCapability.Developtools.Bytrace
 * @devices phone, tablet, tv, car, wearable
 * @import import bytrace from '@ohos.bytrace';
 * @permission N/A
 */
declare namespace bytrace {
  /**
   * Records a trace marking it as the start of a task, can with the expected completion time between
   * startTrace and finishTrace.
   *
   * This method is invoked at the start of a transaction to indicate that a task has started, whose name
   * is specified by {@code name}, and the {@code taskId} is used to distinguish the concurrent tasks. The
   * {@code taskId} must be different if has multiple concurrent tasks with the same name, otherwise
   * the {@code taskId} can be the same. It must be followed by {@link #finishTrace}, its name and taskId
   * need to be the same as startTrace.
   *
   * @param name Indicates the task name.
   * @param taskId The unique id used to distinguish the concurrent tasks with the same name and it matchs
   * with the id in following finishTrace.
   * @param expectedTime Indicates the expected time required for completing the task, in milliseconds.
   * @since 7
   * @sysCap SystemCapability.Developtools.Bytrace
   */
  function startTrace(name: string, taskId: number, expectedTime?: number): void;

  /**
   * Records a trace and marks it as the end of a task.
   *
   * This method is invoked at the end of a transaction to indicate that a task has ended, whose name
   * is specified by {@code name}. This method must be invoked after the the startTrace.
   *
   * @param name Indicates the task name. It must be the same whith the {@code name} of startTrace.
   * @param taskId The unique id used to distinguish the concurrent tasks and must be the same whith the
   * {@code taskId} of startTrace.
   * @since 7
   * @sysCap SystemCapability.Developtools.Bytrace
   */
  function finishTrace(name: string, taskId: number): void;

  /**
   * Records for changing in numerical events, such as clock pulse and the number of layers.
   *
   * @param name Indicates the name used to identify the numerical event.
   * @param value Indicates the value of the numerical event.
   * @since 7
   * @sysCap SystemCapability.Developtools.Bytrace
   */
  function traceByValue(name: string, value: number): void;
}
export default bytrace;
