/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * the constant for action and entity in the want
 * @name wantConstant
 * @since 6
 * @sysCap aafwk
 * @devices phone, tablet, tv, wearable
 * @permission N/A
 */
declare namespace wantConstant {
  /**
   * the constant for action of the want
   * @name Action
   * @since 6
   * @sysCap aafwk
   * @devices phone, tablet, tv, wearable
   * @permission N/A
   */
  export enum Action {
    /**
     * Indicates the action of backing home.
     *
     * @since 1
     */
    ACTION_HOME = "ohos.want.action.home",

    /**
     * Indicates the action of starting a Page ability that displays a keypad.
     *
     * @since 6
     */
    ACTION_DIAL = "ohos.want.action.dial",

    /**
     * Indicates the action of starting a Page ability for search.
     *
     * @since 6
     */
    ACTION_SEARCH = "ohos.want.action.search",

    /**
     * Indicates the action of starting a Page ability that provides wireless network settings, for example,
     * Wi-Fi options.
     *
     * @since 6
     */
    ACTION_WIRELESS_SETTINGS = "ohos.settings.wireless",

    /**
     * Indicates the action of starting a Page ability that manages installed applications.
     *
     * @since 6
     */
    ACTION_MANAGE_APPLICATIONS_SETTINGS = "ohos.settings.manage.applications",

    /**
     * Indicates the action of starting a Page ability that displays details of a specified application.
     *
     * <p>You must specify the application bundle name in the {@code package} attribute of the {@code Intent}
     * containing this action.
     *
     * @since 6
     */
    ACTION_APPLICATION_DETAILS_SETTINGS = "ohos.settings.application.details",

    /**
     * Indicates the action of starting a Page ability for setting an alarm clock.
     *
     * @since 6
     */
    ACTION_SET_ALARM = "ohos.want.action.setAlarm",

    /**
     * Indicates the action of starting a Page ability that displays all alarm
     * clocks.
     *
     * @since 6
     */
    ACTION_SHOW_ALARMS = "ohos.want.action.showAlarms",

    /**
     * Indicates the action of starting a Page ability for snoozing an alarm clock.
     *
     * @since 6
     */
    ACTION_SNOOZE_ALARM = "ohos.want.action.snoozeAlarm",

    /**
     * Indicates the action of starting a Page ability for deleting an alarm clock.
     *
     * @since 6
     */
    ACTION_DISMISS_ALARM = "ohos.want.action.dismissAlarm",

    /**
     * Indicates the action of starting a Page ability for dismissing a timer.
     *
     * @since 6
     */
    ACTION_DISMISS_TIMER = "ohos.want.action.dismissTimer",

    /**
     * Indicates the action of starting a Page ability for sending a sms.
     *
     * @since 6
     */
    ACTION_SEND_SMS = "ohos.want.action.sendSms",

    /**
     * Indicates the action of starting a Page ability for opening contacts or pictures.
     *
     * @since 6
     */
    ACTION_CHOOSE = "ohos.want.action.choose",

    /**
     * Indicates the action of showing the application selection dialog box.
     *
     * @since 6
     */
    ACTION_SELECT = "ohos.want.action.select",

    /**
     * Indicates the action of sending a single data record.
     *
     * @since 6
     */
    ACTION_SEND_DATA = "ohos.want.action.sendData",

    /**
     * Indicates the action of sending multiple data records.
     *
     * @since 6
     */
    ACTION_SEND_MULTIPLE_DATA = "ohos.want.action.sendMultipleData",

    /**
     * Indicates the action of requesting the media scanner to scan files and adding the files to the media library.
     *
     * @since 6
     */
    ACTION_SCAN_MEDIA_FILE = "ohos.want.action.scanMediaFile",

    /**
     * Indicates the action of viewing data.
     *
     * @since 6
     */
    ACTION_VIEW_DATA = "ohos.want.action.viewData",

    /**
     * Indicates the action of editing data.
     *
     * @since 6
     */
    ACTION_EDIT_DATA = "ohos.want.action.editData",

    /**
     * Indicates the choices you will show with {@link #ACTION_PICKER}.
     *
     * @since 6
     */
    INTENT_PARAMS_INTENT = "ability.want.params.INTENT",

    /**
     * Indicates the CharSequence dialog title when used with a {@link #ACTION_PICKER}.
     *
     * @since 6
     */
    INTENT_PARAMS_TITLE = "ability.want.params.TITLE",
  }

  /**
   * the constant for Entity of the want
   * @name Action
   * @since 6
   * @sysCap aafwk
   * @devices phone, tablet, tv, wearable
   * @permission N/A
   */
  export enum Entity {
    /**
     * Indicates the default entity, which is used if the entity is not specified.
     *
     * @since 6
     */
    ENTITY_DEFAULT = "entity.system.default",

    /**
     * Indicates the home screen entity.
     *
     * @since 6
     */
    ENTITY_HOME = "entity.system.home",

    /**
     * Indicates the voice interaction entity.
     *
     * @since 6
     */
    ENTITY_VOICE = "entity.system.voice",

    /**
     * Indicates the browser category.
     *
     * @since 6
     */
    ENTITY_BROWSABLE = "entity.system.browsable",

    /**
     * Indicates the video category.
     */
    ENTITY_VIDEO = "entity.system.video"
  }

  export enum Flags {
    /**
     * Returns the result to the source ability.
     */
    FLAG_ABILITY_FORWARD_RESULT = 0x00000004,

    /**
     * Determines whether an ability on the local device can be migrated to a remote device.
     */
    FLAG_ABILITY_CONTINUATION = 0x00000008,

    /**
     * Specifies whether a component does not belong to OHOS.
     */
    FLAG_NOT_OHOS_COMPONENT = 0x00000010,

    /**
     * Specifies whether an ability is started.
     */
    FLAG_ABILITY_FORM_ENABLED = 0x00000020,

    /**
     * Supports multi-device startup in the distributed scheduling system.
     */
    FLAG_ABILITYSLICE_MULTI_DEVICE = 0x00000100,

    /**
     * Indicates that an ability using the Service template is started regardless of whether the host application has
     * been started.
     */
    FLAG_START_FOREGROUND_ABILITY = 0x00000200,

    /**
     * Install the specified ability if it's not installed.
     */
    FLAG_INSTALL_ON_DEMAND = 0x00000800,

    /**
     * Install the specifiedi ability with background mode if it's not installed.
     */
    FLAG_INSTALL_WITH_BACKGROUND_MODE = 0x80000000,

    /**
     * Indicates the operation of clearing other missions. This flag can be set for the {@code Intent} passed to
     * {@link ohos.app.Context#startAbility} and must be used together with {@link FLAG_ABILITY_NEW_MISSION}.
     */
    FLAG_ABILITY_CLEAR_MISSION = 0x00008000,

    /**
     * Indicates the operation of creating a task on the historical mission stack.
     */
    FLAG_ABILITY_NEW_MISSION = 0x10000000,

    /**
     * Indicates that the existing instance of the ability to start will be reused if it is already at the top of
     * the mission stack. Otherwise, a new ability instance will be created.
     *
     */
    FLAG_ABILITY_MISSION_TOP = 0x20000000
  }
}

export default wantConstant;