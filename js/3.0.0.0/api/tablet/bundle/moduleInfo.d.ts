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
 * @name Stores module information about an application.
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
export interface ModuleInfo {
  /**
   * The module name.
   *
   * @default Indicates the name of the .hap package to which the capability belongs
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   */
  readonly moduleName: string;

  /**
   * The module source path.
   *
   * @default Indicates the module source dir of this module
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   */
  readonly moduleSourceDir: string;
}