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

import {GestureType, GestureMask} from "./gesture"
import {Circle} from "./circle";
import {Ellipse} from "./ellipse";
import {Path} from "./path";
import {Rect} from "./rect";

/**
 * Defining Component ClassDecorator
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Component: ClassDecorator;

/**
 * Defining Entry ClassDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Entry: ClassDecorator;

/**
 * Defining Observed ClassDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Observed: ClassDecorator;

/**
 * Defining Preview ClassDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Preview: ClassDecorator;

/**
 * Defining State PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const State: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ObjectLink: PropertyDecorator;

/**
 * Defining Provide PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Provide: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining Consume PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining StorageProp PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Watch: (value: string) => PropertyDecorator;

/**
 * Defining Builder MethodDecorator
 * @devices phone, tablet, car
 * @since 7
 */
export declare const Builder: MethodDecorator;

/**
 * Defining  CustomDialog ClassDecorator
 * @devices phone, tablet, car
 * @since 7
 */
export declare const CustomDialog: ClassDecorator;

/**
 * Defines the data type of the interface restriction.
 * @devices phone, tablet, car
 * @since 7
 */
export declare interface Resource {
  /**
   * Set id.
   * @devices phone, tablet, car
   * @since 7
   */
  readonly id: number;

  /**
   * Set type.
   * @devices phone, tablet, car
   * @since 7
   */
  readonly type: number;

  /**
   * Set params.
   * @devices phone, tablet, car
   * @since 7
   */
  readonly params?: any[];
}

/**
 * Defines the data type of the interface restriction.
 * @devices phone, tablet, car
 * @since 7
 */
export declare interface Configuration {
  /**
   * Set colorMode.
   * @devices phone, tablet, car
   * @since 7
   */
  readonly colorMode: string;

  /**
   * Set fontScale.
   * @devices phone, tablet, car
   * @since 7
   */
  readonly fontScale: number;
}

/**
 * Defining isSystemplugin Constants.
 * @devices phone, tablet, car
 * @since 7
 */
declare const isSystemplugin: Function;

/**
 * global $s function
 * @devices phone, tablet, car
 * @since 7
 */
declare function $s(value: string, params?: object | Array<any> | number): string;

/**
 * global $m function
 * @devices phone, tablet, car
 * @since 7
 */
declare function $m(value: string): string;

/**
 * global $r function
 * @devices phone, tablet, car
 * @since 7
 */
export declare function $r(value: string, ...params: any[]): Resource;

/**
 * global $rawfile function
 * @devices phone, tablet, car
 * @since 7
 */
export declare function $rawfile(value: string): Resource;

/**
 * Defining animation function.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function animateTo(value: {
  duration?: number, tempo?: number, curve?: Curve | string,
  delay?: number, iterations?: number, playMode?: PlayMode, onFinish?: () => void
}, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function vp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of vp.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function px2vp(value: number): number;

/**
 * Converts a number in fp units to a number in px.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function fp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of fp.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function px2fp(value: number): number;

/**
 * Converts a number in units of lpx to a number in units of px.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function lpx2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of lpx.
 * @devices phone, tablet, car
 * @since 7
 */
export declare function px2lpx(value: number): number;

/**
 * common enum of color
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Color {
  /**
   * White.
   * @devices phone, tablet, car
   * @since 7
   */
  White,

  /**
   * Black.
   * @devices phone, tablet, car
   * @since 7
   */
  Black,

  /**
   * Blue.
   * @devices phone, tablet, car
   * @since 7
   */
  Blue,

  /**
   * Brown.
   * @devices phone, tablet, car
   * @since 7
   */
  Brown,

  /**
   * Gray.
   * @devices phone, tablet, car
   * @since 7
   */
  Gray,

  /**
   * Green.
   * @devices phone, tablet, car
   * @since 7
   */
  Green,

  /**
   * Grey.
   * @devices phone, tablet, car
   * @since 7
   */
  Grey,

  /**
   * Orange.
   * @devices phone, tablet, car
   * @since 7
   */
  Orange,

  /**
   * color.
   * @devices phone, tablet, car
   * @since 7
   */
  Pink,

  /**
   * Red.
   * @devices phone, tablet, car
   * @since 7
   */
  Red,

  /**
   * Yellow.
   * @devices phone, tablet, car
   * @since 7
   */
  Yellow
}

/**
 * Image display mode
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ImageFit {
  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   * @devices phone, tablet, car
   * @since 7
   */
  Contain,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that both sides of the image are greater than or equal to the display boundary.
   * @devices phone, tablet, car
   * @since 7
   */
  Cover,

  /**
   * Adaptive display
   * @devices phone, tablet, car
   * @since 7
   */
  Auto,

  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   * @devices phone, tablet, car
   * @since 7
   */
  Fill,

  /**
   * Keep the aspect ratio displayed, and the image zooms out or remains unchanged.
   * @devices phone, tablet, car
   * @since 7
   */
  ScaleDown,

  /**
   * Keep the original size and display it in the center.
   * @devices phone, tablet, car
   * @since 7
   */
  None
}

/**
 * Border Style
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum BorderStyle {
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   * @devices phone, tablet, car
   * @since 7
   */
  Dotted,

  /**
   * Shows as a series of short square dashed lines.
   * @devices phone, tablet, car
   * @since 7
   */
  Dashed,

  /**
   * Shows as a solid line.
   * @devices phone, tablet, car
   * @since 7
   */
  Solid
}

/**
 * Line Join Style
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum LineJoinStyle {
  /**
   * Connect path segments using bevels.
   * @devices phone, tablet, car
   * @since 7
   */
  Miter,

  /**
   * Connect path segments using sharp corners.
   * @devices phone, tablet, car
   * @since 7
   */
  Round,

  /**
   * Connect path segments using fillets.
   * @devices phone, tablet, car
   * @since 7
   */
  Bevel
}

