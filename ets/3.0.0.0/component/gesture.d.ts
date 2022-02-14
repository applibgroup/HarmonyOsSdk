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

/**
 * Creating an Object
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum GestureDirection {
  /**
   * Sliding in all directions.
   * @devices phone, tablet, car
   * @since 7
   */
  All,

  /**
   * Sliding horizontally.
   * @devices phone, tablet, car
   * @since 7
   */
  Horizontal,

  /**
   * Sliding Vertical
   * @devices phone, tablet, car
   * @since 7
   */
  Vertical
}

/**
 * Creating an Object
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum PanDirection {
  /**
   * Default.
   * @devices phone, tablet, car
   * @since 7
   */
  None,

  /**
   * Sliding horizontally.
   * @devices phone, tablet, car
   * @since 7
   */
  Horizontal,

  /**
   * Sliding left.
   * @devices phone, tablet, car
   * @since 7
   */
  Left,

  /**
   * Sliding right.
   * @devices phone, tablet, car
   * @since 7
   */
  Right,

  /**
   * Sliding Vertical
   * @devices phone, tablet, car
   * @since 7
   */
  Vertical,

  /**
   * Sliding up.
   * @devices phone, tablet, car
   * @since 7
   */
  Up,

  /**
   * Sliding Down.
   * @devices phone, tablet, car
   * @since 7
   */
  Down,

  /**
   * Sliding in all directions.
   * @devices phone, tablet, car
   * @since 7
   */
  All
}


/**
 * Creating an Object
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum GestureMode {

  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   * @devices phone, tablet, car
   * @since 7
   */
  Sequence,

  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   * @devices phone, tablet, car
   * @since 7
   */
  Parallel,

  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   * @devices phone, tablet, car
   * @since 7
   */
  Exclusive
}

/**
 * Creating an Object
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum GestureMask {

  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   * @devices phone, tablet, car
   * @since 7
   */
  Normal,

  /**
   * Ignore internal gestures and recognize the current gesture first.
   * @devices phone, tablet, car
   * @since 7
   */
  IgnoreInternal
}

/**
 * Creating an Object
 * @devices phone, tablet, car
 * @since 7
 */
export declare type GestureType =
/**
 * Set a type value.
 * @devices phone, tablet, car
 * @since 7
 */
  TapGesture
  | LongPressGesture
  | PanGesture
  | PinchGesture
  | RotationGesture
  | GestureGroup

export interface GestureEvent {
  /**
   * Indicates whether an event is triggered repeatedly. This parameter is used in the longpress scenario.
   * @devices phone, tablet, car
   * @since 7
   */
  repeat: boolean;

  /**
   * Gesture event offset X, which is used in the pan gesture triggering scenario.
   * @devices phone, tablet, car
   * @since 7
   */
  offsetX: number;

  /**
   * Gesture event offset Y, which is used in the pan gesture triggering scenario.
   * @devices phone, tablet, car
   * @since 7
   */
  offsetY: number;

  /**
   * Scaling ratio, which is used for triggering the pinch gesture.
   * @devices phone, tablet, car
   * @since 7
   */
  scale: number;

  /**
   * Rotation angle, which is used to trigger the rotation gesture..
   * @devices phone, tablet, car
   * @since 7
   */
  angle: number;

  /**
   * Event timestamp.
   * @devices phone, tablet, car
   * @since 7
   */
  timestamp: number;

  /**
   * Indicates whether an event is triggered repeatedly. This parameter is used in the longpress scenario.
   * @devices phone, tablet, car
   * @since 7
   */
  globalX: number;

  /**
   * Indicates whether an event is triggered repeatedly. This parameter is used in the longpress scenario.
   * @devices phone, tablet, car
   * @since 7
   */
  globalY: number;

  /**
   * Horizontal distance from the upper left corner of the touched component. The upper left corner of the component is the origin.
   * @devices phone, tablet, car
   * @since 7
   */
  localX: number;

  /**
   * Longitudinal distance from the upper left corner of the touched component. The upper left corner of the component is the origin.
   * @devices phone, tablet, car
   * @since 7
   */
  localY: number;

