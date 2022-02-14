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

declare enum ScrollState {
    Idle,
    Scroll,
    Fling
}
declare class ListExtend<T> extends ListAttribute<T> {
}
interface List extends ListAttribute<List> {
    (value?: {
        initialIndex?: number;
        space?: number | string;
        scroller?: Scroller;
    }): List;
}
declare class ListAttribute<T> extends CommonMethod<T> {
    listDirection(value: Axis): T;
    scrollBar(value: BarState): T;
    edgeEffect(value: EdgeEffect): T;
    divider(value: {
        strokeWidth: number | string | Resource;
        color?: Color | number | string | Resource;
        startMargin?: number | string | Resource;
        endMargin?: number | string | Resource;
    } | null): T;
    editMode(value: boolean): T;
    cachedCount(value: number): T;
    chainAnimation(value: boolean): T;
    onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T;
    onScrollIndex(event: (start: number, end: number) => void): T;
    onReachStart(event: () => void): T;
    onReachEnd(event: () => void): T;
    onScrollStop(event: () => void): T;
    onItemDelete(event: (index: number) => boolean): T;
    onItemMove(event: (from: number, to: number) => boolean): T;
}
declare const List: List;
