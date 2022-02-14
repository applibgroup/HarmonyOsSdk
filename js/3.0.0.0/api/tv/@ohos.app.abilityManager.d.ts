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
 * This module provides the capability to manage abilities and obtaining system task information.
 *
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import abilityManager from '@ohos.app.abilityManager'
 */
declare namespace abilityManager {

    enum ProcessErrCode {
        NO_ERROR = 0,
        CRASHED,
        NO_RESPONSE,
    }

    /**
     * Is it a ram-constrained device
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable, car
     * @return whether a ram-constrained device
     */
    function isRamConstrainedDevice(): Promise<boolean>;
    function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

    /**
     * Get the memory size of the application
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable, car
     * @return  application memory size
     */
    function getAppMemorySize(): Promise<number>;
    function getAppMemorySize(callback: AsyncCallback<number>): void;
}

export default abilityManager;
