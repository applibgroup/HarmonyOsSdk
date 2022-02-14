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

import distributedAccount from './@ohos.account.distributedAccount'
import {AsyncCallback} from "./basic";

declare namespace osAccount {
    /**
     * Obtains the AccountManager instance.
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     * @return Returns the instance of the AccountManager.
     */
    function getAccountManager(): AccountManager;

    /**
     * Provides abilities for you to manage and perform operations on your OS accounts.
     * @name AccountManager
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     */
    interface AccountManager {
        /**
         * Checks whether the function of supporting multiple OS accounts is enabled.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns {@code true} if this function is enabled; returns {@code false} otherwise.
         */
        isMultiOsAccountEnable(callback: AsyncCallback<boolean>): void;
        isMultiOsAccountEnable(): Promise<boolean>;

        /**
         * Checks whether an OS account is actived based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns {@code true} if the OS account is actived; returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS/ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
         */
        isOsAccountActived(localId: number, callback: AsyncCallback<boolean>): void;
        isOsAccountActived(localId: number): Promise<boolean>;

        /**
         * Checks whether a constraint has been enabled for an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @param constraint Indicates the constraint to check. The value can be:
         *        <ul>
         *        <li>{@code constraint.wifi.set} - Indicates the constraint on configuring the Wi-Fi access point.
         *        </li>
         *        <li>{@code constraint.sms.use} - Indicates the constraint on sending and receiving short messages.
         *        </li>
         *        <li>{@code constraint.calls.outgoing} - Indicates the constraint on making calls.</li>
         *        <li>{@code constraint.unknown.sources.install} - Indicates the constraint on installing applications
         *        from unknown sources.</li>
         *        </ul>
         * @return Returns {@code true} if the constraint has been enabled for the OS account;
         *         returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        isOsAccountConstraintEnable(localId: number, constraint: string, callback: AsyncCallback<boolean>): void;
        isOsAccountConstraintEnable(localId: number, constraint: string): Promise<boolean>;

        /**
         * Checks whether this OS account is a test OS account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns {@code true} if this OS account is a test OS account; returns {@code false} otherwise.
         */
        isTestOsAccount(callback: AsyncCallback<boolean>): void;
        isTestOsAccount(): Promise<boolean>;

        /**
         * Checks whether this OS account has been verified.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns {@code true} if the OS account has been verified successfully;
         *         returns {@code false} otherwise.
         */
        isOsAccountVerified(callback: AsyncCallback<boolean>): void;

        /**
         * Checks whether an OS account has been verified based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns {@code true} if the OS account has been verified successfully;
         *         returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS/ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
         */
        isOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;
        isOsAccountVerified(localId?: number): Promise<boolean>;

        /**
         * Obtains the number of all OS accounts created on a device.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the number of created OS accounts.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getCreatedOsAccountsCount(callback: AsyncCallback<number>): void;
        getCreatedOsAccountsCount(): Promise<number>;

        /**
         * Obtains the local ID of an OS account from the current process UID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the local ID of the OS account.
         */
        getOsAccountLocalIdFromProcess(callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromProcess(): Promise<number>;

        /**
         * Queries the local ID of an OS account from the process UID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param uid Indicates the process UID.
         * @return Returns the local ID of the OS account.
         */
        getOsAccountLocalIdFromUid(uid: number, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromUid(uid: number): Promise<number>;

        /**
         * Obtains all constraints of an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns a list of constraints.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getOsAccountAllConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;
        getOsAccountAllConstraints(localId: number): Promise<Array<string>>;

        /**
         * Queries information about the current OS account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns information about the current OS account; returns {@code null} if the query fails.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        queryCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;
        queryCurrentOsAccount(): Promise<OsAccountInfo>;

        /**
         * Obtains the type of this OS account from the current process.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the OS account type. The value can be {@link OsAccountType#ADMIN},
         *         {@link OsAccountType#NORMAL}, and {@link OsAccountType#GUEST}.
         */
        getOsAccountTypeFromProcess(callback: AsyncCallback<OsAccountType>): void;
        getOsAccountTypeFromProcess(): Promise<OsAccountType>;

        /**
         * Obtains the distributed virtual device ID (DVID).
         * <p>
         * If the same OHOS account has logged in to multiple devices, these devices constitute a super device
         * through the distributed networking. On the networked devices, you can call this method to obtain the DVIDs.
         * The same application running on different devices obtains the same DVID, whereas different applications
         * obtain different DVIDs.
         * <p>
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the DVID if obtained; returns an empty string if no OHOS account has logged in.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         */
        getDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;
        getDistributedVirtualDeviceId(): Promise<string>;
    }

    /**
     * Provides information about OS accounts, including the local ID, local name, and type of an OS account.
     * @name OsAccountInfo
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     */
    interface OsAccountInfo {
        /**
         * The local ID of an OS account.
         */
        localId: number;

        /**
         * The local name of an OS account.
         */
        localName: string;

        /**
         * Include: ADMIN, Normal, GUEST.
         */
        type: OsAccountType;

        /**
         * Account constraints information.
         */
        constraints: Array<string>;

        /**
         * Distributed account info.
         */
        distributedInfo: distributedAccount.DistributedInfo;
    }

    /**
     * Enumerates OS account types.
     * @name OsAccountType
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     */
    enum OsAccountType {
        /**
         * Indicates the administrator account, which has the permission to manage other OS accounts.
         */
        ADMIN = 0,

        /**
         * Indicates a normal account, which has access to common functions of OS accounts.
         */
        NORMAL,

        /**
         * Indicates a guest account, which is used to temporarily access the device and may be deleted at any time.
         */
        GUEST
    }
}

export default osAccount;