/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

import { Image, ImageData } from "./global";

export interface FocusParamObj {
  focus: boolean;
}

export interface AnimateStyle {
  /**
   * Width value applied to the component after the animation is executed.
   */
  width: number;
  /**
   * Height value applied to the component after the animation is executed.
   */
  height: number;
  /**
   * Background color applied to the component after the animation is executed.
   * The default value is none.
   */
  backgroundColor: string;
  /**
   * Opacity applied to the component. The value ranges from 0 to 1.
   * The default value is 1.
   */
  opacity: number;
  /**
   * The value format is "x y", in percentage or pixels.
   * The first value indicates the horizontal position, and the second value indicates the vertical position.
   * If only one value is specified, the other value is 50% by default.
   */
  backgroundPosition: string;
  /**
   * Origin position of the transformed element.
   * The first value indicates the x-axis position. The value can be left, center, right, a length, or percentage.
   * The second value indicates the y-axis position. The value can be top, center, bottom, a length, or a percentage.
   */
  transformOrigin: string;
  /**
   * Transformation type applied to an element.
   */
  transform: object;
  /**
   * The value of offset must be within (0.0,1.0] and sorted in ascending order if it is provided.
   * If there are only two frames, offset can be left empty.
   * If there are more than two frames, offset is mandatory.
   */
  offset?: number;
}

export interface AnimateOptions {
  /**
   * Duration of the animation, in milliseconds.
   * The default value is 0.
   */
  duration: number;

  /**
   * Time curve of the animation. For details about the supported types.
   * linear The animation speed keeps unchanged.
   * ease-in The animation starts at a low speed, cubic-bezier(0.42, 0.0, 1.0, 1.0).
   * ease-out The animation ends at a low speed, cubic-bezier(0.0, 0.0, 0.58, 1.0).
   * ease-in-out The animation starts and ends at a low speed, cubic-bezier(0.42, 0.0, 0.58, 1.0).
   * fast-out-slow-in Standard curve, cubic-bezier(0.4, 0.0, 0.2, 1.0).
   * linear-out-slow-in Deceleration curve, cubic-bezier(0.0, 0.0, 0.2, 1.0).
   * fast-out-linear-in Acceleration curve, cubic-bezier(0.4, 0.0, 1.0, 1.0).
   * friction Damping curve, cubic-bezier(0.2, 0.0, 0.2, 1.0).
   * extreme-deceleration Extreme deceleration curve, cubic-bezier(0.0, 0.0, 0.0, 1.0).
   * sharp Sharp curve, cubic-bezier(0.33, 0.0, 0.67, 1.0).
   * rhythm Rhythm curve, cubic-bezier(0.7, 0.0, 0.2, 1.0).
   * smooth Smooth curve, cubic-bezier(0.4, 0.0, 0.4, 1.0).
   * cubic-bezier(x1, y1, x2, y2) You can customize an animation speed curve in the cubic-bezier() function. The x and y values of each input parameter must be between 0 and 1.
   * Step curve. The number must be set and only an integer is supported, step-position is optional. It can be set to start or end. The default value is end.
   * The default value is linear.
   */
  easing: string;
  /**
   * Delay for the animation start. The default value indicates no delay.
   * The default value is 0.
   */
  delay: number;

  /**
   * Number of times the animation will be played. number indicates a fixed number of playback operations, and Infinity indicates an unlimited number of playback operations.
   * The default value is 1.
   */
  iterations: number | string;

  /**
   * Whether to resume to the initial state after the animation is executed.
   * none: The initial state is restored after the animation is executed.
   * forwards: The state at the end of the animation (defined in the last key frame) is retained after the animation is executed.
   */
  fill: "none" | "forwards";
}

