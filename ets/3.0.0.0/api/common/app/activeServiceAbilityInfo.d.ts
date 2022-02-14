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

import { ElementName } from '../bundle/elementName';

/**
 * @name information corresponding to active service ability
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import import AbilityMissionInfo from 'app/activeServiceAbilityInfo'
 * @permission N/A
 * @devices phone, tablet, tv, wearable, car
 */
export interface ActiveServiceAbilityInfo {
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
     * @default The element name of the service ability
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    serviceAbility: ElementName;
}

