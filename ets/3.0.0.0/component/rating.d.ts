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
 * Scoring bar
 * @devices phone, tablet, car
 * @since 7
 */
export declare class RatingExtend<T> extends RatingAttribute<T> {
}

/**
 * Provides the interface for scoring bars.
 * @devices phone, tablet, car
 * @since 7
 */
interface Rating extends RatingAttribute<Rating> {
  /**
   * Called when a score bar is created.
   * @devices phone, tablet, car
   * @since 7
   */
  (options?: { rating: number, indicator?: boolean }): Rating;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class RatingAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the total number of stars is set.
   * @devices phone, tablet, car
   * @since 7
   */
  stars(value: number): T;

  /**
   * Called when the step size of the operation rating.
   * @devices phone, tablet, car
   * @since 7
   */
  stepSize(value: number): T;

  /**
   * Called when a picture is set.
   * @devices phone, tablet, car
   * @since 7
   */
  starStyle(value: {
    backgroundUri: string,
    foregroundUri: string,
    secondaryUri?: string}): T;

  /**
   * Called when the star rating of the operation scoring bar changes.
   * @devices phone, tablet, car
   * @since 7
   */
  onChange(callback:(value: number) => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const RatingInterface: Rating;