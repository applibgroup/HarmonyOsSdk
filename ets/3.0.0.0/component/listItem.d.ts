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

import {CommonMethod} from "./common";

/**
 * Declare item ceiling attribute.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Sticky {
  /**
   * No sticky.
   * @devices phone, tablet, car
   * @since 7
   */
  None,

  /**
   * Normal mode
   * @devices phone, tablet, car
   * @since 7
   */
  Normal,

  /**
   * Set opacity.
   * @devices phone, tablet, car
   * @since 7
   */
  Opacity,
}

/**
 * Declare whether the ListItem element is editable.
 * @devices phone, tablet
 * @since 7
 */
export declare enum EditMode {
  /**
   * Unrestricted operations.
   * @devices phone, tablet, car
   * @since 7
   */
  None,

  /**
   * Deleteable.
   * @devices phone, tablet, car
   * @since 7
   */
  Deletable,

  /**
   * Movable.
   * @devices phone, tablet, car
   * @since 7
   */
  Movable,
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ListItemExtend<T> extends ListItemAttribute<T> {
}

/**
 * Values in the list
 * @devices phone, tablet, car
 * @since 7
 */
interface ListItem extends ListItemAttribute<ListItem> {
  /**
   * Called when an interface is used.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: string): ListItem;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class ListItemAttribute<T> extends CommonMethod<T> {
  /**
   * Called when setting whether item is ceiling effect.
   * @devices phone, tablet, car
   * @since 7
   */
  sticky(value: Sticky): T;

  /**
   * Called when judging whether it is editable.
   * @devices phone, tablet, car
   * @since 7
   */
  editable(value: boolean | EditMode): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ListItemInterface: ListItem;
