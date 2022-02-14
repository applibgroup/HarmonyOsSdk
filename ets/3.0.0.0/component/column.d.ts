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

import {CommonMethod, HorizontalAlign} from "./common";

/**
 * Containers laid out vertically.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ColumnExtend<T> extends ColumnAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface Column extends ColumnAttribute<Column> {
  /**
   * Set the value.
   * useAlign:Use a custom alignment.
   * space: Vertical layout element spacing.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { space?: string | number }): Column;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ColumnAttribute<T> extends CommonMethod<T> {
  /**
   * Sets the alignment format of the subassembly in the horizontal direction.
   * @devices phone, tablet, car
   * @since 7
   */
  alignItems(value: HorizontalAlign): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ColumnInterface: Column;
