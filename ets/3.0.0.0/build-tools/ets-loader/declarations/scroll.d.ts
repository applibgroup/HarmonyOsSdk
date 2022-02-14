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

declare enum BarState {
    Off,
    Auto,
    On
}
declare enum ScrollDirection {
    Vertical,
    Horizontal,
    Free,
    None
}
declare class Scroller {
    constructor();
    scrollTo(value: {
        xOffset: number | string;
        yOffset: number | string;
        animation?: {
            duration: number;
            curve: Curve;
        };
    });
    scrollEdge(value: Edge);
    scrollPage(value: {
        next: boolean;
        direction?: Axis;
    });
    currentOffset();
    scrollToIndex(value: number);
}
declare class ScrollExtend<T> extends ScrollAttribute<T> {
}
interface Scroll extends ScrollAttribute<Scroll> {
    (scroller?: Scroller): Scroll;
}
declare class ScrollAttribute<T> extends CommonMethod<T> {
    scrollable(value: ScrollDirection): T;
    onScroll(event: (xOffset: number, yOffset: number) => void): T;
    onScrollEdge(event: (side: Edge) => void): T;
    onScrollEnd(event: () => void): T;
    scrollBar(barState: BarState): T;
    scrollBarColor(color: Color | number | string): T;
    scrollBarWidth(value: number | string): T;
    edgeEffect(edgeEffect: EdgeEffect): T;
}
declare const Scroll: Scroll;
