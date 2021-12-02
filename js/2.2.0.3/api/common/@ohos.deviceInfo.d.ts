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
 * A static class pertaining to the product information.
 *
 * @devices phone, tablet, tv, wearable
 * @since 6
 * @Syscap SystemCapability.Startup.SysInfo
 */
declare namespace deviceInfo {
    /**
    * Obtains the device type represented by a string,
    * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
    * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
    *
    * @since 6
    */
   const deviceType: string;

   /**
    * Obtains the device manufacturer represented by a string.
    *
    * @since 6
    */
   const manufacture: string;

   /**
    * Obtains the device brand represented by a string.
    *
    * @since 6
    */
   const brand: string;

   /**
    * Obtains the external product series represented by a string.
    *
    * @since 6
    */
   const marketName: string;

   /**
    * Obtains the product series represented by a string.
    *
    * @since 6
    */
   const productSeries: string;

   /**
    * Obtains the product model represented by a string.
    *
    * @since 6
    */
   const productModel: string;

   /**
    * Obtains the software model represented by a string.
    *
    * @since 6
    */
   const softwareModel: string;

   /**
    * Obtains the hardware model represented by a string.
    *
    * @since 6
    */
   const hardwareModel: string;

   /**
    * Obtains the hardware profile represented by a string.
    *
    * @since 6
    */
   const hardwareProfile: string;

   /**
    * Obtains the device serial number represented by a string.
    *
    * @since 6
    */
   const serial: string;

   /**
    * Obtains the bootloader version number represented by a string.
    *
    * @since 6
    */
   const bootloaderVersion: string;

   /**
    * Obtains the application binary interface (Abi) list represented by a string.
    *
    * @since 6
    */
   const abiList: string;

   /**
    * Obtains the security patch level represented by a string.
    *
    * @since 6
    */
   const securityPatchTag: string;

   /**
    * Obtains the product version represented by a string.
    *
    * @since 6
    */
   const displayVersion: string;

   /**
    * Obtains the incremental version represented by a string.
    *
    * @since 6
    */
   const incrementalVersion: string;

   /**
    * Obtains the OS release type represented by a string.
    *
    * <p>The OS release category can be {@code Release}, {@code Beta}, or {@code Canary}.
    * The specific release type may be {@code Release}, {@code Beta1}, or others alike.
    *
    * @since 6
    */
   const osReleaseType: string;

   /**
    * Obtains the OS version represented by a string.
    *
    * @since 6
    */
   const osFullName: string;

   /**
    * Obtains the major (M) version number, which increases with any updates to the overall architecture.
    * <p>The M version number monotonically increases from 1 to 99.
    *
    * @since 6
    */
   const majorVersion: number;

   /**
    * Obtains the senior (S) version number, which increases with any updates to the partial
    * architecture or major features.
    * <p>The S version number monotonically increases from 0 to 99.
    *
    * @since 6
    */
   const seniorVersion: number;

   /**
    * Obtains the feature (F) version number, which increases with any planned new features.
    * <p>The F version number monotonically increases from 0 or 1 to 99.
    *
    * @since 6
    */
   const featureVersion: number;

   /**
    * Obtains the build (B) version number, which increases with each new development build.
    * <p>The B version number monotonically increases from 0 or 1 to 999.
    *
    * @since 6
    */
   const buildVersion: number;

   /**
    * Obtains the SDK API version number.
    *
    * @since 6
    */
   const sdkApiVersion: number;

   /**
    * Obtains the first API version number.
    *
    * @since 6
    */
   const firstApiVersion: number;

   /**
    * Obtains the version ID by a string.
    *
    * @since 6
    */
   const versionId: string;

   /**
    * Obtains the build types of the same baseline code.
    *
    * @since 6
    */
   const buildType: string;

   /**
    * Obtains the different build user of the same baseline code.
    *
    * @since 6
    */
   const buildUser: string;

   /**
    * Obtains the different build host of the same baseline code.
    *
    * @since 6
    */
   const buildHost: string;

   /**
    * Obtains the build time.
    *
    * @since 6
    */
   const buildTime: string;

   /**
    * Obtains the version hash.
    *
    * @since 6
    */
   const buildRootHash: string;
}

export default deviceInfo;