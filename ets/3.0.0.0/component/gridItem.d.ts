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
 * Mesh container for static fixed-size layout scenarios.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class GridItemExtend<T> extends GridItemAttribute<T> {
}

/**
 * Mesh container for static fixed-size layout scenarios.
 * @devices phone, tablet, car
 * @since 7
 */
interface GridItem extends GridItemAttribute<GridItem> {
  /**
   * Return to get GridItem.
   * @devices phone, tablet, car
   * @since 7
   */
  (): GridItem;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class GridItemAttribute<T> extends CommonMethod<T> {
  /**
   * This parameter specifies the start line number of the current element.
   * @devices phone, tablet, car
   * @since 7
   */
  rowStart(value: number): T;

  /**
   * Specifies the end line number of the current element.
   * @devices phone, tablet, car
   * @since 7
   */
  rowEnd(value: number): T;

  /**
   * This parameter specifies the start column number of the current element.
   * @devices phone, tablet, car
   * @since 7
   */
  columnStart(value: number): T;

  /**
   * This parameter specifies the end column number of the current element.
   * @devices phone, tablet, car
   * @since 7
   */
  columnEnd(value: number): T;

  /**
   * This parameter specifies whether to recreate the node when the component build is triggered.
   * @devices phone, tablet, car
   * @since 7
   */
  forceRebuild(value: boolean): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const GridItemInterface: GridItem;