export interface AnimationResult {
  /**
   * Read-only attribute, which indicates whether the animation playback is complete.
   */
  finished: boolean;
  /**
   * Read-only attribute, which indicates whether an animation is waiting for the completion of other asynchronous operations (for example, start an animation with a delay).
   */
  pending: boolean;
  /**
   * Animation running state:
   * idle: The animation is not running (playback ended or not started).
   * running: The animation is running.
   * paused: The animation is paused.
   * finished: Animation playback ends.
   */
  playstate: string;
  /**
   * Animation start time. This attribute is similar to that of delay in the options parameters.
   */
  startTime: number;
  /**
   * Starts the animation.
   */
  play(): void;
  /**
   * Ends the animation.
   */
  finish(): void;
  /**
   * Pauses the animation.
   */
  pause(): void;
  /**
   * Cancels the animation.
   */
  cancel(): void;
  /**
   * Plays the animation in reverse direction.
   */
  reverse(): void;
  /**
   * The animation is finished.
   */
  onfinish: () => void;
  /**
   * The animation is canceled.
   */
  oncancel: () => void;
}

export interface Element {
  /**
   * Requests or cancels the focus for a component.
   * If focus is set to true, the focus is requested for the component.
   * If focus is set to false, the focus is canceled for the component.
   * This attribute can be defaulted to true.
   * @param obj { focus: true | false }
   */
  focus(obj?: FocusParamObj): void;

  /**
   * Requests or cancels the crown rotation focus for a component.
   * If focus is set to true, the crown event focus is requested.
   * If focus is set to false, the crown event focus is canceled.
   * This attribute can be defaulted to true.
   * @param obj { focus: true | false }
   */
  rotation(obj?: FocusParamObj): void;

  /**
   * Creates and runs an animation shortcut on the component. Specify the keyframes and options required for the animation.
   * @param keyframes keyframes is used to describe key frame parameters of the animation.
   * @param options Options. is used to describe animation parameters.
   * @returns This method returns the animation object.
   */
  animate(
    keyframes: Array<AnimateStyle>,
    options: AnimateOptions
  ): AnimationResult;
}

/**
 * animation element
 */
export interface AnimationElement extends Element {
  /**
   * Starts the animation.
   */
  play(): void;
  /**
   * Ends the animation.
   */
  finish(): void;
  /**
   * Pauses the animation.
   */
  pause(): void;
  /**
   * Cancels the animation.
   */
  cancel(): void;
  /**
   * Plays the animation in reverse direction.
   */
  reverse(): void;
}

export interface CurrentOffsetResultValue {
  /**
   * Scrolling offset in the x-axis, in px.
   */
  x: number;

  /**
   * Scrolling offset in the y-axis, in px.
   */
  y: number;
}

/**
 * The <list> component provides a list container.
 */
export interface ListElement extends Element {
  /**
   * Scrolls the list to the position of the item at the specified index.
   */
  scrollTo(position: {
    /**
     * specified position.
     */
    index: number;
  }): void;

  /**
   * If smooth is set to false (default value), the list is directly scrolled to the top.
   * If smooth is set to true, the list is smoothly scrolled to the top.
   * @param param
   */
  scrollTop(param: { smooth: boolean }): void;

  /**
   * If smooth is set to false (default value), the list is directly scrolled to the bottom.
   * If smooth is set to true, the list is smoothly scrolled to the bottom.
   * @param param
   */
  scrollBottom(param: { smooth: boolean }): void;

  /**
   * If reverse is set to false (default value), the next page is displayed. If there is no next page, the list scrolls to the bottom.
   * If reverse is set to true, the previous page is displayed. If there is no previous page, the list scrolls to the top.
   * If smooth is set to false (default value), the list is directly scrolled to another page.
   * If smooth is set to true, the list is smoothly scrolled to another page.
   * @param params
   */
  scrollPage(params: { reverse: boolean; smooth: boolean }): void;

  /**
   * If reverse is set to false (default value), the list scrolls towards the bottom for a certain distance. If there is no sufficient distance, the list scrolls to the bottom.
   * If reverse is set to true, the list scrolls towards the top for a certain distance. If there is no sufficient distance, the list scrolls to the top.
   * If smooth is set to false (default value), the list is directly scrolled.
   * If smooth is set to true, the list is smoothly scrolled.
   * @param params
   */
  scrollArrow(params: { reverse: boolean; smooth: boolean }): void;

  /**
   * Collapses a group.
   * @param param
   */
  collapseGroup(param: {
    /**
     * groupid: ID of the group to collapse.
     * All groups are collapsed when groupid is not specified.
     */
    groupid: string;
  }): void;

