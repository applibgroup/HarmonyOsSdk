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

declare class RectExtend<T> extends RectAttribute<T> {
}
interface Rect extends RectAttribute<Rect> {
    new (value?: {
        width?: number | string;
        height?: number | string;
        radius?: number | string | Array<any>;
    } | {
        width?: number | string;
        height?: number | string;
        radiusWidth?: number | string;
        radiusHeight?: number | string;
    }): Rect;
    (value?: {
        width?: number | string;
        height?: number | string;
        radius?: number | string | Array<any>;
    } | {
        width?: number | string;
        height?: number | string;
        radiusWidth?: number | string;
        radiusHeight?: number | string;
    }): Rect;
}
declare class RectAttribute<T> extends CommonShapeMethod<T> {
    radiusWidth(value: number | string): T;
    radiusHeight(value: number | string): T;
    radius(value: number | string | Array<any>): T;
}
declare const Rect: Rect;
