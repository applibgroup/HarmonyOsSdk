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

declare class SwiperController {
    constructor();
    showNext();
    showPrevious();
    finishAnimation(event?: () => void);
}
declare enum SwiperDisplayMode {
    Stretch,
    AutoLinear
}
declare class SwiperExtend<T> extends SwiperAttribute<T> {
}
interface Swiper extends SwiperAttribute<Swiper> {
    (controller?: SwiperController): Swiper;
}
declare class SwiperAttribute<T> extends CommonMethod<T> {
    index(value: number): T;
    autoPlay(value: boolean): T;
    interval(value: number): T;
    indicator(value: boolean): T;
    loop(value: boolean): T;
    duration(value: number): T;
    vertical(value: boolean): T;
    itemSpace(value: number | string): T;
    displayMode(value: SwiperDisplayMode): T;
    onChange(event: (index: number) => void): T;
}
declare const Swiper: Swiper;
