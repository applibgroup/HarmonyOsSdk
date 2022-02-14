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

import { ModuleInfo } from './moduleInfo';
import { CustomizeData } from './customizeData'

/**
 * @name Obtains configuration information about an application
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
export interface ApplicationInfo {
  /**
    * @default Indicates the application name, which is the same as {@code bundleName}
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly name: string;

  /**
    * @default Description of application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly description: string;

  /**
    * @default Indicates the description id of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly descriptionId: number;

  /**
    * @default Indicates whether the application is a system application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly systemApp: boolean;

  /**
    * @default Indicates whether or not this application may be instantiated
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly enabled: boolean;

  /**
    * @default Indicates the label of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly label: string;

  /**
    * @default Indicates the label id of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly labelId: string;

  /**
    * @default Indicates the icon of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly icon: string;

  /**
    * @default Indicates the icon id of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly iconId: string;

  /**
    * @default Process of application, if user do not set it ,the value equal bundleName
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly process: string;

  /**
    * @default Indicates the running mode supported by the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly supportedModes: number;

  /**
    * @default Indicates the path storing the module resources of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly moduleSourceDirs: Array<string>;

  /**
    * @default Indicates the permissions required for accessing the application.
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly permissions: Array<string>;

  /**
    * @default Indicates module information about an application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly moduleInfo: Array<ModuleInfo>;

  /**
    * @default Indicates the path where the {@code Entry.hap} file of the application is saved
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly entryDir: string;

  /**
    * @default Indicates the custom metadata of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  customizeData: Map<string, CustomizeData>;
}