/**
 * Function Called by Touch
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum TouchType {
  /**
   * Triggered when the finger is pressed.
   * @devices phone, tablet, car
   * @since 7
   */
  Down,

  /**
   * Triggered when the finger is raised.
   * @devices phone, tablet, car
   * @since 7
   */
  Up,

  /**
   * Triggered when the finger presses on the screen.
   * @devices phone, tablet, car
   * @since 7
   */
  Move,

  /**
   * Triggers when the touch event cancels.
   * @devices phone, tablet, car
   * @since 7
   */
  Cancel
}

/**
 * Animation status.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum AnimationStatus {
  /**
   * Initial state of the animation.
   * @devices phone, tablet, car
   * @since 7
   */
  Initial,

  /**
   * The animation is playing.
   * @devices phone, tablet, car
   * @since 7
   */
  Running,

  /**
   * The animation is paused.
   * @devices phone, tablet, car
   * @since 7
   */
  Paused,

  /**
   * The animation is stopped.
   * @devices phone, tablet, car
   * @since 7
   */
  Stopped
}

/**
 * Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Curve {
  /**
   * Indicates that the speed of the animation is the same from start to finish.
   * @devices phone, tablet, car
   * @since 7
   */
  Linear,

  /**
   * Indicates that the animation starts at a low speed, then accelerates, and then slows down before it ends, CubicBezier(0.25, 0.1, 0.25, 1.0).
   * @devices phone, tablet, car
   * @since 7
   */
  Ease,

  /**
   * Indicates that the animation starts at a low speed, CubicBezier(0.42, 0.0, 1.0, 1.0).
   * @devices phone, tablet, car
   * @since 7
   */
  EaseIn,

  /**
   * Indicates that the animation ends at a low speed, CubicBezier(0.0, 0.0, 0.78, 1.0).
   * @devices phone, tablet, car
   * @since 7
   */
  EaseOut,

  /**
   * Indicates that the animation starts and ends at a slow speed, CubicBezier(0.42, 0.0, 0.78, 1.0).
   * @devices phone, tablet, car
   * @since 7
   */
  EaseInOut,

  /**
   * Slow-in, fast-out
   * @devices phone, tablet, car
   * @since 7
   */
  FastOutSlowIn,

  /**
   * Linear Out Slow In
   * @devices phone, tablet, car
   * @since 7
   */
  LinearOutSlowIn,

  /**
   * Fast OutL inear In.
   * @devices phone, tablet, car
   * @since 7
   */
  FastOutLinearIn,

  /**
   * Extreme Deceleration.
   * @devices phone, tablet, car
   * @since 7
   */
  ExtremeDeceleration,

  /**
   * Sharp.
   * @devices phone, tablet, car
   * @since 7
   */
  Sharp,

  /**
   * Rhythm.
   * @devices phone, tablet, car
   * @since 7
   */
  Rhythm,

  /**
   * Smooth.
   * @devices phone, tablet, car
   * @since 7
   */
  Smooth,

  /**
   * Damping curve, CubicBezier(0.2, 0.0, 0.2, 1.0).
   * @devices phone, tablet, car
   * @since 7
   */
  Friction
}

/**
 * Sets the state before and after the animation starts.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum FillMode {
  /**
   * Restores to the initial state after the playback is complete.
   * @devices phone, tablet, car
   * @since 7
   */
  None,

  /**
   * Retains the state at the end of the animation when the playback is complete.
   * @devices phone, tablet, car
   * @since 7
   */
  Forwards,

  /**
   * Applies the start attribute value for the period specified by animation-delay before the animation is displayed.
   * @devices phone, tablet, car
   * @since 7
   */
  Backwards,

  /**
   * Both forward and backward fill modes are applied.
   * @devices phone, tablet, car
   * @since 7
   */
  Both
}

/**
 * Play Mode
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum PlayMode {
  /**
   * The animation plays normally.
   * @devices phone, tablet, car
   * @since 7
   */
  Normal,

  /**
   * The animation plays backwards.
   * @devices phone, tablet, car
   * @since 7
   */
  Reverse,

  /**
   * The animation plays forward on odd numbers (1, 3, 7...) and backward on even numbers (2, 4, 6...).
   * @devices phone, tablet, car
   * @since 7
   */
  Alternate,

  /**
   * The animation plays backwards on odd numbers (1, 3, 7...) and forwards on even numbers (2, 4, 6...)..
   * @devices phone, tablet, car
   * @since 7
   */
  AlternateReverse
}

/**
 * This style allows you to set the window blurring degree and blurring style of the current component layout range,
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum BlurStyle {
  /**
   * Small range glow effect.
   * @devices phone, tablet, car
   * @since 7
   */
  SmallLight,

  /**
   * Medium range glow effect.
   * @devices phone, tablet, car
   * @since 7
   */
  MediumLight,

  /**
   * Wide range of luminous effects.
   * @devices phone, tablet, car
   * @since 7
   */
  LargeLight,

  /**
   * Super-range luminous effect.
   * @devices phone, tablet, car
   * @since 7
   */
  XlargeLight,

  /**
   * Small range of dark effects.
   * @devices phone, tablet, car
   * @since 7
   */
  SmallDark,

  /**
   * Medium range dark effect.
   * @devices phone, tablet, car
   * @since 7
   */
  MediumDark,

  /**
   * Wide range of dark effects.
   * @devices phone, tablet, car
   * @since 7
   */
  LargeDark,

  /**
   * Extra large range of dark effects.
   * @devices phone, tablet, car
   * @since 7
   */
  XlargeDark
}

