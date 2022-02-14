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

declare enum SliderStyle {
    OutSet = 0,
    InSet
}
declare enum SliderChangeMode {
    Begin = 0,
    Moving,
    End
}
declare class SliderExtend<T> extends SliderAttribute<T> {
}
interface Slider extends SliderAttribute<Slider> {
    (options?: {
        value?: number;
        min?: number;
        max?: number;
        step?: number;
        style?: SliderStyle;
    }): Slider;
}
declare class SliderAttribute<T> extends CommonMethod<T> {
    blockColor(value: Color | number | string | Resource): T;
    trackColor(value: Color | number | string | Resource): T;
    selectedColor(value: Color | number | string | Resource): T;
    showSteps(value: boolean): T;
    showTips(value: boolean): T;
    onChange(callback: (value: number, mode: SliderChangeMode) => void): T;
}
declare const Slider: Slider;
