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

import {CommonMethod, FlexDirection, FlexWrap, FlexAlign, ItemAlign} from "./common";

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class FlexExtend<T> extends FlexAttribute<T> {
}

/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 * @devices phone, tablet, car
 * @since 7
 */
interface Flex extends FlexAttribute<Flex> {
  /**
   * Set the value.
   * direction: Sets the horizontal layout of elements.
   * wrap: Whether the Flex container is a single row/column arrangement or a multi-row/column arrangement.
   * justifyContent: The alignment format of the subassembly on the Flex container spindle.
   * alignItems: Alignment Format for Subassembly on Flex Container Cross Axis
   * alignContent:The alignment of multiple lines of content when there is extra space in the cross axis.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: {
    direction?: FlexDirection, wrap?: FlexWrap, justifyContent?: FlexAlign,
    alignItems?: ItemAlign, alignContent?: FlexAlign
  }): Flex;
}

/**
 * Common Setting
 * @devices phone, tablet, car
 * @since 7
 */
declare class FlexAttribute<T> extends CommonMethod<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const FlexInterface: Flex;
