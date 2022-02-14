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
import { CommonEventData } from './commonEvent/commonEventData';
import { CommonEventSubscriber } from './commonEvent/commonEventSubscriber';
import { CommonEventSubscribeInfo } from './commonEvent/commonEventSubscribeInfo';
import { CommonEventPublishData } from './commonEvent/commonEventPublishData';

/**
 * the defination for commonevent
 * @name commonEvent
 * @since 7
 * @permission N/A
 * @devices phone, tablet, tv, wearable, car
 * @import import commonEvent from '@ohos.commonEvent';
 * @sysCap SystemCapability.Notification.CES
 */
declare namespace commonEvent {
  /**
   * Publishes a common event.
   *
   * @param Name of the common event.
   * @param Callback used to return the result.
   * @return -
   */
  function publish(event: string, callback: AsyncCallback<void>): void;

  /**
   * Publishes a common event with specified information.
   *
   * @param Name of the common event.
   * @param Options of the common event.
   * @param Callback used to return the result.
   * @return -
   */
  function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void;


  /**
   * Creates a CommonEventSubscriber instance for this common event.
   *
   * @param Subscriber information of this common event.
   * @param Callback used to return a CommonEventSubscriber instance.
   * @return -
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo, callback: AsyncCallback<CommonEventSubscriber>): void;

  /**
   * Creates a CommonEventSubscriber instance for this common event.
   *
   * @param Subscriber information of this common event.
   * @return Promise used to return a CommonEventSubscriber instance.
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise<CommonEventSubscriber>;

  /**
   * Subscribes to common events.
   *
   * @param CommonEventSubscriber instance.
   * @param Callback used to return the subscribed common events.
   * @return -
   */
  function subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback<CommonEventData>): void;

  /**
   * Unsubscribes from common events.
   *
   * @param CommonEventSubscriber instance.
   * @param Callback used to return the result.
   * @return -
   */
  function unsubscribe(subscriber: CommonEventSubscriber, callback?: AsyncCallback<void>): void;

  /**
   * Describes the supported common event types.
   */
  export enum Support {
    /**
     * Indicates the action of a common event that the user has finished booting and the system has been loaded.
     */
    COMMON_EVENT_BOOT_COMPLETED = "usual.event.BOOT_COMPLETED",

    /**
     * Indicates the action of a common event that the user has
     * finished booting and the system has been loaded but the screen is still locked.
     */
    COMMON_EVENT_LOCKED_BOOT_COMPLETED = "usual.event.LOCKED_BOOT_COMPLETED",

    /**
     * Indicates the action of a common event that the device is being shut down and the final shutdown will proceed.
     */
    COMMON_EVENT_SHUTDOWN = "usual.event.SHUTDOWN",

    /**
     * Indicates the action of a common event that the charging
     * state, level, and other information about the battery have changed.
     */
    COMMON_EVENT_BATTERY_CHANGED = "usual.event.BATTERY_CHANGED",

    /**
     * Indicates the action of a common event that the battery level is low.
     */
    COMMON_EVENT_BATTERY_LOW = "usual.event.BATTERY_LOW",

    /**
     * Indicates the action of a common event that the battery exits the low state.
     */
    COMMON_EVENT_BATTERY_OKAY = "usual.event.BATTERY_OKAY",

    /**
     * Indicates the action of a common event that the device is connected to an external power supply.
     */
    COMMON_EVENT_POWER_CONNECTED = "usual.event.POWER_CONNECTED",

    /**
     * Indicates the action of a common event that the device is disconnected from the external power supply.
     */
    COMMON_EVENT_POWER_DISCONNECTED = "usual.event.POWER_DISCONNECTED",

    /**
     * Indicates the action of a common event that the device screen is off and the device is sleeping.
     */
    COMMON_EVENT_SCREEN_OFF = "usual.event.SCREEN_OFF",

    /**
     * Indicates the action of a common event that the device screen is on and the device is in interactive state.
     */
    COMMON_EVENT_SCREEN_ON = "usual.event.SCREEN_ON",

    /**
     * Indicates the action of a common event that the user unlocks the device.
     */
    COMMON_EVENT_USER_PRESENT = "usual.event.USER_PRESENT",

    /**
     * Indicates the action of a common event that the system time has changed.
     */
    COMMON_EVENT_TIME_TICK = "usual.event.TIME_TICK",

    /**
     * Indicates the action of a common event that the system time is set.
     */
    COMMON_EVENT_TIME_CHANGED = "usual.event.TIME_CHANGED",

    /**
     * Indicates the action of a common event that the system time has changed.
     */
    COMMON_EVENT_DATE_CHANGED = "usual.event.DATE_CHANGED",

    /**
     * Indicates the action of a common event that the system time zone has changed.
     */
    COMMON_EVENT_TIMEZONE_CHANGED = "usual.event.TIMEZONE_CHANGED",

    /**
     * Indicates the action of a common event that a user closes a temporary system dialog box.
     */
    COMMON_EVENT_CLOSE_SYSTEM_DIALOGS = "usual.event.CLOSE_SYSTEM_DIALOGS",

    /**
     * Indicates the action of a common event that a new application package has been installed on the device.
     */
    COMMON_EVENT_PACKAGE_ADDED = "usual.event.PACKAGE_ADDED",

    /**
     * Indicates the action of a common event that a new version of
     * an installed application package has replaced the previous one on the device.
     */
    COMMON_EVENT_PACKAGE_REPLACED = "usual.event.PACKAGE_REPLACED",

    /**
     * Indicates the action of a common event that a new
     * version of your application package has replaced the previous one.
     */
    COMMON_EVENT_MY_PACKAGE_REPLACED = "usual.event.MY_PACKAGE_REPLACED",

    /**
     * Indicates the action of a common event that an installed application
     * has been uninstalled from the device with the application data retained.
     */
    COMMON_EVENT_PACKAGE_REMOVED = "usual.event.PACKAGE_REMOVED",

    /**
     * Indicates the action of a common event that an installed bundle
     * has been uninstalled from the device with the application data retained.
     */
    COMMON_EVENT_BUNDLE_REMOVED = "usual.event.BUNDLE_REMOVED",

    /**
     * Indicates the action of a common event that an installed application,
     * including both the application data and code, has been completely uninstalled from the device.
     */
    COMMON_EVENT_PACKAGE_FULLY_REMOVED = "usual.event.PACKAGE_FULLY_REMOVED",

    /**
     * Indicates the action of a common event that an application package has been changed
     */
    COMMON_EVENT_PACKAGE_CHANGED = "usual.event.PACKAGE_CHANGED",

    /**
     * Indicates the action of a common event that the user
     * has restarted the application package and killed all its processes.
     */
    COMMON_EVENT_PACKAGE_RESTARTED = "usual.event.PACKAGE_RESTARTED",

    /**
     * Indicates the action of a common event that the user has cleared the application package data.
     */
    COMMON_EVENT_PACKAGE_DATA_CLEARED = "usual.event.PACKAGE_DATA_CLEARED",

    /**
     * Indicates the action of a common event that the user has cleared the application package data.
     */
    COMMON_EVENT_PACKAGES_SUSPENDED = "usual.event.PACKAGES_SUSPENDED",

    /**
     * Indicates the action of a common event that application packages have not been suspended.
     */
    COMMON_EVENT_PACKAGES_UNSUSPENDED = "usual.event.PACKAGES_UNSUSPENDED",

    /**
     * Indicates the action of a common event that an application package has been suspended.
     */
    COMMON_EVENT_MY_PACKAGE_SUSPENDED = "usual.event.MY_PACKAGE_SUSPENDED",

    /**
     * Indicates the action of a common event that an application package has not been suspended.
     */
    COMMON_EVENT_MY_PACKAGE_UNSUSPENDED = "usual.event.MY_PACKAGE_UNSUSPENDED",

    /**
     * Indicates the action of a common event that a user ID has been removed from the system.
     */
    COMMON_EVENT_UID_REMOVED = "usual.event.UID_REMOVED",

    /**
     * Indicates the action of a common event that an installed application is started for the first time.
     */
    COMMON_EVENT_PACKAGE_FIRST_LAUNCH = "usual.event.PACKAGE_FIRST_LAUNCH",

    /**
     * Indicates the action of a common event that an application requires system verification.
     */
    COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION =
        "usual.event.PACKAGE_NEEDS_VERIFICATION",

    /**
     * Indicates the action of a common event that an application has been verified by the system.
     */
    COMMON_EVENT_PACKAGE_VERIFIED = "usual.event.PACKAGE_VERIFIED",

    /**
     * Indicates the action of a common event that applications
     * installed on the external storage become available for the system.
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE =
        "usual.event.EXTERNAL_APPLICATIONS_AVAILABLE",

    /**
     * Indicates the action of a common event that applications
     * installed on the external storage become unavailable for the system.
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE =
        "usual.event.EXTERNAL_APPLICATIONS_UNAVAILABLE",

    /**
     * Indicates the action of a common event that the device state has changed.
     */
    COMMON_EVENT_CONFIGURATION_CHANGED = "usual.event.CONFIGURATION_CHANGED",

    /**
     * Indicates the action of a common event that the device locale has changed.
     */
    COMMON_EVENT_LOCALE_CHANGED = "usual.event.LOCALE_CHANGED",

    /**
     * Indicates the action of a common event that the device storage is insufficient.
     */
    COMMON_EVENT_MANAGE_PACKAGE_STORAGE = "usual.event.MANAGE_PACKAGE_STORAGE",

    /**
     * Indicates the action of a common event that the system is in driving mode.
     */
    COMMON_EVENT_DRIVE_MODE = "common.event.DRIVE_MODE",

    /**
     * Indicates the action of a common event that the system is in home mode.
     */
    COMMON_EVENT_HOME_MODE = "common.event.HOME_MODE",

    /**
     * Indicates the action of a common event that the system is in office mode.
     */
    COMMON_EVENT_OFFICE_MODE = "common.event.OFFICE_MODE",

    /**
     * Indicates the action of a common event that the user has been started.
     */
    COMMON_EVENT_USER_STARTED = "usual.event.USER_STARTED",

    /**
     * Indicates the action of a common event that the user has been brought to the background.
     */
    COMMON_EVENT_USER_BACKGROUND = "usual.event.USER_BACKGROUND",

    /**
     * Indicates the action of a common event that the user has been brought to the foreground.
     */
    COMMON_EVENT_USER_FOREGROUND = "usual.event.USER_FOREGROUND",

    /**
     * Indicates the action of a common event that a user switch is happening.
     */
    COMMON_EVENT_USER_SWITCHED = "usual.event.USER_SWITCHED",

    /**
     * Indicates the action of a common event that the user is going to be started.
     */
    COMMON_EVENT_USER_STARTING = "usual.event.USER_STARTING",

    /**
     * Indicates the action of a common event that the credential-encrypted storage
     * has become unlocked for the current user when the device is unlocked after being restarted.
     */
    COMMON_EVENT_USER_UNLOCKED = "usual.event.USER_UNLOCKED",

    /**
     * Indicates the action of a common event that the user is going to be stopped.
     */
    COMMON_EVENT_USER_STOPPING = "usual.event.USER_STOPPING",

    /**
     * Indicates the action of a common event that the user has been stopped.
     */
    COMMON_EVENT_USER_STOPPED = "usual.event.USER_STOPPED",

    /**
     * Indicates the action of a common event about a HUAWEI ID login.
     */
    COMMON_EVENT_HWID_LOGIN = "common.event.HWID_LOGIN",

    /**
     * Indicates the action of a common event about a HUAWEI ID logout.
     */
    COMMON_EVENT_HWID_LOGOUT = "common.event.HWID_LOGOUT",

    /**
     * Indicates the action of a common event that the HUAWEI ID is invalid.
     */
    COMMON_EVENT_HWID_TOKEN_INVALID = "common.event.HWID_TOKEN_INVALID",

    /**
     * Indicates the action of a common event about a HUAWEI ID logoff.
     */
    COMMON_EVENT_HWID_LOGOFF = "common.event.HWID_LOGOFF",

    /**
     * Indicates the action of a common event about the WLAN state, such as enabled and disabled.
     */
    COMMON_EVENT_WIFI_POWER_STATE = "usual.event.wifi.POWER_STATE",

    /**
     * Indicates the action of a common event that
     * the WLAN access point has been scanned and proven to be available.
     */
    COMMON_EVENT_WIFI_SCAN_FINISHED = "usual.event.wifi.SCAN_FINISHED",

    /**
     * Indicates the action of a common event that the WLAN signal strength (RSSI) has changed.
     */
    COMMON_EVENT_WIFI_RSSI_VALUE = "usual.event.wifi.RSSI_VALUE",

    /**
     * Indicates the action of a common event that the WLAN connection state has changed.
     */
    COMMON_EVENT_WIFI_CONN_STATE = "usual.event.wifi.CONN_STATE",

    /**
     * Indicates the action of a common event about the WLAN hotspot state, such as enabled or disabled.
     */
    COMMON_EVENT_WIFI_HOTSPOT_STATE = "usual.event.wifi.HOTSPOT_STATE",

    /**
     * Indicates the action of a common event that a client has joined the WLAN hotspot of the current device.
     */
    COMMON_EVENT_WIFI_AP_STA_JOIN = "usual.event.wifi.WIFI_HS_STA_JOIN",

    /**
     * Indicates the action of a common event that
     * a client has disconnected from the WLAN hotspot of the current device.
     */
    COMMON_EVENT_WIFI_AP_STA_LEAVE = "usual.event.wifi.WIFI_HS_STA_LEAVE",

    /**
     * Indicates the action of a common event that the state of MPLink (an enhanced WLAN feature) has changed.
     */
    COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE = "usual.event.wifi.mplink.STATE_CHANGE",

    /**
     * Indicates the action of a common event that the WLAN P2P connection state has changed.
     */
    COMMON_EVENT_WIFI_P2P_CONN_STATE = "usual.event.wifi.p2p.CONN_STATE_CHANGE",

    /**
     * Indicates the action of a common event about the WLAN P2P state, such as enabled and disabled.
     */
    COMMON_EVENT_WIFI_P2P_STATE_CHANGED = "usual.event.wifi.p2p.STATE_CHANGE",

    /**
     * Indicates the action of a common event about the WLAN P2P discovery status change.
     */
    COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED =
        "usual.event.wifi.p2p.DEVICES_CHANGE",

    /**
     * Indicates the action of a common event about the WLAN P2P discovery status change.
     */
    COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED =
        "usual.event.wifi.p2p.PEER_DISCOVERY_STATE_CHANGE",

    /**
     * Indicates the action of a common event about the status change of the WLAN P2P local device.
     */
    COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED =
        "usual.event.wifi.p2p.CURRENT_DEVICE_CHANGE",

    /**
     * Indicates the action of a common event that the WLAN P2P group information has changed.
     */
    COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED =
        "usual.event.wifi.p2p.GROUP_STATE_CHANGED",

    /**
     * Indicates the action of a common event about the connection state of Bluetooth handsfree communication.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.handsfree.ag.CONNECT_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the device connected to the Bluetooth handsfree is active.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE =
        "usual.event.bluetooth.handsfree.ag.CURRENT_DEVICE_UPDATE",

    /**
     * Indicates the action of a common event that the connection state of Bluetooth A2DP has changed.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE =
        "usual.event.bluetooth.handsfree.ag.AUDIO_STATE_UPDATE",

    /**
     * Indicates the action of a common event about the connection state of Bluetooth A2DP.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsource.CONNECT_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the device connected using Bluetooth A2DP is active.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE =
        "usual.event.bluetooth.a2dpsource.CURRENT_DEVICE_UPDATE",

    /**
     * Indicates the action of a common event that the playing state of Bluetooth A2DP has changed.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsource.PLAYING_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the AVRCP connection state of Bluetooth A2DP has changed.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the audio codec state of Bluetooth A2DP has changed.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE =
        "usual.event.bluetooth.a2dpsource.CODEC_VALUE_UPDATE",

    /**
     * Indicates the action of a common event that a remote Bluetooth device has been discovered.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED =
        "usual.event.bluetooth.remotedevice.DISCOVERED",

    /**
     * Indicates the action of a common event that
     * the Bluetooth class of a remote Bluetooth device has changed.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE =
        "usual.event.bluetooth.remotedevice.CLASS_VALUE_UPDATE",

    /**
     * Indicates the action of a common event that a
     * low level (ACL) connection has been established with a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED =
        "usual.event.bluetooth.remotedevice.ACL_CONNECTED",

    /**
     * Indicates the action of a common event that a
     * low level (ACL) connection has been disconnected from a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED =
        "usual.event.bluetooth.remotedevice.ACL_DISCONNECTED",

    /**
     * Indicates the action of a common event that the friendly name of a remote
     * Bluetooth device has been retrieved for the first time or has been changed since the last retrieval.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE =
        "usual.event.bluetooth.remotedevice.NAME_UPDATE",

    /**
     * Indicates the action of a common event that
     * the connection state of a remote Bluetooth device has changed.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE =
        "usual.event.bluetooth.remotedevice.PAIR_STATE",

    /**
     * Indicates the action of a common event that the battery level of a remote
     * Bluetooth device has been retrieved for the first time or has been changed since the last retrieval.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE =
        "usual.event.bluetooth.remotedevice.BATTERY_VALUE_UPDATE",

    /**
     * Indicates the action of a common event about the SDP state of a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT =
        "usual.event.bluetooth.remotedevice.SDP_RESULT",

    /**
     * Indicates the action of a common event about the UUID connection state of a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE =
        "usual.event.bluetooth.remotedevice.UUID_VALUE",

    /**
     * Indicates the action of a common event about the pairing request from a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ =
        "usual.event.bluetooth.remotedevice.PAIRING_REQ",

    /**
     * Indicates the action of a common event that Bluetooth pairing is canceled.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL =
        "usual.event.bluetooth.remotedevice.PAIRING_CANCEL",

    /**
     * Indicates the action of a common event about the connection request from a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ =
        "usual.event.bluetooth.remotedevice.CONNECT_REQ",

    /**
     * Indicates the action of a common event about
     * the response to the connection request from a remote Bluetooth device.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY =
        "usual.event.bluetooth.remotedevice.CONNECT_REPLY",

    /**
     * Indicates the action of a common event that
     *  the connection to a remote Bluetooth device has been canceled.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL =
        "usual.event.bluetooth.remotedevice.CONNECT_CANCEL",

    /**
     * Indicates the action of a common event that
     * the connection state of a Bluetooth handsfree has changed.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.handsfreeunit.CONNECT_STATE_UPDATE",

    /**
     * Indicates the action of a common event that
     * the audio state of a Bluetooth handsfree has changed.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE =
        "usual.event.bluetooth.handsfreeunit.AUDIO_STATE_UPDATE",

    /**
     * Indicates the action of a common event that
     * the audio gateway state of a Bluetooth handsfree has changed.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT =
        "usual.event.bluetooth.handsfreeunit.AG_COMMON_EVENT",

    /**
     * Indicates the action of a common event that
     * the calling state of a Bluetooth handsfree has changed.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE =
        "usual.event.bluetooth.handsfreeunit.AG_CALL_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the state of a Bluetooth
     * adapter has been changed, for example, Bluetooth has been enabled or disabled.
     */
    COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE =
        "usual.event.bluetooth.host.STATE_UPDATE",

    /**
     * Indicates the action of a common event about the
     * request for the user to allow Bluetooth device scanning.
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE =
        "usual.event.bluetooth.host.REQ_DISCOVERABLE",

    /**
     * Indicates the action of a common event about the request for the user to enable Bluetooth.
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE = "usual.event.bluetooth.host.REQ_ENABLE",

    /**
     * Indicates the action of a common event about the request for the user to disable Bluetooth.
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE =
        "usual.event.bluetooth.host.REQ_DISABLE",

    /**
     * Indicates the action of a common event that the Bluetooth scanning mode of a device has changed.
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE =
        "usual.event.bluetooth.host.SCAN_MODE_UPDATE",

    /**
     * Indicates the action of a common event that the Bluetooth scanning has been started on the device.
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED =
        "usual.event.bluetooth.host.DISCOVERY_STARTED",

    /**
     * Indicates the action of a common event that the Bluetooth scanning is finished on the device.
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED =
        "usual.event.bluetooth.host.DISCOVERY_FINISHED",

    /**
     * Indicates the action of a common event that the Bluetooth adapter name of the device has changed.
     */
    COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE =
        "usual.event.bluetooth.host.NAME_UPDATE",

    /**
     * Indicates the action of a common event that the connection state of Bluetooth A2DP Sink has changed.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsink.CONNECT_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the playing state of Bluetooth A2DP Sink has changed.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsink.PLAYING_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the audio state of Bluetooth A2DP Sink has changed.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE =
        "usual.event.bluetooth.a2dpsink.AUDIO_STATE_UPDATE",

    /**
     * Indicates the action of a common event that the state of the device's NFC adapter has changed.
     */
    COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED =
        "usual.event.nfc.action.ADAPTER_STATE_CHANGED",

    /**
     * Indicates the action of a common event that the NFC RF field is detected to be in the enabled state.
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED =
        "usual.event.nfc.action.RF_FIELD_ON_DETECTED",

    /**
     * Indicates the action of a common event that the NFC RF field is detected to be in the disabled state.
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED =
        "usual.event.nfc.action.RF_FIELD_OFF_DETECTED",

    /**
     * Indicates the action of a common event that the system stops charging the battery.
     */
    COMMON_EVENT_DISCHARGING = "usual.event.DISCHARGING",

    /**
     * Indicates the action of a common event that the system starts charging the battery.
     */
    COMMON_EVENT_CHARGING = "usual.event.CHARGING",

    /**
     * Indicates the action of a common event that the system idle mode has changed.
     */
    COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED = "usual.event.DEVICE_IDLE_MODE_CHANGED",

    /**
     * Indicates the action of a common event that the power save mode of the system has changed.
     */
    COMMON_EVENT_POWER_SAVE_MODE_CHANGED = "usual.event.POWER_SAVE_MODE_CHANGED",

    /**
     * Indicates the action of a common event that a user has been added to the system.
     */
    COMMON_EVENT_USER_ADDED = "usual.event.USER_ADDED",

    /**
     * Indicates the action of a common event that a user has been removed from the system.
     */
    COMMON_EVENT_USER_REMOVED = "usual.event.USER_REMOVED",

    /**
     * Indicates the action of a common event that an ability has been added.
     */
    COMMON_EVENT_ABILITY_ADDED = "common.event.ABILITY_ADDED",

    /**
     * Indicates the action of a common event that an ability has been removed.
     */
    COMMON_EVENT_ABILITY_REMOVED = "common.event.ABILITY_REMOVED",

    /**
     * Indicates the action of a common event that an ability has been updated.
     */
    COMMON_EVENT_ABILITY_UPDATED = "common.event.ABILITY_UPDATED",

    /**
     * Indicates the action of a common event that the location mode of the system has changed.
     */
    COMMON_EVENT_LOCATION_MODE_STATE_CHANGED =
        "usual.event.location.MODE_STATE_CHANGED",

    /**
     * Indicates the action of a common event that the
     * in-vehicle infotainment (IVI) system of a vehicle is sleeping.
     */
    COMMON_EVENT_IVI_SLEEP = "common.event.IVI_SLEEP",

    /**
     * Indicates the action of a common event that the in-vehicle infotainment
     * (IVI) system of a vehicle has entered sleep mode and the playing application is instructed to stop playback.
     */
    COMMON_EVENT_IVI_PAUSE = "common.event.IVI_PAUSE",

    /**
     * Indicates the action of a common event that a
     * third-party application is instructed to pause the current work.
     */
    COMMON_EVENT_IVI_STANDBY = "common.event.IVI_STANDBY",

    /**
     * Indicates the action of a common event that a
     * third-party application is instructed to save its last mode.
     */
    COMMON_EVENT_IVI_LASTMODE_SAVE = "common.event.IVI_LASTMODE_SAVE",

    /**
     * Indicates the action of a common event that the voltage of the vehicle's power system is abnormal.
     */
    COMMON_EVENT_IVI_VOLTAGE_ABNORMAL = "common.event.IVI_VOLTAGE_ABNORMAL",

    /**
     * Indicates the action of a common event that the IVI system has a high temperature.
     */
    COMMON_EVENT_IVI_HIGH_TEMPERATURE = "common.event.IVI_HIGH_TEMPERATURE",

    /**
     * Indicates the action of a common event that the IVI system has an extremely high temperature.
     */
    COMMON_EVENT_IVI_EXTREME_TEMPERATURE = "common.event.IVI_EXTREME_TEMPERATURE",

    /**
     * Indicates the action of a common event that the IVI system has an extreme temperature.
     */
    COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL = "common.event.IVI_TEMPERATURE_ABNORMAL",

    /**
     * Indicates the action of a common event that the voltage of the vehicle's power system is restored to normal.
     */
    COMMON_EVENT_IVI_VOLTAGE_RECOVERY = "common.event.IVI_VOLTAGE_RECOVERY",

    /**
     * Indicates the action of a common event that the temperature of the IVI system is restored to normal.
     */
    COMMON_EVENT_IVI_TEMPERATURE_RECOVERY = "common.event.IVI_TEMPERATURE_RECOVERY",

    /**
     * Indicates the action of a common event that the battery service is active.
     */
    COMMON_EVENT_IVI_ACTIVE = "common.event.IVI_ACTIVE",

    /**
     * Indicates the action of a common event that a USB device has been attached
     * when the user device functions as a USB host.
     */
    COMMON_EVENT_USB_DEVICE_ATTACHED =
        "usual.event.hardware.usb.action.USB_DEVICE_ATTACHED",

    /**
     * Indicates the action of a common event that a USB device has been detached
     * when the user device functions as a USB host.
     */
    COMMON_EVENT_USB_DEVICE_DETACHED =
        "usual.event.hardware.usb.action.USB_DEVICE_DETACHED",

    /**
     * Indicates the action of a common event that a USB accessory has been attached.
     */
    COMMON_EVENT_USB_ACCESSORY_ATTACHED =
        "usual.event.hardware.usb.action.USB_ACCESSORY_ATTACHED",

    /**
     * Indicates the action of a common event that a USB accessory has been detached.
     */
    COMMON_EVENT_USB_ACCESSORY_DETACHED =
        "usual.event.hardware.usb.action.USB_ACCESSORY_DETACHED",

    /**
     * Indicates the action of a common event that an external storage device was removed.
     */
    COMMON_EVENT_DISK_REMOVED = "usual.event.data.DISK_REMOVED",

    /**
     * Indicates the action of a common event that an external storage device was unmounted.
     */
    COMMON_EVENT_DISK_UNMOUNTED = "usual.event.data.DISK_UNMOUNTED",

    /**
     * Indicates the action of a common event that an external storage device was mounted.
     */
    COMMON_EVENT_DISK_MOUNTED = "usual.event.data.DISK_MOUNTED",

    /**
     * Indicates the action of a common event that an external storage device was removed without being unmounted.
     */
    COMMON_EVENT_DISK_BAD_REMOVAL = "usual.event.data.DISK_BAD_REMOVAL",

    /**
     * Indicates the action of a common event that an external storage device becomes unmountable.
     */
    COMMON_EVENT_DISK_UNMOUNTABLE = "usual.event.data.DISK_UNMOUNTABLE",

    /**
     * Indicates the action of a common event that an external storage device was ejected.
     */
    COMMON_EVENT_DISK_EJECT = "usual.event.data.DISK_EJECT",

    /**
     * Indicates the action of a common event that the account visibility changed.
     */
    COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED =
        "usual.event.data.VISIBLE_ACCOUNTS_UPDATED",

    /**
     * Indicates the action of a common event that the account is deleted.
     */
    COMMON_EVENT_ACCOUNT_DELETED = "usual.event.data.ACCOUNT_DELETED",

    /**
     * Indicates the action of a common event that the foundation is ready.
     */
    COMMON_EVENT_FOUNDATION_READY = "common.event.FOUNDATION_READY",

    /**
     * Indicates the action of a common event that the airplane mode of the device has changed.
     */
    COMMON_EVENT_AIRPLANE_MODE_CHANGED = "usual.event.AIRPLANE_MODE"
  }
}

export default commonEvent;