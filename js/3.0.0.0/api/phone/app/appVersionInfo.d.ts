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

/**
 * @name Obtains version information of a application
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @permission NA
 * @devices phone, tablet, tv, wearable
 */
export interface AppVersionInfo {
  /**
    * @default Indicates the name of this application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly appName: string;

  /**
    * @default Indicates the version number of the application
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly versionCode: number;

  /**
    * @default Indicates the text description of the application version
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
  readonly versionName: string;
}
