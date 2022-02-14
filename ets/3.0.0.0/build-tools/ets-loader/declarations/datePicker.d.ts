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

declare class DatePickerExtend<T> extends DatePickerAttribute<T> {
}
declare enum DatePickerType {
    Time,
    Date
}
interface DatePickerResult {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
}
interface DatePicker extends DatePickerAttribute<DatePicker> {
    (options?: {
        start?: Date;
        end?: Date;
        selected?: Date;
        type?: DatePickerType;
    }): DatePicker;
}
declare class DatePickerAttribute<T> extends CommonMethod<T> {
    lunar(value: boolean): T;
    useMilitaryTime(value: boolean): T;
    onChange(callback: (value: DatePickerResult) => void): T;
}
declare const DatePicker: DatePicker;
