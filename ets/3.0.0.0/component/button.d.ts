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

import {CommonMethod, Color, Resource} from "./common"
import {FontWeight} from "./text"

/**
 * Provides a button component.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ButtonType {
  /**
   * Capsule button (rounded corners default to half the height).
   * @devices phone, tablet, car
   * @since 7
   */
  Capsule,

  /**
   * Round buttons.
   * @devices phone, tablet, car
   * @since 7
   */
  Circle,

  /**
   * Common button (no rounded corners by default).
   * @devices phone, tablet, car
   * @since 7
   */
  Normal
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ButtonExtend<T> extends ButtonAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface Button extends ButtonAttribute<Button> {
  /**
   * Button object
   * @devices phone, tablet, car
   * @since 7
   */
  (): Button;

  /**
   * Describes the button style.
   * stateEffect: Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @devices phone, tablet, car
   * @since 7
   */
  (options: { type?: ButtonType, stateEffect?: boolean }): Button;

  /**
   * Button text content.
   * type: Describes the button style.
   * stateEffect: Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @devices phone, tablet, car
   * @since 7
   */
  (label: string | Resource, options?: { type?: ButtonType, stateEffect?: boolean }): Button;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class ButtonAttribute<T> extends CommonMethod<T> {
  /**
   * Describes the button style.
   * @devices phone, tablet, car
   * @since 7
   */
  type(value: ButtonType): T;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @devices phone, tablet, car
   * @since 7
   */
  stateEffect(value: boolean): T;

  /**
   * Text color.
   * @devices phone, tablet, car
   * @since 7
   */
  fontColor(value: Color | number | string | Resource): T;

  /**
   * Text size.
   * @devices phone, tablet, car
   * @since 7
   */
  fontSize(value: number | string | Resource): T;

  /**
   * fonse weight
   * @devices phone, tablet, car
   * @since 7
   */
  fontWeight(value: number | FontWeight | string): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ButtonInterface: Button
