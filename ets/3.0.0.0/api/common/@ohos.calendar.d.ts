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

import { AsyncCallback } from './basic';
import { ValuesBucket } from './data/rdb/ValuesBucket';
import { DataAbilityPredicates} from './data/dataability/DataAbilityPredicates';

/**
 * Contains variety of calendar functions for manager calendar provider data, such as query insert delete and update,
 * and some contract constants.
 * @devices phone, tablet, tv, wearable, car
 *
 * @since 7
 */
declare namespace calendar {

    /**
     * Calendar table base attributes.
     *
     * @since 7
     */
    enum BaseColumns {
        /**
         * Indicates the total number of fields.
         *
         * @since 7
         */
        COUNT = "_count",

        /**
         * Indicates the calendar ID.
         *
         * @since 7
         */
        ID = "_id"
    }

    /**
     * Calendar Account table attributes.
     *
     * @since 7
     */
    enum AccountColumns {
        /**
         * Indicates the calendar color.
         *
         * @since 7
         */
        ACC_COLOR = "calendar_color",

        /**
         * Indicates the calendar color index.
         *
         * @since 7
         */
        ACC_COLOR_INDEX = "calendar_color_index",

        /**
         * Indicates the display name of the calendar account.
         *
         * @since 7
         */
        ACC_DISPLAY_NAME = "calendar_displayName",

        /**
         * Specifies whether events associated with the calendar are visible.
         *
         * @since 7
         */
        VISIBLE = "visible",

        /**
         * Indicates the time zone.
         *
         * @since 7
         */
        ACC_TIME_ZONE = "calendar_timezone",

        /**
         * Specifies whether the event is a synchronized event.
         *
         * @since 7
         */
        IS_SYNC_EVENTS = "sync_events",

        /**
         * Indicates the reminder type.
         *
         * @since 7
         */
        REMINDERS_TYPE = "allowedReminders",

        /**
         * Specifies whether the calendar account is in the idle state.
         *
         * @since 7
         */
        AVAILABILITY_STATUS = "allowedAvailability",

        /**
         * Indicates the participant type.
         *
         * @since 7
         */
        ATTENDEE_TYPES = "allowedAttendeeTypes",

        /**
         * Specifies whether the calendar is the primary calendar of the account.
         *
         * @since 7
         */
        IS_PRIMARY = "isPrimary"
    }

    /**
     * Calendar Account table sync attributes.
     *
     * @since 7
     */
    enum AccountSyncColumns {
        /**
         * Indicates synchronization type 1.
         *
         * @since 7
         */
        ACC_SYNC1 = "cal_sync1",

        /**
         * Indicates synchronization type 2.
         *
         * @since 7
         */
        ACC_SYNC2 = "cal_sync2",

        /**
         * Indicates synchronization type 3.
         *
         * @since 7
         */
        ACC_SYNC3 = "cal_sync3",

        /**
         * Indicates synchronization type 4.
         *
         * @since 7
         */
        ACC_SYNC4 = "cal_sync4",

        /**
         * Indicates synchronization type 5.
         *
         * @since 7
         */
        ACC_SYNC5 = "cal_sync5",

        /**
         * Indicates synchronization type 6.
         *
         * @since 7
         */
        ACC_SYNC6 = "cal_sync6",

        /**
         * Indicates synchronization type 7.
         *
         * @since 7
         */
        ACC_SYNC7 = "cal_sync7",

        /**
         * Indicates synchronization type 8.
         *
         * @since 7
         */
        ACC_SYNC8 = "cal_sync8",

        /**
         * Indicates synchronization type 9.
         *
         * @since 7
         */
        ACC_SYNC9 = "cal_sync9",

        /**
         * Indicates synchronization type 10.
         *
         * @since 7
         */
        ACC_SYNC10 = "cal_sync10"
    }

    /**
     * Calendar Events table general attributes.
     *
     * @since 7
     */
    enum EventsColumns {
        /**
         * Indicates the account ID.
         *
         * @since 7
         */
        ACC_ID = "calendar_id",

        /**
         * Indicates the title of the calendar event.
         *
         * @since 7
         */
        TITLE = "title",

        /**
         * Indicates the event description.
         *
         * @since 7
         */
        DESCRIPTION = "description",

        /**
         * Indicates the event position.
         *
         * @since 7
         */
        EVENT_POSITION = "eventLocation",

        /**
         * Indicates the event status.
         *
         * @since 7
         */
        EVENT_STATUS = "eventStatus",