/**
 * Type of a key.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum KeyType {
  /**
   * Press the key.
   * @devices phone, tablet, car
   * @since 7
   */
  Down,

  /**
   * The key is released.
   * @devices phone, tablet, car
   * @since 7
   */
  Up
}

/**
 * Type of the input device that triggers the current key.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum KeySource {
  /**
   * The input device type is unknown.
   * @devices phone, tablet, car
   * @since 7
   */
  Unknown,

  /**
   * Set Device Type to Keyboard.
   * @devices phone, tablet, car
   * @since 7
   */
  Keyboard,
}

/**
 * Edge.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Edge {
  /**
   * The top is centered horizontally.
   * @devices phone, tablet, car
   * @since 7
   */
  Top,

  /**
   * Center horizontal and vertical.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * The bottom is centered horizontally.
   * @devices phone, tablet, car
   * @since 7
   */
  Bottom,

  /**
   * Cross axis direction text baseline alignment.
   * @devices phone, tablet, car
   * @since 7
   */
  Baseline,

  /**
   * Align the head of the cross axis direction.
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * Middle
   * @devices phone, tablet, car
   * @since 7
   */
  Middle,

  /**
   * Align the head of the cross axis direction.
   * @devices phone, tablet, car
   * @since 7
   */
  End
}

/**
 * Set Weekend
 * @devices phone, tablet, car
 * @since 7
 */
declare enum Week {
  /**
   * Monday.
   * @devices phone, tablet, car
   * @since 7
   */
  Mon,

  /**
   * Tuesday.
   * @devices phone, tablet, car
   * @since 7
   */
  Tue,

  /**
   * Wednesday.
   * @devices phone, tablet, car
   * @since 7
   */
  Wed,

  /**
   * Thursday.
   * @devices phone, tablet, car
   * @since 7
   */
  Thur,

  /**
   * Friday.
   * @devices phone, tablet, car
   * @since 7
   */
  Fri,

  /**
   * Saturday.
   * @devices phone, tablet, car
   * @since 7
   */
  Sat,

  /**
   * Sunday.
   * @devices phone, tablet, car
   * @since 7
   */
  Sun,
}

/**
 * Sets the horizontal layout of elements.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Direction {
  /**
   * Elements are laid out from left to right.
   * @devices phone, tablet, car
   * @since 7
   */
  Ltr,

  /**
   * Elements are laid out from right to left.
   * @devices phone, tablet, car
   * @since 7
   */
  Rtl,

  /**
   * Use the default layout direction.
   * @devices phone, tablet, car
   * @since 7
   */
  Auto
}

/**
 * Sliding effect
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum EdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   * @devices phone, tablet, car
   * @since 7
   */
  Spring,

  /**
   * Fade.
   * @devices phone, tablet, car
   * @since 7
   */
  Fade,

  /**
   * Sliding to the edge has no effect.
   * @devices phone, tablet, car
   * @since 7
   */
  None
}

/**
 * The tap action triggers this method invocation.
 * @devices phone, tablet, car
 * @since 7
 */
export interface ClickEvent {
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   * @devices phone, tablet, car
   * @since 7
   */
  screenX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @devices phone, tablet, car
   * @since 7
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @devices phone, tablet, car
   * @since 7
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   * @devices phone, tablet, car
   * @since 7
   */
  y: number;

  /**
   * Event timestamp.
   * @devices phone, tablet, car
   * @since 7
   */
  timestamp: number;
}

/**
 * Type of the touch event.
 * @devices phone, tablet, car
 * @since 7
 */
export interface TouchObject {
  /**
   * Type of the touch event.
   * @devices phone, tablet, car
   * @since 7
   */
  type: TouchType;

  /**
   * Finger unique identifier.
   * @devices phone, tablet, car
   * @since 7
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @devices phone, tablet, car
   * @since 7
   */
  screenX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @devices phone, tablet, car
   * @since 7
   */
  screenY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @devices phone, tablet, car
   * @since 7
   */
  x: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @devices phone, tablet, car
   * @since 7
   */
  y: number;
}

/**
 * Touch Action Function Parameters
 * @devices phone, tablet, car
 * @since 7
 */
export interface TouchEvent {
  /**
   * Type of the touch event.
   * @since 7
   */
  type: TouchType;

  /**
   * All finger information.
   * @since 7
   */
  touches: TouchObject[];

  /**
   * Indicates the current changed finger information.
   * @devices phone, tablet, car
   * @since 7
   */
  changedTouches: TouchObject[];

  /**
   * Event timestamp.
   * @devices phone, tablet, car
   * @since 7
   */
  timestamp: number;

  /**
   * The blocking event pops up.
   * @devices phone, tablet, car
   * @since 7
   */
  stopPropagation?: () => void;
}

/**
 * Description of the PasteData object
 * @devices phone, tablet, car
 * @since 7
 */
interface PasteData {
  /**
   * Gets the clipboard text data.
   * @devices phone, tablet, car
   * @since 7
   */
  getPlainText(): string;

  /**
   * Sets the clipboard text data.
   * @devices phone, tablet, car
   * @since 7
   */
  setPlainText(value: string);
}

/**
 * Floating Window Object
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PixelMap {
  /**
   * release function.
   * @devices phone, tablet, car
   * @since 7
   */
  release(): void;
}

/**
 * DragEvent object description
 * @devices phone, tablet, car
 * @since 7
 */
interface DragEvent {
  /**
   * Gets the current clipboard data object.
   * @devices phone, tablet, car
   * @since 7
   */
  getPasteData(): PasteData;

  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @devices phone, tablet, car
   * @since 7
   */
  getX(): number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @devices phone, tablet, car
   * @since 7
   */
  getY(): number;

