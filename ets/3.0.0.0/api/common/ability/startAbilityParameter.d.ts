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
import { Want } from './want';
import { TaskSyncAnimationOptions } from './taskSyncAnimator'

/**
 * Indicates the required parameters to start Ability.
 *
 * @name StartAbilityParameter
 * @devices phone, tablet, tv, wearable, car
 * @sysCap AAFwk
 * @since 6
 */
export interface StartAbilityParameter {
  /**
   * Indicates the Want containing information about the target ability to start.
   *
   * @default -
   * @devices phone, tablet, tv, wearable, car
   * @since 6
   * @sysCap AAfwk
   */
  want: Want;

  /**
   * Indicates the special start setting used in starting ability.
   *
   * @default -
   * @devices phone, tablet, tv, wearable, car
   * @since 6
   * @sysCap AAfwk
   */
  abilityStartSetting?: {[key: string]: any};

  /**
   * Indicates the special start setting used in starting ability with TaskSyncAnimation.
   * <p>Requires Permission: {@code ohos.permission.CONTROL_TASK_SYNC_ANIMATOR}
   *
   * @default -
   * @devices phone, tablet, tv, wearable, car
   * @permission ohos.permission.CONTROL_TASK_SYNC_ANIMATOR
   * @since 7
   * @sysCap AAfwk
   */
  taskSyncAnimationOptions?: TaskSyncAnimationOptions;
}
