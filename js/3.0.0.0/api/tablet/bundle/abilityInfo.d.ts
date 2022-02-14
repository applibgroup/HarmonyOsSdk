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

import { ApplicationInfo } from './applicationInfo';
import { CustomizeData } from './customizeData'
import bundle from './../@ohos.bundle';

/**
 * @name Obtains configuration information about an ability
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
export interface AbilityInfo {
  /**
    * @default Indicates the name of the bundle containing the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly bundleName: string;

  /**
    * @default Ability simplified class name
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly name: string;

  /**
    * @default Indicates the label of the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly label: string;

  /**
    * @default Describes the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly description: string;

  /**
    * @default Indicates the icon of the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly icon: string;

  /**
    * @default Indicates the label id of the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly labelId: number;

  /**
    * @default Indicates the description id of the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly descriptionId: number;

  /**
    * @default Indicates the icon id of the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly iconId: number;

  /**
    * @default Indicates the name of the .hap package to which the capability belongs
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly moduleName: string;

  /**
    * @default Process of ability, if user do not set it ,the value equal application process
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly process: string;

  /**
    * @default Info about which ability is this nick point to
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly targetAbility: string;

  /**
    * @default Indicates the background service addressing a specific usage scenario
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly backgroundModes: number;

  /**
    * @default Indicates whether an ability can be called by other abilities
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly isVisible: boolean;

  /**
    * @default Indicates whether the ability provides the embedded card capability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly formEnabled: boolean;

  /**
    * @default Enumerates types of templates that can be used by an ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly type: bundle.AbilityType;

  /**
    * @default Enumerates the subType of templates used by an ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly subType: bundle.AbilitySubType;

  /**
    * @default Enumerates ability display orientations
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly orientation: bundle.DisplayOrientation;

  /**
    * @default Enumerates ability launch modes
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly launchMode: bundle.LaunchMode;

  /**
    * @default The permissions that others need to launch this ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly permissions: Array<string>;

  /**
    * @default The device types that this ability can run on
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly deviceTypes: Array<string>;

  /**
    * @default The device capability that this ability needs
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly deviceCapabilities: Array<string>;

  /**
    * @default Indicates the permission required for reading ability data
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly readPermission: string;

  /**
    * @default Indicates the permission required for writing data to the ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly writePermission: string;

  /**
    * @default Obtains configuration information about an application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly applicationInfo: ApplicationInfo;

  /**
    * @default Where form can be displayed
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly formEntity: number;

  /**
    * @default Minimum height of ability.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly minFormHeight: number;

  /**
    * @default Default height of ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly defaultFormHeight: number;

  /**
    * @default Minimum width of ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly minFormWidth: number;

  /**
    * @default Default width of ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly defaultFormWidth: number;

  /**
    * @default Uri of ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly uri: string;

  /**
    * @default Indicates the custom metadata of ability
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  customizeData: Map<string, Array<CustomizeData>>;
}
