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

declare enum ImageRenderMode {
    Original,
    Template
}
declare enum ImageInterpolation {
    None,
    Low,
    Medium,
    High
}
declare class ImageExtend<T> extends ImageAttribute<T> {
}
interface Image extends ImageAttribute<Image> {
    (src: string | PixelMap | Resource): Image;
}
declare class ImageAttribute<T> extends CommonMethod<T> {
    alt(value: string | Resource): T;
    matchTextDirection(value: boolean): T;
    fitOriginalSize(value: boolean): T;
    fillColor(value: Color | number | string | Resource): T;
    objectFit(value: ImageFit): T;
    objectRepeat(value: ImageRepeat): T;
    autoResize(value: boolean): T;
    renderMode(value: ImageRenderMode): T;
    interpolation(value: ImageInterpolation): T;
    sourceSize(value: {
        width: number;
        height: number;
    }): T;
    onComplete(callback: (event?: {
        width: number;
        height: number;
        componentWidth: number;
        componentHeight: number;
        loadingStatus: number;
    }) => void): T;
    onError(callback: (event?: {
        componentWidth: number;
        componentHeight: number;
    }) => void): T;
    onFinish(event: () => void): T;
}
declare const Image: Image;