  /**
   * Expands a group.
   * @param param
   */
  expandGroup(param: {
    /**
     * groupid: ID of the group to expand.
     * All groups are expanded when groupid is not specified.
     */
    groupid: string;
  }): void;

  /**
   * Returns the offset of the current scrolling. The return value type is Object.
   */
  currentOffset(): CurrentOffsetResultValue;
}

/**
 * The <swiper> component provides a swiper container.
 */
export interface SwiperElement extends Element {
  /**
   * Scrolls the child component to the position at the specified index.
   */
  swipeTo(position: {
    /**
     * specified position.
     */
    index: number;
  }): void;

  /**
   * Shows the next child component.
   */
  showNext(): void;

  /**
   * Shows the previous child component.
   */
  showPrevious(): void;
}

/**
 * The <dialog> component is a custom pop-up container.
 */
export interface DialogElement extends Element {
  /**
   * Shows a dialog box.
   */
  show(): void;
  /**
   * Closes a dialog box.
   */
  close(): void;
}

/**
 * The <image-animator> component is used to provide an image frame animator.
 */
export interface ImageAnimatorElement extends Element {
  /**
   * Starts to play the frame animation of an image. If this method is called again, the playback starts from the first frame.
   */
  start(): void;
  /**
   * Pauses the frame animation playback of an image.
   */
  pause(): void;
  /**
   * Stops the frame animation playback of an image.
   */
  stop(): void;
  /**
   * Resumes the frame animation playback of an image.
   */
  resume(): void;
  /**
   * Obtains the playback state. Available values are as follows:
   * Playing
   * Paused
   * Stopped
   */
  getState(): string;
}

/**
 * The <marquee> component inserts scrolling text, which is displayed in a single line by default.
 * When the text length exceeds the display area of the component, the marquee effect is displayed.
 */
export interface MarqueeElement extends Element {
  /**
   * Starts scrolling.
   */
  start(): void;

  /**
   * Stops scrolling.
   */
  stop(): void;
}

/**
 * The <menu> component provides menus as temporary pop-up windows to display operations that can be performed by users.
 */
export interface MenuElement extends Element {
  /**
   * Displays the menu.
   * x and y specify the position of the displayed menu.
   * x indicates the X-axis coordinate from the left edge of the visible area, and does not include any scrolling offset.
   * y indicates the Y-axis coordinate from the upper edge of the visible area, and does not include any scrolling offset or a status bar.
   * The menu is preferentially displayed in the lower right corner.
   * When the visible space on the right is insufficient, the menu is moved leftward.
   * When the visible space in the lower part is insufficient, the menu is moved upward.
   * @param position
   */
  show(position: { x: number; y: number }): void;
}

/**
 * The <chart> component displays line charts, gauge charts, and bar charts.
 */
export interface ChartElement extends Element {
  /**
   * Data is dynamically added to an existing data sequence.
   * The target sequence is specified based on serial, which is the subscript of the datasets array and starts from 0.
   * datasets[index].data is not updated. Only line charts support this attribute.
   * The value is incremented by 1 based on the horizontal coordinate and is related to the xAxis min/max setting.
   */
  append(params: {
    /**
     * Set the data subscript of the line chart to be updated.
     */
    serial: number;
    /**
     * Set the new data.
     */
    data: Array<number>;
  }): void;
}

/**
 * The <input> component provides an interactive interface to receive user input, which is displayed in a single line by default.
 */
export interface InputElement extends Element {
  /**
   * Obtains or loses the focus of a component.
   * When the component type is set to text, email, date, time, number, or password, the input method can be displayed or collapsed.
   * @param param If focus is not passed, the default value true is used.
   */
  focus(param: { focus: boolean }): void;

  /**
   * Displays the error message.
   * This attribute is available when the component type is set to text, email, date, time, number, or password.
   * @param param
   */
  showError(param: { error: string }): void;
}

/**
 * The <button> component includes capsule, circle, text, arc, and download buttons.
 */
export interface ButtonElement extends Element {
  /**
   * Progress bar of the download button.
   * The value ranges from 0 to 100. The progress bar is displayed if the value is greater than 0.
   * If the value is greater than or equal to 100, the progress bar is not displayed.
   * NOTE
   * The text displayed on the progress bar is changed based on the value.
   * @param param
   */
  setProgress(param: { progress: number }): void;
}

