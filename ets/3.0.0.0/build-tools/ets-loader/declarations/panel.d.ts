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

declare enum PanelMode {
    Mini,
    Half,
    Full
}
declare enum PanelType {
    Minibar,
    Foldable,
    Temporary
}
declare class PanelExtend<T> extends PanelAttribute<T> {
}
interface Panel extends PanelAttribute<Panel> {
    (show: boolean): Panel;
}
declare class PanelAttribute<T> extends CommonMethod<T> {
    mode(value: PanelMode): T;
    type(value: PanelType): T;
    dragBar(value: boolean): T;
    fullHeight(value: number | string): T;
    halfHeight(value: number | string): T;
    miniHeight(value: number | string): T;
    onChange(event: (width?: number, height?: number, mode?: PanelMode) => void): T;
}
declare const Panel: Panel;
