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

declare enum ProgressStyle {
    Linear,
    Eclipse
}
declare class ProgressExtend<T> extends ProgressAttribute<T> {
}
interface Progress extends ProgressAttribute<Progress> {
    (object: {
        value: number;
        total?: number;
        style?: ProgressStyle;
    }): Progress;
}
declare class ProgressAttribute<T> extends CommonMethod<T> {
    value(value: number): T;
    color(value: Color): T;
    cricularStyle(value: {
        strokeWidth?: number;
        scaleCount?: number;
        scaleWidth?: number;
    }): T;
}
declare const Progress: Progress;