/**
 * The <textarea> component provides an interactive interface to receive user input, which is displayed in multiple lines by default.
 */
export interface TextAreaElement extends Element {
  /**
   * Obtains or loses the focus of a component, which can display or collapse the input method.
   * @param param If focus is not passed, the default value true is used.
   */
  focus(param: { focus: boolean }): void;
}

/**
 * The <picker> component supports common, date, time, and multi-column text selectors.
 */
export interface PickerElement extends Element {
  /**
   * Displays the picker.
   */
  show(): void;
}

/**
 * The <video> component provides a video player.
 */
export interface VideoElement extends Element {
  /**
   * Requests to start playing a video.
   */
  start(): void;

  /**
   * Requests to pause a video.
   */
  pause(): void;

  /**
   * Specifies the video playing position.
   * @param param
   */
  setCurrentTime(param: { currenttime: number }): void;

  /**
   * Requests to enter the full screen mode.
   * @param param
   */
  requestFullscreen(param: { screenOrientation: "default" }): void;

  /**
   * Requests to exit the full screen mode.
   */
  exitFullscreen(): void;
}

export interface TextMetrics {
  width: number;
}

/**
 * CanvasRenderingContext2D allows you to draw rectangles, text, images, and other objects on a canvas.
 * You can call getContext('2d') on canvas to obtain a CanvasRenderingContext2D object.
 */
export interface CanvasRenderingContext2D {
  /**
   * Fills a rectangle on the canvas.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   */
  fillRect(x: number, y: number, width: number, height: number): void;

  /**
   * Sets the style of a paint to fill an area.
   * Paint color used to fill the area.
   * Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object.
   * Canvas pattern. You can call createPattern() to create a CanvasPattern object.
   */
  fillStyle?: string | CanvasGradient | CanvasPattern;

  /**
   * Clears the content in a rectangle on the canvas.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * Draws a rectangle stroke on the canvas.
   * @param x X-coordinate of the upper left corner of the rectangle stroke.
   * @param y Y-coordinate of the upper left corner of the rectangle stroke.
   * @param width Width of the rectangle stroke.
   * @param height Height of the rectangle stroke.
   */
  strokeRect(x: number, y: number, width: number, height: number): void;

  /**
   * Draws filled text on the canvas.
   * @param text Text to draw.
   * @param x X-coordinate of the lower left corner of the text.
   * @param y Y-coordinate of the lower left corner of the text.
   */
  fillText(text: string, x: number, y: number): void;

  /**
   * Draws a text stroke on the canvas.
   * @param text Text stroke to draw.
   * @param x X-coordinate of the lower left corner of the text stroke.
   * @param y Y-coordinate of the lower left corner of the text stroke.
   */
  strokeText(text: string, x: number, y: number): void;

  /**
   * Returns a TextMetrics object used to obtain the width of specified text.
   * @param text Text to be measured.
   * @returns Object that contains the text width. You can obtain the width by TextMetrics.width.
   */
  measureText(text: string): TextMetrics;

  /**
   * Sets the width of a line.
   */
  lineWidth?: number;

  /**
   * Sets the stroke paint style.
   * Color of the stroke paint.
   * Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object.
   * Canvas pattern. You can call createPattern() to create a CanvasPattern object.
   */
  strokeStyle?: string | CanvasGradient | CanvasPattern;

  /**
   * Draws a border stroke.
   */
  stroke(): void;

  /**
   * Creates a drawing path.
   */
  beginPath(): void;

  /**
   * Moves a drawing path to a target position on the canvas.
   * @param x X-coordinate of the target position.
   * @param y Y-coordinate of the target position.
   */
  moveTo(x: number, y: number): void;

  /**
   * Connects the current point to a target position using a straight line.
   * @param x X-coordinate of the target position.
   * @param y Y-coordinate of the target position.
   */
  lineTo(x: number, y: number): void;

  /**
   * Draws a closed path.
   */
  closePath(): void;

