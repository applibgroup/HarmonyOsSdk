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
 * Component horizontal layout.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class RowSplitExtend<T> extends RowSplitAttribute<T> {
}

/**
 * Provides interfaces for layout in the vertical direction.
 * @devices phone, tablet, car
 * @since 7
 */
interface RowSplit extends RowSplitAttribute<RowSplit> {
  /**
   * Called when the layout along the vertical direction is set.
   * @devices phone, tablet, car
   * @since 7
   */
  (): RowSplit;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class RowSplitAttribute<T> extends CommonMethod<T> {
  /**
   * Called when judging whether the split line can be dragged.
   * @devices phone, tablet, car
   * @since 7
   */
  resizeable(value: boolean): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const RowSplitInterface: RowSplit;
