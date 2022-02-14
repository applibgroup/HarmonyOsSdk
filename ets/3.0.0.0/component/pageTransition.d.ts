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

import {Curve} from "./common";

/**
 * Declare the jump method.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum RouteType {
  /**
   * The page is not redirected.
   * @devices phone, tablet, car
   * @since 7
   */
  None,
  /**
   * Go to the next page.
   * @devices phone, tablet, car
   * @since 7
   */
  Push,
  /**
   * Redirect to a specified page.
   * @devices phone, tablet, car
   * @since 7
   */
  Pop
}

/**
 * Declare the sliding effect of transition.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum SlideEffect {
  /**
   * Swipe left.
   * @devices phone, tablet, car
   * @since 7
   */
  Left,

  /**
   * Swipe right.
   * @devices phone, tablet, car
   * @since 7
   */
  Right,

  /**
   * Swipe top.
   * @devices phone, tablet, car
   * @since 7
   */
  Top,

  /**
   * Swipe bottom.
   * @devices phone, tablet, car
   * @since 7
   */
  Bottom
}

/**
 * Provides interfaces for common transitions.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class CommonTransition<T> {
  /**
   * Called when a transition method is required.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();
  /**
   * Called when the slide in effect of the transition is set.
   * @devices phone, tablet, car
   * @since 7
   */
  slide(value: SlideEffect): T;

  /**
   * Called when the translation effect of page transition is set.
   * @devices phone, tablet, car
   * @since 7
   */
  translate(value: { x?: number | string, y?: number | string, z?: number | string }): T;

  /**
   * Called when setting the zoom effect of page transition.
   * @devices phone, tablet, car
   * @since 7
   */
  scale(value: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string }): T;

  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   * @devices phone, tablet, car
   * @since 7
   */
  opacity(value: number): T;
}

/**
 * Provides an interface for page rotation mode.
 * @devices phone, tablet, car
 * @since 7
 */
interface PageTransitionEnter extends CommonTransition<PageTransitionEnter> {
  /**
   * Called when page Jump animation is used.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: { type?: RouteType, duration?: number, curve?: Curve | string, delay?: number }): PageTransitionEnter;

  /**
   * Called when the incoming parameter is the normalized progress of the current incoming animation.
   * @devices phone, tablet, car
   * @since 7
   */
  onEnter(event: (type?: RouteType, progress?: number) => void): PageTransitionEnter;
}

/**
 * Provide an interface to exit the transition.
 * @devices phone, tablet, car
 * @since 7
 */
interface PageTransitionExit extends CommonTransition<PageTransitionExit> {
  /**
   * Called when the transition is delayed.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: {
    type?: RouteType,
    duration?: number,
    curve?: Curve | string,
    delay?: number }): PageTransitionExit;

  /**
   * Called when the input parameter is the normalized progress of the current exit animation.
   * @devices phone, tablet, car
   * @since 7
   */
  onExit(event: (
    type?: RouteType,
    progress?: number) => void): PageTransitionExit;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PageTransitionEnterInterface: PageTransitionEnter;

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PageTransitionExitInterface: PageTransitionExit;