  /**
   * Sets the style of line endpoints.
   * Style of line endpoints. Available values include:
   * butt (default): The endpoints of the line are in square.
   * round: The endpoints of the line are rounded.
   * square: The endpoints of the line are in square,
   * and each end of the line is added with a rectangle whose length is the same as the line thickness and whose width is half of the line thickness.
   */
  lineCap: string;

  /**
   * Sets the style for an intersection point where a line joins another.
   * Style of the intersection point of lines. Available values include:
   * round: The intersection part is a sector. The radius of a rounded corner is equal to the line width.
   * bevel: The intersection part is a triangle. The rectangular corner of each line is independent.
   * miter (default): The intersection part has a miter corner by extending the outside edges of the lines until they meet. You can view the effect of this attribute in miterLimit.
   */
  lineJoin: string;

  /**
   * Sets the maximum miter length. The miter length is the distance between the inner corner and the outer corner where two lines meet.
   * Maximum miter length. The default value is 10.
   */
  miterLimit: number;

  /**
   * Sets the font style.
   * Font style. The default value is 10px sans-serif.
   */
  font: string;

  /**
   * Sets the text alignment mode.
   * Text alignment mode. Available values include:
   * left (default): The text is left-aligned.
   * right: The text is right-aligned.
   * center: The text is center-aligned.
   * start: The text is aligned with the start bound.
   * end: The text is aligned with the end bound.
   * NOTE
   * In the ltr layout mode, the value start equals to left. In the rtl layout mode, the value start equals to right.
   */
  textAlign: string;

  /**
   * Sets a text baseline in the horizontal direction for text alignment.
   * Text baseline. Available values include:
   * alphabetic (default): The text baseline is the normal alphabetic baseline.
   * top: The text baseline is on the top of the text bounding box.
   * hanging: The text baseline is a hanging baseline over the text.
   * middle: The text baseline is in the middle of the text bounding box.
   * ideographic: The text baseline is the ideographic baseline. If a character exceeds the alphabetic baseline, the ideographic baseline is located at the bottom of the excessive character.
   * bottom: The text baseline is at the bottom of the text bounding box. Its difference from the ideographic baseline is that the ideographic baseline does not consider letters in the next line.
   */
  textBaseline: string;

