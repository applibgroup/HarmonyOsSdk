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
 * Obtains battery information of a device.
 *
 * <p>Battery information includes the remaining battery power,
 * voltage, temperature, model, and charger type.
 *
 * @SysCap SystemCapability.PowerMgr.BatteryManager
 * @devices phone, tablet, tv, wearable
 * @since 6
 */
declare namespace batteryInfo {
    /**
     * Battery state of charge (SoC) of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const batterySOC: number;

    /**
     * Battery charging status of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const chargingStatus: BatteryChargeState;

    /**
     * Battery health state of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const healthStatus: BatteryHealthState;

    /**
     * Charger type of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const pluggedType: BatteryPluggedType;

    /**
     * Battery voltage of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const voltage: number;

    /**
     * Battery technology of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const technology: string;

    /**
     * Battery temperature of the current device.
     * @devices phone, tablet, tv, wearable
     */
    const batteryTemperature: number;

    /**
     * Indicates the charger type of a device.
     *
     * @SysCap SystemCapability.PowerMgr.BatteryManager
     * @devices phone, tablet, tv, wearable
     * @since 6
     */
    export enum BatteryPluggedType {
        /**
         * Unknown type
         * @devices phone, tablet, tv, wearable
         */
        NONE,
        /**
         * AC charger
         * @devices phone, tablet, tv, wearable
         */
        AC,
        /**
         * USB charger
         * @devices phone, tablet, tv, wearable
         */
        USB,
        /**
         * Wireless charger
         * @devices phone, tablet, tv, wearable
         */
        WIRELESS
    }

    /**
     * Indicates the battery charging status of a device.
     *
     * @SysCap SystemCapability.PowerMgr.BatteryManager
     * @devices phone, tablet, tv, wearable
     * @since 6
     */
    export enum BatteryChargeState {
        /**
         * Unknown state.
         * @devices phone, tablet, tv, wearable
         */
        NONE,
        /**
         * The battery is being charged.
         * @devices phone, tablet, tv, wearable
         */
        ENABLE,
        /**
         * The battery is not being charged.
         * @devices phone, tablet, tv, wearable
         */
        DISABLE,
        /**
         * The battery is fully charged.
         * @devices phone, tablet, tv, wearable
         */
        FULL
    }

    /**
     * Indicates the battery health status of a device.
     *
     * @SysCap SystemCapability.PowerMgr.BatteryManager
     * @devices phone, tablet, tv, wearable
     * @since 6
     */
    export enum BatteryHealthState {
        /**
         * Unknown state.
         * @devices phone, tablet, tv, wearable
         */
        UNKNOWN,
        /**
         * The battery is in healthy state.
         * @devices phone, tablet, tv, wearable
         */
        GOOD,
        /**
         * The battery is overheated.
         * @devices phone, tablet, tv, wearable
         */
        OVERHEAT,
        /**
         * The battery voltage is over high.
         * @devices phone, tablet, tv, wearable
         */
        OVERVOLTAGE,
        /**
         * The battery temperature is low.
         * @devices phone, tablet, tv, wearable
         */
        COLD,
        /**
         * The battery is dead.
         * @devices phone, tablet, tv, wearable
         */
        DEAD
    }
}
export default batteryInfo;

