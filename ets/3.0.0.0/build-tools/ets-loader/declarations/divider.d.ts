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

declare class DividerExtend<T> extends DividerAttribute<T> {
}
interface Divider extends DividerAttribute<Divider> {
    (): Divider;
}
declare class DividerAttribute<T> extends CommonMethod<T> {
    vertical(value: boolean): T;
    color(value: Color | number | string | Resource): T;
    strokeWidth(value: number | string): T;
    lineCap(value: LineCapStyle): T;
}
declare const Divider: Divider;