  /**
   * Creates a linear gradient color.
   * @param x0 X-coordinate of the start point.
   * @param y0 Y-coordinate of the start point.
   * @param x1 X-coordinate of the end point.
   * @param y1 Y-coordinate of the end point.
   * @returns LinearGradient object.
   */
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): CanvasGradient;

  /**
   * Creates a pattern for image filling based on a specified source image and repetition mode.
   * @param image Source image.
   * @param repetition Repetition mode. The value can be "repeat", "repeat-x", "repeat-y", or "no-repeat".
   * @returns Pattern of image filling.
   */
  createPattern(image: Image, repetition: string): object;

  /**
   * Draws a cubic bezier curve on the canvas.
   * @param cp1x X-coordinate of the first parameter of the bezier curve.
   * @param cp1y Y-coordinate of the first parameter of the bezier curve.
   * @param cp2x X-coordinate of the second parameter of the bezier curve.
   * @param cp2y Y-coordinate of the second parameter of the bezier curve.
   * @param x End point x-coordinate of the bezier curve.
   * @param y End point y-coordinate of the bezier curve.
   */
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ): void;

  /**
   * Draws a quadratic curve on the canvas.
   * @param cpx X-coordinate of the bezier curve parameter.
   * @param cpy Y-coordinate of the bezier curve parameter.
   * @param x End point x-coordinate of the bezier curve.
   * @param y End point y-coordinate of the bezier curve.
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * Draws an arc on the canvas.
   * @param x X-coordinate of the center point of the arc.
   * @param y Y-coordinate of the center point of the arc.
   * @param radius Radius of the arc.
   * @param startAngle Start radian of the arc.
   * @param endAngel End radian of the arc.
   * @param anticlockwise Whether to draw the arc counterclockwise.
   */
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngel: number,
    anticlockwise?: boolean
  ): void;

  /**
   * Draws an arc based on the radius and points on the arc.
   * @param x1 X-coordinate of the first point on the arc.
   * @param y1 Y-coordinate of the first point on the arc.
   * @param x2 X-coordinate of the second point on the arc.
   * @param y2 Y-coordinate of the second point on the arc.
   * @param radius Radius of the arc.
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * Creates a rectangular.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   */
  rect(x: number, y: number, width: number, height: number): void;

  /**
   * Fills the area inside a closed path.
   */
  fill(): void;

  /**
   * Sets a path as the clipping path.
   */
  clip(): void;

  /**
   * Rotates a canvas clockwise around its coordinate axes.
   * @param rotate Clockwise rotation angle. You can use Math.PI / 180 to convert the angle to radian.
   */
  rotate(rotate: number): void;

  /**
   * Scales a canvas based on scaling factors.
   * @param x Horizontal scale factor.
   * @param y Vertical scale factor.
   */
  scale(x: number, y: number): void;

  /**
   * Defines a transformation matrix.
   * To transform a graph, you only need to set parameters of the matrix.
   * The coordinates of the corresponding graph are multiplied by the matrix values to obtain new coordinates of the transformed graph.
   * You can use the matrix to implement multiple transform effects.
   * @param scaleX X-axis scale.
   * @param skewX X-axis skew.
   * @param skewY Y-axis skew.
   * @param scaleY Y-axis scale.
   * @param translateX X-axis translation.
   * @param translateY Y-axis translation.
   */
  transform(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void;

  /**
   * Uses same parameters as the transform() function to reset the existing transformation matrix and create a new transformation matrix.
   * @param scaleX X-axis scale.
   * @param skewX X-axis skew.
   * @param skewY Y-axis skew.
   * @param scaleY Y-axis scale.
   * @param translateX X-axis translation.
   * @param translateY Y-axis translation.
   */
  setTransform(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void;

  /**
   * Moves the origin of the coordinate system.
   * @param x X-axis translation.
   * @param y Y-axis translation.
   */
  translate(x: number, y: number): void;

  /**
   * Sets the alpha value.
   * Global alpha value to set.
   * The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   */
  globalAlpha: number;

  /**
   * Draws an image.
   * @param image Image resource.
   * @param dx X-coordinate of the upper left corner of the drawing area on the canvas.
   * @param dy Y-coordinate of the upper left corner of the drawing area on the canvas.
   * @param dWidth Width of the drawing area.
   * @param dHeight Height of the drawing area.
   * @param sx X-coordinate of the upper left corner of the rectangle used to crop the source image.
   * @param sy Y-coordinate of the upper left corner of the rectangle used to crop the source image.
   * @param sWidth Target width of the image to crop.
   * @param sHeight Target height of the image to crop.
   */
  drawImage(
    image: Image,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number
  ): void;

  /**
   * Restores the saved drawing context.
   */
  restore: () => void;

  /**
   * Saves the current drawing context.
   */
  save: () => void;

  /**
   * Creates an ImageData object.
   * @param width Width of the ImageData object.
   * @param height Height of the ImageData object.
   * @returns Returns the newly created FunctionCallable object.
   */
  createImageData(width: number, height: number): ImageData;
  /**
   * Creates an ImageData object.
   * @param imagedata ImageData object with the same width and height copied from the original ImageData object.
   * @returns Returns the newly created FunctionCallable object.
   */
  createImageData(imagedata: ImageData): ImageData;

  /**
   * ImageData object created with pixels in the specified area on the canvas.
   * @param sx X-coordinate of the upper left corner of the output area.
   * @param sy Y-coordinate of the upper left corner of the output area.
   * @param sw Width of the output area.
   * @param sh Height of the output area.
   * @returns ImageData object that contains pixels in the specified area on the canvas.
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;

  /**
   * Puts the ImageData onto a rectangular area on the canvas.
   * @param imageData ImageData object with pixels to put onto the canvas.
   * @param dx X-axis offset of the rectangle area on the canvas.
   * @param dy Y-axis offset of the rectangle area on the canvas.
   */
  putImageData(imageData: ImageData, dx: number, dy: number): void;

  /**
   * Puts the ImageData onto a rectangular area on the canvas.
   * @param imageData ImageData object with pixels to put onto the canvas.
   * @param dx X-axis offset of the rectangle area on the canvas.
   * @param dy Y-axis offset of the rectangle area on the canvas.
   * @param dirtyX X-axis offset of the upper left corner of the rectangle area relative to that of the source image.
   * @param dirtyY Y-axis offset of the upper left corner of the rectangle area relative to that of the source image.
   * @param dirtyWidth Width of the rectangle area to cop the source image.
   * @param dirtyHeight Height of the rectangle area to cop the source image.
   */
  putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number
  ): void;

  /**
   * Sets the dash line style.
   * @param segments Interval of alternate line segments and the length of spacing.
   */
  setLineDash(segments: Array<number>): void;

  /**
   * Obtains the dash line style.
   * @returns Interval of alternate line segments and the length of spacing.
   */
  getLineDash(): Array<number>;

  /**
   * Sets the dash line offset.
   * Dash line offset. The value is a float number starting from 0.0.
   */
  lineDashOffset: number;

  /**
   * Sets the composite operation type.
   * source-over Default value. Displays the new drawing above the existing drawing.
   * source-atop Displays the new drawing on the top of the existing drawing.
   * source-in Displays the new drawing inside the existing drawing.
   * source-out Displays part of the new drawing that is outside of the existing drawing.
   * destination-over Displays the existing drawing above the new drawing.
   * destination-atop Displays the existing drawing above the new drawing.
   * destination-in Displays the existing drawing inside the new drawing.
   * destination-out Displays part of the existing drawing that is outside of the new drawing.
   * lighter Displays both the new drawing and the existing drawing.
   * copy Displays the new drawing and neglects the existing drawing.
   * xor Combines the new drawing and existing drawing using the XOR operation.
   */
  globalCompositeOperation: string;

  /**
   * Sets the shadow blur degree.
   * Shadow blur degree. A larger value indicates a more blurred shadow. The value is of the float type, and the default value is 0.
   */
  shadowBlur: number;

  /**
   * Sets the shadow color.
   */
  shadowColor: string;

  /**
   * Sets the x-axis shadow offset relative to the original object.
   * X-axis shadow offset relative to the original object.
   */
  shadowOffsetX: number;

  /**
   * Sets the y-axis shadow offset relative to the original object.
   * Y-axis shadow offset relative to the original object.
   */
  shadowOffsetY: number;
}