  /**
   * X-axis coordinate of the kneading center point, in pixels.
   * @devices phone, tablet, car
   * @since 7
   */
  pinchCenterX: number;

  /**
   * Y-axis coordinate of the kneading center point, in pixels.
   * @devices phone, tablet, car
   * @since 7
   */
  pinchCenterY: number;
}


/**
 * Creating an interface
 * @devices phone, tablet, car
 * @since 7
 */
interface TapGesture {
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { count?: number, fingers?: number }): TapGesture;

  /**
   * Tap gesture recognition success callback.
   * @devices phone, tablet, car
   * @since 7
   */
  onAction(event: (event?: GestureEvent) => void): TapGesture;
}

/**
 * Creating an interface
 * @devices phone, tablet, car
 * @since 7
 */
interface LongPressGesture {
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { fingers?: number, repeat?: boolean, duration?: number }): LongPressGesture;

  /**
   * LongPress gesture recognition success callback.
   * @devices phone, tablet, car
   * @since 7
   */
  onAction(event: (event?: GestureEvent) => void): LongPressGesture;

  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionEnd(event: (event?: GestureEvent) => void): LongPressGesture;

  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionCancel(event: () => void): LongPressGesture;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PanGestureOption {
  /**
   * Constructor parameters.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(value?: { fingers?: number, direction?: PanDirection, distance?: number });

  /**
   * Sets the direction attribute.
   * @devices phone, tablet, car
   * @since 7
   */
  setDirection(value: PanDirection);

  /**
   * Sets the setDistance attribute.
   * @devices phone, tablet, car
   * @since 7
   */
  setDistance(value: number);

  /**
   * Sets the setFingers attribute.
   * @devices phone, tablet, car
   * @since 7
   */
  setFingers(value: number);
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface PanGesture {
  /**
   * Set the value.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { fingers?: number, direction?: PanDirection, distance?: number } | PanGestureOption): PanGesture;

  /**
   * Pan gesture recognition success callback.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionStart(event: (event?: GestureEvent) => void): PanGesture;

  /**
   * Callback when the Pan gesture is moving.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionUpdate(event: (event?: GestureEvent) => void): PanGesture;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionEnd(event: (event?: GestureEvent) => void): PanGesture;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionCancel(event: () => void): PanGesture;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface PinchGesture {
  /**
   * Set the value.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { fingers?: number, distance?: number }): PinchGesture;

  /**
   * Pan gesture recognition success callback.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionStart(event: (event?: GestureEvent) => void): PinchGesture;

  /**
   * Callback when the Pan gesture is moving.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionUpdate(event: (event?: GestureEvent) => void): PinchGesture;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionEnd(event: (event?: GestureEvent) => void): PinchGesture;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionCancel(event: () => void): PinchGesture;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface RotationGesture {
  /**
   * Set the value.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { fingers?: number, angle?: number }): RotationGesture;

  /**
   * Pan gesture recognition success callback.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionStart(event: (event?: GestureEvent) => void): RotationGesture;

  /**
   * Callback when the Pan gesture is moving.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionUpdate(event: (event?: GestureEvent) => void): RotationGesture;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionEnd(event: (event?: GestureEvent) => void): RotationGesture;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @devices phone, tablet, car
   * @since 7
   */
  onActionCancel(event: () => void): RotationGesture;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface GestureGroup {
  /**
   * Return to Obtain GestureGroup.
   * @devices phone, tablet, car
   * @since 7
   */
  (mode: GestureMode, ...gesture: GestureType[]): GestureGroup;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @devices phone, tablet, car
   * @since 7
   */
  onCancel(event: () => void): GestureGroup;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const TapGestureInterface: TapGesture;

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const LongPressGestureInterface: LongPressGesture;

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PanGestureInterface: PanGesture;

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PinchGestureInterface: PinchGesture;

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const RotationGestureInterface: RotationGesture;

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const GestureGroupInterface: GestureGroup;
