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
 * Provides methods for managing bundle usage statistics,
 * including the methods for querying bundle usage information and state data.
 *
 * <p>You can use the methods defined in this class to query
 * the usage history and states of bundles in a specified period.
 * The system stores the query result in a {@link BundleStateInfo} or {@link BundleActiveState} instance and
 * then returns it to you.
 *
 * @since 7
 * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
 * @devices phone, tablet, tv, wearable, car
 * @permission ohos.permission.BUNDLE_ACTIVE_INFO
 */
declare namespace bundleState {

    /**
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
    * @devices phone, tablet, tv, wearable, car
    */
    interface BundleStateInfo {
        /**
         * the identifier of BundleStateInfo.
         */
        id: number;
        /**
         * the total duration, in milliseconds.
         */
        abilityInFgTotalTime?: number;
        /**
         * the last time when the application was accessed, in milliseconds.
         */
        abilityPrevAccessTime?: number;
        /**
         * the last time when the application was visible in the foreground, in milliseconds.
         */
        abilityPrevSeenTime?: number;
        /**
         * the total duration, in milliseconds.
         */
        abilitySeenTotalTime?: number;
        /**
         * the bundle name of the application.
         */
        bundleName?: string;
        /**
         * the total duration, in milliseconds.
         */
        fgAbilityAccessTotalTime?: number;
        /**
         * the last time when the foreground application was accessed, in milliseconds.
         */
        fgAbilityPrevAccessTime?: number;
        /**
         * the time of the first bundle usage record in this {@code BundleActiveInfo} object,
         * in milliseconds.
         */
        infosBeginTime?: number;
        /**
         * the time of the last bundle usage record in this {@code BundleActiveInfo} object,
         * in milliseconds.
         */
        infosEndTime?: number;

        /**
         * Merges a specified {@link BundleActiveInfo} object with this {@link BundleActiveInfo} object.
         * The bundle name of both objects must be the same.
         *
         * @since 7
         * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
         * @devices phone, tablet, tv, wearable, car
         * @param toMerge Indicates the {@link BundleActiveInfo} object to merge.
         * @throws IllegalArgumentException Throws this exception
         * if the bundle names of the two {@link BundleActiveInfo} objects are different.
         */
        merge(toMerge: BundleStateInfo): void;
    }

    /**
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
    * @devices phone, tablet, tv, wearable, car
    */
    interface BundleActiveState {
        /**
         * the usage priority group of the application
         */
        appUsagePriorityGroup?: number;
        /**
         * the bundle name.
         */
        bundleName?: string;
        /**
         * the shortcut ID
         */
        indexOfLink?: string;
        /**
         * the class name.
         */
        nameOfClass?: string;
        /**
         * the time when this state occurred, in milliseconds.
         */
        stateOccurredTime?: number;
        /**
         * the state type.
         */
        stateType?: number;
    }

    /**
     * Checks whether the application with a specified bundle name is in the idle state.
     *
     * @since 7
     * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
     * @devices phone, tablet, tv, wearable, car
     * @param bundleName Indicates the bundle name of the application to query.
     * @return Returns {@code true} if the application is idle in a particular period;
     * returns {@code false} otherwise. The time range of the particular period is defined by the system,
     * which may be hours or days.
     */
    function isIdleState(bundleName: string, callback: AsyncCallback<boolean>): void;
    function isIdleState(bundleName: string): Promise<boolean>;

    /**
     * Queries the usage priority group of the calling application.
     *
     * <p>The priority defined in a priority group restricts the resource usage of an application,
     * for example, restricting the running of background tasks. </p>
     *
     * @since 7
     * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
     * @devices phone, tablet, tv, wearable, car
     * @return Returns the usage priority group of the calling application.
     */
    function queryAppUsagePriorityGroup(callback: AsyncCallback<number>): void;
    function queryAppUsagePriorityGroup(): Promise<number>;

    /**
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
    * @devices phone, tablet, tv, wearable, car
    */
    interface BundleActiveInfoResponse {
        [key: string]: BundleStateInfo;
    }

