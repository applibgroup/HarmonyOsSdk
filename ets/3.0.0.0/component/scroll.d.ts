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

import { CommonMethod, Edge, Axis, Curve, EdgeEffect, Color } from "./common";

/**
 * Used to set the status of the scroll bar.
 * @devices phone, tablet, car
 * @since 7
 */
 export declare enum BarState {
  /**
   * Not displayed.
   * @devices phone, tablet, car
   * @since 7
   */
  Off,

  /**
   * On-demand display (displayed when you touch it and disappears after 2 seconds).
   * @devices phone, tablet, car
   * @since 7
   */
  Auto,

  /**
   * Resident display.
   * @devices phone, tablet, car
   * @since 7
   */
  On
}

/**
 * Content scroll direction.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ScrollDirection {
  /**
   * Vertical scrolling is supported.
   * @devices phone, tablet, car
   * @since 7
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   * @devices phone, tablet, car
   * @since 7
   */
  Horizontal,

  /**
   * Free scrolling is supported.
   * @devices phone, tablet, car
   * @since 7
   */
  Free,

  /**
   * Non-scrollable.
   * @devices phone, tablet, car
   * @since 7
   */
  None
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class Scroller {
  /**
   * constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();

  /**
   * Called when the setting slides to the specified position.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollTo(value: {
    xOffset: number | string, yOffset: number | string, animation?: { duration: number, curve: Curve }
  });

  /**
   * Called when scrolling to the edge of the container.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollEdge(value: Edge);

  /**
   * Called when page turning mode is set.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollPage(value: { next: boolean, direction?: Axis });

  /**
   * Called when viewing the scroll offset.
   * @devices phone, tablet, car
   * @since 7
   */
  currentOffset();

  /**
   * Called when sliding to the specified index.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollToIndex(value: number);
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ScrollExtend<T> extends ScrollAttribute<T> {
}

/**
 * Provides interfaces for scrollable containers.
 * @devices phone, tablet, car
 * @since 7
 */
interface Scroll extends ScrollAttribute<Scroll> {
  /**
   * Called when a scrollable container is set.
   * @devices phone, tablet, car
   * @since 7
   */
  (scroller?: Scroller): Scroll;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class ScrollAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the scroll method is slid.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollable(value: ScrollDirection): T;

  /**
   * Called when the setting slides to the specified position.
   * @devices phone, tablet, car
   * @since 7
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): T;

  /**
   * Called when scrolling to the edge of the container.
   * @devices phone, tablet, car
   * @since 7
   */
  onScrollEdge(event: (side: Edge) => void): T;

  /**
   * Called when scrolling has stopped.
   * @devices phone, tablet, car
   * @since 7
   */
  onScrollEnd(event: () => void): T;

  /**
   * Called when the status of the scroll bar is set.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollBar(barState: BarState): T;

  /**
   * Called when the color of the scroll bar is set.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollBarColor(color: Color | number | string): T;

  /**
   * Called when the width of the scroll bar is set.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Called when the sliding effect is set.
   * @devices phone, tablet, car
   * @since 7
   */
  edgeEffect(edgeEffect: EdgeEffect): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ScrollInterface: Scroll;