        /**
         * Indicates the tentative state.
         *
         * @since 7
         */
        EVENT_STATUS_TENTATIVE = 0,

        /**
         * Indicates the confirmed state.
         *
         * @since 7
         */
        EVENT_STATUS_CONFIRMED = 1,

        /**
         * Indicates the canceled state.
         *
         * @since 7
         */
        EVENT_STATUS_CANCELED = 2,

        /**
         * Indicates the owner state.
         *
         * @since 7
         */
        OWNER_ATTENDEE_STATUS = "selfAttendeeStatus",

        /**
         * Indicates the synchronization data 1.
         *
         * @since 7
         */
        EXTEND_DATA1 = "sync_data1",

        /**
         * Indicates the synchronization data 2.
         *
         * @since 7
         */
        EXTEND_DATA2 = "sync_data2",

        /**
         * Indicates the synchronization data 3.
         *
         * @since 7
         */
        EXTEND_DATA3 = "sync_data3",

        /**
         * Indicates the synchronization data 4.
         *
         * @since 7
         */
        EXTEND_DATA4 = "sync_data4",

        /**
         * Indicates the synchronization data 5.
         *
         * @since 7
         */
        EXTEND_DATA5 = "sync_data5",

        /**
         * Indicates the synchronization data 6.
         *
         * @since 7
         */
        EXTEND_DATA6 = "sync_data6",

        /**
         * Indicates the synchronization data 7.
         *
         * @since 7
         */
        EXTEND_DATA7 = "sync_data7",

        /**
         * Indicates the synchronization data 8.
         *
         * @since 7
         */
        EXTEND_DATA8 = "sync_data8",

        /**
         * Indicates the synchronization data 9.
         *
         * @since 7
         */
        EXTEND_DATA9 = "sync_data9",

        /**
         * Indicates the synchronization data 10.
         *
         * @since 7
         */
        EXTEND_DATA10 = "sync_data10",

        /**
         * Indicates the start time of the event.
         *
         * @since 7
         */
        EVENT_START_TIME = "dtstart",

        /**
         * Indicates the end time of the event.
         *
         * @since 7
         */
        EVENT_END_TIME = "dtend",

        /**
         * Indicates the event duration.
         *
         * @since 7
         */
        DURATION = "duration",

        /**
         * Indicates the start time zone.
         *
         * @since 7
         */
        START_TIMEZONE = "eventTimezone",

        /**
         * Indicates the end time zone.
         *
         * @since 7
         */
        END_TIMEZONE = "eventEndTimezone",

        /**
         * Specifies whether the event is a whole-day event.
         *
         * @since 7
         */
        IS_WHOLE_DAY = "allDay",

        /**
         * Indicates the permission level.
         *
         * @since 7
         */
        PERMISSION_LEVEL = "accessLevel",

        /**
         * Indicates the default permission.
         *
         * @since 7
         */
        PERMISSION_DEFAULT = 0,

        /**
         * Indicates the confidential permission.
         *
         * @since 7
         */
        PERMISSION_CONFIDENTIAL = 1,

        /**
         * Indicates the private permission.
         *
         * @since 7
         */
        PERMISSION_PRIVATE = 2,

        /**
         * Indicates the public permission.
         *
         * @since 7
         */
        PERMISSION_PUBLIC = 3,

        /**
         * Indicates the status of the person involved in the event.
         *
         * @since 7
         */
        AVAILABLE_STATUS = "availability",

        /**
         * Indicates the busy state.
         *
         * @since 7
         */
        STATUS_BUSY = 0,

        /**
         * Indicates the idle state.
         *
         * @since 7
         */
        STATUS_FREE = 1,

        /**
         * Indicates the tentative state.
         *
         * @since 7
         */
        STATUS_TENTATIVE = 2,

        /**
         * Specifies whether the alarm clock reminder is enabled.
         *
         * @since 7
         */
        HAS_ALARM = "hasAlarm",

        /**
         * Specifies whether extended attributes are included.
         *
         * @since 7
         */
        HAS_EXTENDED_ATTRIBUTES = "hasExtendedProperties",

        /**
         * Indicates the recurrence rule.
         *
         * @since 7
         */
        RECUR_RULE = "rrule",

        /**
         * Indicates the interval at which the event repeats.
         *
         * @since 7
         */
        RECUR_DATE = "rdate",

        /**
         * Indicates the initial ID.
         *
         * @since 7
         */
        INITIAL_ID = "original_id",

