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
import { AsyncCallback, Callback } from './basic.d.ts';

 /**
 * Provides interfaces for initiating location requests, ending the location service,
 * and obtaining the location result cached by the system.
 *
 * @since 7
 * @SysCap SystemCapability.Location#LOCATION
 * @devices phone, tablet, tv, wearable, car
 * @import import geolocation from '@ohos.geolocation'
 * @permission ohos.permission.LOCATION
 */
declare namespace geolocation {
    /**
     * subscribe location changed
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param request Indicates the location request parameters.
     * @param callback Indicates the callback for reporting the location result.
     */
    function on(type: 'locationChange', request: LocationRequest, callback: Callback<Location>) : void;

    /**
     * unsubscribe location changed
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location result.
     */
    function off(type: 'locationChange', callback?: Callback<Location>) : void;

    /**
     * subscribe location switch changed
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location result.
     */
    function on(type: 'locationServiceState', callback: Callback<boolean>) : void;

    /**
     * unsubscribe location switch changed
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location result.
     */
    function off(type: 'locationServiceState', callback?: Callback<boolean>) : void;

    /**
     * obtain current location
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location result.
     */
    function getCurrentLocation(request: CurrentLocationRequest, callback: AsyncCallback<Location>) : void;
    function getCurrentLocation(callback: AsyncCallback<Location>) : void;
    function getCurrentLocation(request?: CurrentLocationRequest) : Promise<Location>;

    /**
     * obtain last known location
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location result.
     */
    function getLastLocation(callback: AsyncCallback<Location>) : void;
    function getLastLocation() : Promise<Location>;

    /**
     * obtain current location switch status
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location switch result.
     */
    function isLocationEnabled(callback: AsyncCallback<boolean>) : void;
    function isLocationEnabled() : Promise<boolean>;

    /**
     * request enable location
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the location switch status.
     */
    function requestEnableLocation(callback: AsyncCallback<boolean>) : void;
    function requestEnableLocation() : Promise<boolean>;

    /**
     * obtain address info from location
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the address info.
     */
    function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>) : void;
    function getAddressesFromLocation(request: ReverseGeoCodeRequest) : Promise<Array<GeoAddress>>;

    /**
     * obtain latitude and longitude info from location address
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the latitude and longitude result.
     */
    function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>) : void;
    function getAddressesFromLocationName(request: GeoCodeRequest) : Promise<Array<GeoAddress>>;

    /**
     * obtain geocode service status
     *
     * @since 7
     * @SysCap SystemCapability.Location.Location
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback for reporting the geocode service status.
     */
    function isGeoServiceAvailable(callback: AsyncCallback<boolean>) : void;
    function isGeoServiceAvailable() : Promise<boolean>;

    /**
     * configuring parameters in reverse geocode requests
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export interface ReverseGeoCodeRequest {
        locale?: string;
        latitude: number;
        longitude: number;
        maxItems?: number;
    }

    /**
     * configuring parameters in geocode requests
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export interface GeoCodeRequest {
        locale?: string;
        description: string;
        maxItems?: number;
        minLatitude?: number;
        minLongitude?: number;
        maxLatitude?: number;
        maxLongitude?: number;
    }

    /**
     * data struct describes geographic locations.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export interface GeoAddress {
        latitude?: number;
        longitude?: number;
        locale?: string;
        placeName?: string;
        countryCode?: string;
        countryName?: string;
        administrativeArea?: string;
        subAdministrativeArea?: string;
        locality?: string;
        subLocality?: string;
        roadName?: string;
        subRoadName?: string;
        premises?: string;
        postalCode?: string;
        phoneNumber?: string;
        addressUrl?: string;
        descriptions?: Array<string>;
        descriptionsSize?: number;
    }

    /**
     * configuring parameters in location requests
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export interface LocationRequest {
        priority?: LocationRequestPriority;
        scenario?: LocationRequestScenario;
        timeInterval?: number;
        distanceInterval?: number;
        maxAccuracy?: number;
    }

    /**
     * configuring parameters in current location requests
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export interface CurrentLocationRequest {
        priority?: LocationRequestPriority;
        scenario?: LocationRequestScenario;
        maxAccuracy?: number;
        timeoutMs?: number;
    }

    /**
     * provides information about geographic locations
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export interface Location {
        latitude: number;
        longitude: number;
        altitude: number;
        accuracy: number;
        speed: number;
        timeStamp: number;
        direction: number;
        timeSinceBoot: number;
        additions?: Array<string>;
        additionSize?: number;
    }

    /**
     * enum for location priority
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export enum LocationRequestPriority {
        UNSET = 0x200,
        ACCURACY,
        LOW_POWER,
        FIRST_FIX,
    }

    /**
     * enum for location scenario
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export enum LocationRequestScenario {
        UNSET = 0x300,
        NAVIGATION,
        TRAJECTORY_TRACKING,
        CAR_HAILING,
        DAILY_LIFE_SERVICE,
        NO_POWER,
    }

    /**
     * enum for error code
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     */
    export enum GeoLocationErrorCode {
        INPUT_PARAMS_ERROR = 101,
        REVERSE_GEOCODE_ERROR,
        GEOCODE_ERROR,
        LOCATOR_ERROR,
        LOCATION_SWITCH_ERROR,
        LAST_KNOWN_LOCATION_ERROR,
        LOCATION_REQUEST_TIMEOUT_ERROR,
    }
}

export default geolocation;
