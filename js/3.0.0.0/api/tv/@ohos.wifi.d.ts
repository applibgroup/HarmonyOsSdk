/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from "./basic";

/**
 * Provides methods to operate or manage Wi-Fi.
 *
 * @since 7
 * @SysCap SystemCapability.Communication.WiFi
 * @devices phone, tablet, tv, wearable, car
 * @import import wifi from '@ohos.wifi';
 */
declare namespace wifi {
    /**
     * Obtains information about a Wi-Fi connection.
     *
     * <p>The connection information includes the SSID, BSSID, and RSSI of the Wi-Fi hotspot.
     * {@code networkId} is the unique ID of the Wi-Fi network.
     *
     * @return Returns the Wi-Fi connection information.
     * @since 6
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function getLinkedInfo(): Promise<WifiLinkedInfo>;
    function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

    /**
     * Checks whether a Wi-Fi connection has been set up.
     *
     * @return Returns {@code true} if a Wi-Fi connection has been set up; returns {@code false} otherwise.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function isConnected(): boolean;

    /**
     * Queries the Wi-Fi status
     *
     * @return Returns {@code true} if the Wi-Fi is active; returns {@code false} otherwise.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function isWifiActive(): boolean;

    /**
     * Calculates the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
     *
     * @param rssi: Indicates the Wi-Fi RSSI, band: indicates the Wi-Fi frequency band.
     * @return Returns Wi-Fi signal level ranging from 0 to 4.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function getSignalLevel(rssi: number, band: number): number;

    /**
     * Checks whether this device supports a specified feature.
     *
     * @param featureId Indicates the ID of the feature to check. {@link WifiUtils} provides feature IDs,
     *     for example, {@link WifiUtils#WIFI_FEATURE_INFRA}.
     * @return Returns {@code true} if this device supports the specified feature; returns {@code false} otherwise.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function isFeatureSupported(featureId: number): boolean;

    /**
     * Adds a specified untrusted hotspot configuration.
     *
     * <p>This method adds one configuration at a time. After this configuration is added,
     *     your device will determine whether to connect to the hotspot.
     *
     * @return Returns {@code true} if the untrusted hotspot configuration is added; returns {@code false} otherwise.
     * @since 7
     * @permission {@code ohos.permission.SET_WIFI_INFO}
     */
    function addUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;
    function addUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

    /**
     * Removes a specified untrusted hotspot configuration.
     *
     * <p>This method removes one configuration at a time.
     *
     * @return Returns {@code true} if the untrusted hotspot configuration is removed; returns {@code false} otherwise.
     * @since 7
     * @permission {@code ohos.permission.SET_WIFI_INFO}
     */
    function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;
    function removeUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

    /**
     * Scans Wi-Fi hotspots with parameters.
     *
     * <p>This API works in asynchronous mode.</p>
     *
     * @return Returns {@code true} if the scanning is successful; returns {@code false} otherwise.
     * @since 7
     * @permission {@code ohos.permission.SET_WIFI_INFO} and {@code ohos.permission.LOCATION}.
     */
    function scan(): boolean;

    /**
     * Obtains the IP information of a Wi-Fi connection.
     *
     * <p>The IP information includes the host IP address, gateway address, and DNS information.
     *
     * @return Returns the IP information of the Wi-Fi connection.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function getIpInfo(): IpInfo;

    /**
     * Obtains the hotspot information that scanned.
     *
     * @return Returns information about scanned Wi-Fi hotspots if any.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO} and at least one of the
     *     {@code ohos.permission.GET_WIFI_PEERS_MAC} and {@code ohos.permission.LOCATION} permissions.
     */
    function getScanInfos(): Promise<Array<WifiScanInfo>>;
    function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