        /**
         * Indicates the initial synchronization ID.
         *
         * @since 7
         */
        INITIAL_SYNC_ID = "original_sync_id",

        /**
         * Specifies whether participant information is included.
         *
         * @since 7
         */
        HAS_ATTENDEE_INFO = "hasAttendeeData",

         /**
         * Indicates the email address of the organizer.
         *
         * @since 7
         */
        ORGANIZER_EMAIL = "organizer"
    }

    /**
     * Calendar Instances table general attributes.
     *
     * @since 7
     */
    enum InstancesColumns {
        /**
         * Indicates the event ID.
         *
         * @since 7
         */
        EVENT_ID = "event_id",

        /**
         * Indicates the start time of the instance.
         *
         * @since 7
         */
        INSTANCE_START = "begin",

        /**
         * Indicates the end time of the instance.
         *
         * @since 7
         */
        INSTANCE_END = "end",

        /**
         * Indicates the start date of the instance.
         *
         * @since 7
         */
        INSTANCE_START_DAY = "startDay",

        /**
         * Indicates the end date of the instance.
         *
         * @since 7
         */
        INSTANCE_END_DAY = "endDay",

        /**
         * Indicates the instance start time calculated from 00:00 on the current day
         * in the time zone where the calendar is located, in minutes.
         *
         * @since 7
         */
        INSTANCE_START_MINUTE = "startMinute",

        /**
         * Indicates the instance end time calculated from 00:00 on the current day
         * in the time zone where the calendar is located, in minutes.
         *
         * @since 7
         */
        INSTANCE_END_MINUTE = "endMinute"
    }

    /**
     * Calendar Participants table general attributes.
     *
     * @since 7
     */
    enum ParticipantsColumns {
        /**
         * Indicates the event ID.
         *
         * @since 7
         */
        EVENT_ID = "event_id",

        /**
         * Indicates the participant name.
         *
         * @since 7
         */
        PARTICIPANT_NAME = "attendeeName",

        /**
         * Indicates the email address of the participant.
         *
         * @since 7
         */
        PARTICIPANT_EMAIL = "attendeeEmail",

        /**
         * Indicates the role of the participant.
         *
         * @since 7
         */
        PARTICIPANT_ROLE_TYPE = "attendeeRelationship",

        /**
         * Indicates an unknown role.
         *
         * @since 7
         */
        ROLE_NONE = 0,

        /**
         * Indicates a participant.
         *
         * @since 7
         */
        ROLE_ATTENDEE = 1,

        /**
         * Indicates an organizer.
         *
         * @since 7
         */
        ROLE_ORGANIZER = 2,

        /**
         * Indicates a performer.
         *
         * @since 7
         */
        ROLE_PERFORMER = 3,

        /**
         * Indicates a speaker.
         *
         * @since 7
         */
        ROLE_SPEAKER = 4,

        /**
         * Indicates the type of the participant.
         *
         * @since 7
         */
        PARTICIPANT_TYPE = "attendeeType",

        /**
         * Indicates an unknown type.
         *
         * @since 7
         */
        TYPE_NONE = 0,

        /**
         * Indicates a required participant.
         *
         * @since 7
         */
        TYPE_REQUIRED = 1,

        /**
         * Indicates an optional participant.
         *
         * @since 7
         */
        TYPE_OPTIONAL = 2,

        /**
         * Indicates the resource type.
         *
         * @since 7
         */
        TYPE_RESOURCE = 3,

        /**
         * Indicates the status of the participant.
         *
         * @since 7
         */
        PARTICIPANT_STATUS = "attendeeStatus",

        /**
         * Indicates an unknown state.
         *
         * @since 7
         */
        PARTICIPANT_STATUS_NONE = 0,

        /**
         * Indicates the accepted state.
         *
         * @since 7
         */
        PARTICIPANT_STATUS_ACCEPTED = 1,

        /**
         * Indicates the rejected state.
         *
         * @since 7
         */
        PARTICIPANT_STATUS_DECLINED = 2,

        /**
         * Indicates the invited state.
         *
         * @since 7
         */
        PARTICIPANT_STATUS_INVITED = 3,

        /**
         * Indicates the tentative state.
         *
         * @since 7
         */
        PARTICIPANT_STATUS_TENTATIVE = 4
    }

    /**
     * Calendar Reminders table general attributes.
     *
     * @since 7
     */
    enum RemindersColumns {
        /**
         * Indicates the event ID.
         *
         * @since 7
         */
        EVENT_ID = "event_id",

