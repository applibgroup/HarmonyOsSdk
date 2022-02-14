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

import {CommonShapeMethod} from "./common";

/**
 * Rectangle drawing.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class RectExtend<T> extends RectAttribute<T> {
}

/**
 * Provides an interface for drawing rectangles.
 * @devices phone, tablet, car
 * @since 7
 */
interface Rect extends RectAttribute<Rect> {
  /**
   * Called when a new rectangle is created.
   * @devices phone, tablet, car
   * @since 7
   */
  new (
    value?: { width?: number | string, height?: number | string, radius?: number | string | Array<any> } |
    {
      width?: number | string, height?: number | string, radiusWidth?: number | string,
      radiusHeight?: number | string
    }): Rect;

  /**
   * Called when a rectangle is created.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: {width?: number | string,height?: number | string,radius?: number | string | Array<any> } |
  {
    width?: number | string,height?: number | string,radiusWidth?: number | string,radiusHeight?: number | string}): Rect;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class RectAttribute<T> extends CommonShapeMethod<T> {
  /**
   * Called when the fillet width is set.
   * @devices phone, tablet, car
   * @since 7
   */
  radiusWidth(value: number | string): T;

  /**
   * Called when the fillet height is set.
   * @devices phone, tablet, car
   * @since 7
   */
  radiusHeight(value: number | string): T;

  /**
   * Called when the fillet size is set.
   * @devices phone, tablet, car
   * @since 7
   */
  radius(value: number | string | Array<any>): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const RectInterface: Rect;
