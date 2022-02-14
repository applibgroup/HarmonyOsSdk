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
 * Sets the initial state of the slidable panel.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum PanelMode {
  /**
   * Minimum state.
   * @devices phone, tablet, car
   * @since 7
   */
  Mini,

  /**
   * SHalf-screen-like status
   * @devices phone, tablet, car
   * @since 7
   */
  Half,

  /**
   * Class Full Screen Status.
   * @devices phone, tablet, car
   * @since 7
   */
  Full
}

/**
 * Sets the type of sliding panel.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum PanelType {
  /**
   * The switch between the minibar and full-screen display is provided.
   * @devices phone, tablet, car
   * @since 7
   */
  Minibar,

  /**
   * Permanent content display class.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @devices phone, tablet, car
   * @since 7
   */
  Foldable,

  /**
   * Temporary content display area.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @devices phone, tablet, car
   * @since 7
   */
  Temporary
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PanelExtend<T> extends PanelAttribute<T> {
}

/**
 * Provides a sliding panel interface.
 * @devices phone, tablet, car
 * @since 7
 */
interface Panel extends PanelAttribute<Panel> {
  /**
   * Called when the panel slidable panel pops up.
   * @devices phone, tablet, car
   * @since 7
   */
  (show: boolean): Panel;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class PanelAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the initial state of the slidable panel is set.
   * @devices phone, tablet, car
   * @since 7
   */
  mode(value: PanelMode): T;

  /**
   * Called when the slidable panel type is set.
   * @devices phone, tablet, car
   * @since 7
   */
  type(value: PanelType): T;

  /**
   * Called when determining whether dragbar exists.
   * @devices phone, tablet, car
   * @since 7
   */
  dragBar(value: boolean): T;

  /**
   * Called when the height in the full state is specified.
   * @devices phone, tablet, car
   * @since 7
   */
  fullHeight(value: number | string): T;

  /**
   * Called when the height in the half state is specified.
   * @devices phone, tablet, car
   * @since 7
   */
  halfHeight(value: number | string): T;

  /**
   * Called when the height in the mini state is specified.
   * @devices phone, tablet, car
   * @since 7
   */
  miniHeight(value: number | string): T;

  /**
   * Called when the state of the slidable panel changes.
   * @devices phone, tablet, car
   * @since 7
   */
  onChange(event: (
    /**
     * Width of content area.
     * @devices phone, tablet, car
     * @since 7
     */
    width?: number,
    /**
     * Height of content area.
     * @devices phone, tablet, car
     * @since 7
     */
    height?: number,
    /**
     * Initial state.
     * @devices phone, tablet, car
     * @since 7
     */
    mode?: PanelMode) => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PanelInterface: Panel;
