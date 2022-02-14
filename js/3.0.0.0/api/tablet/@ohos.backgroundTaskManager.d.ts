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

import { AsyncCallback, Callback } from './basic';

/**
 * Manages background tasks.
 *
 * <p>After an application runs in the background for a period of time, it will enter the suspended state and cannot
 * execute tasks. If the application needs to continue unfinished tasks in the background, it can send a request to
 * BackgroundTaskManager to delay transition to the suspended state. This class provides the methods to request
 * and cancel delayed transition to the suspended state and to query the remaining time before an application enters
 * the suspended state.
 *
 * @since 7
 * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
 * @devices phone, tv, wearable, tablet, car
 */
declare namespace backgroundTaskManager {

    /**
    * @since 7
    * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
    * @devices phone, tv, wearable, tablet, car
    */
    interface DelaySuspendInfo {
        /**
         * The unique identifier of the delay request.
         */
        requestId: number;
        /**
         * The actual delay duration (ms).
         */
        actualDelayTime: number;
    }

    /**
     * Cancels delayed transition to the suspended state.
     *
     * <p>If an application finishes a task before the delay duration times out, the application can request to
     * terminate the delayed transition to the suspended state.
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     */
     function cancelSuspendDelay(requestId: number): void;

    /**
     * Obtains the remaining time before an application enters the suspended state.
     *
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     * @param callback Indicates the callback for reporting the result.
     * @return remaining delay time
     */
     function getRemainingDelayTime(requestId: number, callback: AsyncCallback<number>): void;
     function getRemainingDelayTime(requestId: number): Promise<number>;

    /**
     * Requests delayed transition to the suspended state.
     *
     * <p>If an application needs to execute tasks in the background, it must send a request for delayed transition to
     * the suspended state and describe the reason. When the requested delay duration times out.
     *
     * @since 7
     * @sysCap SystemCapability.Ressched.BackgroundTaskMgr
     * @devices phone, tv, wearable, tablet, car
     * @param reason Indicates the reason for delayed transition to the suspended state. The parameter cannot be null.
     * @param callback The callback delay time expired.
     * @return Actual delay time
     */
    function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo;
}
export default backgroundTaskManager;