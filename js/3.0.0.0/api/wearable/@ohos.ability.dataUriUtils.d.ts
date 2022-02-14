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
 * A utility class used for handling objects that use the DataAbilityHelper scheme.
 *
 * @name dataUriUtils
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace dataUriUtils {
  /**
   * Obtains the ID attached to the end of the path component of the given uri.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri object from which the ID is to be obtained.
   * @return Returns the ID attached to the end of the path component;
   */
  function getId(uri: string): number

  /**
   * Attaches the given ID to the end of the path component of the given uri.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri string from which the ID is to be obtained.
   * @param id Indicates the ID to attach.
   * @return Returns the uri object with the given ID attached.
   */
  function attachId(uri: string, id: number): string

  /**
   * Deletes the ID from the end of the path component of the given uri.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri object from which the ID is to be deleted.
   * @return Returns the uri object with the ID deleted.
   */
  function deleteId(uri: string): string

  /**
   * Updates the ID in the specified uri
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri object to be updated.
   * @param id Indicates the new ID.
   * @return Returns the updated uri object.
   */
  function updateId(uri: string, id: number): string
}
export default dataUriUtils;