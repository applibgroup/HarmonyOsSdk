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

import {AsyncCallback} from "./basic";

declare namespace appAccount {
    /**
     * Obtains the AppAccountManager instance.
     * @since 7
     * @sysCap SystemCapability.Account.AppAccount
     * @devices phone, tablet, tv, wearable, car
     * @return Returns the instance of the AppAccountManager.
     */
    function createAppAccountManager(): AppAccountManager;

    /**
     * Provides methods for managing application accounts.
     * @name AppAccountManager
     * @since 7
     * @sysCap SystemCapability.Account.AppAccount
     * @devices phone, tablet, tv, wearable, car
     */
    interface AppAccountManager {
        /**
         * Adds the account name and extra information of this application to the account management service.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account to add.
         * @param extraInfo Indicates the extra information of the application account to add.
         *        The extra information cannot be sensitive information of the application account.
         * @return void.
         */
        addAccount(name: string, callback: AsyncCallback<void>): void;
        addAccount(name: string, extraInfo: string, callback: AsyncCallback<void>): void;
        addAccount(name: string, extraInfo?: string): Promise<void>;

        /**
         * Deletes an application account from the account management service.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account to delete.
         * @return void.
         */
        deleteAccount(name: string, callback: AsyncCallback<void>): void;
        deleteAccount(name: string): Promise<void>;

        /**
         * Disables a third-party application with the specified bundle name from
         * accessing the given application account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account to disable access from
         *        the third-party application.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @return void.
         */
        disableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void;
        disableAppAccess(name: string, bundleName: string): Promise<void>;

        /**
         * Enables a third-party application with the specified bundle name to access the given application
         * account for data query and listening.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @return void.
         */
        enableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void;
        enableAppAccess(name: string, bundleName: string): Promise<void>;

        /**
         * Checks whether a specified application account allows application data synchronization.
         * <p>
         * If the same OHOS account has logged in to multiple devices, these devices constitute a super device
         * through the distributed networking. On the networked devices, you can call this method to check
         * whether application data can be synchronized.
         * <p>
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @return Returns {@code true} if application data synchronization is allowed; returns {@code false} otherwise.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         */
        checkAppAccountSyncEnable(name: string, callback: AsyncCallback<boolean>): void;
        checkAppAccountSyncEnable(name: string): Promise<boolean>;

        /**
         * Sets the credential for this application account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param credentialType Indicates the type of the credential to set.
         * @param credential Indicates the credential to set.
         * @return void.
         */
        setAccountCredential(name: string, credentialType: string, credential: string,
                             callback: AsyncCallback<void>): void;
        setAccountCredential(name: string, credentialType: string, credential: string): Promise<void>;

        /**
         * Sets extra information for this application account.
         * <p>
         * You can call this method when you forget the extra information of your application account or
         * need to modify the extra information.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param extraInfo Indicates the extra information to set.
         * @return void.
         */
        setAccountExtraInfo(name: string, extraInfo: string, callback: AsyncCallback<void>): void;
        setAccountExtraInfo(name: string, extraInfo: string): Promise<void>;

        /**
         * Sets whether a specified application account allows application data synchronization.
         * <p>
         * If the same OHOS account has logged in to multiple devices, these devices constitute a super device
         * through the distributed networking. On the networked devices, you can call this method to set whether to
         * allow cross-device data synchronization. If synchronization is allowed, application data can be synchronized
         * among these devices in the event of any changes related to the application account.
         * If synchronization is not allowed, the application data is stored only on the local device.
         * <p>
         * <b>Application account-related changes</b>: adding or deleting an application account, setting extra
         * information (such as updating a token), and setting data associated with this application account
         * <p>
         * <b>Application data that can be synchronized</b>: application account name, token,
         * and data associated with this application account
         * <p>
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param isEnable Specifies whether to allow application data synchronization.
         * @return void.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         */
        setAppAccountSyncEnable(name: string, isEnable: boolean, callback: AsyncCallback<void>): void;
        setAppAccountSyncEnable(name: string, isEnable: boolean): Promise<void>;

        /**
         * Sets data associated with this application account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param key Indicates the key of the data to set. The key can be customized.
         * @param value Indicates the value of the data to set.
         * @return void.
         */
        setAssociatedData(name: string, key: string, value: string, callback: AsyncCallback<void>): void;
        setAssociatedData(name: string, key: string, value: string): Promise<void>;

        /**
         * Obtains information about all accessible accounts.
         * <p>
         * This method applies to the following accounts:
         * <ul>
         * <li>Accounts of this application.</li>
         * <li>Accounts of third-party applications. To obtain such information,
         * your application must have gained authorization from the third-party applications.</li>
         * </ul>
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns a list of application accounts.
         * @permission ohos.permission.GET_ACCOUNTS_PRIVILEGED.
         */
        getAllAccessibleAccounts(callback: AsyncCallback<Array<AppAccountInfo>>): void;
        getAllAccessibleAccounts(): Promise<Array<AppAccountInfo>>;

        /**
         * Obtains information about all accounts of a specified account owner.
         * <p>
         * This method applies to the following accounts:
         * <ul>
         * <li>Accounts of this application.</li>
         * <li>Accounts of third-party applications. To obtain such information,
         * your application must have gained authorization from the third-party applications.</li>
         * </ul>
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param owner Indicates the account owner of your application or third-party applications.
         * @return Returns a list of application accounts.
         * @permission ohos.permission.GET_ACCOUNTS_PRIVILEGED.
         */
        getAllAccounts(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>): void;
        getAllAccounts(owner: string): Promise<Array<AppAccountInfo>>;

        /**
         * Obtains the credential of this application account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param credentialType Indicates the type of the credential to obtain.
         * @return Returns the credential of the application account.
         */
        getAccountCredential(name: string, credentialType: string, callback: AsyncCallback<string>): void;
        getAccountCredential(name: string, credentialType: string): Promise<string>;

        /**
         * Obtains extra information of this application account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @return Returns the extra information of the account; returns {@code null} in other scenarios,
         *         for example, if the account does not exist.
         */
        getAccountExtraInfo(name: string, callback: AsyncCallback<string>): void;
        getAccountExtraInfo(name: string): Promise<string>;

        /**
         * Obtains data associated with this application account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param name Indicates the name of the application account.
         * @param key Indicates the key of the data to obtain.
         * @return Returns the associated data of the application account.
         */
        getAssociatedData(name: string, key: string, callback: AsyncCallback<string>): void;
        getAssociatedData(name: string, key: string): Promise<string>;

        /**
         * Subscribes to the change events of accounts of the specified owners.
         * <p>
         * When the account owner updates the account, the subscriber will receive a notification
         * about the account change event.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param owners Indicates the account owners, which are specified
         *        by {@link AppAccount#AppAccount(String name, String owner)}.
         * @return void
         */
        on(type: 'change', owners: Array<string>, callback: (accounts: Array<AppAccountInfo>) => void): void;

        /**
         * Unsubscribes from account events.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return void
         */
        off(type: 'change', callback?: (accounts: Array<AppAccountInfo>) => void): void;
    }

    /**
     * Provides basic information of an application account, including the account owner and name.
     * @name AppAccountInfo
     * @since 7
     * @sysCap SystemCapability.Account.AppAccount
     * @devices phone, tablet, tv, wearable, car
     */
    interface AppAccountInfo {
        /**
         * The owner an application account.
         */
        owner: string;

        /**
         * The name an application account.
         */
        name: string;
    }
}

export default appAccount;