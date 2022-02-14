/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback, Callback } from './basic';

 /**
 * interface of window manager
 * @devices tv, phone, tablet, wearable, car
 * @since 6
 */
declare namespace window {
  /**
   * get top window of current app
   * @devices tv, phone, tablet, wearable, car
   * @since 6
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;
  /**
   * get top window of current app
   * @devices tv, phone, tablet, wearable, car
   * @since 6
   */
  function getTopWindow(): Promise<Window>;
  /**
   * Create a sub window with a specific id and type.
   * @param id Indicates window id.
   * @param type Indicates window type.
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @since 7
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;
  /**
   * Create a sub window with a specific id and type.
   * @param id Indicates window id.
   * @param type Indicates window type.
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @since 7
   */
  function create(id: string, type: WindowType): Promise<Window>;
  /**
   * Find the sub window by id.
   * @param id Indicates window id.
   * @since 7
   */
  function find(id: string, callback: AsyncCallback<Window>): void;
  /**
   * Find the sub window by id.
   * @param id Indicates window id.
   * @since 7
   */
  function find(id: string): Promise<Window>;

  /**
   * window type
   * @devices tv, phone, tablet, wearable, car,
   * @since 7
   */
  enum WindowType {
    /**
     * App window
     */
    TYPE_APP,

    /**
     * window for system alert
     */
    TYPE_SYSTEM_ALERT,
  }

  /**
   * avoid area type
   * @devices tv, phone, tablet, wearable, car
   * @since 7
   */
  enum AvoidAreaType {
    /**
     * area of SystemUI
     */
    TYPE_SYSTEM,
    /**
     * cutout of screen
     */
    TYPE_CUTOUT,
    /**
     * area for system gesture
     */
    TYPE_SYSTEM_GESTURE,
  }

  /**
   * Rectangle
   * @devices tv, phone, tablet, wearable, car
   * @since 7
   */
  interface Rect {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  /**
   * avoid area for app
   * @devices tv, phone, tablet, wearable, car
   * @since 7
   */
  interface AvoidArea {
    /**
     * left of screen
     */
    leftRect: Rect;

    /**
     * top of screen
     */
    topRect: Rect;

    /**
     * right of screen
     */
    rightRect: Rect;

    /**
     * bottom of screen
     */
    bottomRect: Rect;
  }

  /**
   * window size
   * @devices tv, phone, tablet, wearable, car
   * @since 7
   */
  interface Size {
    /**
     * the width of the window.
     */
    width: number;

    /**
     * the height of the window.
     */
    height: number;
  }

  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   * @devices tv, phone, tablet, wearable, car
   * @since 6
   */
  interface SystemBarProperties {
    /**
     * the color of the status bar.
     * @since 6
     */
    statusBarColor?: string;

    /**
     * the light icon of the status bar.
     * @since 7
     */
    isStatusBarLightIcon?: boolean;

    /**
     * the color of the navigation bar.
     * @since 6
     */
    navigationBarColor?: string;

    /**
     * the light icon of the navigation bar.
     * @since 7
     */
    isNavigationBarLightIcon?: boolean;
  }

  /**
   * Properties of window, it couldn't update automatically
   * @devices tv, phone, tablet, wearable, car
   * @since 6
   */
  interface WindowProperties {
    /**
     * the position and size of the window
     * @since 7
     */
    windowRect: Rect;

    /**
     * window type
     * @since 7
     */
    type: WindowType;

    /**
     * the brightness of the window
     * @since 6
     */
    brightness: number;

    /**
     * transparent or opaque
     * @since 7
     */
    isTransparent: boolean;

    /**
     * the flag of the window is shown full screen
     * @since 6
     */
    isFullScreen: boolean;

    /**
     * the flag of keep screen always on as long as the window is visible
     * @since 6
     */
    isKeepScreenOn: boolean;

    /**
     * the value of dim all the windows behind of current window
     * @since 7
     */
    dimBehindValue: number;

    /**
     * the flag of extends the window to cover the full screen
     * @since 7
     */
    isLayoutFullScreen: boolean;

    /**
     * the window is focusable
     * @since 7
     */
    focusable: boolean;

    /**
     * the window is touchable
     * @since 7
     */
    touchable: boolean;

    /**
     * privacy mode, screenshot is not allowed if true,
     * @since 7
     */
    isPrivacyMode: boolean;

    /**
     * the corner of the window is round
     * @since 7
     */
    isRoundCorner: boolean;
  }

