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
 * Provides international settings related APIs.
 *
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace i18n {
/**
 * Get the language currently used by the system.
 *
 * @return Returns the language currently used by the system.
 * @since 7
 */
export function getSystemLanguage(): string;

/**
 * Get the region currently used by the system.
 *
 * @return Returns the region currently used by the system.
 * @since 7
 */
export function getSystemRegion(): string;

/**
 * Obtains the country or region name localized for display in a given locale.
 *
 * @param country Indicates the locale whose country or region name will be displayed.
 * @param locale Indicates the locale for which to display the country or region name.
 * @param sentenceCase  Specifies whether the country or region name is displayed in
 *                      sentence case. The value {@code true} indicates the
 *                      sentence case, and {@code false} indicates another case style.
 * @return Returns the localized country or region name.
 * @since 7
 */
export function getDisplayCountry(country: string, locale: string,
        sentenceCase?: boolean): string;

/**
 * Get the locale currently used by the system.
 *
 * @return Returns the locale currently used by the system.
 * @since 7
 */
export function getSystemLocale(): string;

/**
 * Obtains the language name localized for display in a given locale.
 *
 * @param language Indicates the locale whose language name will be displayed.
 * @param locale Indicates the locale for which to display the language name.
 * @param sentenceCase  Specifies whether the language name is displayed in
 *                      sentence case. The value {@code true} indicates the
 *                      sentence case, and {@code false} indicates another case style.
 * @return Returns the localized language name.
 * @since 7
 */
export function getDisplayLanguage(language: string, locale: string,
        sentenceCase?: boolean): string;

/**
 * Check whether the locale is an RTL locale.
 *
 * @param locale Indicates the locale to use.
 * @return Returns true if the locale is an RTL locale and vice versa.
 * @since 7
 */
export function isRTL(locale: string): boolean;


/**
 * Checks whether the system is using the 24-hour clock.
 *
 * <p>
 * If users have set the time format to the 24-hour clock, this method returns
 * {@code true}; otherwise, this method returns the result (either {@code true}
 * or {@code false}), depending on the conventions of the current locale.
 *
 * @param context Indicates the context to use.
 * @return Returns {@code true} if the 24-hour clock is used; returns
 *         {@code false} otherwise.
 * @since 7
 */
export function is24HourClock(): boolean;

/**
 * Obtain the time zone based on the time zone id.
 *
 * @param zoneID The id of the time zone.
 * @return Returns the time zone based on the time zone id.
 * @since 7
 */
export function getTimeZone(zoneID?: string): TimeZone;

/**
 * Provides the information of the time zone.
 */
export interface TimeZone {
    /**
     * Obtain the ID of current timezone.
     *
     * @return Returns the ID of current timezone.
     * @since 7
     */
    getID(): string;

    /**
     * Obtain the display name of the current time zone.
     *
     * @param locale The locale to display the time zone.
     * @param isDST Use daylight saving time or not.
     * @return Returns the display name of the current time zone.
     * @since 7
     */
    getDisplayName(locale?: string, isDST?: boolean): string;

    /**
     * Obtain the raw offset to add to UTC to get local time.
     *
     * @return Returns the raw offset to add to UTC to get local time.
     * @since 7
     */
    getRawOffset(): number;

    /**
     * Obtain the offset based on the date to add to UTC to get local time.
     *
     * @param date The date timestamp.
     * @return Returns the offset based on the date to add to UTC to get local time.
     * @since 7
     */
    getOffset(date?: number): number;
}
}
export default i18n;
