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

import { AsyncCallback } from './basic';

/**
 * Provides resource related APIs.
 *
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace resourceManager {
/**
 * Enumerates screen directions.
 *
 * @since 7
 */
export enum Direction {
    /**
     * Indicates the vertical direction.
     *
     * @since 7
     */
    DIRECTION_VERTICAL = 0,

    /**
     * Indicates the horizontal direction.
     *
     * @since 7
     */
    DIRECTION_HORIZONTAL = 1
}

/**
 * Enumerates device types.
 *
 * @since 7
 */
export enum DeviceType {
    /**
     * Indicates a phone.
     *
     * @since 7
     */
    DEVICE_TYPE_PHONE = 0x00,

    /**
     * Indicates a tablet.
     *
     * @since 7
     */
    DEVICE_TYPE_TABLET = 0x01,

    /**
     * Indicates a car.
     *
     * @since 7
     */
    DEVICE_TYPE_CAR = 0x02,

    /**
     * Indicates a PC.
     *
     * @since 7
     */
    DEVICE_TYPE_PC = 0x03,

    /**
     * Indicates a smart TV.
     *
     * @since 7
     */
    DEVICE_TYPE_TV = 0x04,

    /**
     * Indicates a wearable device.
     *
     * @since 7
     */
    DEVICE_TYPE_WEARABLE = 0x06
}

/**
 * Enumerates screen density types.
 *
 * @since 7
 */
export enum ScreenDensity {
    /**
     * Indicates small screen density.
     *
     * @since 7
     */
    SCREEN_SDPI = 120,

    /**
     * Indicates medium screen density.
     *
     * @since 7
     */
    SCREEN_MDPI = 160,

    /**
     * Indicates large screen density.
     *
     * @since 7
     */
    SCREEN_LDPI = 240,

    /**
     * Indicates extra-large screen density.
     *
     * @since 7
     */
    SCREEN_XLDPI = 320,

    /**
     * Indicates extra-extra-large screen density.
     *
     * @since 7
     */
    SCREEN_XXLDPI = 480,

    /**
     * Indicates extra-extra-extra-large screen density.
     *
     * @since 7
     */
    SCREEN_XXXLDPI = 640
}

/**
 * Provides the device configuration.
 *
 * @since 7
 */
export interface Configuration {
    /**
     * Indicates the screen direction of the current device.
     *
     * @since 7
     */
    direction: Direction

    /**
     * Indicates the current system language, for example, zh-Hans-CN.
     *
     * @since 7
     */
    locale: string
}

/**
 * Provides the device capability.
 *
 * @since 7
 */
export interface DeviceCapability {
    /**
     * Indicates the screen density of the current device.
     *
     * @since 7
     */
    screenDensity: ScreenDensity

    /**
     * Indicates the type of the current device.
     *
     * @since 7
     */
    deviceType: DeviceType
}

/**
 * Obtains the ResourceManager object of the current application.
 *
 * @param callback Indicates the callback containing the ResourceManager object.
 * @since 7
 */
export function getResourceManager(callback: AsyncCallback<ResourceManager>);

/**
 * Obtains the ResourceManager object of the specified application.
 *
 * @param bundleName Indicates the bundle name of the specified application.
 * @param callback Indicates the callback containing the ResourceManager object.
 * @since 7
 */
export function getResourceManager(bundleName: string, callback: AsyncCallback<ResourceManager>);

/**
 * Obtains the ResourceManager object of the current application.
 *
 * @return Returns that the ResourceManager object is returned in Promise mode.
 * @since 7
 */
export function getResourceManager(): Promise<ResourceManager>;

/**
 * Obtains the ResourceManager object of the specified application.
 *
 * @param bundleName Indicates the bundle name of the specified application.
 * @return Returns that the ResourceManager object is returned in Promise mode.
 * @since 7
 */
export function getResourceManager(bundleName: string): Promise<ResourceManager>;

/**
 * Provides the capability of accessing application resources.
 *
 * @since 7
 */
export interface ResourceManager {
    /**
     * Obtains the character string corresponding to a specified resource ID in callback mode.
     *
     * @param resId Indicates the resource ID.
     * @param callback Indicates the asynchronous callback used to return the obtained character string.
     * @since 7
     */
    getString(resId: number, callback: AsyncCallback<string>);

