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

import { AsyncCallback } from './basic';

 /**
 * interface of window manager
 * @devices tv, phone, tablet, wearable
 */
declare namespace window {
  /**
   * get top window of current app
   * @devices tv, phone, tablet, wearable
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;
  function getTopWindow(): Promise<Window>;

  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   * @devices tv, phone, tablet, wearable
   */
  interface SystemBarProperties {
    /**
     * the color of the status bar.
     */
    statusBarColor?: string;

    /**
     * the color of the navigation bar.
     */
    navigationBarColor?: string;
  }

  /**
   * Properties of window, it couldn't update automatically
   * @devices tv, phone, tablet, wearable
   */
  interface WindowProperties {
    /**
     * the brightness of the window
     */
    brightness: number;
    /**
     * the flag of the window is shown full screen
     */
    isFullScreen: boolean;
    /**
     * the flag of keep screen always on as long as the window is visible
     */
    isKeepScreenOn: boolean;
  }

  /**
   * interface for window
   */
  interface Window {
    /**
     * set the brightness of window
     * @param brightness the brightness of window
     * @devices tv, phone, tablet, wearable
     */
    setBrightness(brightness:number, callback: AsyncCallback<void>): void;
    setBrightness(brightness:number): Promise<void>;
    /**
     * set the background color of window
     * @param color the background color of window
     * @devices tv, phone, tablet, wearable
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;
    setBackgroundColor(color: string): Promise<void>;
    /**
     * set the flag of the window is shown full screen
     * @param isFullScreen the flag of the window is shown full screen
     * @devices tv, phone, tablet, wearable
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;
    setFullScreen(isFullScreen: boolean): Promise<void>;
    /**
     * set the flag of keep screen always on
     * @param isKeepScreenOn the flag of keep screen always on
     * @devices tv, phone, tablet, wearable
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;
    /**
     * set the background color of statusbar
     * @param color the background color of statusbar
     * @devices tv, phone, tablet, wearable
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;
    /**
     * get the properties of current window
     * @devices tv, phone, tablet, wearable
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;
    getProperties(): Promise<WindowProperties>;
    /**
     * register the callback of keyboard height change.
     * @param type: keyboardHeightChange
     * @devices tv, phone, tablet, wearable
     */
    on(type: 'keyboardHeightChange', callback: AsyncCallback<number>): void;
    /**
     * unregister the callback of keyboard height change.
     * @devices tv, phone, tablet, wearable
     */
    off(type: 'keyboardHeightChange', callback?: AsyncCallback<number>): void;
  }
}


export default window;