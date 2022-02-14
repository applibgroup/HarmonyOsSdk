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

declare enum FormDimension {
    Dimension_1_2,
    Dimension_2_2,
    Dimension_2_4,
    Dimension_4_4
}
declare class FormComponentExtend<T> extends FormComponentAttribute<T> {
}
interface FormComponent extends FormComponentAttribute<FormComponent> {
    (value: {
        id: number;
        name: string;
        bundle: string;
        ability: string;
        module: string;
        dimension?: FormDimension;
    }): FormComponent;
}
declare class FormComponentAttribute<T> extends CommonMethod<T> {
    size(value: {
        width: number;
        height: number;
    }): T;
    moduleName(value: string): T;
    dimension(value: FormDimension): T;
    allowUpdate(value: boolean): T;
    visibility(value: Visibility): T;
    onAcquired(callback: (info: {
        id: number;
    }) => void): T;
    onError(callback: (info: {
        errcode: number;
        msg: string;
    }) => void): T;
    onRouter(callback: (info: any) => void): T;
}
declare const FormComponent: FormComponent;
