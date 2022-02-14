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
 * Declare the graphic format of the bar chart.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum BarMode {
  /**
   * The actual layout width of the TabBar is used. If the width exceeds the total width, you can slide the tabbar.
   * @devices phone, tablet, car
   * @since 7
   */
  Scrollable,

  /**
   * The width of all TabBars is evenly allocated.
   * @devices phone, tablet, car
   * @since 7
   */
  Fixed
}

/**
 * Declare the location of the bar chart.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum BarPosition {
  /**
   * When the vertical attribute method is set to true, the tab is on the left of the container. When the vertical property method is set to false, the tab is at the top of the container.
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * When the vertical attribute method is set to true, the tab is located on the right of the container. When the vertical property method is set to false, the tab is at the bottom of the container.
   * @devices phone, tablet, car
   * @since 7
   */
  End
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class TabsController {
  /**
   * constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();

  /**
   * Called when the tab is switched.
   * @devices phone, tablet, car
   * @since 7
   */
  changeIndex(value: number): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class TabsExtend<T> extends TabsAttribute<T> {
}

/**
 * Provides an interface for switching views.
 * @devices phone, tablet, car
 * @since 7
 */
interface Tabs extends TabsAttribute<Tabs> {
  /**
   * Called when the view is switched.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { barPosition?: BarPosition, index?: number, controller?: TabsController }): Tabs;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class TabsAttribute<T> extends CommonMethod<T> {
  /**
   * Called when determining whether the tab is vertical.
   * @devices phone, tablet, car
   * @since 7
   */
  vertical(value: boolean): T;

  /**
   * Called when judging whether page switching can be performed by sliding left and right.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollable(value: boolean): T;

  /**
   * Called when the graphic format of the bar chart is selected.
   * @devices phone, tablet, car
   * @since 7
   */
  barMode(value: BarMode): T;

  /**
   * Called when the width of the bar graph is set.
   * @devices phone, tablet, car
   * @since 7
   */
  barWidth(value: number): T;

  /**
   * Called when the height of the bar graph is set.
   * @devices phone, tablet, car
   * @since 7
   */
  barHeight(value: number): T;

  /**
   * Called when the animation duration of the bar graph is set.
   * @devices phone, tablet, car
   * @since 7
   */
  animationDuration(value: number): T;

  /**
   * Called when the tab is switched.
   * @devices phone, tablet, car
   * @since 7
   */
  onChange(event: (index: number) => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const TabsInterface: Tabs;
