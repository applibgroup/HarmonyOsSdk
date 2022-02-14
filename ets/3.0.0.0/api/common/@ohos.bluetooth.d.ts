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
 * Provides methods to operate or manage Bluetooth.
 * @since 7
 * @SysCap SystemCapability.Communication.Bluetooth
 * @devices phone, tv, wearable, tablet, car
 */
declare namespace bluetooth {
  /**
   * Obtains the Bluetooth status of a device.
   *
   * @return Returns the Bluetooth status, which can be {@link BluetoothState#STATE_OFF},
   * {@link BluetoothState#STATE_TURNING_ON}, {@link BluetoothState#STATE_ON}, {@link BluetoothState#STATE_TURNING_OFF},
   * {@link BluetoothState#STATE_BLE_TURNING_ON}, {@link BluetoothState#STATE_BLE_ON},
   * or {@link BluetoothState#STATE_BLE_TURNING_OFF}.
   * @since 7
   * @permission ohos.permission.USE_BLUETOOTH
   */
    function getState(): BluetoothState;

    /**
     * Get the local device connection state to any profile of any remote device.
     *
     * @return One of {@link ProfileConnectionState#STATE_DISCONNECTED},
     * {@link ProfileConnectionState#STATE_CONNECTING}, {@link ProfileConnectionState#STATE_CONNECTED},
     * {@link ProfileConnectionState#STATE_DISCONNECTING}.
     * @since 7
     * @permission ohos.permission.USE_BLUETOOTH
     */
    function getBtConnectionState(): ProfileConnectionState;

    /**
     * Starts pairing with a remote Bluetooth device.
     *
     * @param deviceId The address of the remote device to pair.
     * @return Returns {@code true} if the pairing process is started; returns {@code false} otherwise.
     * @since 7
     * @permission ohos.permission.DISCOVER_BLUETOOTH
     */
    function pairDevice(deviceId: string): boolean;

    namespace BLE {
        /**
         * create a JavaScript Gatt server instance.
         *
         * @return Returns a JavaScript Gatt server instance {@code GattServer}.
         * @since 7
         */
        function createGattServer(): GattServer;

        /**
         * create a JavaScript Gatt client device instance.
         *
         * @param deviceId The address of the remote device.
         * @return Returns a JavaScript Gatt client device instance {@code GattClientDevice}.
         * @since 7
         */
        function createGattClientDevice(deviceId: string): GattClientDevice;

        /**
         * Obtains the list of devices in the connected status.
         *
         * @return Returns the list of device address.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        function getConnectedBLEDevices(): Array<string>;

        /**
         * Starts scanning for specified BLE devices with filters.
         *
         * @param filters Indicates the list of filters used to filter out specified devices.
         * If you do not want to use filter, set this parameter to {@code null}.
         * @param options Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
         * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
         * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
         * @since 7
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         * @permission ohos.permission.MANAGE_BLUETOOTH
         * @permission ohos.permission.LOCATION
         */
        function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void;

        /**
         * Stops BLE scanning.
         *
         * @since 7
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         */
        function stopBLEScan(): void;

        /**
         * Subscribe BLE scan result.
         *
         * @param type Type of the scan result event to listen for.
         * @param callback Callback used to listen for the scan result event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        function on(type: "BLEDeviceFind", callback: Callback<Array<ScanResult>>): void;

        /**
         * Unsubscribe BLE scan result.
         *
         * @param type Type of the scan result event to listen for.
         * @param callback Callback used to listen for the scan result event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        function off(type: "BLEDeviceFind", callback?: Callback<Array<ScanResult>>): void;
    }

    /**
     * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
     */
    interface GattServer {

        /**
         * Starts BLE advertising.
         *
         * @param setting Indicates the settings for BLE advertising.
         * If you need to use the default value, set this parameter to {@code null}.
         * @param advData Indicates the advertising data.
         * @param advResponse Indicates the scan response associated with the advertising data.
         * @since 7
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         */
        startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void;

        /**
         * Stops BLE advertising.
         *
         * @since 7
         * @permission ohos.permission.DISCOVER_BLUETOOTH
         */
        stopAdvertising(): void;