        /**
         * Indicates the number of minutes that the reminder is sent before an event occurs.
         *
         * @since 7
         */
        REMIND_MINUTES = "minutes",

        /**
         * Indicates the default reminder duration, in minutes.
         *
         * @since 7
         */
        REMIND_MINUTES_DEFAULT = -1,

        /**
         * Indicates the reminder type.
         *
         * @since 7
         */
        REMIND_TYPE = "method",

        /**
         * Indicates the default type.
         *
         * @since 7
         */
        TYPE_DEFAULT = 0,

        /**
         * Indicates an alert.
         *
         * @since 7
         */
        TYPE_ALERT = 1,

        /**
         * Indicates an email.
         *
         * @since 7
         */
        TYPE_EMAIL = 2,

        /**
         * Indicates an SMS.
         *
         * @since 7
         */
        TYPE_SMS = 3,

        /**
         * Indicates an alarm clock reminder.
         *
         * @since 7
         */
        TYPE_ALARM = 4
    }

    /**
     * Provides constants for information synchronization.
     *
     * @since 7
     */
    enum SyncColumns {
        /**
         * Indicates the account name.
         *
         * @since 7
         */
        ACC_NAME = "account_name",

        /**
         * Indicates the account type.
         *
         * @since 7
         */
        ACC_TYPE = "account_type",

        /**
         * Indicates the synchronization ID.
         *
         * @since 7
         */
        SYNC_ID = "_sync_id",

        /**
         * Indicates the dirty information.
         *
         * @since 7
         */
        DIRTY = "dirty",

        /**
         * Indicates the name of the calling bundle.
         *
         * @since 7
         */
        CALLING_BUNDLE_NAME = "mutators",

        /**
         * Indicates the deleted state.
         *
         * @since 7
         */
        DELETED = "deleted"
    }

    /**
     * Calendar five tables provided to manager.
     *
     * @since 7
     */
    enum queryEntityName {
        /**
         * Indicates the name of the Events table.
         *
         * @since 7
         */
        EVENTS = "EVENTS",

        /**
         * Indicates the name of the Accounts table.
         *
         * @since 7
         */
        ACCOUNTS = "ACCOUNTS",

        /**
         * Indicates the name of the Instances table.
         *
         * @since 7
         */
        INSTANCES = "INSTANCES",

        /**
         * Indicates the name of the Participants table.
         *
         * @since 7
         */
        PARTICIPANTS = "PARTICIPANTS",

        /**
         * Indicates the name of the Reminders table.
         *
         * @since 7
         */
        REMINDERS = "REMINDERS"
    }

    /**
     * Describes a calendar abstract entity.
     *
     * @since 7
     */
    class CalendarEntity {
        /**
         * A default account type that indicates calendar does not associated with any account.
         *
         * @since 7
         */
        static ACC_TYPE_LOCAL: "LOCAL";

        /**
         * An optional URI parameter that indicates if caller is a sync adapter.
         *
         * @since 7
         */
        static IS_SYNC_ADAPTER: "caller_is_syncadapter";
        id: number;
    }

    /**
     * Calendar contract Accounts entity, include database table columns' name.
     *
     * @since 7
    */
    class Accounts extends CalendarEntity {
        /**
         * Calendar name. Column name.
         *
         * @since 7
         */
        static NAME: "name";
        name: string;
        accName: string;
        accType: string;
        accColour: number;
        accDisplayName: string;
        visible: boolean;
        accTimezone: string;
        isSyncEvents: boolean;
        remindersType: string;
        attendeeTypes: string;
    }

    /**
     * Describes a calendar event entity, including the column name of the database table.
     *
     * @since 7
     */
    class Events extends CalendarEntity {
        accId: number;
        title: string;
        description: string;
        eventPosition: string;
        eventStatus: number;
        eventStartTime: number;
        eventEndTime: number;
        duration: string;
        isWholeDay: boolean;
        availableStatus: number;
        hasAlarm: boolean;
        recurRule: string;
        recurDate: string;
        initialId: string;
        hasAttendeeInfo: boolean;
    }

    /**
     * Describes a calendar instance entity, including the column name of the database table.
     *
     * @since 7
     */
    class Instances extends CalendarEntity {
        instanceBegin: number;
        instanceEnd: number;
        eventId: number;
        instanceStartDay: number;
        instanceEndDay: number;
        instanceStartMinute: number;
        instanceEndMinute: number;
    }

