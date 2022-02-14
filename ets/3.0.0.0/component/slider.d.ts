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

import {CommonMethod, Color, Resource} from "./common";

/**
 * Declare sliderstyle
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum SliderStyle {
  /**
   * The slider is on the slide rail.
   * @devices phone, tablet, car
   * @since 7
   */
  OutSet = 0,

  /**
   * The slider is in the slide rail.
   * @devices phone, tablet, car
   * @since 7
   */
  InSet,
}

/**
 * Declare SliderChangeMode
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum SliderChangeMode {
  /**
   * Start dragging the slider.
   * @devices phone, tablet, car
   * @since 7
   */
  Begin = 0,

  /**
   * Drag the slider.
   * @devices phone, tablet, car
   * @since 7
   */
  Moving,

  /**
   * End dragging the slider.
   * @devices phone, tablet, car
   * @since 7
   */
  End,
}

/**
 * Declare SliderChangeMode.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class SliderExtend<T> extends SliderAttribute<T> {
}

/**
 * Provides an interface for the slide bar component.
 * @devices phone, tablet, car
 * @since 7
 */
interface Slider extends SliderAttribute<Slider> {
  /**
   * Called when the slider bar component is used.
   * @devices phone, tablet, car
   * @since 7
   */
  (options?: {value?: number,min?: number,max?: number,step?: number,style?: SliderStyle}): Slider;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class SliderAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the slider color of the slider bar is set.
   * @devices phone, tablet, car
   * @since 7
   */
  blockColor(value: Color | number | string | Resource): T;

  /**
   * Called when the track color of the slider is set.
   * @devices phone, tablet, car
   * @since 7
   */
  trackColor(value: Color | number | string | Resource): T;

  /**
   * Called when the slider of the slider bar is set to slide over the area color.
   * @devices phone, tablet, car
   * @since 7
   */
  selectedColor(value: Color | number | string | Resource): T;

  /**
   * Called when setting whether to display step size.
   * @devices phone, tablet, car
   * @since 7
   */
  showSteps(value: boolean): T;

  /**
   * Called when the percentage of bubble prompt is set when sliding.
   * @devices phone, tablet, car
   * @since 7
   */
  showTips(value: boolean): T;

  /**
   * Called when the selection value changes.
   * @devices phone, tablet, car
   * @since 7
   */
  onChange(callback:(value: number, mode: SliderChangeMode) => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const SliderInterface: Slider;