/**
 * You can create a gradient object on the canvas by calling CanvasRenderingContext2D.createLinearGradient().
 */
export interface CanvasGradient {
  /**
   * Adds a color stop for the CanvasGradient object based on the specified offset and gradient color.
   * @param offset Proportion of the distance between the color stop and the start point to the total length.
   * The value ranges from 0 to 1.
   * @param color Sets the gradient color.
   */
  addColorStop(offset: number, color: string): void;
}

/**
 * <canvas> provides a rectangular canvas component for drawing graphics on the screen.
 * You can control each pixel to draw on the canvas.
 * <canvas> offers a variety of functions for drawing paths, rectangles, circles, text, and allows for adding images to it.
 */
export interface CanvasElement extends Element {
  /**
   * Obtains the context of 2D canvas drawing.
   * Only parameters related to 2D canvas drawing are supported.
   * The return value is a 2D drawing object that provides specific 2D drawing operations.
   * This API cannot be called in OnInit or onReady.
   * @param param
   */
  getContext(param: string): CanvasRenderingContext2D;
}

export interface Application {
  /**
   * Object that is exposed in the app.js file and obtained by this.$app.$def.
   */
  $def: any;
}

export interface ViewModel {
  $app: Application;

  /**
   * Sets the parameters based on the system language, for example, this.$t('strings.hello').
   * @param path Path of the language resource key.
   * @param param Content used to replace placeholders during runtime.
   * @returns Content.
   * There are two types of placeholders available:Named placeholder, for example, {name}. The actual content must be of the object type, for example, $t('strings.object', { name: 'Hello world' }).
   * Digit placeholder, for example, {0}. The actual content must be of the array type, for example, $t('strings.array', ['Hello world'].
   */
  $t(path: string, params?: object | Array<any>): string;

