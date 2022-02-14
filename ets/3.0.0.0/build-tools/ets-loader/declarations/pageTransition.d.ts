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

declare enum RouteType {
    None,
    Push,
    Pop
}
declare enum SlideEffect {
    Left,
    Right,
    Top,
    Bottom
}
declare class CommonTransition<T> {
    constructor();
    slide(value: SlideEffect): T;
    translate(value: {
        x?: number | string;
        y?: number | string;
        z?: number | string;
    }): T;
    scale(value: {
        x?: number;
        y?: number;
        z?: number;
        centerX?: number | string;
        centerY?: number | string;
    }): T;
    opacity(value: number): T;
}
interface PageTransitionEnter extends CommonTransition<PageTransitionEnter> {
    (value: {
        type?: RouteType;
        duration?: number;
        curve?: Curve | string;
        delay?: number;
    }): PageTransitionEnter;
    onEnter(event: (type?: RouteType, progress?: number) => void): PageTransitionEnter;
}
interface PageTransitionExit extends CommonTransition<PageTransitionExit> {
    (value: {
        type?: RouteType;
        duration?: number;
        curve?: Curve | string;
        delay?: number;
    }): PageTransitionExit;
    onExit(event: (type?: RouteType, progress?: number) => void): PageTransitionExit;
}
declare const PageTransitionEnter: PageTransitionEnter;
declare const PageTransitionExit: PageTransitionExit;
