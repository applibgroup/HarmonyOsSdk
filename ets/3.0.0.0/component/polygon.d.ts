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
 * Polygon drawing.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PolygonExtend<T> extends PolygonAttribute<T> {
}

/**
 * Provides the polygon drawing interface.
 * @devices phone, tablet, car
 * @since 7
 */
interface Polygon extends PolygonAttribute<Polygon> {
     /**
     * Called when the draw polygon interface is used.
     * @devices phone, tablet, car
     * @since 7
     */
    (): Polygon;

    /**
     * Called when drawing a polygon.
     * @devices phone, tablet, car
     * @since 7
     */
    (value?: { width?: string | number, height?: string | number }): Polygon;
}

declare class PolygonAttribute<T> extends CommonShapeMethod<T> {
    /**
     * Called when the vertex coordinate list of a polygon is set.
     * @devices phone, tablet, car
     * @since 7
     */
    points(value: Array<any>): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PolygonInterface: Polygon;