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
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ColumnSplitExtend<T> extends ColumnSplitAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface ColumnSplit extends ColumnSplitAttribute<ColumnSplit> {
  /**
   * Layout the subassemblies vertically and insert a horizontal divider line between each subassemblies.
   * @devices phone, tablet, car
   * @since 7
   */
  (): ColumnSplit;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class ColumnSplitAttribute<T> extends CommonMethod<T> {
  /**
   * Indicates whether the split line can be dragged. The default value is false.
   * @devices phone, tablet, car
   * @since 7
   */
  resizeable(value: boolean): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ColumnSplitInterface: ColumnSplit;