    /**
     * Obtains string resources associated with a specified resource ID in Promise mode.
     *
     * @param resId Indicates the resource ID.
     * @return Returns the character string corresponding to the resource ID.
     * @since 7
     */
    getString(resId: number): Promise<string>;

    /**
     * Obtains the array of character strings corresponding to a specified resource ID in callback mode.
     *
     * @param resId Indicates the resource ID.
     * @param callback Indicates the asynchronous callback used to return the obtained array of character strings.
     * @since 7
     */
    getStringArray(resId: number, callback: AsyncCallback<Array<string>>);

    /**
     * Obtains the array of character strings corresponding to a specified resource ID in Promise mode.
     *
     * @param resId Indicates the resource ID.
     * @return Returns the array of character strings corresponding to the specified resource ID.
     * @since 7
     */
   getStringArray(resId: number): Promise<Array<string>>;

    /**
     * Obtains the content of the config file corresponding to a specified resource ID in callback mode.
     *
     * @param resId Indicates the resource ID.
     * @param callback Indicates the asynchronous callback used to return the obtained config file content.
     * @since 7
     */
    getJsonConfig(resId: number, callback: AsyncCallback<string>);

    /**
     * Obtains the content of the config file corresponding to a specified resource ID in Promise mode.
     *
     * @param resId Indicates the resource ID.
     * @return Returns the content of the config file corresponding to the specified resource ID.
     * @since 7
     */
    getJsonConfig(resId: number): Promise<string>;

    /**
     * Obtains the content of the media file corresponding to a specified resource ID in callback mode.
     *
     * @param resId Indicates the resource ID.
     * @param callback Indicates the asynchronous callback used to return the obtained media file content.
     * @since 7
     */
    getMedia(resId: number, callback: AsyncCallback<Uint8Array>);

    /**
     * Obtains the content of the media file corresponding to a specified resource ID in Promise mode.
     *
     * @param resId Indicates the resource ID.
     * @return Returns the content of the media file corresponding to the specified resource ID.
     * @since 7
     */
    getMedia(resId: number): Promise<Uint8Array>;

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in callback mode.
     *
     * @param resId Indicates the resource ID.
     * @param callback Indicates the asynchronous callback used to return the obtained Base64 code of the image
     *                 resource.
     * @since 7
     */
   getMediaBase64(resId: number, callback: AsyncCallback<string>);

    /**
     * Obtains the Base64 code of the image resource corresponding to the specified resource ID in Promise mode.
     *
     * @param resId Indicates the resource ID.
     * @return Returns the Base64 code of the image resource corresponding to the specified resource ID.
     * @since 7
     */
    getMediaBase64(resId: number): Promise<string>;

    /**
     * Obtains the device capability in callback mode.
     *
     * @param callback Indicates the asynchronous callback used to return the obtained device capability.
     * @since 7
     */
    getDeviceCapability(callback: AsyncCallback<DeviceCapability>);

    /**
     * Obtains the device capability in Promise mode.
     *
     * @return Returns the device capability.
     * @since 7
     */
    getDeviceCapability(): Promise<DeviceCapability>;

    /**
     * Obtains the device configuration in callback mode.
     *
     * @param callback Indicates the asynchronous callback used to return the obtained device
     *                 configuration.
     * @since 7
     */
    getConfiguration(callback: AsyncCallback<Configuration>);

    /**
     * Obtains the device configuration in Promise mode.
     *
     * @return Returns the device configuration.
     * @since 7
     */
    getConfiguration(): Promise<Configuration>;

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to the
     * specified number in callback mode.
     *
     * @param resId Indicates the resource ID.
     * @param num Indicates the number.
     * @param callback Indicates the asynchronous callback used to return the singular-plural character
     *                 string represented by the ID string corresponding to the specified number.
     * @since 7
     */
    getPluralString(resId: number, num: number, callback: AsyncCallback<string>);

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to
     * the specified number in Promise mode.
     *
     * @param resId Indicates the resource ID.
     * @param num Indicates the number.
     * @return Returns the singular-plural character string represented by the ID string
     *         corresponding to the specified number.
     * @since 7
     */
    getPluralString(resId: number, num: number): Promise<string>;

    /**
     * Release the java ResourceManager related to this getResourceManager.
     *
     * @since 7
     */
    release();
}
}
export default resourceManager;