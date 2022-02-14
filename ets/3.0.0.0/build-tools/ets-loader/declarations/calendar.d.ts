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

interface CalendarDay {
    index: number;
    lunarMonth: string;
    lunarDay: string;
    dayMark: string;
    dayMarkValue: string;
    year: number;
    month: number;
    day: number;
    isFirstOfLunar: boolean;
    hasSchedule: boolean;
    markLunarDay: boolean;
}
interface MonthData {
    year: number;
    month: number;
    data: CalendarDay[];
}
interface CurrentDayStyle {
    dayColor?: Color | number | string | Resource;
    lunarColor?: Color | number | string | Resource;
    markLunarColor?: Color | number | string | Resource;
    dayFontSize?: number;
    lunarDayFontSize?: number;
    dayHeight?: number;
    dayWidth?: number;
    gregorianCalendarHeight?: number;
    dayYAxisOffset?: number;
    lunarDayYAxisOffset?: number;
    underscoreXAxisOffset?: number;
    underscoreYAxisOffset?: number;
    scheduleMarkerXAxisOffset?: number;
    scheduleMarkerYAxisOffset?: number;
    colSpace?: number;
    dailyFiveRowSpace?: number;
    dailySixRowSpace?: number;
    lunarHeight?: number;
    underscoreWidth?: number;
    underscoreLength?: number;
    scheduleMarkerRadius?: number;
    boundaryRowOffset?: number;
    boundaryColOffset?: number;
}
interface NonCurrentDayStyle {
    nonCurrentMonthDayColor?: Color | number | string | Resource;
    nonCurrentMonthLunarColor?: Color | number | string | Resource;
    nonCurrentMonthWorkDayMarkColor?: Color | number | string | Resource;
    nonCurrentMonthOffDayMarkColor?: Color | number | string | Resource;
}
interface TodayStyle {
    focusedDayColor?: Color | number | string | Resource;
    focusedLunarColor?: Color | number | string | Resource;
    focusedAreaBackgroundColor?: Color | number | string | Resource;
    focusedAreaRadius?: number;
}
interface WeekStyle {
    weekColor?: Color | number | string | Resource;
    weekendDayColor?: Color | number | string | Resource;
    weekendLunarColor?: Color | number | string | Resource;
    weekFontSize?: number;
    weekHeight?: number;
    weekWidth?: number;
    weekAndDayRowSpace?: number;
}
interface WorkStateStyle {
    workDayMarkColor?: Color | number | string | Resource;
    offDayMarkColor?: Color | number | string | Resource;
    workDayMarkSize?: number;
    offDayMarkSize?: number;
    workStateWidth?: number;
    workStateHorizontalMovingDistance?: number;
    workStateVerticalMovingDistance?: number;
}
declare class CalendarController {
    constructor();
    backToToday();
    goTo(value: {
        year: number;
        month: number;
        day: number;
    });
}
declare class CalendarExtend<T> extends CalendarAttribute<T> {
}
interface Calendar extends CalendarAttribute<Calendar> {
    (value: {
        date: {
            year: number;
            month: number;
            day: number;
        };
        currentData: MonthData;
        preData: MonthData;
        nextData: MonthData;
        controller?: CalendarController;
    }): Calendar;
}
declare class CalendarAttribute<T> {
    showLunar(value: boolean): T;
    showHoliday(value: boolean): T;
    needSlide(value: boolean): T;
    startOfWeek(value: number): T;
    offDays(value: number): T;
    direction(value: Axis): T;
    currentDayStyle(value: CurrentDayStyle): T;
    nonCurrentDayStyle(value: NonCurrentDayStyle): T;
    todayStyle(value: TodayStyle): T;
    weekStyle(value: WeekStyle): T;
    workStateStyle(value: WorkStateStyle): T;
    onSelectChange(event: (event: {
        year: number;
        month: number;
        day: number;
    }) => void): T;
    onRequestData(event: (event: {
        year: number;
        month: number;
        currentYear: number;
        currentMonth: number;
        monthState: number;
    }) => void): T;
}
declare const Calendar: Calendar;
