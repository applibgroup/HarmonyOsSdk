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

import {CommonMethod, AnimationStatus, Curve, FillMode, PlayMode} from "./common";

/**
 * Customize spring properties.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class SpringProp {
  /**
   * Constructor parameters
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(mass: number, stiffness: number, damping: number);
}

/**
 * Spring animation model. You can build a spring animation based on the start point, end point, initial speed, and spring attributes.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class SpringMotion {
  /**
   * Constructor parameters
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(start: number, end: number, velocity: number, prop: SpringProp);
}

/**
 * Friction animation model. You can build friction animation by friction force, initial position, and initial velocity.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class FrictionMotion {
  /**
   * Constructor parameters
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(friction: number, position: number, velocity: number);
}

/**
 * Rolling animation model: You can build rolling animation based on the initial position, initial speed, boundary position, and spring attributes.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class ScrollMotion {
  /**
   * Constructor parameters
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(position: number, velocity: number, min: number, max: number, prop: SpringProp);
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class AnimatorExtend<T> extends AnimatorAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface Animator extends AnimatorAttribute<Animator> {
  (value: string): Animator;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class AnimatorAttribute<T> extends CommonMethod<T> {
  /**
   * Controls the playback status. The default value is the initial state.
   * @devices phone, tablet, car
   * @since 7
   */
  state(value: AnimationStatus): T;

  /**
   * Animation duration, in milliseconds.
   * @devices phone, tablet, car
   * @since 7
   */
  duration(value: number): T;

  /**
   * Animation curve, default to linear curve
   * @devices phone, tablet, car
   * @since 7
   */
  curve(value: Curve): T;

  /**
   * Delayed animation playback duration, in milliseconds. By default, the animation is not delayed.
   * @devices phone, tablet, car
   * @since 7
   */
  delay(value: number): T;

  /**
   * Sets the state before and after the animation starts.
   * @devices phone, tablet, car
   * @since 7
   */
  fillMode(value: FillMode): T;

  /**
   * The default playback is once. If the value is -1, the playback is unlimited.
   * @devices phone, tablet, car
   * @since 7
   */
  iterations(value: number): T;

  /**
   * Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.
   * @devices phone, tablet, car
   * @since 7
   */
  playMode(value: PlayMode): T;

  /**
   * Configure the physical animation algorithm.
   * @devices phone, tablet, car
   * @since 7
   */
  motion(value: SpringMotion | FrictionMotion | ScrollMotion): T;

  /**
   * Status callback, which is triggered when the animation starts to play.
   * @devices phone, tablet, car
   * @since 7
   */
  onStart(event: () => void): T;

  /**
   * Status callback, triggered when the animation pauses.
   * @devices phone, tablet, car
   * @since 7
   */
  onPause(event: () => void): T;

  /**
   * Status callback, triggered when the animation is replayed.
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

  /**
   * The callback input parameter is the interpolation during animation playback.
   * @devices phone, tablet, car
   * @since 7
   */
  onFrame(event: (value: number) => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const AnimatorInterface: Animator;