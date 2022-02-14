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

declare class RowExtend<T> extends RowAttribute<T> {
}
interface Row extends RowAttribute<Row> {
    (value?: {
        space?: string | number;
    }): Row;
}
declare class RowAttribute<T> extends CommonMethod<T> {
    alignItems(value: VerticalAlign): T;
}
declare const Row: Row;
