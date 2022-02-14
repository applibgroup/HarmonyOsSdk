/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from '../basic';
import { ApplicationInfo } from '../bundle/applicationInfo';
import { HapModuleInfo } from '../bundle/hapModuleInfo';
import { ProcessInfo } from './processInfo';
import { AppVersionInfo } from './appVersionInfo';
import { DisplayOrientation } from '../@ohos.bundle';
import { ElementName } from '../bundle/elementName';
import { AbilityInfo } from '../bundle/abilityInfo';

/**
 * The context of an ability or an application.  It allows access to
 * application-specific resources, request and verification permissions.
 * Can only be obtained through the ability.
 *
 * @since 6
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import abilityManager from 'app/context'
 */
export interface Context {

   /**
    * Get app cache dir.
    * @note If in the context of the ability, return the cache dir of
    * the ability; if in the context of the application, return the
    * cache dir of the application.
    * @since 6
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    * @return the cache dir
    */
    getCacheDir(callback: AsyncCallback<string>): void;
    getCacheDir(): Promise<string>;

    /**
    * Get app files dir.
    * @note If in the context of the ability, return the files dir of
    * the ability; if in the context of the application, return the
    * files dir of the application.
    * @since 6
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    * @return the files dir
    */
    getFilesDir(callback: AsyncCallback<string>): void;
    getFilesDir(): Promise<string>;

    /**
    * Get app external cache dir.
    * @since 6
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    * @return the cache dir
    * @deprecated In the new version, storage no longer distinguishes
    * between internal and external
    */
    getExternalCacheDir(callback: AsyncCallback<string>): void;
    getExternalCacheDir(): Promise<string>;

    /**
    * Get the local root dir of an app. If it is the first call, the dir
    * will be created.
    * @note If in the context of the ability, return the root dir of
    * the ability; if in the context of the application, return the
    * root dir of the application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    * @return the root dir
    */
    getOrCreateLocalDir(): Promise<string>;
    getOrCreateLocalDir(callback: AsyncCallback<string>): void;

    /**
    * Get the local root dir of an app. If it is the first call, the dir
    * will be created.
    * @note If in the context of the ability, return the root dir of
    * the ability; if in the context of the application, return the
    * root dir of the application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, car
    * @return the root dir
    */
    getOrCreateDistributedDir(): Promise<string>;
    getOrCreateDistributedDir(callback: AsyncCallback<string>): void;

    /**
    * Verify whether the specified permission is allowed for a particular
    * pid and uid running in the system.
    * @param permission The name of the specified permission
    * @param options optional parameters
    * @note Pid and uid are optional. If you do not pass in pid and uid,
    * it will check your own permission.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    * @return asynchronous callback with {@code 0} if the PID
    *         and UID have the permission; callback with {@code -1} otherwise.
    */
    verifyPermission(permission: string, options?: PermissionOptions): Promise<number>;
    verifyPermission(permission: string, options: PermissionOptions, callback: AsyncCallback<number>): void;
    verifyPermission(permission: string, callback: AsyncCallback<number>): void;

