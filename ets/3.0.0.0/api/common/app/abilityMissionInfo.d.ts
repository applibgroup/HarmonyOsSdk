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
 * @name Mission information corresponding to ability
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import import AbilityMissionInfo from 'app/abilityMissionInfo'
 * @permission N/A
 * @devices phone, tablet, tv, wearable, car
 */
export interface AbilityMissionInfo {
    /**
     * @default Unique identification of task stack information corresponding to ability
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    missionId: number;

    /**
     * @default The component launched as the first ability in the task stack
     * This can be considered the "application" of this task stack
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    bottomAbility: ElementName;

    /**
     * @default The ability component at the top of the history stack of the task
     * This is what the user is currently doing
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
    topAbility: ElementName;

    /**
     * @default The corresponding ability description information in the task stack
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     */
     windowMode: number;
}

