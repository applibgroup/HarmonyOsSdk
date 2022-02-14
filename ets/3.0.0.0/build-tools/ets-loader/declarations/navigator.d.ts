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

declare enum NavigationType {
    Push,
    Back,
    Replace
}
declare class NavigatorExtend<T> extends NavigatorAttribute<T> {
}
interface Navigator extends NavigatorAttribute<Navigator> {
    (value?: {
        target: string;
        type?: NavigationType;
    }): Navigator;
    (): Navigator;
}
declare class NavigatorAttribute<T> extends CommonMethod<T> {
    active(value: boolean): T;
    type(value: NavigationType): T;
    target(value: string): T;
    params(value: object): T;
}
declare const Navigator: Navigator;
