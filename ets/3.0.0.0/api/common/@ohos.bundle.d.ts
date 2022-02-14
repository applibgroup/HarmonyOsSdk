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
import { ApplicationInfo } from './bundle/applicationInfo';
import { BundleInfo } from './bundle/bundleInfo';
import { AbilityInfo } from './bundle/abilityInfo';
import { Want } from './ability/want';

/**
 * @name Bundle options
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import import BundleOptions from '@ohos.bundle'
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
export interface BundleOptions {
  /**
    * @default Indicates the user id
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  userId?: number;

  /**
    * @default Indicates the network id
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  networkId?: string;
}

/**
 * @name Permission Def
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import import PermissionDef from '@ohos.bundle'
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
export interface PermissionDef {
  /**
    * @default The name of this permission.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  name?: string;

  /**
    * @default The flag indicating whether the permission has been discarded.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  permissionFlags?: number;

  /**
    * @default The mode of this permission is granted.it contains SYSTEM_GRANT and USER_GRANT.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  grantMode?: number;

  /**
    * @default For what kind of application the permission restricts.if not set, no restricted scope for
    *          permission applicants.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  availableScope?: number;

  /**
    * @default A string resource identifier (in the package's resources) of this
    *          permission's brief description.From the "label" attribute or,if not set, 0.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  labelRes?: number;

  /**
    * @default A string resource identifier (in the package's resources) of this
    *          permission's detailed description. From the "description" attribute or,if not set, 0.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  descriptionRes?: number;

  /**
    * @default Group to which this permission belongs.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  group?: string;

  /**
    * @default A string resource identifier (in the package's resources) of this
    *          permission's usage information. From the "usageInfo" attribute or,if not set, 0.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  usageInfo?: number;

  /**
    * @default A string resource identifier (in the package's resources) of this
    *          permission's description of continuous reminder. From the "reminderDesc"
    *          attribute or,if not set, null.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  reminderDesc?: string;

  /**
    * @default A string resource identifier (in the package's resources) of this
    *          permission's icon of continuous reminder. From the "reminderDesc"
    *          attribute or,if not set, 0.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  reminderIcon?: number;
}

/**
 * bundle.
 * @name bundle
 * @since 7
 * @sysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @permission NA
 */
declare namespace bundle {

/**
 * @name BundleFlag
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  enum BundleFlag {
    GET_BUNDLE_DEFAULT = 0x00000000,
    GET_BUNDLE_WITH_ABILITIES = 0x00000001,
    GET_ABILITY_INFO_WITH_PERMISSION = 0x00000002,
    GET_ABILITY_INFO_WITH_APPLICATION = 0x00000004,
    GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000008,
    GET_BUNDLE_WITH_REQUESTED_PERMISSION = 0x00000010,
    GET_ALL_APPLICATION_INFO = 0xFFFF0000,
  }

/**
 * @name ColorMode
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  export enum ColorMode {
    AUTO_MODE = -1,
    DARK_MODE = 0,
    LIGHT_MODE = 1,
  }

  /**
   * @name AbilityType
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable, car
   */
  export enum AbilityType {
    /**
      * @default Indicates an unknown ability type
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    UNKNOWN,

    /**
      * @default Indicates that the ability has a UI
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    PAGE,

    /**
      * @default Indicates that the ability does not have a UI
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    SERVICE,

    /**
      * @default Indicates that the ability is used to provide data access services
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    DATA,
  }

  /**
   * @name AbilitySubType
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable, car
   */
  export enum AbilitySubType {
    UNSPECIFIED = 0,
    CA = 1,
  }

  /**
   * @name DisplayOrientation
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable, car
   */
  export enum DisplayOrientation {
    /**
      * @default Indicates that the system automatically determines the display orientation
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    UNSPECIFIED,

    /**
      * @default Indicates the landscape orientation
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    LANDSCAPE,

    /**
      * @default Indicates the portrait orientation
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    PORTRAIT,

    /**
      * @default Indicates the page ability orientation is the same as that of the nearest ability in the stack
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    FOLLOW_RECENT,
  }

  /**
   * @name LaunchMode
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable, car
   */
  export enum LaunchMode {
    /**
      * @default Indicates that the ability has only one instance
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    SINGLETON = 0,

    /**
      * @default Indicates that the ability can have multiple instances
      * @since 7
      * @SysCap SystemCapability.Appexecfwk
      */
    STANDARD = 1,
  }

  /**
   * @name BundleError
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @import NA
   * @permission NA
   * @devices phone, tablet, tv, wearable, car
   */
  enum BundleError {
    REMOTE_EXCEPTION,
    SECURITY_EXCEPTION,
  }

  /**
   * Obtains based on a given networkId and bundle name.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the application bundle name to be queried.
   * @param bundleFlags Indicates the flag used to specify information contained in that will be
   *              returned.
   * @param options the BundleOptions object.
   * @return Returns the BundleInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED,ohos.permission.GET_BUNDLE_INFO
   */
   function getBundleInfo(bundleName: string, bundleFlags: number, options: BundleOptions, callback: AsyncCallback<BundleInfo>): void;
   function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;
   function getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions): Promise<BundleInfo>;

  /**
   * Obtains based on a given bundle name.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName Indicates the application bundle name to be queried.
   * @param bundleFlags Indicates the flag used to specify information contained in the ApplicationInfo object
   *              that will be returned.
   * @param userId Indicates the user ID.
   * @return Returns the ApplicationInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED, ohos.permission.GET_BUNDLE_INFO
   */
  function getApplicationInfo(bundleName: string, bundleFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>) : void;
  function getApplicationInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<ApplicationInfo>) : void;
  function getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number) : Promise<ApplicationInfo>;


  /**
   * Query the AbilityInfo by the given Want.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param want Indicates the Want containing the application bundle name to
   *               be queried.
   * @param bundleFlags Indicates the flag used to specify information contained in the AbilityInfo objects that
   *              will be returned.
   * @param userId Indicates the user ID.
   * @return Returns a list of AbilityInfo objects.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED, ohos.permission.GET_BUNDLE_INFO
   */
  function queryAbilityByWant(want: Want, bundleFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void;
  function queryAbilityByWant(want: Want, bundleFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void;
  function queryAbilityByWant(want: Want, bundleFlags: number, userId?:number): Promise<Array<AbilityInfo>>;

  /**
   * get ability info by bundle name and abilityName.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param bundleName the name of bundle.
   * @param abilityName the name of ability.
   * @return the abilityInfo info which match bundle name and abilityName.
   */
   function getAbilityInfo(bundleName: string, abilityName: string, callback: AsyncCallback<AbilityInfo>): void;
   function getAbilityInfo(bundleName: string, abilityName: string): Promise<AbilityInfo>;
}

export default bundle;
