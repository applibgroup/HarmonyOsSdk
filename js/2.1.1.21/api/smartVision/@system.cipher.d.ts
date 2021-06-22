/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

export interface CipherResponse {
  /**
   * response text
   */
  text: string;
}

export interface CipherRsaOptions {
  /**
   * Action type.
   * The options are as follows:
   *   encrypt: Encrypts data.
   *   decrypt: Decrypts data.
   */
  action: string;

  /**
   * Text content to be encrypted or decrypted.
   * The text to be encrypted must be a common text and cannot exceed the length calculated based on the formula (keySize/8 - 66).
   * keySize indicates the key length.
   * For example, if the key length is 1024 bytes, the text cannot exceed 62 bytes (1024/8 - 66 = 62).
   * The text content to be decrypted must be a binary value encoded using Base64.
   * The default format is used for Base64 encoding.
   */
  text: string;

  /**
   * Keys encrypted using RSA.
   * During encryption, this parameter is a public key.
   * During decryption, it is a private key.
   */
  key: string;

  /**
   * RSA algorithm padding.
   * The default value is RSA/None/OAEPWithSHA256AndMGF1Padding.
   */
  transformation?: string;

  /**
   * Called when data is encrypted or decrypted successfully.
   */
  success: (data: CipherResponse) => void;

  /**
   * Called when data fails to be encrypted or decrypted.
   */
  fail: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete: () => void;
}

export interface CipherAesOptions {
  /**
   * Action type.
   * The options are as follows:
   *   encrypt: Encrypts data.
   *   decrypt: Decrypts data.
   */
  action: string;

  /**
   * Text content to be encrypted or decrypted.
   * The text to be encrypted must be a common text.
   * The text content to be decrypted must be a binary value encoded using Base64.
   * The default format is used for Base64 encoding.
   */
  text: string;

  /**
   * Key used for encryption or decryption, which is a character string encrypted using Base64.
   */
  key: string;

  /**
   * Encryption mode and padding of the AES algorithm.
   * The default value is AES/CBC/PKCS5Padding.
   */
  transformation?: string;

  /**
   * Initial vector for AES-based encryption and decryption.
   * The value is a character string encoded using Base64.
   * The default value is the key value.
   */
  iv?: string;

  /**
   * Offset of the initial vector for AES-based encryption and decryption.
   * The default value is 0.
   */
  ivOffset?: string;

  /**
   * Length of the initial vector for AES-based encryption and decryption.
   * The default value is 16.
   */
  ivLen?: string;

  /**
   * Called when data is encrypted or decrypted successfully.
   */
  success: (data: CipherResponse) => void;

  /**
   * Called when data fails to be encrypted or decrypted.
   */
  fail: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Cipher {
  /**
   * Encrypts or decrypts data using RSA.
   * @param options RSA options
   */
  static rsa(options: CipherRsaOptions): void;

  /**
   * Encrypts or decrypts data using AES.
   * @param options AES options
   */
  static aes(options: CipherAesOptions): void;
}