    /**
    * Checks whether a specified permission has been granted to the process identified by
    * options, and throws a SecurityException if the permission is not granted.
    * @param permission The name of the specified permission
    * @param options optional parameters
    * @param message Indicates the information to be displayed in the SecurityException if it is thrown.
    * @note Pid and uid are optional. If you do not pass in pid and uid,
    * it will check your own permission.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    compelVerifyPermission(permission: string, message: string, options?: PermissionOptions): Promise<void>;
    compelVerifyPermission(permission: string, message: string, options: PermissionOptions, callback: AsyncCallback<void>): void;
    compelVerifyPermission(permission: string, message: string, callback: AsyncCallback<void>): void;

    /**
    * Requests certain permissions from the system.
    * @param permissions Indicates the list of permissions to be requested. This parameter cannot be null.
    * @param requestCode Indicates the request code to be passed to the PermissionRequestResult
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number, resultCallback: AsyncCallback<PermissionRequestResult>): void;
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number): Promise<PermissionRequestResult>;

    /**
    * Obtains information about the current application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getApplicationInfo(callback: AsyncCallback<ApplicationInfo>): void
    getApplicationInfo(): Promise<ApplicationInfo>;

    /**
    * Obtains the bundle name of the current ability.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getBundleName(callback: AsyncCallback<string>): void
    getBundleName(): Promise<string>;

    /**
    * Obtains the current display orientation of this ability.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getDisplayOrientation(callback: AsyncCallback<DisplayOrientation>): void
    getDisplayOrientation(): Promise<DisplayOrientation>;

    /**
    * Sets the display orientation of the current ability.
    * @param orientation Indicates the new orientation for the current ability.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    setDisplayOrientation(orientation: DisplayOrientation, callback: AsyncCallback<void>): void
    setDisplayOrientation(orientation: DisplayOrientation): Promise<void>;

    /**
    * Sets whether to show this ability on top of the lock screen whenever the lock screen is displayed, keeping the ability in the ACTIVE state.
    * @param show Specifies whether to show this ability on top of the lock screen. The value true means to show it on the lock screen, and the value false means not.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    setShowOnLockScreen(show: boolean, callback: AsyncCallback<void>): void
    setShowOnLockScreen(show: boolean): Promise<void>;

    /**
    * Sets whether to wake up the screen when this ability is restored.
    * @param wakeUp Specifies whether to wake up the screen. The value true means to wake it up, and the value false means not.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    setWakeUpScreen(wakeUp: boolean, callback: AsyncCallback<void>): void
    setWakeUpScreen(wakeUp: boolean): Promise<void>;

    /**
    * Obtains information about the current process, including the process ID and name.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getProcessInfo(callback: AsyncCallback<ProcessInfo>): void
    getProcessInfo(): Promise<ProcessInfo>;

    /**
    * Obtains the type of this application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getAppType(callback: AsyncCallback<string>): void
    getAppType(): Promise<string>;

    /**
    * Obtains the ohos.bundle.ElementName object of the current ability. This method is available only to Page abilities.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getElementName(callback: AsyncCallback<ElementName>): void
    getElementName(): Promise<ElementName>;

    /**
    * Obtains the HapModuleInfo object of the application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getHapModuleInfo(callback: AsyncCallback<HapModuleInfo>): void
    getHapModuleInfo(): Promise<HapModuleInfo>;

    /**
    * Obtains the name of the current process.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getProcessName(callback: AsyncCallback<string>): void
    getProcessName(): Promise<string>;

    /**
    * Obtains the bundle name of the ability that called the current ability.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getCallingBundle(callback: AsyncCallback<string>): void
    getCallingBundle(): Promise<string>;

    /**
    * Prints out the time required for the system to complete drawing this Page ability.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    printDrawnCompleted(callback: AsyncCallback<void>): void
    printDrawnCompleted(): Promise<void>;

    /**
    * Checks whether the configuration of this ability is changing.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    isUpdatingConfigurations(callback: AsyncCallback<boolean>): void
    isUpdatingConfigurations(): Promise<boolean>;

    /**
    * Obtains information about the current application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getAppVersionInfo(callback: AsyncCallback<AppVersionInfo>): void
    getAppVersionInfo(): Promise<AppVersionInfo>;

    /**
    * Obtains the ApplicationContext object of the application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getApplicationContext(): Context;

    /**
    * Obtains information about the current ability.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable, car
    */
    getAbilityInfo(callback: AsyncCallback<AbilityInfo>): void
    getAbilityInfo(): Promise<AbilityInfo>;
}

/**
 * @name the result of requestPermissionsFromUser with asynchronous callback
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 */
interface PermissionRequestResult {
    /**
    * @default The request code passed in by the user
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
    requestCode: number;

    /**
    * @default The permissions passed in by the user
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
    permissions: Array<string>;

    /**
    * @default The results for the corresponding request permissions
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
    authResults: Array<number>;
}

interface PermissionOptions {
 /**
  * @default The process id
  * @since 7
  * @SysCap SystemCapability.Appexecfwk
  */
 pid?: number;

 /**
  * @default The user id
  * @since 7
  * @SysCap SystemCapability.Appexecfwk
  */
 uid?: number;
}
