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

declare class SearchExtend<T> extends SearchAttribute<T> {
}
interface Search extends SearchAttribute<Search> {
    (options?: {
        value?: string;
        placeholder?: string;
        icon?: string;
    }): Search;
}
declare class SearchAttribute<T> extends CommonMethod<T> {
    searchButton(value: string): T;
    placeholderColor(value: Color | number | string | Resource): T;
    placeholderFont(value: {
        size: number;
        weight: FontWeight;
        family: string;
        style: FontStyle;
    }): T;
    onSubmit(callback: (value: string) => void): T;
    onChange(callback: (value: string) => void): T;
}
declare const Search: Search;
