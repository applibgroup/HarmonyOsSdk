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

import {CommonMethod, Axis, Color, Resource, BarState, EdgeEffect} from "./common";
import {Scroller} from "./scroll";

/**
 * Declare scroll status
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ScrollState {
  /**
   * Not activated.
   * @devices phone, tablet, car
   * @since 7
   */
  Idle,

  /**
   * Scrolling status.
   * @devices phone, tablet, car
   * @since 7
   */
  Scroll,

  /**
   * Drag status.
   * @devices phone, tablet, car
   * @since 7
   */
  Fling
}

/**
 * ListExtend extension declaration.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ListExtend<T> extends ListAttribute<T> {
}

/**
 * The list interface is extended.
 * @devices phone, tablet, car
 * @since 7
 */
interface List extends ListAttribute<List> {
  /**
   * Called when interface data is called.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { initialIndex?: number, space?: number | string, scroller?: Scroller }): List;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class ListAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the arrangement direction of the list component is set.
   * @devices phone, tablet, car
   * @since 7
   */
  listDirection(value: Axis): T;

  /**
   * Called when the display mode of the side slider is set.
   * @devices phone, tablet, car
   * @since 7
   */
  scrollBar(value: BarState): T;

  /**
   * Called when the sliding effect is set.
   * @devices phone, tablet, car
   * @since 7
   */
  edgeEffect(value: EdgeEffect): T;

  /**
   * Called when the ListItem split line style is set.
   * @devices phone, tablet, car
   * @since 7
   */
  divider(value: {
    strokeWidth: number | string | Resource, color?: Color | number | string | Resource,
    startMargin?: number | string | Resource, endMargin?: number | string | Resource
  } | null): T;

  /**
   * Called when judging whether it is in editable mode.
   * @devices phone, tablet, car
   * @since 7
   */
  editMode(value: boolean): T;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @devices phone, tablet, car
   * @since 7
   */
  cachedCount(value: number): T;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @devices phone, tablet, car
   */
  chainAnimation(value: boolean): T;

  /**
   * Called when the offset and status callback of the slide are set.
   * @devices phone, tablet, car
   * @since 7
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T;

  /**
   * Called when the start and end positions of the display change.
   * @devices phone, tablet, car
   * @since 7
   */
  onScrollIndex(event: (start: number, end: number) => void): T;

  /**
   * Called when the list begins to arrive.
   * @devices phone, tablet, car
   * @since 7
   */
  onReachStart(event: () => void): T;

  /**
   * Called when the list reaches the end.
   * @devices phone, tablet, car
   * @since 7
   */
  onReachEnd(event: () => void): T;

  /**
   * Called when the slider stops.
   * @devices phone, tablet, car
   * @since 7
   */
  onScrollStop(event: () => void): T;

  /**
   * Called when a list item is deleted.
   * @devices phone, tablet, car
   * @since 7
   */
  onItemDelete(event: (index: number) => boolean): T;

  /**
   * Called when a list item is moved.
   * @devices phone, tablet, car
   * @since 7
   */
  onItemMove(event: (from: number, to: number) => boolean): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ListInterface: List;
