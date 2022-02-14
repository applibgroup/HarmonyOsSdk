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
 * Indicates the description of transfer results for continuation.
 *
 * @name ContinuationResult
 * @devices phone, tablet, tv, wearable, car
 * @since 7
 * @sysCap AAFwk
 */
export interface ContinuationResult {
  /**
   * the information about the selected device id.
   *
   * @default -
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  id: string;

  /**
   * the information about the selected device type.
   *
   * @default -
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  type: string;

  /**
   * Indicates the name of the selected device.
   *
   * @default -
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  name: string;
}