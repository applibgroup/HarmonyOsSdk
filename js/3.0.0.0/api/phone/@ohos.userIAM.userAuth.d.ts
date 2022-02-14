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

    export enum Result {
        /**
         * Indicates that execute is success.
         * @since 7
         */
        SUCCESS = 0,

        /**
         * Indicates that execute is failed.
         * @since 7
         */
        FAILED = 1,
    }

    export enum CheckAvailabilityResult {
        /**
         * Indicates that the device supports the specified authentication type and security level.
         * @since 7
         */
        SUPPORTED = 0,

        /**
         * Indicates that the device does not support the specified authentication type.
         * @since 7
         */
        AUTH_TYPE_NOT_SUPPORT = 1,

        /**
         * Indicates that the device does not support the specified authentication security level.
         * @since 7
         */
        SECURE_LEVEL_NOT_SUPPORT = 2,

        /**
         * Indicates that the device does not support distributed authentication.
         * @since 7
         */
        DISTRIBUTED_AUTH_NOT_SUPPORT = 3,

        /**
         * Indicates that the device does not have the authentication credential.
         * @since 7
         */
        NOT_ENROLLED = 4,

        /**
         * Indicates that the number of parameters is incorrect.
         * @since 7
         */
        PARAM_NUM_ERROR = 5,
    }

    export enum TipEvent {
        /**
         * Enroll or authenticate result.
         * @since 7
         */
        RESULT = 1,

        /**
         * Cancel result.
         * @since 7
         */
        CANCEL = 2,

        /**
         * Prompt for user enroll and authentication.
         * @since 7
         */
        ACQUIRE = 3,

        /**
         * Busy.
         * @since 7
         */
        BUSY = 4,

        /**
         * Out of memory.
         * @since 7
         */
        OUT_OF_MEM = 5,

        /**
         * Index of a face authentication credential.
         * @since 7
         */
        FACE_ID = 6,
    }

    export enum TipCode {
        /**
         * Indicates that the obtained facial image is too bright due to high illumination.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_BRIGHT = 1,

        /**
         * Indicates that the obtained facial image is too dark due to low illumination.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_DARK = 2,

        /**
         * Indicates that the face is too close to the device.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_CLOSE = 3,

        /**
         * Indicates that the face is too far away from the device.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_FAR = 4,

        /**
         * Indicates that the device is too high, and that only the upper part of the face is captured.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_HIGH = 5,

        /**
         * Indicates that the device is too low, and that only the lower part of the face is captured.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_LOW = 6,

        /**
         * Indicates that the device is deviated to the right, and that only the right part of the face is captured.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_RIGHT = 7,

        /**
         * Indicates that the device is deviated to the left, and that only the left part of the face is captured.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_LEFT = 8,

        /**
         * Indicates that the face moves too fast during facial information collection.
         * @since 7
         */
        FACE_AUTH_TIP_TOO_MUCH_MOTION = 9,

        /**
         * Indicates that the face is not facing the device.
         * @since 7
         */
        FACE_AUTH_TIP_POOR_GAZE = 10,

        /**
         * Indicates that no face is detected.
         * @since 7
         */
        FACE_AUTH_TIP_NOT_DETECTED = 11,
    }

    /**
     * Auth types
     */
    type AuthType = "ALL" | "FACE_ONLY";

    /**
     * Secure levels
     */
    type SecureLevel = "S1" | "S2" | "S3" | "S4";

    interface Tip {
        /**
         * Indicates whether authentication tip is obtained, defined in Result.
         * @since 7
         */
        errorCode: number;

        /**
         * Indicates an authentication tip event, defined in TipEvent.
         * @since 7
         */
        tipEvent: number;

        /**
         * Indicates the return code of an authentication tip, defined in TipCode.
         * @since 7
         */
        tipCode: number;

        /**
         * Indicates the description of an authentication tip code.
         * @since 7
         */
        tipInfo: string;
    }

    interface Authenticator {
        /**
         * Cancels the current authentication.
         * @since 7
         * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
         * @return Returns a cancel result, which is specified by Result.
         */
        cancel(): number;

        /**
         * Checks whether the device supports the specified authentication type and security level.
         * @since 7
         * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
         * @param type Indicates the authentication type.
         * @param level Indicates the security level.
         * @return Returns a check result, which is specified by CheckAvailabilityResult.
         */
        checkAvailability(type: AuthType, level: SecureLevel): number;

        /**
         * Execute authentication.
         * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
         * @param type Indicates the authentication type.
         * @param level Indicates the security level.
         * @return Returns authentication result, which is specified by AuthenticationResult.
         */
        execute(type: AuthType, level: SecureLevel, callback: AsyncCallback<number>): void;
        execute(type: AuthType, level: SecureLevel): Promise<number>;

        /**
         * Registers an event callback.
         * @since 7
         * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
         * @param type Indicates the event type.
         * @param callback Indicates the authentication tip callback to register.
         */
        on(type: "tip", callback: Callback<Tip>) : void;

        /**
         * Unregisters an event callback.
         * @since 7
         * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
         * @param type Indicates the event type.
         * @param callback Indicates the authentication tip callback to unregister.
         */
        off(type: "tip", callback?: Callback<Tip>) : void;
    }

    /**
     * Get Authenticator instance.
     * @SysCap SystemCapability.UserIAM.UserAuth.BiometricAuth
     * @return Returns an Authenticator.
     */
    function getAuthenticator(): Authenticator;
}

export default userAuth;