  /**
   * Obtains the drag description.
   * @devices phone, tablet, car
   * @since 7
   */
  getDescription(): string;

  /**
   * Set the drag description.
   * @devices phone, tablet, car
   * @since 7
   */
  setDescription(value: string);

  /**
   * Set the floating window object. Value: floating window object.
   * @devices phone, tablet, car
   * @since 7
   */
  setPixmap(value: PixelMap);
}

/**
 * KeyEvent object description:
 * @devices phone, tablet, car
 * @since 7
 */
export interface KeyEvent {
  /**
   * Type of a key.
   * @devices phone, tablet, car
   * @since 7
   */
  type: KeyType;

  /**
   * Key code of a key
   * @devices phone, tablet, car
   * @since 7
   */
  keyCode: number;

  /**
   * Key value of a key.
   * @devices phone, tablet, car
   * @since 7
   */
  keyText: string;

  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   * @devices phone, tablet, car
   * @since 7
   */
  keySource: KeySource;

  /**
   * Indicates the ID of the input device that triggers the current key.
   * @devices phone, tablet, car
   * @since 7
   */
  deviceId: number;

  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   * @devices phone, tablet, car
   * @since 7
   */
  metaKey: number;

  /**
   * Timestamp when the key was pressed.
   * @devices phone, tablet, car
   * @since 7
   */
  timestamp: number;

  /**
   * Block event bubbling.
   * @devices phone, tablet, car
   * @since 7
   */
  stopPropagation?: () => void;
}

/**
 * Alignment enumeration description.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Alignment {
  /**
   * Top Start.
   * @devices phone, tablet, car
   * @since 7
   */
  TopStart,

  /**
   * The top is centered horizontally.
   * @devices phone, tablet, car
   * @since 7
   */
  Top,

  /**
   * Top tail end.
   * @devices phone, tablet, car
   * @since 7
   */
  TopEnd,

  /**
   * The starting end is centered longitudinally.
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * Center horizontal and vertical.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * The tail end is centered longitudinally.
   * @devices phone, tablet, car
   * @since 7
   */
  End,

  /**
   * Bottom starting end.
   * @devices phone, tablet, car
   * @since 7
   */
  BottomStart,

  /**
   * The bottom is centered horizontally.
   * @devices phone, tablet, car
   * @since 7
   */
  Bottom,

  /**
   * Bottom end.
   * @devices phone, tablet, car
   * @since 7
   */
  BottomEnd
}

/**
 * TransitionType enumeration descriptio.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum TransitionType {
  /**
   * Specifies that the current transition action takes effect in all change scenarios of the component.
   * @devices phone, tablet, car
   * @since 7
   */
  All,

  /**
   * Specifies the insertion scenario in which the current transition action takes effect.
   * @devices phone, tablet, car
   * @since 7
   */
  Insert,

  /**
   * Specifies the deletion scenario in which the current transition action takes effect.
   * @devices phone, tablet, car
   * @since 7
   */
  Delete
}

/**
 * RelateType enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum RelateType {

  /**
   * Scales the current component to fill the parent component.
   * @devices phone, tablet, car
   * @since 7
   */
  FILL,

  /**
   * Scales the current component to fit the parent component.
   * @devices phone, tablet, car
   * @since 7
   */
  FIT
}

/**
 * Controls the display or hide of the current component
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Visibility {

  /**
   * Show
   * @devices phone, tablet, car
   * @since 7
   */
  Visible,

  /**
   * Hide, but participate in layout for placeholder.
   * @devices phone, tablet, car
   * @since 7
   */
  Hidden,

  /**
   * Hides but does not participate in layout and does not take place.
   * @devices phone, tablet, car
   * @since 7
   */
  None
}

/**
 * LineCapStyle enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum LineCapStyle {
  /**
   * The two ends of the dividing line are parallel lines.
   * @devices phone, tablet, car
   * @since 7
   */
  Butt,

  /**
   * The two ends of the dividing line are semicircles.
   * @devices phone, tablet, car
   * @since 7
   */
  Round,

  /**
   * Extends half a circle at the end of the path with a width equal to half the line width and a height equal to the line width.
   * @devices phone, tablet, car
   * @since 7
   */
  Square
}

/**
 * Axis enumeration description.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum Axis {
  /**
   * Longitudinal arrangement
   * @devices phone, tablet, car
   * @since 7
   */
  Vertical,

  /**
   * Horizontal arrangement.
   * @devices phone, tablet, car
   * @since 7
   */
  Horizontal
}

/**
 * HorizontalAlign enumeration description.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum HorizontalAlign {
  /**
   * Aligns the start end in the language direction.
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * Center alignment. The default alignment mode is used.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * Aligns the ends in the language direction.
   * @devices phone, tablet, car
   * @since 7
   */
  End
}

/**
 * FlexAlign enumeration description.
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum FlexAlign {
  /**
   * The element is aligned at the head of the principal axis,
   * the first element is aligned with the head of the row, and subsequent elements are aligned with the previous one.
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * The elements are centered in the direction of the principal axis,
   * and the first element is the same distance from the beginning of the row as the last element is from the end of the row.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * The element is aligned at the tail of the principal axis,
   * the last element is aligned at the end of the row, and the other elements are aligned with the next.
   * @devices phone, tablet, car
   * @since 7
   */
  End,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   * with the same distance between adjacent elements.
   * The first element aligns with the beginning of the line, and the last element aligns with the end of the line.
   * @devices phone, tablet, car
   * @since 7
   */
  SpaceBetween,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   *  with the same distance between adjacent elements. Half the distance between adjacent elements as the distance between
   * the first element and the distance between the last element and the end of the row.
   * @devices phone, tablet, car
   * @since 7
   */
  SpaceAround,

  /**
   * Elements in the Flex axis direction are evenly spaced.
   * The spacing between adjacent elements, the spacing between the first element and the beginning of the row,
   * and the spacing between the last element and the end of the row are the same.
   * @devices phone, tablet, car
   * @since 7
   */
  SpaceEvenly
}

