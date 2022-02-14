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

import { Want } from '../ability/want';
import wantAgent from '../@ohos.wantAgent'

/**
 * Provides the information required for triggering a WantAgent.
 *
 * @name WantAgentInfo
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export interface WantAgentInfo {
  /**
   * An array of all Wants for starting abilities or sending common events. Only Wants can be displayed.
   */
  wants: Array<Want>;

  /**
   * Type of the action specified in a Want.
   */
  operationType: wantAgent.OperationType;

  /**
   * Request code defined by the user.
   */
  requestCode: number;

  /**
   * An array of flags for using the WantAgent.
   */
  wantAgentFlags?: Array<wantAgent.WantAgentFlags>;

  /**
   * Extra information about how the Want starts an ability.
   * If there is no extra information to set, this constant can be left empty.
   */
  extraInfo?: {[key: string]: any};
}