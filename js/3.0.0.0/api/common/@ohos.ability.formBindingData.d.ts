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
 * interface of formBindingData.
 *
 * @name formBindingData
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace formBindingData {
  /**
   * Create an FormBindingData instance.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param obj Indicates the FormBindingData instance data.
   * @return Returns the {@link FormBindingData} instance.
   */
  function createFormBindingData(obj?: Object | string): FormBindingData;

  interface FormBindingData {
    data: Object
  }

}
export default formBindingData;