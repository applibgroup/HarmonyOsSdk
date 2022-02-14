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

declare class SpanExtend<T> extends SpanAttribute<T> {
}
interface Span extends SpanAttribute<Span> {
    (value: string | Resource): Span;
}
declare class SpanAttribute<T> extends CommonMethod<T> {
    fontColor(value: Color | number | string | Resource): T;
    fontSize(value: number | string | Resource): T;
    fontStyle(value: FontStyle): T;
    fontWeight(value: number | FontWeight | string): T;
    fontFamily(value: string | Resource): T;
    decoration(value: {
        type: TextDecorationType;
        color?: Color | number | string | Resource;
    }): T;
    letterSpacing(value: number | string): T;
    textCase(value: TextCase): T;
}
declare const Span: Span;
