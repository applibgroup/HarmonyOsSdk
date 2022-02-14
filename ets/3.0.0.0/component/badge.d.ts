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

import {CommonMethod, Color, Resource} from "./common";

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare enum BadgePosition {
  /**
   * The dot is displayed vertically centered on the right.
   * @devices phone, tablet, car
   * @since 7
   */
  RightTop,

  /**
   * Dots are displayed in the upper right corner.
   * @devices phone, tablet, car
   * @since 7
   */
  Right,

  /**
   * The dot is displayed in the left vertical center.
   * @devices phone, tablet, car
   * @since 7
   */
  Left
}

/**
 * BadgeStyle object
 * @devices phone, tablet, car
 * @since 7
 */
interface BadgeStyle {
  /**
   * Text Color
   * @devices phone, tablet, car
   * @since 7
   */
  color?: Color | number | string | Resource;

  /**
   * Text size.
   * @devices phone, tablet, car
   * @since 7
   */
  fontSize?: number | string;

  /**
   * Size of a badge.
   * @devices phone, tablet, car
   * @since 7
   */
  badgeSize: number | string;

  /**
   * Color of the badge.
   * @devices phone, tablet, car
   * @since 7
   */
  badgeColor?: Color | number | string | Resource;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class BadgeExtend<T> extends BadgeAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface Badge extends BadgeAttribute<Badge> {
  /**
   * position: Set the display position of the prompt point.
   * maxCount: Maximum number of messages. If the number of messages exceeds the maximum, only maxCount+ is displayed.
   * count: Set the number of reminder messages.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: { count: number, position?: BadgePosition, maxCount?: number, style: BadgeStyle }): Badge;

  /**
   * value: Text string of the prompt content.
   * position: Set the display position of the prompt point.
   * style: You can set the style of the Badge component, including the text color, size, dot color, and size.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: { value: string, position?: BadgePosition, style: BadgeStyle }): Badge;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class BadgeAttribute<T> extends CommonMethod<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const BadgeInterface: Badge