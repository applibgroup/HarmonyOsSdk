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

declare enum PickerStyle {
    INLINE = 0,
    BLOCK,
    FADE
}
declare class TextPickerExtend<T> extends TextPickerAttribute<T> {
}
interface TextPicker extends TextPickerAttribute<TextPicker> {
    (options?: {
        range: string[] | Resource;
        value?: string;
        selected?: number;
        loop?: boolean;
        style?: PickerStyle;
    }): TextPicker;
}
declare class TextPickerAttribute<T> extends CommonMethod<T> {
    defaultPickerItemHeight(value: number): T;
    onAccept(callback: (value: string, index: number) => void): T;
    onCancel(callback: () => void): T;
    onChange(callback: (value: string, index: number) => void): T;
}
declare const TextPicker: TextPicker;
