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

declare enum InputType {
    Normal,
    Number,
    Email,
    Password
}
declare enum EnterKeyType {
    Go,
    Search,
    Send,
    Next,
    Done
}
declare class TextInputExtend<T> extends TextInputAttribute<T> {
}
interface TextInput extends TextInputAttribute<TextInput> {
    (options?: {
        placeholder: string;
        text: string;
    }): TextInput;
}
declare class TextInputAttribute<T> extends CommonMethod<T> {
    type(value: InputType): T;
    placeholderColor(value: Color): T;
    placeholderFont(value: {
        size?: number | string;
        weight?: number | FontWeight;
        family?: string;
        style?: FontStyle;
    }): T;
    enterKeyType(value: EnterKeyType): T;
    caretColor(value: Color): T;
    onEditChanged(callback: (isEditing: boolean) => void): T;
    onSubmit(callback: (enterKey: EnterKeyType) => void): T;
    onChange(callback: (value: string) => void): T;
}
declare const TextInput: TextInput;
