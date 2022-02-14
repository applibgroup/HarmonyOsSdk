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
 * Discounted drawing.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PolylineExtend<T> extends PolylineAttribute<T> {
}

/**
 * Provides an interface for drawing polylines.
 * @devices phone, tablet, car
 * @since 7
 */
interface Polyline extends PolylineAttribute<Polyline> {
  /**
   * Called when using the draw polyline interface.
   * @devices phone, tablet, car
   * @since 7
   */
  (): Polyline;

  /**
   * Called when using the draw fold.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { width?: string | number, height?: string | number }): Polyline;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class PolylineAttribute<T> extends CommonShapeMethod<T> {
  /**
   * Called when the polyline is set to pass through the coordinate point list.
   * @devices phone, tablet, car
   * @since 7
   */
  points(value: Array<any>): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PolylineInterface: Polyline;