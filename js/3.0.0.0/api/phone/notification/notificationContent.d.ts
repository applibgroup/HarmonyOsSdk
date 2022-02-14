/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
import image from './@ohos.multimedia.image';
/**
 * Describes a normal text notification.
 *
 * @name NotificationBasicContent
 * @since 7
 * @sysCap SystemCapability.Notification.ANS
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface NotificationBasicContent {
  /**
   * Title of the normal text notification.
   */
  title: string;

  /**
   * Content of the normal text notification.
   */
  text: string;

  /**
   * Additional information of the normal text notification.
   */
  additionalText?: string;
}

/**
 * Describes a long text notification.
 *
 * @name NotificationLongTextContent
 * @since 7
 * @sysCap SystemCapability.Notification.ANS
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
  /**
   * Long text content of the notification.
   */
  longText: string;

  /**
   * Brief text of the long text notification.
   */
  briefText: string;

  /**
   * Title that will be displayed for the long text notification when it is expanded.
   */
  expandedTitle: string;
}

/**
 * Describes a multi-line text notification.
 *
 * @name NotificationMultiLineContent
 * @since 7
 * @sysCap SystemCapability.Notification.ANS
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
  /**
   * Brief text of the multi-line text notification.
   */
  briefText: string;

  /**
   * Brief text of the multi-line text notification.
   */
  longTitle: string;

  /**
   * Multi-line content of the multi-line text notification.
   */
  lines: Array<string>;
}

/**
 * Describes a picture-attached notification.
 *
 * @name NotificationPictureContent
 * @since 7
 * @sysCap SystemCapability.Notification.ANS
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface NotificationPictureContent extends NotificationBasicContent {
  /**
   * Multi-line content of the multi-line text notification.
   */
  briefText: string;

  /**
   * Title that will be displayed for the picture-attached notification when it is expanded.
   */
  expandedTitle: string;

  /**
   * Picture to be included in a notification.
   */
  picture: image.PixelMap;
}

/**
 * Describes notification types.
 *
 * @name NotificationContent
 * @since 7
 * @sysCap SystemCapability.Notification.ANS
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface NotificationContent {
  /**
   * Notification content type.
   */
  contentType: notification.ContentType;

  /**
   * Normal text notification.
   */
  normal?: NotificationBasicContent;

  /**
   * Long text notification.
   */
  longText?: NotificationLongTextContent;

  /**
   * Multi-line text notification.
   */
  multiLine?: NotificationMultiLineContent;

  /**
   * Picture-attached notification.
   */
  picture?: NotificationPictureContent;
}