    /**
     * Obtains the country code of this device.
     *
     * @return Returns the country code of this device.
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function getCountryCode(): string;

    /**
     * Subscribe Wi-Fi status change events.
     *
     * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function on(type: "wifiStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi status change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function off(type: "wifiStateChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi connection change events.
     *
     * @return Returns 0: disconnected, 1: connected
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function on(type: "wifiConnectionChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi connection change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function off(type: "wifiConnectionChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi scan status change events.
     *
     * @return Returns 0: scan fail, 1: scan success
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function on(type: "wifiScanStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi scan status change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function off(type: "wifiScanStateChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi rssi change events.
     *
     * @return Returns RSSI value in dBm
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
     */
    function on(type: "wifiRssiChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi rssi change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}
    */
    function off(type: "wifiRssiChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi hotspot state change events.
     *
     * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}.
     */
    function on(type: "hotspotStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi hotspot state change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @permission {@code ohos.permission.GET_WIFI_INFO}.
    */
    function off(type: "hotspotStateChange", callback?: Callback<number>): void;

    /**
     * Wi-Fi connection information.
     *
     * @since 6
     */
    interface WifiLinkedInfo {
        /** The SSID of the Wi-Fi hotspot */
        ssid: string;

        /** The BSSID of the Wi-Fi hotspot */
        bssid: string;

        /** The RSSI(dBm) of a Wi-Fi access point. */
        rssi: number;

        /** The frequency band of a Wi-Fi access point. */
        band: number;

        /** The speed of a Wi-Fi access point. */
        linkSpeed: number;

        /** The frequency of a Wi-Fi access point. */
        frequency: number;

        /** Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden. */
        isHidden:boolean;

        /** Whether this Wi-Fi connection restricts the data volume. */
        isRestricted: boolean;

        /** The Wi-Fi MAC address of a device. */
        macAddress: string;

        /** The IP address of this Wi-Fi connection. */
        ipAddress: number;

        /** The state of this Wi-Fi connection. */
        connState: ConnState;
    }

    /**
     * Wi-Fi IP information.
     *
     * @since 7
     */
    interface IpInfo {
        /** The IP address of the Wi-Fi connection */
        ipAddress: number;

        /** The gateway of the Wi-Fi connection */
        gateway: number;

        /** The network mask of the Wi-Fi connection */
        netmask: number;

        /** The primary DNS server IP address of the Wi-Fi connection */
        primaryDns: number;

        /** The secondary DNS server IP address of the Wi-Fi connection */
        secondDns: number;

        /** The DHCP server IP address of the Wi-Fi connection */
        serverIp: number;

        /** The IP address lease duration of the Wi-Fi connection */
        leaseDuration: number;
    }

    /**
     * Wi-Fi device configuration information.
     *
     * @since 7
     */
    interface WifiDeviceConfig {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Wi-Fi key: maximum length is 64 */
        preSharedKey: string;

        /** Hide SSID or not, false(default): not hide */
        isHiddenSsid: boolean;

        /** Security type: reference definition of WifiSecurityType */
        securityType: WifiSecurityType;
    }

    /**
     * Describes the scanned Wi-Fi information.
     *
     * @since 7
     */
    interface WifiScanInfo {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Hotspot capability */
        capabilities: string;

        /** Security type: reference definition of WifiSecurityType */
        securityType: WifiSecurityType;

        /** Received signal strength indicator (RSSI) */
        rssi: number;

        /** Frequency band */
        band: number;

        /** Frequency */
        frequency: number;

        /** Channel width */
        channelWidth: number;

        /** Time stamp */
        timestamp: number;
    }

    /**
     * The state of Wi-Fi connection enumeration.
     *
     * @since 7
     */
    export enum ConnState {
        /** The device is searching for an available AP. */
        SCANNING,

        /** The Wi-Fi connection is being set up. */
        CONNECTING,

        /** The Wi-Fi connection is being authenticated. */
        AUTHENTICATING,

        /** The IP address of the Wi-Fi connection is being obtained. */
        OBTAINING_IPADDR,

        /** The Wi-Fi connection has been set up. */
        CONNECTED,

        /** The Wi-Fi connection is being torn down. */
        DISCONNECTING,

        /** The Wi-Fi connection has been torn down. */
        DISCONNECTED,

        /** Failed to set up the Wi-Fi connection. */
        UNKNOWN
    }

    /**
     * Wi-Fi security type enumeration.
     *
     * @since 7
     */
    export enum WifiSecurityType {
        /** Invalid security type */
        WIFI_SEC_TYPE_INVALID = 0,

        /** Open */
        WIFI_SEC_TYPE_OPEN = 1,

        /** Wired Equivalent Privacy (WEP) */
        WIFI_SEC_TYPE_WEP = 2,

        /** Pre-shared key (PSK) */
        WIFI_SEC_TYPE_PSK = 3,

        /** Simultaneous Authentication of Equals (SAE) */
        WIFI_SEC_TYPE_SAE = 4,
    }
}

export default wifi;