        /**
         * Adds a specified service to be hosted.
         *
         * <p>The added service and its characteristics are provided by the local device.
         *
         * @param service Indicates the service to add.
         * @return Returns {@code true} if the service is added; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        addService(service: GattService): boolean;

        /**
         * Removes a specified service from the list of GATT services provided by this device.
         *
         * @param serviceUuid Indicates the UUID of the service to remove.
         * @return Returns {@code true} if the service is removed; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        removeService(serviceUuid: string): boolean;

        /**
         * Closes this {@code GattServer} object and unregisters its callbacks.
         *
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        close(): void;

        /**
         * Sends a notification of a change in a specified local characteristic.
         *
         * <p>This method should be called for every BLE peripheral device that has requested notifications.
         *
         * @param deviceId Indicates the address of the BLE peripheral device to receive the notification.
         * @param notifyCharacteristic Indicates the local characteristic that has changed.
         * @return Returns {@code true} if the notification is sent successfully; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): boolean;

        /**
         * Sends a response to a specified read or write request to a given BLE peripheral device.
         *
         * @param serverResponse Indicates the response parameters {@link ServerResponse}.
         * @return Returns {@code true} if the response is sent successfully; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        sendResponse(serverResponse: ServerResponse): boolean;

        /**
         * Subscribe characteristic read event.
         *
         * @param type Type of the characteristic read event to listen for.
         * @param callback Callback used to listen for the characteristic read event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "characteristicRead", callback: Callback<CharacteristicReadReq>): void;

        /**
         * Unsubscribe characteristic read event.
         *
         * @param type Type of the characteristic read event to listen for.
         * @param callback Callback used to listen for the characteristic read event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "characteristicRead", callback?: Callback<CharacteristicReadReq>): void;

        /**
         * Subscribe characteristic write event.
         *
         * @param type Type of the characteristic write event to listen for.
         * @param callback Callback used to listen for the characteristic write event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "characteristicWrite", callback: Callback<CharacteristicWriteReq>): void;

        /**
         * Unsubscribe characteristic write event.
         *
         * @param type Type of the characteristic write event to listen for.
         * @param callback Callback used to listen for the characteristic write event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "characteristicWrite", callback?: Callback<CharacteristicWriteReq>): void;

        /**
         * Subscribe descriptor read event.
         *
         * @param type Type of the descriptor read event to listen for.
         * @param callback Callback used to listen for the descriptor read event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "descriptorRead", callback: Callback<DescriptorReadReq>): void;

        /**
         * Unsubscribe descriptor read event.
         *
         * @param type Type of the descriptor read event to listen for.
         * @param callback Callback used to listen for the descriptor read event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "descriptorRead", callback?: Callback<DescriptorReadReq>): void;

        /**
         * Subscribe descriptor write event.
         *
         * @param type Type of the descriptor write event to listen for.
         * @param callback Callback used to listen for the descriptor write event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "descriptorWrite", callback: Callback<DescriptorWriteReq>): void;

        /**
         * Unsubscribe descriptor write event.
         *
         * @param type Type of the descriptor write event to listen for.
         * @param callback Callback used to listen for the descriptor write event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "descriptorWrite", callback?: Callback<DescriptorWriteReq>): void;

        /**
         * Subscribe server connection state changed event.
         *
         * @param type Type of the connection state changed event to listen for.
         * @param callback Callback used to listen for the connection state changed event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "connectStateChange", callback: Callback<BLEConnectChangedState>): void;

        /**
         * Unsubscribe server connection state changed event.
         *
         * @param type Type of the connection state changed event to listen for.
         * @param callback Callback used to listen for the connection state changed event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "connectStateChange", callback?: Callback<BLEConnectChangedState>): void;
    }

    /**
     * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
     */
    interface GattClientDevice {

