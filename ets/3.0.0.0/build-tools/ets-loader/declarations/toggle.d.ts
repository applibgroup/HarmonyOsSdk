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

declare enum ToggleType {
    Checkbox,
    Switch,
    Button
}
declare class ToggleExtend<T> extends ToggleAttribute<T> {
}
interface Toggle extends ToggleAttribute<Toggle> {
    (options?: {
        type: ToggleType;
        isOn?: boolean;
    }): Toggle;
}
declare class ToggleAttribute<T> extends CommonMethod<T> {
    onChange(callback: (isOn: boolean) => void): T;
    selectedColor(value: Color): T;
    swithPointStyle(color: Color): T;
}
declare const Toggle: Toggle;
