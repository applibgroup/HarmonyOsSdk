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
 * Queries the available space of storage volumes and the application storage information of a specified user.
 *
 * <p>The storage information includes the application size, application data size, and application cached data size.
 * It is stored in StorageInfo.
 *
 * @since 7
 * @sysCap SystemCapability.ResourceSchedule.STORAGE_INFO
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace storageInfoManager {
    /**
    * Provides the storage information of an application.
    *
    * <p>The storage information includes the application size, application data size, and application cached data size.
    *
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.STORAGE_INFO
    * @devices phone, tablet, tv, wearable, car
    */
    interface StorageInfo {
        /**
        * The application size.
        */
        appSize: number;

        /**
        * The application cached data size.
        */
        cacheSize: number;

        /**
        * The application data size.
        */
        dataSize: number;
    }

    /**
    * Obtains the storage information of a specified application that belongs to a specified user
    * on a specified storage volume.
    *
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.STORAGE_INFO
    * @devices phone, tablet, tv, wearable, car
    * @param uuid Indicates the UUID of the storage volume to be queried.
    * @param packageName Indicates the name of the application package to be queried.
    * @param uid Indicates the ID of the user to be queried.
    * @param callback Indicates the callback for reporting the result.
    * @return Returns the storage status of the application.
    */
    function queryInfoByPackageName(uuid: string, packageName: string, uid: number, callback: AsyncCallback<StorageInfo>): void;
    function queryInfoByPackageName(uuid: string, packageName: string, uid: number): Promise<StorageInfo>;

    /**
    * Obtains the total space of a specified storage volume.
    *
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.STORAGE_INFO
    * @devices phone, tablet, tv, wearable, car
    * @param uuid Indicates the UUID of the storage volume to be queried.
    * @param callback Indicates the callback for reporting the result.
    * @return Returns the total size of the specified storage volume, in bytes.
    */
    function getTotalSize(uuid: string, callback: AsyncCallback<number>): void;
    function getTotalSize(uuid: string): Promise<number>;

    /**
    * Obtains the available space of a specified storage volume.
    *
    * <p>The available space includes the remaining space and the cache data space that can be released.
    *
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.STORAGE_INFO
    * @devices phone, tablet, tv, wearable, car
    * @param uuid Indicates the storage volume to be queried.
    * @param callback Indicates the callback for reporting the result.
    * @return Returns the available size of the specified storage volume, in bytes.
    */
    function getFreeSize(uuid: string, callback: AsyncCallback<number>): void;
    function getFreeSize(uuid: string): Promise<number>;

    /**
    * Obtains the application storage status of a specified user on a specified storage volume.
    *
    * @since 7
    * @sysCap SystemCapability.ResourceSchedule.STORAGE_INFO
    * @devices phone, tablet, tv, wearable, car
    * @param uuid Indicates the storage volume to be queried.
    * @param uid Indicates the ID of the user to be queried.
    * @param callback Indicates the callback for reporting the result.
    * @return Returns the storage status of the specified user.
    */
    function queryInfoByUid(uuid: string, uid: number, callback: AsyncCallback<StorageInfo>): void;
    function queryInfoByUid(uuid: string, uid: number): Promise<StorageInfo>;
}
export default storageInfoManager;