    /**
    * Describes a calendar participant entity, including the column name of the database table.
    *
    * @since 7
    */
    class Participants extends CalendarEntity {
        eventId: number;
        participantName: string;
        participantEmail: string;
        participantRoleType: number;
        participantType: number;
        participantStatus: number;
    }

    /**
     * Describes a calendar reminder entity, including the column name of the database table.
     *
     * @since 7
     */
    class Reminders extends CalendarEntity {
        eventId: number;
        remindMinutes: number;
        remindType: number;
        syncId: string;
    }

    /**
     * Attributes of recursive calendar event.
     */
    class AppletRepeatEntity extends AppletEntity {
        repeatInterval: string;
        repeatEndTime: number;
    }

    /**
     * Attributes of non-recursive calendar event.
     */
    class AppletEntity {
        title: string;
        startTime: number;
        allDay: boolean;
        description: string;
        location: string;
        endTime: string;
        alarm: boolean;
        alarmOffset: number;
    }

    /**
     * Represents the calendar data collection, which encapsulates the {@link ohos.data.resultset.ResultSet}.
     *
     * @since 7
     */
    class CalendarCollection {
        /**
         * Address for storing result sets.
         *
         * @since 7
         */
        handler: string;

        /**
         * Closes the result set.
         *
         * @param handler Address value of the result set.
         *
         * @since 7
         */
        close(handler: string): void;

        /**
         * Obtains the number of rows in the result set.
         *
         * @param handler Address value of the result set.
         * @returns Returns the number of rows in the result set.
         *
         * @since 7
         */
        count(handler: string): number;

        /**
         * Checks whether the result set has a next row.
         *
         * @param handler Address value of the result set.
         * @returns Returns true if the result set has a next row; returns false otherwise.
         *
         * @since 7
         */
        hasNext(handler: string): boolean;

        /**
         * Moves the code result set to the next line.
         *
         * @param handler Address value of the result set.
         * @returns Returns the result object that maps the next row. CalendarEntity
         * {@link ohos.sysappcomponents.calendar.entity.CalendarEntity}
         *
         * @since 7
         */
        next(handler: string): CalendarEntity;
    }

    /**
     * Provides utilities for creating, adding, querying, modifying, and deleting calendar data.
     *
     * @since 7
     */
    class CalendarDataHelper {
        /**
         * Indicates the name of the table to be operated. Instances can only be queried.
         *
         * @since 7
         */
        name: queryEntityName;

        /**
         * A constructor for creating calendar data operations
         *
         * @param entityClass Indicates the type of table required to create. The value can be Events, Accounts,
         * Instances, Reminders, or Participants. CalendarEntity{@link calendar.CalendarEntity}
         * @returns Returns the calendarDataHelper object. CalendarDataHelper
         * {@link ohos.sysappcomponents.calendar.CalendarDataHelper}
         *
         * @since 7
         */
        static creator(entityClass: queryEntityName): CalendarDataHelper;

        /**
         * Queries calendar data in the database based on predicates and columns.
         *
         * @param predicates Indicates the conditions for querying the database. DataAbilityPredicates
         * {@link ohos.data.dataability.DataAbilityPredicates}
         * @param columns Indicates the fields to obtain.
         * @returns Returns the calendar data. object {@link ohos.sysappcomponents.calendar.CalendarCollection}
         *
         * @since 7
         */
        query(predicates: DataAbilityPredicates, columns: string[], callback: AsyncCallback<CalendarCollection>): void;
        query(predicates: DataAbilityPredicates, columns: string[]): Promise<CalendarCollection>;

        /**
         * Queries calendar data in the database based on ID and columns.
         *
         * @param id Indicates the id to be used for query.
         * @param columns Indicates the fields to obtain.
         * @returns Returns the calendar data. object {@link ohos.sysappcomponents.calendar.CalendarCollection}
         *
         * @since 7
         */
        query(id: number, columns: string[], callback: AsyncCallback<CalendarCollection>): void;
        query(id: number, columns: string[]): Promise<CalendarCollection>;

        /**
         * Inserts a calendar record into the database.
         *
         * @param valuesBucket Indicates the record to insert. ValuesBucket{@link ohos.data.rdb.ValuesBucket}
         * @returns Returns true if the record is inserted; returns false otherwise.
         *
         * @since 7
         */
        insert(valuesBucket: ValuesBucket, callback: AsyncCallback<boolean>): void
        insert(valuesBucket: ValuesBucket): Promise<boolean>