/**
 * ItemAlign enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ItemAlign {
  /**
   * Use the default configuration in the Flex container.
   * @devices phone, tablet, car
   * @since 7
   */
  Auto,

  /**
   * The element is in the Flex container with the cross-axis direction head aligned.
   * @devices phone, tablet, car
   * @since 7
   */
  Start,

  /**
   * The element is centered in the Flex container with the cross axis direction aligned.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * The element is bottom aligned in the Flex container with the cross axis direction.
   * @devices phone, tablet, car
   * @since 7
   */
  End,

  /**
   * Element In the Flex container, the cross-axis direction text baseline is aligned.
   * @devices phone, tablet, car
   * @since 7
   */
  Baseline,

  /**
   * Element In a Flex container, the fill is stretched across the axis and, when no dimension is set, to the container size.
   * @devices phone, tablet, car
   * @since 7
   */
  Stretch
}

/**
 * FlexDirection enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum FlexDirection {
  /**
   * The main axis is consistent with the row direction as the layout mode.
   * @devices phone, tablet, car
   * @since 7
   */
  Row,

  /**
   * The main axis is consistent with the column direction as the layout mode.
   * @devices phone, tablet, car
   * @since 7
   */
  Column,

  /**
   * The layout is in the opposite direction to the Row direction.
   * @devices phone, tablet, car
   * @since 7
   */
  RowReverse,

  /**
   * Layout in the opposite direction to the column.
   * @devices phone, tablet, car
   * @since 7
   */
  ColumnReverse
}

/**
 * FlexWrap enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum FlexWrap {
  /**
   * The Flex container has a single row/column layout of elements, and children are allowed to go beyond the container.
   * @devices phone, tablet, car
   * @since 7
   */
  NoWrap,

  /**
   * The elements of the Flex container are arranged in multiple rows or columns, and the sub-items are allowed to exceed the container.
   * @devices phone, tablet, car
   * @since 7
   */
  Wrap,

  /**
   * The elements of the Flex container are arranged in reverse multiple rows/columns, and children are allowed to exceed the container.
   * @devices phone, tablet, car
   * @since 7
   */
  WrapReverse
}

/**
 * VerticalAlign enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum VerticalAlign {
  /**
   * Top alignment.
   * @devices phone, tablet, car
   * @since 7
   */
  Top,

  /**
   * Center alignment. The default alignment mode is used.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * Bottom alignment.
   * @devices phone, tablet, car
   * @since 7
   */
  Bottom
}

/**
 * ImageRepeat enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ImageRepeat {
  /**
   * Do not draw the picture again.
   * @devices phone, tablet, car
   * @since 7
   */
  NoRepeat,

  /**
   * Repeat the drawing only on the horizontal axis.
   * @devices phone, tablet, car
   * @since 7
   */
  X,

  /**
   * Repeat the drawing only on the vertical axis.
   * @devices phone, tablet, car
   * @since 7
   */
  Y,

  /**
   * Draw the picture repeatedly on both axes.
   * @devices phone, tablet, car
   * @since 7
   */
  XY
}

/**
 * ImageSize enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ImageSize {
  /**
   * Keep the scale of the original image unchanged.
   * @devices phone, tablet, car
   * @since 7
   */
  Auto,

  /**
   * Default value. Keep the aspect ratio to zoom in or out the image so that both sides of the image are greater than or equal to the display boundary.
   * @devices phone, tablet, car
   * @since 7
   */
  Cover,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   * @devices phone, tablet, car
   * @since 7
   */
  Contain
}

/**
 * GradientDirection enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum GradientDirection {
  /**
   * Right to left.
   * @devices phone, tablet, car
   * @since 7
   */
  Left,

  /**
   * From the bottom up.
   * @devices phone, tablet, car
   * @since 7
   */
  Top,

  /**
   * From left to right.
   * @devices phone, tablet, car
   * @since 7
   */
  Right,

  /**
   * From the top down.
   * @devices phone, tablet, car
   * @since 7
   */
  Bottom,

  /**
   * Top Left
   * @devices phone, tablet, car
   * @since 7
   */
  LeftTop,

  /**
   * Left Bottom
   * @devices phone, tablet, car
   * @since 7
   */
  LeftBottom,

  /**
   * Right Top
   * @devices phone, tablet, car
   * @since 7
   */
  RightTop,

  /**
   * Right Bottom
   * @devices phone, tablet, car
   * @since 7
   */
  RightBottom,

  /**
   * None
   * @devices phone, tablet, car
   * @since 7
   */
  None
}

/**
 * SharedTransitionEffectType enumeration description
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum SharedTransitionEffectType {
  /**
   * The location of the destination page element remains unchanged, and you can configure the transparency animation. Currently,
   * only the static effect configured for redirecting to the target page takes effect.
   * @devices phone, tablet, car
   * @since 7
   */
  Static,

  /**
   * Move the source page element to the destination page element location and scale it appropriately.
   * @devices phone, tablet, car
   * @since 7
   */
  Exchange
}

/**
 * CommonMethod
 * @devices phone, tablet, car
 * @since 7
 */
export declare class CommonMethod<T> {
  /**
   * constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();

  /**
   * Sets the width of the current component.
   * @devices phone, tablet, car
   * @since 7
   */
  width(value: number | string | Resource): T;

