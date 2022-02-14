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

import {CommonMethod} from "./common";

/**
 * Provides methods for switching components.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class SwiperController {
  /**
   * constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   * @devices phone, tablet, car
   * @since 7
   */
  showNext();

  /**
   * Called when the previous subcomponent is displayed.
   * @devices phone, tablet, car
   * @since 7
   */
  showPrevious();

  /**
   * Called when need to stop the swiper animation
   * @devices phone, tablet, car
   * @since 7
   */
  finishAnimation(event?: () => void);
}

/**
 * Declare the size of the swiper on the spindle.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   * @devices phone, tablet, car
   * @since 7
   */
  Stretch,

  /**
   * The rotation chart is self linear.
   * @devices phone, tablet, car
   * @since 7
   */
  AutoLinear
}

/**
 * Declaration extension.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class SwiperExtend<T> extends SwiperAttribute<T> {
}

/**
 * Provides an interface for sliding containers.
 * @devices phone, tablet, car
 * @since 7
 */
interface Swiper extends SwiperAttribute<Swiper> {
  /**
   * Called when a sliding container is set.
   * @devices phone, tablet, car
   * @since 7
   */
  (controller?: SwiperController): Swiper;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class SwiperAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @devices phone, tablet, car
   * @since 7
   */
  index(value: number): T;

  /**
   * Called when setting whether the subcomponent plays automatically.
   * @devices phone, tablet, car
   * @since 7
   */
  autoPlay(value: boolean): T;

  /**
   * Called when the time interval for automatic playback is set.
   * @devices phone, tablet, car
   * @since 7
   */
  interval(value: number): T;

  /**
   * Called when you set whether the navigation point indicator is enabled.
   * @devices phone, tablet, car
   * @since 7
   */
  indicator(value: boolean): T;

  /**
   * Called when setting whether to turn on cyclic sliding.
   * @devices phone, tablet, car
   * @since 7
   */
  loop(value: boolean): T;

  /**
   * Called when the animation duration of the switch is set.
   * @devices phone, tablet, car
   * @since 7
   */
  duration(value: number): T;

  /**
   * Called when setting whether to slide vertically.
   * @devices phone, tablet, car
   * @since 7
   */
  vertical(value: boolean): T;

  /**
   * Called when the size of the rotation chart is set.
   * @devices phone, tablet, car
   * @since 7
   */
  itemSpace(value: number | string): T;

  /**
   * Called when setting the size of the swiper container on the spindle.
   * @devices phone, tablet, car
   * @since 7
   */
  displayMode(value: SwiperDisplayMode): T;

  /**
   * Called when the index value changes.
   * @devices phone, tablet, car
   * @since 7
   */
  onChange(event: (index: number) => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const SwiperInterface: Swiper;
