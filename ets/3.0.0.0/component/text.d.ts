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
 * Text style
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum FontStyle {
  /**
   * Default style.
   * @devices phone, tablet, car
   * @since 7
   */
  Normal,

  /**
   * Italic style.
   * @devices phone, tablet, car
   * @since 7
   */
  Italic
}

/**
 * The font weight of the text
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum FontWeight {
  /**
   * Defines a lighter value than [Inherited Value]..
   * @devices phone, tablet, car
   * @since 7
   */
  Lighter,

  /**
   * Normal font. Equivalent to a digital value of 400.
   * @devices phone, tablet, car
   * @since 7
   */
  Normal,

  /**
   * Defines a more general value than [Inherited Value].
   * @devices phone, tablet, car
   * @since 7
   */
  Regular,

  /**
   * Defines a value that is more centered than [Inherited Value].
   * @devices phone, tablet, car
   * @since 7
   */
  Medium,

  /**
   * Bold. Equivalent to a numeric value of 700.
   * @devices phone, tablet, car
   * @since 7
   */
  Bold,

  /**
   * Defines a value that is heavier than [Inherited Value].
   * @devices phone, tablet, car
   * @since 7
   */
  Bolder
}

/**
 * Alignment of text.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum TextAlign {
  /**
   * Center the text.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * The text is aligned in the same direction as the writing
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * The text is aligned in the opposite direction of writing
   * @devices phone, tablet, car
   * @since 7
   */
  End
}

/**
 * Declare how text overflows.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum TextOverflow {
  /**
   * When the text is too long, it will be cropped and displayed.
   * @devices phone, tablet, car
   * @since 7
   */

  Clip,
  /**
   * If the text is too long, the text that cannot be displayed shall be replaced by ellipsis.
   * @devices phone, tablet, car
   * @since 7
   */

  Ellipsis,

  /**
   * Text is not cropped when it is too long.
   * @devices phone, tablet, car
   * @since 7
   */
  None
}

/**
 * Type of text modifier.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum TextDecorationType {
  /**
   * Do not use text decorative lines.
   * @devices phone, tablet, car
   * @since 7
   */
  None,

  /**
   * Underline the words.
   * @devices phone, tablet, car
   * @since 7
   */
  Underline,

  /**
   * Text is in all uppercase.
   * @devices phone, tablet, car
   * @since 7
   */
  Overline,

  /**
   * A modifier line that passes through the text.
   * @devices phone, tablet, car
   * @since 7
   */
  LineThrough
}

/**
 * Letter type in text
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum TextCase {
  /**
   * The default is normal.
   * @devices phone, tablet, car
   * @since 7
   */
  Normal,

  /**
   * The text is all lowercase.
   * @devices phone, tablet, car
   * @since 7
   */
  LowerCase,

  /**
   * Text is in all uppercase.
   * @devices phone, tablet, car
   * @since 7
   */
  UpperCase
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class TextExtend<T> extends TextAttribute<T> {
}

/**
 * Provides an interface for writing texts.
 * @devices phone, tablet, car
 * @since 7
 */
interface Text extends TextAttribute<Text> {
  /**
   * Called when writing text.
   * @devices phone, tablet, car
   * @since 7
   */
  (content?: string | Resource): Text;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class TextAttribute<T> extends CommonMethod<T> {
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
   * Called when the minimum font size of the font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  minFontSize(value: number | string | Resource): T;

  /**
   * Called when the maximum font size of the font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  maxFontSize(value: number | string | Resource): T;

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
   * Called when the horizontal center mode of the font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  textAlign(value: TextAlign): T;

  /**
   * Called when the vertical center mode of the font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  lineHeight(value: number | string | Resource): T;

  /**
   * Called when the overflow mode of the font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  textOverflow(value: { overflow: TextOverflow }): T;

  /**
   * Called when the font list of text is set.
   * @devices phone, tablet, car
   * @since 7
   */
  fontFamily(value: string | Resource): T;

  /**
   * Called when the maximum number of lines of text is set.
   * @devices phone, tablet, car
   * @since 7
   */
  maxLines(value: number): T;

  /**
   * Called when the text decoration of the text is set.
   * @devices phone, tablet, car
   * @since 7
   */
  decoration(value: { type: TextDecorationType, color?: Color | number | string | Resource }): T;

  /**
   * Called when the distance between text fonts is set.
   * @devices phone, tablet, car
   * @since 7
   */
  letterSpacing(value: number | string): T;

  /**
   * Called when the type of letter in the text font is set.
   * @devices phone, tablet, car
   * @since 7
   */
  textCase(value: TextCase): T;

  /**
   * Called when the baseline offset is set.
   * @devices phone, tablet, car
   * @since 7
   */
  baselineOffset(value: number | string): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const TextInterface: Text;
