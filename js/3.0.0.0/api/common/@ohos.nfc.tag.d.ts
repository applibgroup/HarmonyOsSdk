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

import { NfcATag, NfcBTag, NfcFTag, NfcVTag } from './tag/nfctech';

/**
 * Provides methods to operate or manage NFC tag.
 *
 * @import import tag from '@ohos.nfc.tag';
 * @since 7
 * @sysCap SystemCapability.Communication.NFC
 * @devices phone, tablet, wearable, car
 */
declare namespace tag {
  /** Indicates an NFC-A tag. */
  const NFC_A = 1;

  /** Indicates an NFC-B tag. */
  const NFC_B = 2;

  /** Indicates an ISO-DEP tag. */
  const ISO_DEP = 3;

  /** Indicates an NFC-F tag. */
  const NFC_F = 4;

  /** Indicates an NFC-V tag. */
  const NFC_V = 5;

  /** Indicated an NDEF tag. */
  const NDEF = 6;

  /** Indicates a MifareClassic tag. */
  const MIFARE_CLASSIC = 8;

  /** Indicates a MifareUltralight tag. */
  const MIFARE_ULTRALIGHT = 9;

  /**
   * Obtains an {@code NfcATag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-A technology, an {@code NfcATag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@codeohos.permission.NFC_TAG}
   */
  function getNfcATag(tagInfo: TagInfo): NfcATag

  /**
   * Obtains an {@code NfcBTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-B technology, an {@code NfcBTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@codeohos.permission.NFC_TAG}
   */
  function getNfcBTag(tagInfo: TagInfo): NfcBTag

  /**
   * Obtains an {@code NfcFTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-F technology, an {@code NfcFTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@codeohos.permission.NFC_TAG}
   */
  function getNfcFTag(tagInfo: TagInfo): NfcFTag

  /**
   * Obtains an {@code NfcVTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-V technology, an {@code NfcVTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@codeohos.permission.NFC_TAG}
   */
  function getNfcVTag(tagInfo: TagInfo): NfcVTag


  /**
   * Provides tag information.
   *
   * <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create
   * different tags based on the supported technology.
   *
   * @since 7
   * @sysCap SystemCapability.Communication.NFC
   * @devices phone, tablet, wearable, car
   * @permission {@codeohos.permission.NFC_TAG}
   */
  export interface TagInfo {
    supportedProfiles: number[];
  }
}
export default tag;