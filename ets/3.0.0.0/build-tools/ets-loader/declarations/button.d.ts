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

declare enum ButtonType {
    Capsule,
    Circle,
    Normal
}
declare class ButtonExtend<T> extends ButtonAttribute<T> {
}
interface Button extends ButtonAttribute<Button> {
    (): Button;
    (options: {
        type?: ButtonType;
        stateEffect?: boolean;
    }): Button;
    (label: string | Resource, options?: {
        type?: ButtonType;
        stateEffect?: boolean;
    }): Button;
}
declare class ButtonAttribute<T> extends CommonMethod<T> {
    type(value: ButtonType): T;
    stateEffect(value: boolean): T;
    fontColor(value: Color | number | string | Resource): T;
    fontSize(value: number | string | Resource): T;
    fontWeight(value: number | FontWeight | string): T;
}
declare const Button: Button;
