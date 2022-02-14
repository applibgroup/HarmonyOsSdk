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

declare class ShapeExtend<T> extends ShapeAttribute<T> {
}
interface Shape extends ShapeAttribute<Shape> {
    (value?: PixelMap): Shape;
}
declare class ShapeAttribute<T> extends CommonMethod<T> {
    viewPort(value: {
        x?: number | string;
        y?: number | string;
        width?: number | string;
        height?: number | string;
    }): T;
    stroke(value: Color | number | string | Resource): T;
    fill(value: Color | number | string | Resource): T;
    strokeDashOffset(value: number | string): T;
    strokeDashArray(value: Array<any>): T;
    strokeLineCap(value: LineCapStyle): T;
    strokeLineJoin(value: LineJoinStyle): T;
    strokeMiterLimit(value: number | string): T;
    strokeOpacity(value: number | string | Resource): T;
    fillOpacity(value: number | string | Resource): T;
    strokeWidth(value: number | string): T;
    antiAlias(value: boolean): T;
}
declare const Shape: Shape;