        /**
         * Connects to a BLE peripheral device.
         *
         * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
         *
         * @return Returns {@code true} if the connection process starts; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        connect(): boolean;

        /**
         * Disconnects from or stops an ongoing connection to a BLE peripheral device.
         *
         * @return Returns {@code true} if the disconnection process starts; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        disconnect(): boolean;

        /**
         * Disables a BLE peripheral device.
         *
         * <p> This method unregisters the device and clears the registered callbacks and handles.
         *
         * @return Returns {@code true} if the the device is disabled; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        close(): boolean;

        /**
         * Obtains the name of BLE peripheral device.
         *
         * @return Returns a string representation of the name if obtained;
         * returns {@code null} if the name fails to be obtained or the name does not exist.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        getDeviceName(callback: AsyncCallback<string>): void;
        getDeviceName(): Promise<string>;

        /**
         * Starts discovering services.
         *
         * @return Returns the list of services {@link GattService} of the BLE peripheral device.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        getServices(callback: AsyncCallback<Array<GattService>>): void;
        getServices(): Promise<Array<GattService>>;

        /**
         * Reads the characteristic of a BLE peripheral device.
         *
         * @param characteristic Indicates the characteristic to read.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;
        readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>;

        /**
         * Reads the descriptor of a BLE peripheral device.
         *
         * @param descriptor Indicates the descriptor to read.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void;
        readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>;

        /**
         * Writes the characteristic of a BLE peripheral device.
         *
         * @param characteristic Indicates the characteristic to write.
         * @return Returns {@code true} if the characteristic is written successfully; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        writeCharacteristicValue(characteristic: BLECharacteristic): boolean;

        /**
         * Writes the descriptor of a BLE peripheral device.
         *
         * @param descriptor Indicates the descriptor to write.
         * @return Returns {@code true} if the descriptor is written successfully; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        writeDescriptorValue(descriptor: BLEDescriptor): boolean;

        /**
         * Get the RSSI value of this BLE peripheral device.
         *
         * @return Returns the RSSI value.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        getRssiValue(callback: AsyncCallback<number>): void;
        getRssiValue(): Promise<number>;

        /**
         * Set the mtu size of a BLE peripheral device.
         *
         * @param mtu The maximum transmission unit.
         * @return Returns {@code true} if the set mtu is successfully; returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        setBLEMtuSize(mtu: number): boolean;

        /**
         * Enables or disables notification of a characteristic when value changed.
         *
         * @param enable Specifies whether to enable notification of the characteristic. The value {@code true} indicates
         * that notification is enabled, and the value {@code false} indicates that notification is disabled.
         * @return Returns {@code true} if notification of the characteristic is enabled or disabled;
         * returns {@code false} otherwise.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        setNotifyCharacteristicChanged(characteristic: BLECharacteristic, enable: boolean): boolean;

        /**
         * Subscribe characteristic value changed event.
         *
         * @param type Type of the characteristic value changed event to listen for.
         * @param callback Callback used to listen for the characteristic value changed event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "BLECharacteristicChange", callback: Callback<BLECharacteristic>): void;

        /**
         * Unsubscribe characteristic value changed event.
         *
         * @param type Type of the characteristic value changed event to listen for.
         * @param callback Callback used to listen for the characteristic value changed event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "BLECharacteristicChange", callback?: Callback<BLECharacteristic>): void;

        /**
         * Subscribe client connection state changed event.
         *
         * @param type Type of the connection state changed event to listen for.
         * @param callback Callback used to listen for the connection state changed event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        on(type: "BLEConnectionStateChange", callback: Callback<BLEConnectChangedState>): void;

        /**
         * Unsubscribe client connection state changed event.
         *
         * @param type Type of the connection state changed event to listen for.
         * @param callback Callback used to listen for the connection state changed event.
         * @since 7
         * @permission ohos.permission.USE_BLUETOOTH
         */
        off(type: "BLEConnectionStateChange", callback?: Callback<BLEConnectChangedState>): void;
    }

    /**
     * Describes the Gatt service.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface GattService {
        /** The UUID of a GattService instance */
        serviceUuid: string;
        /** Indicates whether the GattService instance is primary or secondary. */
        isPrimary: boolean;
        /** The {@link BLECharacteristic} list belongs to this GattService instance */
        characteristics: Array<BLECharacteristic>;
        /** The list of GATT services contained in the service */
        includeServices?: Array<GattService>;
    }

    /**
     * Describes the Gatt characteristic.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface BLECharacteristic {
        /** The UUID of the {@link GattService} instance to which the characteristic belongs */
        serviceUuid: string;
        /** The UUID of a BLECharacteristic instance */
         characteristicUuid: string;
        /** The value of a BLECharacteristic instance */
         characteristicValue: ArrayBuffer;
        /** The list of {@link BLEDescriptor} contained in the characteristic */
        descriptors: Array<BLEDescriptor>;
    }

