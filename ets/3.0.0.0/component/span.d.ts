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
import {FontStyle, FontWeight, TextDecorationType, TextCase} from "./text";

/**
 * Declaration extension.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class SpanExtend<T> extends SpanAttribute<T> {
}

/**
 * Provide text decoration.
 * @devices phone, tablet, car
 * @since 7
 */
interface Span extends SpanAttribute<Span> {
  /**
   * Called when text is entered in span.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: string | Resource): Span;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class SpanAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the font color is set.
   * @devices phone, tablet, car
   * @since 7
   */
  fontColor(value: Color | number | string | Resource): T;

  /**
   * Called when the font size is set.
   * @devices phone, tablet, car
   * @since 7
   */
  fontSize(value: number | string | Resource): T;

  /**
   * Called when the font style of a font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  fontStyle(value: FontStyle): T;

  /**
   * Called when the font weight is set.
   * @devices phone, tablet, car
   * @since 7
   */
  fontWeight(value: number | FontWeight | string): T;

  /**
   * Called when the font list of text is set.
   * @devices phone, tablet, car
   * @since 7
   */
  fontFamily(value: string | Resource): T;

  /**
   * Called when the text decoration of the text is set.
   * @devices phone, tablet, car
   * @since 7
   */
  decoration(value: { type: TextDecorationType, color?: Color | number | string | Resource}): T;

  /**
   * Called when the distance between text fonts is set.
   * @devices phone, tablet, car
   * @since 7
   */
  letterSpacing(value: number | string): T;

  /**
   * Called when the type of letter in the text font is set.
   * @devices phone, tablet, car
   */
  textCase(value: TextCase): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const SpanInterface: Span;
