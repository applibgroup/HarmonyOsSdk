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

declare enum IndexerAlign {
    Left,
    Right
}
declare class AlphabetIndexerExtend<T> extends AlphabetIndexerAttribute<T> {
}
interface AlphabetIndexer extends AlphabetIndexerAttribute<AlphabetIndexer> {
    (value: {
        arrayValue: Array<string>;
        selected: number;
    }): AlphabetIndexer;
}
declare class AlphabetIndexerAttribute<T> extends CommonMethod<T> {
    onSelected(event: (index: number) => void): T;
    color(value: Color | number | string | Resource): T;
    selectedColor(value: Color | number | string | Resource): T;
    popupColor(value: Color | number | string | Resource): T;
    selectedBackgroundColor(value: Color | number | string | Resource): T;
    popupBackground(value: Color | number | string | Resource): T;
    usingPopup(value: boolean): T;
    selectedFont(value: {
        size?: number;
        weight?: FontWeight;
        family?: string;
        style?: FontStyle;
    }): T;
    popupFont(value: {
        size?: number;
        weight?: FontWeight;
        family?: string;
        style?: FontStyle;
    }): T;
    itemSize(value: string | number): T;
    font(value: {
        size?: number;
        weight?: FontWeight;
        family?: string;
        style?: FontStyle;
    }): T;
    alignStyle(value: IndexerAlign): T;
}
declare const AlphabetIndexer: AlphabetIndexer;