    /**
     * Describes the Gatt descriptor.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface BLEDescriptor {
        /** The UUID of the {@link GattService} instance to which the descriptor belongs */
        serviceUuid: string;
        /** The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs */
        characteristicUuid: string;
        /** The UUID of the BLEDescriptor instance */
        descriptorUuid: string;
        /** The value of the BLEDescriptor instance */
        descriptorValue: ArrayBuffer;
    }

    /**
     * Describes the value of the indication or notification sent by the Gatt server.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface NotifyCharacteristic {
        /** The UUID of the {@link GattService} instance to which the characteristic belongs */
        serviceUuid: string;
        /** The UUID of a NotifyCharacteristic instance */
        characteristicUuid: string;
        /** The value of a NotifyCharacteristic instance */
        characteristicValue: ArrayBuffer;
        /**
         * Specifies whether to request confirmation from the BLE peripheral device (indication) or
         * send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.
         */
        confirm: boolean;
    }

    /**
     * Describes the parameters of the Gatt client's characteristic read request.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface CharacteristicReadReq {
        /** Indicates the address of the client that initiates the read request */
        deviceId: string;
        /** The Id of the read request */
        transId: number;
        /** Indicates the byte offset of the start position for reading characteristic value */
        offset: number;
        /** The UUID of a CharacteristicReadReq instance */
        characteristicUuid: string;
        /** The UUID of the service to which the characteristic belongs */
        serviceUuid: string;
    }

    /**
     * Describes the parameters of the of the Gatt client's characteristic write request.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface CharacteristicWriteReq {
        /** Indicates the address of the client that initiates the write request */
        deviceId: string;
        /** The Id of the write request */
        transId: number;
        /** Indicates the byte offset of the start position for writing characteristic value */
        offset: number;
        /** Whether this request should be pending for later operation */
        isPrep: boolean;
        /** Whether the remote client need a response */
        needRsp: boolean;
        /** Indicates the value to be written */
        value: ArrayBuffer;
        /** The UUID of a CharacteristicWriteReq instance */
        characteristicUuid: string;
        /** The UUID of the service to which the characteristic belongs */
        serviceUuid: string;
    }

    /**
     * Describes the parameters of the Gatt client's descriptor read request.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface DescriptorReadReq {
        /** Indicates the address of the client that initiates the read request */
        deviceId: string;
        /** The Id of the read request */
        transId: number;
        /** Indicates the byte offset of the start position for reading characteristic value */
        offset: number;
        /** The UUID of a DescriptorReadReq instance */
        descriptorUuid: string;
        /** The UUID of the characteristic to which the descriptor belongs */
        characteristicUuid: string;
        /** The UUID of the service to which the descriptor belongs */
        serviceUuid: string;
    }

    /**
     * Describes the parameters of the Gatt client's characteristic write request.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface DescriptorWriteReq {
        /** Indicates the address of the client that initiates the write request */
        deviceId: string;
        /** The Id of the write request */
        transId: number;
        /** Indicates the byte offset of the start position for writing characteristic value */
        offset: number;
        /** Whether this request should be pending for later operation */
        isPrep: boolean;
        /** Whether the remote client need a response */
        needRsp: boolean;
        /** Indicates the value to be written */
        value: ArrayBuffer;
        /** The UUID of a DescriptorWriteReq instance */
        descriptorUuid: string;
        /** The UUID of the characteristic to which the descriptor belongs */
        characteristicUuid: string;
        /** The UUID of the service to which the descriptor belongs */
        serviceUuid: string;
    }

    /**
     * Describes the parameters of a response send by the server to a specified read or write request.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface ServerResponse {
        /** Indicates the address of the client to which to send the response */
        deviceId: string;
        /** The Id of the write request */
        transId: number;
        /** Indicates the status of the read or write request, set this parameter to '0' in normal cases */
        status: number;
        /** Indicates the byte offset of the start position for reading or writing operation */
        offset: number;
        /** Indicates the value to be sent */
        value: ArrayBuffer;
    }

    /**
     * Describes the Gatt profile connection state.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface BLEConnectChangedState {
        /** Indicates the peer device address */
        deviceId: string;
        /** Connection state of the Gatt profile */
        state: ProfileConnectionState;
    }

    /**
     * Describes the contents of the scan results.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface ScanResult {
        /** Address of the scanned device */
        deviceId: string;
        /** RSSI of the remote device */
        rssi: number;
        /** The raw data of broadcast packet */
        data: ArrayBuffer;
    }

    /**
     * Describes the settings for BLE advertising.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface AdvertiseSetting {
        /**
         * Minimum slot value for the advertising interval, which is {@code 32} (20 ms)
         * Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s)
         * Default slot value for the advertising interval, which is {@code 1600} (1s)
         */
        interval?: number;
        /**
         * Minimum transmission power level for advertising, which is {@code -127}
         * Maximum transmission power level for advertising, which is {@code 1}
         * Default transmission power level for advertising, which is {@code -7}
         */
        txPower?: number;
        /** Indicates whether the BLE is connectable, default is {@code true} */
        connectable?: boolean;
    }

    /**
     * Describes the advertising data.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface AdvertiseData {
        /** The specified service UUID list to this advertisement */
        serviceUuids: Array<string>;
        /** The specified manufacturer data list to this advertisement */
        manufactureData: Array<ManufactureData>;
        /** The specified service data list to this advertisement */
        serviceData: Array<ServiceData>;
    }

    /**
     * Describes the manufacturer data.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface ManufactureData {
        /** Indicates the manufacturer ID assigned by Bluetooth SIG */
        manufactureId: number;
        /** Indicates the manufacturer data to add */
        manufactureValue: ArrayBuffer;
    }

    /**
     * Describes the service data.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface ServiceData {
        /** Indicates the UUID of the service data to add */
        serviceUuid: string;
        /** Indicates the service data to add */
        serviceValue: ArrayBuffer;
    }

    /**
     * Describes the criteria for filtering scanning results can be set.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface ScanFilter {
        /** The address of a BLE peripheral device */
        deviceId?: string;
        /** The name of a BLE peripheral device */
        name?: string;
        /** The service UUID of a BLE peripheral device */
        serviceUuid?: string;
    }

    /**
     * Describes the parameters for scan.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface ScanOptions {
        /** Time of delay for reporting the scan result */
        interval?: number;
        /** Bluetooth LE scan mode */
        dutyMode?: ScanDuty;
        /** Match mode for Bluetooth LE scan filters hardware match */
        matchMode?: MatchMode;
    }

    enum ScanDuty {
        /** low power mode */
        SCAN_MODE_LOW_POWER = 0,
        /** balanced power mode */
        SCAN_MODE_BALANCED = 1,
        /** Scan using highest duty cycle */
        SCAN_MODE_LOW_LATENCY = 2
    }

    enum MatchMode {
        /** aggressive mode */
        MATCH_MODE_AGGRESSIVE = 1,
        /** sticky mode */
        MATCH_MODE_STICKY = 2
    }

    enum ProfileConnectionState {
        /** the current profile is disconnected */
        STATE_DISCONNECTED = 0,
        /** the current profile is being connected */
        STATE_CONNECTING = 1,
        /** the current profile is connected */
        STATE_CONNECTED = 2,
        /** the current profile is being disconnected */
        STATE_DISCONNECTING = 3
    }

    enum BluetoothState {
        /** Indicates the local Bluetooth is off */
        STATE_OFF = 0,
        /** Indicates the local Bluetooth is turning on */
        STATE_TURNING_ON = 1,
        /** Indicates the local Bluetooth is on, and ready for use */
        STATE_ON = 2,
        /** Indicates the local Bluetooth is turning off */
        STATE_TURNING_OFF = 3,
        /** Indicates the local Bluetooth is turning LE mode on */
        STATE_BLE_TURNING_ON = 4,
        /** Indicates the local Bluetooth is in LE only mode */
        STATE_BLE_ON = 5,
        /** Indicates the local Bluetooth is turning off LE only mode */
        STATE_BLE_TURNING_OFF = 6
    }
}

export default bluetooth;