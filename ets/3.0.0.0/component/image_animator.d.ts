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

import {CommonMethod, AnimationStatus} from "./common";

/**
 * The frame animation component is provided to play pictures frame by frame.
 * You can configure the list of pictures to be played and configure the duration for each picture.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ImageAnimatorExtend<T> extends ImageAnimatorAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface ImageAnimator extends ImageAnimatorAttribute<ImageAnimator> {
  /**
   * ImageAimator is returned.
   * @devices phone, tablet, car
   * @since 7
   */
  (): ImageAnimator;
}

/**
 * inheritance CommonMethod
 * @devices phone, tablet, car
 * @since 7
 */
declare class ImageAnimatorAttribute<T> extends CommonMethod<T> {
  /**
   * list images
   * @devices phone, tablet, car
   * @since 7
   */
  images(value: Array<{
    src: string, width?: number | string, height?: number | string, top?: number | string, left?:
      number | string, duration?: number
  }>): T;

  /**
   * The default value is the initial state, which is used to control the playback status.
   * @devices phone, tablet, car
   * @since 7
   */
  state(value: AnimationStatus): T;

  /**
   * The unit is millisecond.
   * @devices phone, tablet, car
   * @since 7
   */
  duration(value: number): T;

  /**
   * Set the playback sequence.
   * @devices phone, tablet, car
   * @since 7
   */
  reverse(value: boolean): T;

  /**
   * Sets whether the image size is fixed to the component size.
   * @devices phone, tablet, car
   * @since 7
   */
  fixedSize(value: boolean): T;

  /**
   * Indicates whether to enable pre-decoding.
   * @devices phone, tablet, car
   * @since 7
   */
  preDecode(value: number): T;

  /**
   * Sets the state before and after the animation starts
   * @devices phone, tablet, car
   * @since 7
   */
  fillMode(value: FillMode): T;

  /**
   * Played once by default
   * @devices phone, tablet, car
   * @since 7
   */
  iterations(value: number): T;

  /**
   * Status callback, which is triggered when the animation starts to play.
   * @devices phone, tablet, car
   * @since 7
   */
  onStart(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation pauses.
   * @devices phone, tablet, car
   * @since 7
   */
  onPause(event: () => void): T;

  /**
   * Status callback, triggered when the animation is replayed
   * @devices phone, tablet, car
   * @since 7
   */
  onRepeat(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation is canceled.
   * @devices phone, tablet, car
   * @since 7
   */
  onCancel(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation playback is complete.
   * @devices phone, tablet, car
   * @since 7
   */
  onFinish(event: () => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ImageAnimatorInterface: ImageAnimator;
