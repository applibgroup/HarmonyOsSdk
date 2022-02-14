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
 * Route jump.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum NavigationType {
  /**
   * Jump to the next page.
   * @devices phone, tablet, car
   * @since 7
   */
  Push,

  /**
   * Return to the previous page.
   * @devices phone, tablet, car
   * @since 7
   */
  Back,

  /**
   * Replace page.
   * @devices phone, tablet, car
   * @since 7
   */
  Replace
}

/**
 * Declare navigator extensions.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class NavigatorExtend<T> extends NavigatorAttribute<T> {
}

/**
 * Create route
 * @devices phone, tablet, car
 * @since 7
 */
interface Navigator extends NavigatorAttribute<Navigator> {
  /**
   * Called when the route jumps.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: {
    target: string,
    type?: NavigationType }): Navigator;

  /**
   * Called when using the navigator.
   * @devices phone, tablet, car
   * @since 7
   */
  (): Navigator;
}

/**
 * Declare navigator properties.
 * @devices phone, tablet, car
 * @since 7
 */
declare class NavigatorAttribute<T> extends CommonMethod<T> {
  /**
   * Called when determining whether the routing component is active.
   * @devices phone, tablet, car
   * @since 7
   */
  active(value: boolean): T;

  /**
   * Called when determining whether the routing component is active.
   * @devices phone, tablet, car
   * @since 7
   */
  type(value: NavigationType): T;

  /**
   * Called when the path to the specified jump target page is set.
   * @devices phone, tablet, car
   * @since 7
   */
  target(value: string): T;

  /**
   * Called when data is passed to the target page at the same time during jump.
   * @devices phone, tablet, car
   * @since 7
   */
  params(value: object): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const NavigatorInterface: Navigator;
