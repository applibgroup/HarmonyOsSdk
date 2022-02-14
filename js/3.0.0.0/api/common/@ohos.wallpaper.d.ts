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
import {AsyncCallback} from './basic';
import image from './@ohos.multimedia.image'

/**
 * System wallpaper
 * @sysCap SystemCapability.Miscservices.Wallpaper
 * @devices phone, tablet, tv, wearable, car
 * @import import wallpaper from '@ohos.wallpaper';
 * @since 7
 */
declare namespace wallpaper {
    enum WallpaperType {
        /**
         * Indicates the home screen wallpaper.
         */
        WALLPAPER_SYSTEM,
        /**
         * Indicates the lock screen wallpaper.
         */
        WALLPAPER_LOCKSCREEN
    }

    /**
     * Obtains the wallpaper colors for the wallpaper of the specified type.
     * @param wallpaperType Indicates the wallpaper type.
     * @return RgbaColor type of array callback function
     */
    function getColors(wallpaperType: WallpaperType, callback: AsyncCallback<Array<RgbaColor>>): void;
    function getColors(wallpaperType: WallpaperType): Promise<Array<RgbaColor>>;

    /**
     * Obtains the ID of the wallpaper of the specified type.
     * @param wallpaperType Indicates the wallpaper type.
     * @return an integer greater than or equal to {@code 0} representing the wallpaper ID
     * if the specified type of wallpaper has been set; returns {@code -1} otherwise.
     * The return value is an integer ranging from -1 to 2^31 - 1.
     */
    function getId(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void;
    function getId(wallpaperType: WallpaperType): Promise<number>;

    /**
     * Obtains the minimum height of the wallpaper.
     * @return the minimum height, in pixels; returns {@code 0} if no wallpaper has been set.
     */
    function getMinHeight(callback: AsyncCallback<number>): void;
    function getMinHeight(): Promise<number>;

    /**
     * Obtains the minimum width of the wallpaper.
     * @return the minimum width, in pixels; returns {@code 0} if no wallpaper has been set.
     */
    function getMinWidth(callback: AsyncCallback<number>): void;
    function getMinWidth(): Promise<number>;

    /**
     * Checks whether to allow the application to change the wallpaper for the current user.
     * @return true if the application is allowed to set a wallpaper for the current user;
     */
    function isChangePermitted(callback: AsyncCallback<boolean>): void;
    function isChangePermitted(): Promise<boolean>;

    /**
     * Checks whether a user is allowed to set wallpapers.
     * @return true if a user is allowed to set wallpapers; returns false otherwise.
     */
    function isOperationAllowed(callback: AsyncCallback<boolean>): void;
    function isOperationAllowed(): Promise<boolean>;

    /**
     * Removes a wallpaper of the specified type and restores the default one.
     * @param wallpaperType Indicates the wallpaper type.
     * @permission ohos.permission.SET_WALLPAPER
     */
    function reset(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;
    function reset(wallpaperType: WallpaperType): Promise<void>;

    /**
     * Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.
     * @param source Indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file.
     * @param wallpaperType Indicates the wallpaper type.
     * @permission ohos.permission.SET_WALLPAPER
     */
    function setWallpaper(source: string | image.PixelMap, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;
    function setWallpaper(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>;

    /**
     * Registers a listener for wallpaper color changes to receive notifications about the changes.
     * @param type The incoming colorChange table open receiver pick a color change wallpaper wallpaper color changes
     * @param callback Provides dominant colors of the wallpaper.
     */
    function on(type: 'colorChange', callback: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void;

    /**
     * Unregisters a listener for wallpaper color changes.
     * @param type Incoming 'colorChange' table delete receiver to pick up a color change wallpaper wallpaper color changes
     * @param callback Provides dominant colors of the wallpaper.
     */
    function off(type: 'colorChange', callback?: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void;

    interface RgbaColor {
        /**
         * Said the red value, the range is 0 to 255.
         */
        red: number;
        /**
         * Said the green value, the range is 0 to 255.
         */
        green: number;
        /**
         * Said the blue value, the range is 0 to 255.
         */
        blue: number;
        /**
         * Said the alpha value, the range is 0 to 255.
         */
        alpha: number;
    }
}

export default wallpaper;