  /**
   * Converses between singular and plural forms based on the system language, for example, this.$tc('strings.plurals').
   * NOTE
   * The resource content is distinguished by the following JSON keys: zero, one, two, few, many, and other.
   * @param path Resource file path.
   * @param count Value.
   * @returns Content.
   */
  $tc(path: string, count: number): string;

  /**
   * Replace the resource path based on the DPI of the current device: this.$r('image.phone').
   * @param path Resource file path.
   * @returns Content.
   */
  $r(path: string): string;

  /**
   * Adds an attribute or modifies an existing attribute.
   * Usage: this.$set('key',value): Add an attribute.
   * @param key
   * @param value
   */
  $set(key: string, value: any): void;

  /**
   * Deletes an attribute.
   * Usage:this.$delete('key'): Delete an attribute.
   * @param key
   */
  $delete(key: string): void;

  /**
   * Obtains the component with a specified ID. If no ID is specified, the root component is returned.
   * Usage:
   * <div id='xxx'></div>
   * this.$element('xxx'): Obtain the component whose ID is xxx.
   * this.$element(): Obtain the root component.
   * @param id Component ID.
   */
  $element(
    id?: string
  ): AnimationElement &
    CanvasElement &
    object &
    ListElement &
    SwiperElement &
    DialogElement &
    ImageAnimatorElement &
    MarqueeElement &
    MenuElement &
    ChartElement &
    InputElement &
    ButtonElement &
    TextAreaElement &
    PickerElement &
    VideoElement;

  /**
   * Obtains the root ViewModel instance.
   */
  $root(): ViewModel & object;

  /**
   * Obtains the parent ViewModel instance.
   */
  $parent(): ViewModel & object;

  /**
   * Obtains the ViewModel instance of a custom child component with a specified ID.
   * Usage:this.$child('xxx'): Obtain the ViewModel instance of a custom child component whose ID is xxx.
   * @param id Component ID.
   */
  $child(id: string): ViewModel & object;

  /**
   * Listens for attribute changes. If the value of the data attribute changes, the bound event is triggered.
   * @param data Attribute.
   * @param callback Function name.
   */
  $watch(data: string, callback: string): void;

  /**
   * An object that holds all DOM elements and component instances that have been registered with the refs attribute.
   */
  $refs: ElementReferences;

  /**
   * Custom events.
   * @param event The name of event.
   * @param params The params of event.
   */
  $emit(event: string, params?: object): void;
}

export interface ElementReferences {
  [k: string]: AnimationElement &
    CanvasElement &
    object &
    ListElement &
    SwiperElement &
    DialogElement &
    ImageAnimatorElement &
    MarqueeElement &
    MenuElement &
    ChartElement &
    InputElement &
    ButtonElement &
    TextAreaElement &
    PickerElement &
    VideoElement;
}

export interface Options<T extends ViewModel, Data = DefaultData<T>> {
  /**
   * Data model of the page that can be converted into a JSON object.
   * The attribute name cannot start with $ or an underscore (_) or contain the reserved words such as for, if, show, and tid.
   * For a function, the return value must be an object.
   * Set the value of data to the return value of the function during page initialization.
   */
  data?: Data;

  /**
   * Listens for page initialization.
   * Called when page initialization is complete. This function is called only once in a lifecycle.
   */
  onInit?(): void;

  /**
   * Listens for page creation.
   * Called when a page is created. This function is called only once in a lifecycle.
   */
  onReady?(): void;

  /**
   * Listens for page display.
   * Called when the page is displayed.
   */
  onShow?(): void;

  /**
   * Listens for page hiding.
   * Called when the page disappears.
   */
  onHide?(): void;

  /**
   * Listens for page destruction.
   * Called when the page is destroyed.
   */
  onDestroy?(): void;

  /**
   * Listens for the back button action.
   * The back button is tapped:
   * @returns true means that the page processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   */
  onBackPress?(): boolean;

  /**
   * Listens for application creation.
   * Called when the application is created.
   */
  onCreate?(): void;
}

type DefaultData<T> = object;
type CombinedOptions<T extends ViewModel, Data> = object &
  Options<T, Data> &
  ThisType<T & ViewModel & Data>;
export declare function extendViewModel<T extends ViewModel, Data>(
  options: CombinedOptions<T, Data>
): ViewModel & Data;