  /**
   * Sets the width of the current component.
   * @devices phone, tablet, car
   * @since 7
   */
  height(value: number | string | Resource): T;

  /**
   * The size of the high highlight.
   * @devices phone, tablet, car
   * @since 7
   */
  size(value: { width?: number | string | Resource, height?: number | string | Resource}): T;

  /**
   * constraint Size：
   * minWidth：minimum Width，maxWidth：maximum Width，minHeight：minimum Height ，maxHeight：maximum Height，
   * @devices phone, tablet, car
   * @since 7
   */
  constraintSize(value: { minWidth?: number | string | Resource, maxWidth?: number | string | Resource, minHeight?: number | string | Resource, maxHeight?: number | string | Resource}): T;

  /**
   * layout Weight
   * @devices phone, tablet, car
   * @since 7
   */
  layoutWeight(value: number | string): T;

  /**
   * Inner margin
   * @devices phone, tablet, car
   * @since 7
   */
  padding(value: { top?: number | string | Resource, right?: number | string | Resource, bottom?: number | string | Resource, left?: number | string  | Resource} | number | string | Resource): T;

  /**
   * Outer Margin
   * @devices phone, tablet, car
   * @since 7
   */
  margin(value: { top?: number | string | Resource, right?: number | string | Resource, bottom?: number | string | Resource, left?: number | string  | Resource} | number | string | Resource): T;

  /**
   * Background color
   * @devices phone, tablet, car
   * @since 7
   */
  backgroundColor(value: Color | number | string | Resource): T;

  /**
   * Background image
   * src: Image address url
   * @devices phone, tablet, car
   * @since 7
   */
  backgroundImage(src: string, repeat?: ImageRepeat): T;

  /**
   * Background image size
   * @devices phone, tablet, car
   * @since 7
   */
  backgroundImageSize(value: { width?: number | string, height?: number | string } | ImageSize): T;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   * @devices phone, tablet, car
   * @since 7
   */
  backgroundImagePosition(value: { x?: number | string, y?: number | string } | Alignment): T;

  /**
   * Opacity
   * @devices phone, tablet, car
   * @since 7
   */
  opacity(value: number | Resource): T

  /**
   * Opacity
   * width:Border width;color:Border color;radius:Border radius;
   * @devices phone, tablet, car
   * @since 7
   */
  border(value: { width?: number | string | Resource, color?: Color | number | string | Resource, radius?: number | string | Resource, style?: BorderStyle }): T;

  /**
   * Border style
   * @devices phone, tablet, car
   * @since 7
   */
  borderStyle(value: BorderStyle): T;

  /**
   * Border width
   * @devices phone, tablet, car
   * @since 7
   */
  borderWidth(value: number | string | Resource): T;

  /**
   * Border color
   * @devices phone, tablet, car
   * @since 7
   */
  borderColor(value: Color | number | string | Resource): T;

  /**
   * Border radius
   * @devices phone, tablet, car
   * @since 7
   */
  borderRadius(value: number | string | Resource): T;

  /**
   * Navigation title
   * @devices phone, tablet, car
   * @since 7
   */
  navigationTitle(value: string): T;

  /**
   * Navigation subtitle
   * @devices phone, tablet, car
   * @since 7
   */
  navigationSubTitle(value: string): T;

  /**
   * Hide navigation bar
   * @devices phone, tablet, car
   * @since 7
   */
  hideNavigationBar(value: boolean): T;

  /**
   * Hide navigation back button
   * @devices phone, tablet, car
   * @since 7
   */
  hideNavigationBackButton(value: boolean): T;

  /**
   * Tool bar
   * @devices phone, tablet, car
   * @since 7
   */
  toolBar(value: object): T;

  /**
   * Hide tool bar
   * @devices phone, tablet, car
   * @since 7
   */
  hideToolBar(value: boolean): T;

  /**
   * Trigger a click event when a click is clicked.
   * @devices phone, tablet, car
   * @since 7
   */
  onClick(event: (event?: ClickEvent) => void): T;

  /**
   * Trigger a touch event when touched.
   * @devices phone, tablet, car
   * @since 7
   */
  onTouch(event: (event?: TouchEvent) => void): T;

  /**
   * Mouse hover event
   * @devices phone, tablet, car
   * @since 7
   */
  onHover(event: (isHover?: boolean) => void): T;

  /**
   * Keyboard input
   * @devices phone, tablet, car
   * @since 7
   */
  onKeyEvent(event: (event?: KeyEvent) => void): T;

  /**
   * Pan event
   * @devices phone, tablet, car
   * @since 7
   */
  onPan(event: (event?: any) => void): T;

  /**
   * animation
   * @devices phone, tablet, car
   * @since 7
   */
  animation(value: {
    duration?: number,
    tempo?: number,
    curve?: Curve | string,
    delay?: number,
    iterations?: number,
    playMode?: PlayMode,
    onFinish?: () => void
  }): T;

