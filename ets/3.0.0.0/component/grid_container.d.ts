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

import {ColumnAttribute} from "./column";

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum SizeType {

  /**
   * Select a value based on the device type.
   * @devices phone, tablet, car
   * @since 7
   */
  Auto,

  /**
   * Select a value based on the device type.
   * @devices phone, tablet, car
   * @since 7
   */
  XS,

  /**
   * Small width type device.
   * @devices phone, tablet, car
   * @since 7
   */
  SM,

  /**
   * Medium width type device.
   * @devices phone, tablet, car
   * @since 7
   */
  MD,

  /**
   * Large width type device.
   * @devices phone, tablet, car
   * @since 7
   */
  LG
}

/**
 * Vertical layout grid layout container, used only in grid layout scenarios.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class GridContainerExtend<T> extends GridContainerAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface GridContainer extends GridContainerAttribute<GridContainer> {
  /**
   * columns: Sets the total number of columns in the current layout.
   * sizeType: Select the device width type.
   * gutter: Grid layout column spacing.
   * margin: Spacing on both sides of the grid layout.
   * @devices phone, tablet, car
   * @since 7
   */
  (
    value?: {
      columns?: number | 'auto',
      sizeType?: SizeType,
      gutter?: number | string,
      margin?: number | string
    }
  ): GridContainer;
}

/**
 * inheritance  Column
 * @devices phone, tablet, car
 * @since 7
 */
declare class GridContainerAttribute<T> extends ColumnAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const GridContainerInterface: GridContainer;