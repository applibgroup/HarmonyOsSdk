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
import {FontWeight, FontStyle} from "./text";

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum IndexerAlign {
  /**
   * A dialog box is displayed on the right of the index bar.
   * @devices phone, tablet, car
   * @since 7
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   * @devices phone, tablet, car
   * @since 7
   */
  Right
}

/**
 * Alphabet index bar.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class AlphabetIndexerExtend<T> extends AlphabetIndexerAttribute<T> {
}

/**
 * Alphabet index bar.
 * @devices phone, tablet, car
 * @since 7
 */
interface AlphabetIndexer extends AlphabetIndexerAttribute<AlphabetIndexer> {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: { arrayValue: Array<string>, selected: number }): AlphabetIndexer;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class AlphabetIndexerAttribute<T> extends CommonMethod<T> {
  /**
   * Index bar selection callback.
   * @devices phone, tablet, car
   * @since 7
   */
  onSelected(event: (index: number) => void): T;

  /**
   * Definitions color.
   * @devices phone, tablet, car
   * @since 7
   */
  color(value: Color | number | string | Resource): T;

  /**
   * Select the text color.
   * @devices phone, tablet, car
   * @since 7
   */
  selectedColor(value: Color | number | string | Resource): T;

  /**
   * Font color of the pop-up prompt text.
   * @devices phone, tablet, car
   * @since 7
   */
  popupColor(value: Color | number | string | Resource): T;

  /**
   * Select the text background color.
   * @devices phone, tablet, car
   * @since 7
   */
  selectedBackgroundColor(value: Color | number | string | Resource): T;

  /**
   * Background color of the pop-up window index.
   * @devices phone, tablet, car
   * @since 7
   */
  popupBackground(value: Color | number | string | Resource): T;

  /**
   * Whether to use pop-up index hints.
   * @devices phone, tablet, car
   * @since 7
   */
  usingPopup(value: boolean): T;

  /**
   * Select the text text style,
   * @devices phone, tablet, car
   * @since 7
   */
  selectedFont(value: { size?: number, weight?: FontWeight, family?: string, style?: FontStyle }): T;

  /**
   * Select the text background color.
   * @devices phone, tablet, car
   * @since 7
   */
  popupFont(value: { size?: number, weight?: FontWeight, family?: string, style?: FontStyle }): T;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * @devices phone, tablet, car
   * @since 7
   */
  itemSize(value: string | number): T;

  /**
   * Definitions fonts.
   * @devices phone, tablet, car
   * @since 7
   */
  font(value: { size?: number, weight?: FontWeight, family?: string, style?: FontStyle }): T;

  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported, which affects the pop-up position of the pop-up window.
   * @devices phone, tablet, car
   * @since 7
   */
  alignStyle(value: IndexerAlign): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const AlphabetIndexerInterface: AlphabetIndexer;
