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

import { AsyncCallback } from './basic';

/**
 * User authentication
 * @since 6
 * @sysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
 * @devices phone, tablet
 * @permission ohos.permission.ACCESS_BIOMETRIC
 */
declare namespace userAuth {
    export enum AuthenticationResult {
        /**
         * Indicates that the device does not support authentication.
         */
        NO_SUPPORT = -1,

        /**
         * Indicates that authentication is success.
         */
        SUCCESS = 0,

        /**
         * Indicates the authenticator fails to identify user.
         */
        COMPARE_FAILURE = 1,

        /**
         * Indicates that authentication has been canceled.
         */
        CANCELED = 2,

        /**
         * Indicates that authentication has timed out.
         */
        TIMEOUT = 3,

        /**
         * Indicates a failure to open the camera.
         */
        CAMERA_FAIL = 4,

        /**
         * Indicates that the authentication task is busy. Wait for a few seconds and try again.
         */
        BUSY = 5,

        /**
         * Indicates incorrect parameters.
         */
        INVALID_PARAMETERS = 6,

        /**
         * Indicates that the authenticator is locked.
         */
        LOCKED = 7,

        /**
         * Indicates that the user has not enrolled the authenticator.
         */
        NOT_ENROLLED = 8,

        /**
         * Indicates other errors.
         */
        GENERAL_ERROR = 100,
    }

    /**
     * Auth types
     */
    type AuthType = "ALL" | "FACE_ONLY";

    /**
     * Secure levels
     */
    type SecureLevel = "S1" | "S2" | "S3" | "S4";

    interface Authenticator {
        /**
         * Execute authentication.
         * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
         * @param type Indicates the authentication type.
         * @param level Indicates the security level.
         * @return Returns authentication result, which is specified by AuthenticationResult.
         */
        execute(type: AuthType, level: SecureLevel, callback: AsyncCallback<number>): void;
        execute(type: AuthType, level: SecureLevel): Promise<number>;
    }

    /**
     * Get Authenticator instance.
     * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
     * @return Returns an Authenticator.
     */
    function getAuthenticator(): Authenticator;
}

export default userAuth;
