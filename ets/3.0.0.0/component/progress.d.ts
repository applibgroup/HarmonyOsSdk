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

import { CommonMethod, Color } from "./common";

/**
 * Type of progress bar
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ProgressStyle {
    /**
     * Linear progress bar style.
     * @devices phone, tablet, car
     * @since 7
     */
    Linear,

    /**
     * eclipse progress bar.
     * @devices phone, tablet, car
     * @since 7
     */
    Eclipse
}

/**
 * Make a statement on the progress bar.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ProgressExtend<T> extends ProgressAttribute<T> {
}

/**
 * Provides the progress bar interface.
 * @devices phone, tablet, car
 * @since 7
 */
interface Progress extends ProgressAttribute<Progress> {
  /**
   * Called when the progress bar is set.
   * @devices phone, tablet, car
   * @since 7
   */
  (object: { value: number, total?: number, style?: ProgressStyle }): Progress;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class ProgressAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the current progress value is set.
   * @devices phone, tablet, car
   * @since 7
   */
  value(value: number): T;

  /**
   * Called when the progress bar foreground is set.
   * @devices phone, tablet, car
   * @since 7
   */
  color(value: Color): T;

  /**
   * Called when the style of the circular progress bar is set.
   * @devices phone, tablet, car
   * @since 7
   * @deprecated since 7
   */
  cricularStyle(value: { strokeWidth?: number, scaleCount?: number, scaleWidth?: number }): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ProgressInterface: Progress;