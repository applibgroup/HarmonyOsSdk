/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { AsyncCallback } from './basic';

declare namespace zlib {
/**
 * @name ErrorCode
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  export enum ErrorCode {
    ERROR_CODE_OK = 0,
    ERROR_CODE_ERRNO = -1
  }

/**
 * @name CompressLevel
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  export enum CompressLevel {
    COMPRESS_LEVEL_NO_COMPRESSION = 0,
    COMPRESS_LEVEL_BEST_SPEED = 1,
    COMPRESS_LEVEL_BEST_COMPRESSION = 9,
    COMPRESS_LEVEL_DEFAULT_COMPRESSION = -1
  }

/**
 * @name CompressStrategy
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  export enum CompressStrategy {
    COMPRESS_STRATEGY_DEFAULT_STRATEGY = 0,
    COMPRESS_STRATEGY_FILTERED = 1,
    COMPRESS_STRATEGY_HUFFMAN_ONLY = 2,
    COMPRESS_STRATEGY_RLE = 3,
    COMPRESS_STRATEGY_FIXED = 4
  }

/**
 * @name MemLevel
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  export enum MemLevel {
    MEM_LEVEL_MIN = 1,
    MEM_LEVEL_MAX = 9,
    MEM_LEVEL_DEFAULT = 8
  }

/**
 * @name Options
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @import NA
 * @permission NA
 * @devices phone, tablet, tv, wearable, car
 */
  interface Options {
    level?: CompressLevel;
    memLevel?: MemLevel;
    strategy?: CompressStrategy;
  }

  /**
   * Compress the specified file.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param inFile Indicates the path of the file to be compressed.
   * @param outFile Indicates the path of the output compressed file.
   * @return Returns error code.
   */
  function zipFile(inFile:string, outFile:string, options: Options): Promise<void>;

  /**
   * Decompress the specified file.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Appexecfwk
   * @param inFile Indicates the path of the file to be decompressed.
   * @param outFile Indicates the path of the decompressed file.
   * @return Returns error code.
   */
  function unzipFile(inFile:string, outFile:string, options: Options): Promise<void>;
}
