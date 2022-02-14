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
 * @name This class saves process information about an application
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import import app from 'app/activeProcessInfo'
 * @permission N/A
 * @devices phone, tablet, tv, wearable, car
 */
export interface ActiveProcessInfo {
    /**
     * @default process id
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    pid: number;

    /**
     * @default user id
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    uid: number;

    /**
     * @default the name of the process
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    processName: string;

    /**
     * @default an array of the bundleNames running in the process
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    bundleNames: Array<string>;
}