  /**
   * interface for window
   * @devices tv, phone, tablet, wearable, car
   * @since 6
   */
  interface Window {
    /**
     * set the brightness of window
     * @param brightness the brightness of window
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setBrightness(brightness:number, callback: AsyncCallback<void>): void;
    /**
     * set the brightness of window
     * @param brightness the brightness of window
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setBrightness(brightness:number): Promise<void>;

    /**
     * set the background color of window
     * @param color the background color of window
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;
    /**
     * set the background color of window
     * @param color the background color of window
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setBackgroundColor(color: string): Promise<void>;

    /**
     * set the window transparent or opaque
     * @param isTransparent transparent or opaque
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setTransparent(isTransparent: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the window transparent or opaque
     * @param isTransparent transparent or opaque
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setTransparent(isTransparent: boolean): Promise<void>;

    /**
     * set the flag of the window is shown full screen
     * @param isFullScreen the flag of the window is shown full screen
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the flag of the window is shown full screen
     * @param isFullScreen the flag of the window is shown full screen
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * set the flag of keep screen always on
     * @param isKeepScreenOn the flag of keep screen always on
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the flag of keep screen always on
     * @param isKeepScreenOn the flag of keep screen always on
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * set the flag of dim all the windows behind of current window
     * @param dimBehindValue Indicates the degree of dim behind.
     * The value 0 indicates that background is completely transparent and the value 1 indicates that the background is completely opaque.
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;
    /**
     * set the flag of dim all the windows behind of current window
     * @param dimBehindValue Indicates the degree of dim behind.
     * The value 0 indicates that background is completely transparent and the value 1 indicates that the background is completely opaque.
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * set the property of the window can layout in full screen
     * @param isLayoutFullScreen the window can layout in full screen
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the property of the window can layout in full screen
     * @param isLayoutFullScreen the window can layout in full screen
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * set the window is focusable
     * @param focusable the window is focusable
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setFocusable(focusable: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the window is focusable
     * @param focusable the window is focusable
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setFocusable(focusable: boolean): Promise<void>;

    /**
     * set the window is touchable
     * @param touchable the window is touchable
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setTouchable(touchable: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the window is touchable
     * @param touchable the window is touchable
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setTouchable(touchable: boolean): Promise<void>;

    /**
     * set the privacy mode of window
     * @param isPrivacyMode the privacy mode of window
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;
    /**
     * set the privacy mode of window
     * @param isPrivacyMode the privacy mode of window
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * set the system bar to have visible.
     * @param names the set of system bar
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setSystemBarEnable(names: Array<'status'|'navigation'>, callback: AsyncCallback<void>): void;
    /**
     * set the system bar to have visible.
     * @param names the set of system bar
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    setSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>;

    /**
     * set the background color of statusbar
     * @param color the background color of statusbar
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;
    /**
     * set the background color of statusbar
     * @param color the background color of statusbar
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * get the properties of current window
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;
    /**
     * get the properties of current window
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     */
    getProperties(): Promise<WindowProperties>;

    /**
     * get the avoid area
     * @param type: the type of avoid area.
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;
    /**
     * get the avoid area
     * @param type: the type of avoid area.
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * move the window
     * @param x x coordinate of target position
     * @param y y coordinate of target position
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;
    /**
     * move the window
     * @param x x coordinate of target position
     * @param y y coordinate of target position
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * resize the window
     * @param width width of the window
     * @param height height of the window
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;
    /**
     * resize the window
     * @param width width of the window
     * @param height height of the window
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * load sub window content
     * @param path window content path
     * @since 7
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;
    /**
     * load sub window content
     * @param path window content path
     * @since 7
     */
    loadContent(path: string): Promise<void>;

    /**
     * show sub window.
     * @since 7
     */
    show(callback: AsyncCallback<void>): void;
    /**
     * show sub window.
     * @since 7
     */
    show(): Promise<void>;

    /**
     * Check whether the sub window is showing.
     * @since 7
     */
    isShowing(callback: AsyncCallback<boolean>): void;
    /**
     * Check whether the sub window is showing.
     * @since 7
     */
    isShowing(): Promise<boolean>;

    /**
     * Destroy the sub window.
     * @since 7
     */
    destroy(callback: AsyncCallback<void>): void;
    /**
     * Destroy the sub window.
     * @since 7
     */
    destroy(): Promise<void>;

    /**
     * Sets whether the area outside the window is touchable.
     * @param touchable Indicates touchable.
     * @since 7
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets whether the area outside the window is touchable.
     * @param touchable Indicates touchable.
     * @since 7
     */
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * register the callback of systemAvoidAreaChange
     * @param type: 'systemAvoidAreaChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * unregister the callback of systemAvoidAreaChange
     * @param type: 'systemAvoidAreaChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * register the callback of windowSizeChange
     * @param type: 'windowSizeChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * unregister the callback of windowSizeChange
     * @param type: 'windowSizeChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * register the callback of keyboard height change.
     * @param type: 'keyboardHeightChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    on(type: 'keyboardHeightChange', callback: Callback<number>): void;

    /**
     * unregister the callback of keyboard height change.
     * @param type: 'keyboardHeightChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 7
     */
    off(type: 'keyboardHeightChange', callback?: Callback<number>): void;

    /**
     * register the callback of keyboard height change.
     * @param type: 'keyboardHeightChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     * @deprecated since 7
     */
    on(type: 'keyboardHeightChange', callback: AsyncCallback<number>): void;

    /**
     * unregister the callback of keyboard height change.
     * @param type: 'keyboardHeightChange'
     * @devices tv, phone, tablet, wearable, car
     * @since 6
     * @deprecated since 7
     */
    off(type: 'keyboardHeightChange', callback?: AsyncCallback<number>): void;
  }
}

export default window;