        /**
         * Updates a calendar record in the database.
         *
         * @param valuesBucket Indicates the record to update. ValuesBucket{@link ohos.data.rdb.ValuesBucket}
         * @param predicates Indicates the filter conditions. Applications can query data using exact match,
         * fuzzy match, or aggregation. DataAbilityPredicates{@link ohos.data.dataability.DataAbilityPredicates}
         *
         * @since 7
         */
        update(valuesBucket: ValuesBucket, predicates: DataAbilityPredicates, callback: AsyncCallback<void>): void;
        update(valuesBucket: ValuesBucket, predicates: DataAbilityPredicates): Promise<void>;

        /**
         * Deletes calendar data based on predicates.
         *
         * @param predicates Indicates the conditions used to delete calendar data. If this parameter is null, no
         * record is deleted. DataAbilityPredicates{@link ohos.data.dataability.DataAbilityPredicates}
         * @returns Returns the number of records deleted.
         *
         * @since 7
         */
        delete(predicates: DataAbilityPredicates, callback: AsyncCallback<number>): void;
        delete(predicates: DataAbilityPredicates): Promise<number>;

        /**
         * Deletes specified calendar data.
         *
         * @param calendarEntity Indicates the calendar entity object to delete.
         * CalendarEntity{@link calendar.CalendarEntity}
         *
         * @since 7
         */
        delete(calendarEntity: CalendarEntity, callback: AsyncCallback<void>): void;
        delete(calendarEntity: CalendarEntity): Promise<void>;

        /**
         * Deletes the calendar record of a specified ID.
         *
         * @param id Indicates the ID of the calendar record to delete.
         *
         * @since 7
         */
        delete(id: number, callback: AsyncCallback<void>): void;
        delete(id: number): Promise<void>;
    }

    /**
     * Add a recurring event to the system calendar.
     *
     * @param title Indicates the calendar event title. This parameter is required.
     * @param startTime Indicates the unix timestamp of the start time (seconds elapsed since January 1, 1970) .
     * This parameter is required.
     * @param allDay Indicates the whether the event is an all-day event. The default value is false. This parameter
     * is optional.
     * @param description Indicates the event description. This parameter is optional.
     * @param location Indicates the event location. This parameter is optional.
     * @param endTime  Indicates the unix timestamp of the end time. The default value is the same as the start time.
     * This parameter is optional.
     * @param alarm Indicates whether to send a notification. The default value is true. This parameter is optional.
     * @param alarmOffset Indicates the reminder advance, in seconds. The default value is 0, indicating that the
     * reminder. This parameter is optional.
     * @param repeatInterval Indicates the recurrence period. The default value is month.
     * @param repeatEndTime Indicates the unix timestamp of the end time of the repetition period. If this parameter
     * is left empty, the repetition period is repeated.
     * @param success Indicates the callback function for successful interface invocation.
     * @param fail Indicates the Callback function for interface invocation failure.
     * @param complete Indicates the callback function at the end of the interface invoking
     * (executed both successfully and unsuccessfully).
     *
     * @since 7
     */
    function addPhoneRepeatCalendar(entity: AppletRepeatEntity, callback: AsyncCallback<void>);
    function addPhoneRepeatCalendar(entity: AppletRepeatEntity): Promise<void>;

    /**
     * Add a event to the system calendar.
     *
     * @param title Indicates the calendar event title. This parameter is required.
     * @param startTime Indicates the unix timestamp of the start time (seconds elapsed since January 1, 1970).
     * This parameter is required.
     * @param allDay Indicates the whether the event is an all-day event. The default value is false. This parameter
     * is optional.
     * @param description Indicates the event description. This parameter is optional.
     * @param location Indicates the event location. This parameter is optional.
     * @param endTime  Indicates the unix timestamp of the end time. The default value is the same as the start time.
     * This parameter is optional.
     * @param alarm Indicates whether to send a notification. The default value is true. This parameter is optional.
     * @param alarmOffset Indicates the reminder advance, in seconds. The default value is 0, indicating that the
     * reminder. This parameter is optional.
     * @param success Indicates the callback function for successful interface invocation.
     * @param fail Indicates the Callback function for interface invocation failure.
     * @param complete Indicates the callback function at the end of the interface invoking
     * (executed both successfully and unsuccessfully).
     *
     * @since 7
     */
    function addPhoneCalendar(entity: AppletEntity, callback: AsyncCallback<void>);
    function addPhoneCalendar(entity: AppletEntity): Promise<void>;
}

export default calendar;
