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

declare class TextAreaExtend<T> extends TextAreaAttribute<T> {
}
interface TextArea extends TextAreaAttribute<TextArea> {
    (options?: {
        placeholder: string;
        text: string;
    }): TextArea;
}
declare class TextAreaAttribute<T> extends CommonMethod<T> {
    placeholderColor(value: Color | number | string | Resource): T;
    placeholderFont(value: {
        size: number;
        weight: FontWeight;
        fontFamily: string | Resource;
        style: FontStyle;
    }): T;
    textAlign(value: TextAlign): T;
    caretColor(value: Color | number | string | Resource): T;
    onChange(callback: (value: string) => void): T;
}
declare const TextArea: TextArea;
