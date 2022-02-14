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
 * Global Input Event Listener
 * System API, available only to system processes
 * @since 7
 * @sysCap System Capabilities
 * @devices phone, tablet, tv, wearable, car
 * @import import inputMonitor from '@ohos.multimodalInput.inputMonitor';
 * @permission ohos.permission.INPUT_MONITORING
 * @systemApi
 */
declare namespace inputMonitor {
    /**
     * Callback function of the touch input event. If true is returned, the touch input is consumed by the monitor (the system performs the closing action).
     * @since 7
     * @sysCap System Capabilities
     * @systemapi
     */
    interface TouchEventReceiver {
        (touchEvent:TouchEvent): Boolean;
    }

     /**
     * Listening for touch input events
     * @since 7
     * @sysCap System Capabilities
     * @systemapi
     */
    function on(type:"touch", receiver:TouchEventReceiver):void;

    /**
     * Cancels listening for touch input events
     * @since 7
     * @sysCap System Capabilities
     * @systemapi
     */
    function off(type:"touch", receiver:TouchEventReceiver):void;
}

export default inputMonitor;
