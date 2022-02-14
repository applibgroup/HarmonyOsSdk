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
import notification from './@ohos.notification';
import { NotificationSlot } from './notification/notificationSlot';

/**
 * Provides static methods for managing reminders, including publishing or canceling a reminder,
 * adding or removing a notification slot, and obtaining or canceling all reminders of the current application.
 *
 * @since 7
 * @sysCap Agent-Powered Reminder.
 * @import reminderAgent from '@ohos.reminderAgent';
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace reminderAgent {
    /**
     * Publishes a scheduled reminder.
     *
     * @since 7
     * @sysCap Publishes an agent-powered reminder.
     * @devices phone, tablet, tv, wearable, car
     * @permission ohos.permission.PUBLISH_AGENT_REMINDER
     * @param reminderReq Indicates the reminder instance to publish.
     * @param callback Indicates the callback function.
     * @returns reminder id
     */
    function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<number>): void;
    function publishReminder(reminderReq: ReminderRequest): Promise<number>;

    /**
     * Cancels a reminder.
     *
     * @since 7
     * @sysCap Cancels the reminder with the specified ID.
     * @devices phone, tablet, tv, wearable, car
     * @param reminderId Indicates the reminder id.
     * @param callback Indicates the callback function.
     */
    function cancelReminder(reminderId: number, callback: AsyncCallback<void>): void;
    function cancelReminder(reminderId: number): Promise<void>;

    /**
     * Obtains all the valid reminders of current application.
     *
     * @since 7
     * @sysCap Obtains all valid (not yet expired) reminders set by the current application.
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback function.
     */
    function getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>): void;
    function getValidReminders(): Promise<Array<ReminderRequest>>;

    /**
     * Cancels all the reminders of current application.
     *
     * @since 7
     * @sysCap Cancels all reminders set by the current application.
     * @devices phone, tablet, tv, wearable, car
     * @param callback Indicates the callback function.
     */
    function cancelAllReminders(callback: AsyncCallback<void>): void;
    function cancelAllReminders(): Promise<void>;

    /**
     * Add notification slot.
     *
     * @since 7
     * @sysCap Adds a reminder notification slot.
     * @devices phone, tablet, tv, wearable, car
     * @param slot Indicates the slot.
     * @param callback Indicates the callback function.
     */
    function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;
    function addNotificationSlot(slot: NotificationSlot): Promise<void>;

    /**
     * Deletes a created notification slot based on the slot type.
     *
     * @since 7
     * @sysCap Removes a NotificationSlot instance of a specified type.
     * @devices phone, tablet, tv, wearable, car
     * @param slotType Indicates the type of the slot.
     */
    function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void;
    function removeNotificationSlot(slotType: notification.SlotType): Promise<void>;

    /**
     * Declares action button type.
     *
     * @since 7
     * @sysCap Define action button type.
     * @devices phone, tablet, tv, wearable, car
     */
    export enum ActionButtonType {
        /**
         * Button for closing the reminder.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        ACTION_BUTTON_TYPE_CLOSE = 0,

        /**
         * Button for snoozing the reminder.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        ACTION_BUTTON_TYPE_SNOOZE = 1
    }

    /**
     * Declares reminder type.
     *
     * @since 7
     * @sysCap Define reminder type.
     * @devices phone, tablet, tv, wearable, car
     */
    export enum ReminderType {
        /**
         * Countdown reminder.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        REMINDER_TYPE_TIMER = 0,

        /**
         * Calendar reminder.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        REMINDER_TYPE_CALENDAR = 1,

        /**
         * Text on the button.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        REMINDER_TYPE_ALARM = 2
    }

    /**
     * Action button information. The button will show on displayed reminder.
     *
     * @since 7
     * @sysCap Define action button object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface ActionButton {
        /**
         * Text on the button.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        title: string;

        /**
         * Button type.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        type: ActionButtonType;
    }

    /**
     * Want agent information.
     * It will switch to target ability when you click the displayed reminder.
     *
     * @since 7
     * @sysCap Define want agent object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface WantAgent {
        /**
         * Name of the package redirected to when the reminder notification is clicked.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        pkgName: string;

        /**
         * Name of the ability that is redirected to when the reminder notification is clicked.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        abilityName: string;
    }

    /**
     * max screen want agent information.
     *
     * @since 7
     * @sysCap Define max screen want agent object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface MaxScreenWantAgent {
        /**
         * Name of the package that is automatically started when the reminder arrives and the device is not in use.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        pkgName: string;

        /**
         * Name of the ability that is automatically started when the reminder arrives and the device is not in use.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        abilityName: string;
    }

    /**
     * Reminder common information.
     *
     * @since 7
     * @sysCap Define reminder request object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface ReminderRequest {
        /**
         * Type of the reminder.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        reminderType: ReminderType;

        /**
         * Action button displayed in the reminder notification.
         * (The parameter is optional. Up to two buttons are supported).
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        actionButton?: [ActionButton?, ActionButton?];

        /**
         * Information about the ability that is redirected to when the notification is clicked.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        wantAgent?: WantAgent;

        /**
         * Information about the ability that is automatically started when the reminder arrives.
         * If the device is in use, a notification will be displayed.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        maxScreenWantAgent?: MaxScreenWantAgent

        /**
         * Ringing duration.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        ringDuration?: number;

        /**
         * Number of reminder snooze times.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        snoozeTimes?: number;

        /**
         * Reminder snooze interval.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        timeInterval?: number;

        /**
         * Reminder title.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        title?: string;

        /**
         * Reminder content.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        content?: string;

        /**
         * Content to be displayed after the reminder expires.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        expiredContent?: string;

        /**
         * Content to be displayed when the reminder is snoozing.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        snoozeContent?: string;

        /**
         * notification ID. If there are reminders with the same ID, the later one will overwrite the earlier one.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        notificationId?: number;

        /**
         * Type of the slot used by the reminder.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        slotType?: notification.SlotType;
    }

    /**
     * Calendar reminder information.
     *
     * @since 7
     * @sysCap Define calendar reminder object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface ReminderRequestCalendar extends ReminderRequest {
        /**
         * Reminder time.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        dateTime: LocalDateTime;

        /**
         * Month in which the reminder repeats.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        repeatMonths?: Array<number>;

        /**
         * Date on which the reminder repeats.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        repeatDays?: Array<number>;
    }

    /**
     * Alarm reminder information.
     *
     * @since 7
     * @sysCap Define alarm reminder object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface ReminderRequestAlarm extends ReminderRequest {
        /**
         * Hour portion of the reminder time.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        hour: number;

        /**
         * Minute portion of the reminder time.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        minute: number;

        /**
         * Days of a week when the reminder repeats.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        daysOfWeek?: Array<number>;
    }

    /**
     * CountDown reminder information.
     *
     * @since 7
     * @sysCap Define count down timer reminder object.
     * @devices phone, tablet, tv, wearable, car
     */
    interface ReminderRequestTimer extends ReminderRequest {
        /**
         * Number of seconds in the countdown timer.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        triggerTimeInSeconds: number;
    }

    /**
     * date time information.
     *
     * @since 7
     * @sysCap Define date time information.
     * @devices phone, tablet, tv, wearable, car
     */
    interface LocalDateTime {
        /**
         * Value of year.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        year: number;

        /**
         * Value of month.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        month: number;

        /**
         * Value of day.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        day: number;

        /**
         * Value of hour.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        hour: number;

        /**
         * Value of minute.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        minute: number;

        /**
         * Value of second.
         * @since 7
         * @sysCap Agent-Powered Reminder.
         */
        second?: number;
    }
}
export default reminderAgent;