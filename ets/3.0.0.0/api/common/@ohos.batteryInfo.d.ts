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
 * @devices phone, wearable, tablet
 * @since 6
 */
declare namespace batteryInfo {
    /**
     * Battery state of charge (SoC) of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const batterySOC: number;

    /**
     * Battery charging status of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const chargingStatus: BatteryChargeState;

    /**
     * Battery health state of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const healthStatus: BatteryHealthState;

    /**
     * Charger type of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const pluggedType: BatteryPluggedType;

    /**
     * Battery voltage of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const voltage: number;

    /**
     * Battery technology of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const technology: string;

    /**
     * Battery temperature of the current device.
     * @devices phone, wearable, tablet
     * @since 6
     */
    const batteryTemperature: number;

    /**
     * Battery present state of the current device.
     * @devices phone, wearable, tablet
     * @since 7
     */
    const isBatteryPresent: boolean;

    /**
     * Indicates the charger type of a device.
     *
     * @SysCap SystemCapability.PowerMgr.BatteryManager
     * @devices phone, wearable, tablet
     * @since 6
     */
    export enum BatteryPluggedType {
        /**
         * Unknown type
         * @devices phone, wearable, tablet
         * @since 6
         */
        NONE,
        /**
         * AC charger
         * @devices phone, wearable, tablet
         * @since 6
         */
        AC,
        /**
         * USB charger
         * @devices phone, wearable, tablet
         * @since 6
         */
        USB,
        /**
         * Wireless charger
         * @devices phone, wearable, tablet
         * @since 6
         */
        WIRELESS
    }

    /**
     * Indicates the battery charging status of a device.
     *
     * @SysCap SystemCapability.PowerMgr.BatteryManager
     * @devices phone, wearable, tablet
     * @since 6
     */
    export enum BatteryChargeState {
        /**
         * Unknown state.
         * @devices phone, wearable, tablet
         * @since 6
         */
        NONE,
        /**
         * The battery is being charged.
         * @devices phone, wearable, tablet
         * @since 6
         */
        ENABLE,
        /**
         * The battery is not being charged.
         * @devices phone, wearable, tablet
         * @since 6
         */
        DISABLE,
        /**
         * The battery is fully charged.
         * @devices phone, wearable, tablet
         * @since 6
         */
        FULL
    }

    /**
     * Indicates the battery health status of a device.
     *
     * @SysCap SystemCapability.PowerMgr.BatteryManager
     * @devices phone, wearable, tablet
     * @since 6
     */
    export enum BatteryHealthState {
        /**
         * Unknown state.
         * @devices phone, wearable, tablet
         * @since 6
         */
        UNKNOWN,
        /**
         * The battery is in healthy state.
         * @devices phone, wearable, tablet
         * @since 6
         */
        GOOD,
        /**
         * The battery is overheated.
         * @devices phone, wearable, tablet
         * @since 6
         */
        OVERHEAT,
        /**
         * The battery voltage is over high.
         * @devices phone, wearable, tablet
         * @since 6
         */
        OVERVOLTAGE,
        /**
         * The battery temperature is low.
         * @devices phone, wearable, tablet
         * @since 6
         */
        COLD,
        /**
         * The battery is dead.
         * @devices phone, wearable, tablet
         * @since 6
         */
        DEAD
    }
}
export default batteryInfo;