  /**
   * Transition parameter
   * @devices phone, tablet, car
   * @since 7
   */
  transition(value: {
    type?: TransitionType, opacity?: number,
    translate?: { x?: number | string, y?: number | string, z?: number | string },
    scale?: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string },
    rotate?: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string, angle: number | string }
  }): T;

  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @devices phone, tablet, car
   * @since 7
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @devices phone, tablet, car
   * @since 7
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @devices phone, tablet, car
   * @since 7
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   * @devices phone, tablet, car
   * @since 7
   */
  blur(value: number): T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   * @devices phone, tablet, car
   * @since 7
   */
  brightness(value: number): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   * @devices phone, tablet, car
   * @since 7
   */
  contrast(value: number): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   * @devices phone, tablet, car
   * @since 7
   */
  grayscale(value: number): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   * @devices phone, tablet, car
   * @since 7
   */
  saturate(value: number): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   * @devices phone, tablet, car
   * @since 7
   */
  sepia(value: number): T;

  /**
   * Inverts the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   * @devices phone, tablet, car
   * @since 7
   */
  invert(value: number): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   * @devices phone, tablet, car
   * @since 7
   */
  hueRotate(value: number | string): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   * @devices phone, tablet, car
   * @since 7
   */
  backdropBlur(value: number): T;

  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   * @devices phone, tablet, car
   * @since 7
   */
  translate(value: { x?: number | string, y?: number | string, z?: number | string }): T;

  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   * @devices phone, tablet, car
   * @since 7
   */
  scale(value: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string }): T;

  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   * @devices phone, tablet, car
   * @since 7
   */
  gridSpan(value: number): T

  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   * @devices phone, tablet, car
   * @since 7
   */
  gridOffset(value: number): T

  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   * @devices phone, tablet, car
   * @since 7
   */
  rotate(value: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string, angle: number | string }): T;

  /**
   * Sets the transformation matrix for the current component.
   * @devices phone, tablet, car
   * @since 7
   */
  transform(value: object): T;

  /**
   * This callback is triggered when a component mounts a display.
   * @devices phone, tablet, car
   * @since 7
   */
  onAppear(event: () => void): T;

  /**
   * This callback is triggered when component uninstallation disappears.
   * @devices phone, tablet, car
   * @since 7
   */
  onDisAppear(event: () => void): T;

  /**
   * Controls the display or hide of the current component.
   * @devices phone, tablet, car
   * @since 7
   */
  visibility(value: Visibility): T;

  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   * @devices phone, tablet, car
   * @since 7
   */
  flexGrow(value: number): T;

  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   * @devices phone, tablet, car
   * @since 7
   */
  flexShrink(value: number): T;

  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   * @devices phone, tablet, car
   * @since 7
   */
  flexBasis(value: number | string): T;

  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   * @devices phone, tablet, car
   * @since 7
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   * @devices phone, tablet, car
   * @since 7
   */
  displayPriority(value: number): T;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   * @devices phone, tablet, car
   * @since 7
   */
  zIndex(value: number): T;

  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   * @devices phone, tablet, car
   * @since 7
   */
  sharedTransition(id: string, options?: {
    duration?: number,
    curve?: Curve | string,
    delay?: number,
    motionPath?: {
      path: string,
      from?: number,
      to?: number,
      rotatable?: boolean
    },
    zIndex?: number,
    type?: SharedTransitionEffectType,
  }): T;

  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   * @devices phone, tablet, car
   * @since 7
   */
  direction(value: Direction): T;

  /**
   * align
   * @devices phone, tablet, car
   * @since 7
   */
  align(value: Alignment): T;

  /**
   * position
   * @devices phone, tablet, car
   * @since 7
   */
  position(value: { x?: number | string | Resource, y?: number | string | Resource }): T;

  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   * @devices phone, tablet, car
   * @since 7
   */
  markAnchor(value: { x?: number | string | Resource, y?: number | string | Resource }): T;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   * @devices phone, tablet, car
   * @since 7
   */
  offset(value: { x?: number | string | Resource, y?: number | string | Resource }): T;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   * @devices phone, tablet, car
   * @since 7
   */
  enabled(value: boolean): T;

  /**
   * Sets the number of occupied columns and offset columns for a specific device width type.
   * @devices phone, tablet, car
   * @since 7
   */
  useSizeType(value: {
    xs?: number | { span: number, offset: number },
    sm?: number | { span: number, offset: number },
    md?: number | { span: number, offset: number },
    lg?: number | { span: number, offset: number }
  }): T;

  /**
   * Specifies the aspect ratio of the current component.
   * @devices phone, tablet, car
   * @since 7
   */
  aspectRatio(value: number): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @devices phone, tablet, car
   * @since 7
   */
  onDrag(event: (event?: DragEvent) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @devices phone, tablet, car
   * @since 7
   */
  onDragEnter(event: (event?: DragEvent) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @devices phone, tablet, car
   * @since 7
   */
  onDragMove(event: (event?: DragEvent) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @devices phone, tablet, car
   * @since 7
   */
  onDragLeave(event: (event?: DragEvent) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @devices phone, tablet, car
   * @since 7
   */
  onDrop(event: (event?: DragEvent) => void): T;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   * @devices phone, tablet, car
   * @since 7
   */
  overlay(value: string, options?: { align?: Alignment, offset?: { x?: number, y?: number } }): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
   * @devices phone, tablet, car
   * @since 7
   */
  linearGradient(value: { angle?: number | string, direction?: GradientDirection, colors: Array<any>, repeating?: boolean }): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient
   * end:End point of angle gradient
   * number:number
   * rotating:rotating
   * colors:Color description for gradients
   * repeating:repeating
   * @devices phone, tablet, car
   * @since 7
   */
  sweepGradient(value: { center: Array<any>, start?: number | string, end?: number | string, rotation?: number | string, colors: Array<any>, repeating?: boolean }): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient
   * colors:Color description for gradients
   * repeating: Refill
   * @devices phone, tablet, car
   * @since 7
   */
  radialGradient(value: { center: Array<any>, radius: number | string, colors: Array<any>, repeating?: boolean }): T;

  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatble:Whether to follow the path for rotation.
   * @devices phone, tablet, car
   * @since 7
   */
  motionPath(value: { path: string, from?: number, to?: number, rotatable?: boolean }): T;

  /**
   * Add a shadow effect to the current component
   * @devices phone, tablet, car
   * @since 7
   */
  shadow(value: { radius: number | Resource, color?: Color | string | Resource, offsetX?: number | Resource, offsetY?: number | Resource }): T;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   * @devices phone, tablet, car
   * @since 7
   */
  clip(value: boolean | Circle | Ellipse | Path | Rect): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   * @devices phone, tablet, car
   * @since 7
   */
  mask(value: Circle | Ellipse | Path | Rect): T;

  /**
   * Accessibility group. If this parameter is set to true, the component and all its subcomponents can be selected, and the accessibility service does not focus on the content of its subcomponents.
   * @devices phone, tablet, car
   * @since 7
   */
  accessibilityGroup(value: boolean): T;

  /**
   * Accessible text. When a component does not contain text attributes,
   * the screen reads aloud when the component is selected, and the user cannot clearly know what component is currently selected.
   * To solve this problem, developers can set an accessible text for a component that does not contain text information.
   * When the component is selected for screen reading, the content of the accessible text is broadcast, helping the user of screen reading clearly know which component is selected.
   * If the component has both text attributes and accessible text attributes,
   * only accessible text content is broadcast when the component is selected.
   * @devices phone, tablet, car
   * @since 7
   */
  accessibilityText(value: string): T;

  /**
   * Accessibility instructions are used to further explain the current component to the user, for example,
   * to help the user understand the possible consequences of the operation to be performed,
   * especially when these consequences cannot be learned from the attributes of the component itself and the accessibility text.
   * Developers can set relatively detailed explanatory text for this property of a component to help users understand what will be done.
   * If the component has both the text attribute and the accessibility attribute, when the component is selected,
   * the text attribute of the component is first broadcast, and then the content of the accessibility attribute is broadcast.
   * @devices phone, tablet, car
   * @since 7
   */
  accessibilityDescription(value: string): T;

  /**
   * Accessibility importance, which controls whether a component is identifiable by an accessible auxiliary service.
   * The value can be auto, yes, no, or no-hide-descendants.
   * (The last value causes screen reading to ignore the current component and all its subcomponents).
   * If this parameter is set to yes, the current component can be selected for accessibility auxiliary services.
   * If this parameter is set to no, the current component cannot be selected for accessibility auxiliary services.
   * @devices phone, tablet, car
   * @since 7
   */
  accessibilityImportance(value: string): T;

  /**
   * onAccessibility
   * @devices phone, tablet, car
   * @since 7
   */
  onAccessibility(callback: (event?: { eventType: number }) => void): T;

  /**
   * geometryTransition
   * @devices phone, tablet, car
   * @since 7
   */
  geometryTransition(id: string): T;

  /**
   * Popup control
   * @devices phone, tablet, car
   * @since 7
   */
  bindPopup(show: boolean, popup: {

    /**
     * Information in the pop-up window.
     * @devices phone, tablet, car
     * @since 7
     */
    message: string,

    /**
     * placement On Top
     * @devices phone, tablet, car
     * @since 7
     */
    placementOnTop?: boolean,

    /**
     * The first button.
     * @devices phone, tablet, car
     * @since 7
     */
    primaryButton?: {
      /**
       * Button text value
       * @devices phone, tablet, car
       * @since 7
       */
      value: string;

      /**
       * action
       * @devices phone, tablet, car
       * @since 7
       */
      action: () => void;
    };

    /**
     * The second button.
     * @devices phone, tablet, car
     * @since 7
     */
    secondaryButton?: {

      /**
       * Button text value
       * @devices phone, tablet, car
       * @since 7
       */
      value: string;

      /**
       * action
       * @devices phone, tablet, car
       * @since 7
       */
      action: () => void;
    };

    /**
     * on State Change
     * @devices phone, tablet, car
     * @since 7
     */
    onStateChange?: (event: { isVisible: boolean }) => void;
  }): T;

  bindMenu(content: {value: string, action: () => void}[]): T;
}

/**
 * CommonShapeMethod
 * @devices phone, tablet, car
 * @since 7
 */
export declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();

  /**
   * border Color
   * @devices phone, tablet, car
   * @since 7
   */
  stroke(value: Color | number | string | Resource): T;

  /**
   * Fill color.
   * @devices phone, tablet, car
   * @since 7
   */
  fill(value: Color | number | string | Resource): T;

  /**
   * Offset from the start point of the border drawing.
   * @devices phone, tablet, car
   * @since 7
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Path endpoint drawing style.
   * @devices phone, tablet, car
   * @since 7
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Border corner drawing style.
   * @devices phone, tablet, car
   * @since 7
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Limits for drawing acute angles as bevels
   * @devices phone, tablet, car
   * @since 7
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the opacity of the border.
   * @devices phone, tablet, car
   * @since 7
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * fill Opacity
   * @devices phone, tablet, car
   * @since 7
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the width of the dividing line.
   * @devices phone, tablet, car
   * @since 7
   */
  strokeWidth(value: number | string | Resource): T;

  /**
   * Indicates whether to enable anti-aliasing
   * @devices phone, tablet, car
   * @since 7
   */
  antiAlias(value: boolean): T;

  /**
   * Sets the gap for the border.
   * @devices phone, tablet, car
   * @since 7
   */
  strokeDashArray(value: Array<any>): T
}

/**
 * Custom Component
 * @devices phone, tablet, car
 * @since 7
 */
export declare class CustomComponent<T> {
  /**
   * Customize the pop-up content constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  build(): void;

  /**
   * Private  aboutToAppear Method
   * @devices phone, tablet, car
   * @since 7
   */
  private aboutToAppear?(): void;

  /**
   * Private  aboutToDisappear Method
   * @devices phone, tablet, car
   * @since 7
   */
  private aboutToDisappear?(): void;
}
