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

import {CommonMethod, VerticalAlign} from "./common";

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class RowExtend<T> extends RowAttribute<T> {
}

/**
 * The components are laid out horizontally
 * @devices phone, tablet, car
 * @since 7
 */
interface Row extends RowAttribute<Row> {
  /**
   * Called when the layout is set in the horizontal direction.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { space?: string | number }): Row;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class RowAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the vertical alignment is set.
   * @devices phone, tablet, car
   * @since 7
   */
  alignItems(value: VerticalAlign): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const RowInterface: Row;
