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
 * @devices phone, tablet, tv, wearable
 */
declare namespace cardEmulation {
  enum FeatureType {
    /** This constant is used to check whether HCE card emulation is supported. */
    HCE = 0,

    /** This constant is used to check whether SIM card emulation is supported. */
    UICC = 1,

    /** This constant is used to check whether eSE card emulation is supported. */
    ESE = 2,
  }

  /**
   * Checks whether a specified type of card emulation is supported.
   *
   * <p>This method is used to check Whether the host or secure element supports card emulation.
   *
   * @param feature Indicates the card emulation type, {@code HCE}, {@code UICC}, or {@code ESE}.
   * @return Returns {@code true} if the specified type of card emulation is supported; returns
   * {@code false} otherwise.
   * @since 6
   */
  function isSupported(feature: number): boolean;
}
export default cardEmulation;