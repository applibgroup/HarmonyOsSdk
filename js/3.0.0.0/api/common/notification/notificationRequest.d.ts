/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import notification from '../@ohos.notification';
import image from '../@ohos.multimedia.image';
import { WantAgent } from '../@ohos.wantAgent';
import { NotificationContent } from './notificationContent';
import { NotificationActionButton } from './notificationActionButton';

/**
 * Defines a NotificationRequest instance.
 *
 * @name NotificationRequest
 * @since 7
 * @sysCap SystemCapability.Notification.ANS
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface NotificationRequest {
  /**
   * Notification content.
   */
  content: NotificationContent;

  /**
   * Notification ID.
   */
  id?: number;

  /**
   * Notification slot type.
   */
  slotType?: notification.SlotType;

  /**
   * Whether the notification is an ongoing notification.
   */
  isOngoing?: boolean;

  /**
   * Whether the notification can be removed.
   */
  isUnremovable?: boolean;

  /**
   * Time when the notification is sent.
   */
  deliveryTime?: number;

  /**
   * Whether the notification is automatically cleared.
   */
  tapDismissed?: boolean;

  /**
   * Time when the notification is automatically cleared.
   */
  autoDeletedTime?: number;

  /**
   * WantAgent instance to which the notification will be redirected after being clicked.
   */
  wantAgent?: WantAgent;

  /**
   * Extended parameter.
   */
  extraInfo?: {[key: string]: any};

  /**
   * Background color of the notification.
   */
  color?: number;

  /**
   * Whether the notification background color can be enabled.
   */
  colorEnabled?: boolean;

  /**
   * Whether the notification triggers an alert only once.
   */
  isAlertOnce?: boolean;

  /**
   * Whether to display the stopwatch.
   */
  isStopwatch?: boolean;

  /**
   * Whether to display the countdown time.
   */
  isCountDown?: boolean;

  /**
   * Whether the notification is displayed as a floating icon.
   */
  isFloatingIcon?: boolean;

  /**
   * Notification label.
   */
  label?: string;

  /**
   * Notification badge type.
   */
  badgeIconStyle?: number;

  /**
   * Whether to display the time when the notification is delivered.
   */
  showDeliveryTime?: boolean;

  /**
   * Buttons in the notification. Up to two buttons are allowed.
   */
  actionButtons?: Array<NotificationActionButton>;

  /**
   * Small notification icon.
   */
  smallIcon?: image.PixelMap;

  /**
   * Large notification icon.
   */
  largeIcon?: image.PixelMap;

  /**
   * Read-only name of the package for which a notification is created.
   */
  readonly creatorBundleName?: string;

  /**
   * Read-only UID of the notification creator.
   */
  readonly creatorUid?: number;

  /**
   * Read-only PID of the notification creator.
   */
  readonly creatorPid?: number;

  /**
   * Obtains the unique hash code of a notification in the current application.
   */
  readonly hashCode?: string;
}