    /**
     * Queries usage information about each bundle within a specified period.
     *
     * <p>This method queries usage information at the {@link #BY_OPTIMIZED} interval by default.</p>
     * <p><b>Permissions: </b>{@link ohos.security.SystemPermission#BUNDLE_ACTIVE_INFO}
     *
     * @since 7
     * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
     * @devices phone, tablet, tv, wearable, car
     * @permission ohos.permission.BUNDLE_ACTIVE_INFO
     * @param begin Indicates the start time of the query period, in {@link java.lang.System#} format.
     * @param end Indicates the end time of the query period, in {@link java.lang.System#} format.
     * @return Returns the {@link BundleActiveInfoResponse} objects containing the usage information about each bundle.
     * @see #queryBundleActiveInfosByInterval(int, long, long)
     */
    function queryBundleStateInfos(begin: number, end: number, callback: AsyncCallback<BundleActiveInfoResponse>): void;
    function queryBundleStateInfos(begin: number, end: number): Promise<BundleActiveInfoResponse>;

    /**
    * Declares interval type.
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
    * @devices phone, tablet, tv, wearable, car
    */
    export enum IntervalType {
        /**
         * Indicates the interval type that will determine the optimal interval based on the start and end time.
         */
        BY_OPTIMIZED = 0,

        /**
         * Indicates the daily interval.
         */
        BY_DAILY = 1,

        /**
         * Indicates the weekly interval.
         */
        BY_WEEKLY = 2,

        /**
         * Indicates the monthly interval.
         */
        BY_MONTHLY = 3,

        /**
         * Indicates the annually interval.
         */
        BY_ANNUALLY = 4
    }

    /**
     * Queries usage information about each bundle within a specified period at a specified interval.
     *
     *
     * <p><b>Permissions: </b>{@link ohos.security.SystemPermission#BUNDLE_ACTIVE_INFO}
     *
     * @since 7
     * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
     * @devices phone, tablet, tv, wearable, car
     * @permission ohos.permission.BUNDLE_ACTIVE_INFO
     * @param byInterval Indicates the interval at which the usage statistics are queried.
     * The value can be {@link #BY_OPTIMIZED}, {@link #BY_DAILY},
     * {@link #BY_WEEKLY}, {@link #BY_MONTHLY}, or {@link #BY_ANNUALLY}.
     * @param begin Indicates the start time of the query period,
     * in {@link java.lang.System#} format.
     * @param end Indicates the end time of the query period,
     * in {@link java.lang.System#} format.
     * @return Returns the list of {@link BundleActiveInfos} objects containing the usage information about each bundle.
     * @see #queryBundleActiveInfos(long, long)
     */
    function queryBundleStateInfoByInterval(byInterval: IntervalType, begin: number, end: number, callback: AsyncCallback<Array<BundleStateInfo>>): void;
    function queryBundleStateInfoByInterval(byInterval: IntervalType, begin: number, end: number): Promise<Array<BundleStateInfo>>;

    /**
     * Queries state data of all bundles within a specified period identified by the start and end time.
     *
     * <p><b>Permissions: </b>{@link ohos.security.SystemPermission#BUNDLE_ACTIVE_INFO}
     *
     * @since 7
     * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
     * @devices phone, tablet, tv, wearable, car
     * @permission ohos.permission.BUNDLE_ACTIVE_INFO
     * @param begin Indicates the start time of the query period.
     * @param end Indicates the end time of the query period.
     * @return Returns the {@link BundleActiveStates} object containing the state data of all bundles.
     */
    function queryBundleActiveStates(begin: number, end: number, callback: AsyncCallback<Array<BundleActiveState>>): void;
    function queryBundleActiveStates(begin: number, end: number): Promise<Array<BundleActiveState>>;

    /**
     * Queries state data of the current bundle within a specified period.
     *
     * @since 7
     * @sysCap SystemCapability.ResourceSchedule.BUNDLE_ACTIVE
     * @devices phone, tablet, tv, wearable, car
     * @param begin Indicates the start time of the query period.
     * @param end Indicates the end time of the query period.
     * @return Returns the {@link BundleActiveState} object Array containing the state data of the current bundle.
     * @see #queryBundleActiveStates(long, long)
     */
    function queryCurrentBundleActiveStates(begin: number, end: number, callback: AsyncCallback<Array<BundleActiveState>>): void;
    function queryCurrentBundleActiveStates(begin: number, end: number): Promise<Array<BundleActiveState>>;
}
export default bundleState;