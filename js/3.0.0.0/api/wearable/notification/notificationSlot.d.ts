/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import notification from '../@ohos.notification';

/**
 * Describes a NotificationSlot instance.
 *
 * @name NotificationSlot
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @sysCap SystemCapability.Notification.ANS
 */
export interface NotificationSlot {
  /**
   * Obtains the type of a notification slot.
   */
  type: notification.SlotType;

  /**
   * Obtains the level of a notification slot
   */
  level?: notification.SlotLevel;

  /**
   * Obtains the description of a notification slot.
   */
  desc?: string;

  /**
   * Obtains the application icon badge status of a notification slot.
   */
  badgeFlag?: boolean;

  /**
   * Obtains whether DND mode is bypassed for a notification slot.
   */
  bypassDnd?: boolean;

  /**
   * Whether and how to display notifications on the lock screen.
   */
  lockscreenVisibility?: number;

  /**
   * Obtains the vibration status of the notification slot.
   */
  vibrationEnabled?: boolean;

  /**
   * Obtains the prompt tone of the notification slot.
   */
  sound?: string;

  /**
   * Obtains whether the notification light is enabled in a notification slot.
   */
  lightEnabled?: boolean;

  /**
   * Obtains the color of the notification light in a notification slot.
   */
  lightColor?: number;

  /**
   * Obtains the vibration style of notifications in this notification slot.
   */
  vibrationValues?: Array<number>;
}
