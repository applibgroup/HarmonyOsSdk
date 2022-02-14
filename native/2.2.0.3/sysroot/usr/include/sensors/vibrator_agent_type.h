/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 * Description: Vibrator native API base C language.
 * Author: houpengfei
 * Create: 2021-02-01
 */

#ifndef VIBRATOR_AGENT_TYPE_H
#define VIBRATOR_AGENT_TYPE_H

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Describes the vibration effect of the vibrator when a user rotates the crown.
 *
 * <p>This constant applies to the scenarios in which a user rotates the crown of a wearable
 * to scroll or zoom the screen display, or rotates the crown of a wearable on the minus one
 * screen or on its secondary details screen, on the Launcher grid and list, or on the card
 * list.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_CROWN_STRENGTH1 = "watchhaptic.crown.strength1";

/**
 * @brief Describes the vibration effect of the vibrator when a user rotates the crown to adjust
 * values such as the volume and date.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_CROWN_STRENGTH2 = "watchhaptic.crown.strength2";

/**
 * @brief Describes the vibration effect of the vibrator when a user rotates the crown until it
 * cannot be rotated any further.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_CROWN_STRENGTH3 = "watchhaptic.crown.strength3";

/**
 * @brief Describes the vibration effect of the vibrator when the camera is focusing.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_FOCUS = "haptic.camera.focus";

/**
 * @brief Describes the vibration effect of the vibrator when the camera is being pressed.
 *
 * <p>This constant applies to the scenarios when a user is pressing the shutter to take a
 * photo, to record a video, or to capture a snapshot and is pausing the recording.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_CLICK = "haptic.camera.click";

/**
 * @brief Describes the vibration effect of the vibrator when a user releases the shutter on the
 * camera.
 *
 * <p>This constant applies to the scenarios in which a user releases the shutter during
 * photo shooting, video recording, or snapshot capturing.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_CLICK_UP = "haptic.camera.click_up";

/**
 * @brief Describes the vibration effect of the vibrator when the camera mode is switched.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_MODE_SWITCH = "haptic.camera.mode_switch";

/**
 * @brief Describes the vibration effect of the vibrator when the camera mode is being flipped.
 *
 * <p>This constant applies to the scenarios when a user adjusts aperture settings, sets the
 * beauty effect level for rear camera, for video recording, or in 3D dynamic panoramic mode,
 * sets the smooth level in portrait mode, adjusts the ISO sensitivity or the shutter speed
 * in night mode, and sets the filters.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_GEAR_SLIP = "haptic.camera.gear_slip";

/**
 * @brief Describes the vibration effect of the vibrator when the camera portrait mode is switched.
 *
 * <p>This constant applies to the scenarios when a user sets the skin tone and blur for
 * front camera and sets the blur for rear camera.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_PORTRAIT_SWITCH = "haptic.camera.portrait_switch";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the viewfinder.
 *
 * <p>This constant applies to the scenarios in which a user touches and holds the viewfinder
 * to display the metering frame or focus frame.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CAMERA_LONG_PRESS = "haptic.camera.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when the contacts are indexed alphabetically.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTACTS_LETTERS_INDEX = "haptic.contacts.letters_index";

/**
 * @brief Describes the vibration effect of the vibrator when a user clicks the dialer.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DIALLER_CLICK = "haptic.dialler.click";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the dialer.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DIALLER_LONG_PRESS = "haptic.dialler.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the Delete
 * key on the dialer.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DIALLER_DELETE_LONG_PRESS
        = "haptic.dialler.delete_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user adjusts the clock time.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_TIME_SCROLL = "haptic.control.time_scroll";

/**
 * @brief Describes the vibration effect of the vibrator when a user adjusts the calendar date.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_DATE_SCROLL = "haptic.control.date_scroll";

/**
 * @brief Describes the vibration effect of the vibrator when a user sets the time zone using the
 * alphabetical index.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_LETTERS_SCROLL
        = "haptic.control.letters_scroll";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the search box.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_SEARCH_LONG_PRESS
        = "haptic.control.search_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the editing
 * text.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_TEXT_EDIT = "haptic.control.text_edit";

/**
 * @brief Describes the vibration effect of the vibrator when the text selection cursor is moved.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_TEXT_CHOOSE_CURSOR_MOVE
        = "haptic.control.text_choose_cursor_move";

/**
 * @brief Describes the vibration effect of the vibrator when the drawer control is enabled or
 * disabled.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CONTROL_WIDGET_OPERATION
        = "haptic.control.widget_operation";

/**
 * @brief Describes the vibration effect of the vibrator when a user adjusts the timer.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CLOCK_TIMER = "haptic.clock.timer";

/**
 * @brief Describes the vibration effect of the vibrator when the clock stopwatch is counting.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CLOCK_STOPWATCH = "haptic.clock.stopwatch";

/**
 * @brief Describes the vibration effect of the vibrator when a user adjusts the calendar time.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WALLET_TIME_SCROLL = "haptic.wallet.time_scroll";

/**
 * @brief Describes the vibration effect of the vibrator when the charger is connected.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_BATTERY_CHARGING = "haptic.battery.charging";

/**
 * @brief Describes the vibration effect of the vibrator when fingerprint unlock on a locked screen
 * fails.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_FINGERPRINT_UNLOCK_FAIL
        = "haptic.fingerprint.unlock_fail";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the
 * fingerprint sensor.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_FINGERPRINT_LONG_PRESS
        = "haptic.fingerprint.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the
 * fingerprint sensor during fingerprint enrolling.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_FINGERPRINT_IN_LONG_PRESS
        = "haptic.fingerprint.input_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when face unlock on a locked screen fails.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_FACE_UNLOCK_FAIL
        = "haptic.lockscreen.face_unlock_fail";

/**
 * @brief Describes the vibration effect of the vibrator when a user retries face unlock on a locked
 * screen.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_FACE_UNLOCK_RETRY
        = "haptic.lockscreen.face_unlock_retry";

/**
 * @brief Describes the vibration effect of the vibrator when password unlock on a locked screen fails.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_NUMBER_UNLOCK_FAIL
        = "haptic.lockscreen.number_unlock_fail";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes up on the shortcut bar
 * at the bottom of the magazine unlock screen.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_UPGLIDE_SWITCHES
        = "haptic.lockscreen.upglide_switches";

/**
 * @brief Describes the vibration effect of the vibrator when a user switches the keyboard in
 * one-hand mode on a locked screen.
 *
 * <p>A user may switches the keyboard for setting the numeric password, pattern password,
 * and hybrid password.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_ONEHAND_KEYBOARD_SWITCH
        = "haptic.lockscreen.onehand_keyboard_switch";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes to unlock the screen or
 * to open the camera.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_UNLOCK_SLIP
        = "haptic.lockscreen.unlock_slip";

/**
 * @brief Describes the vibration effect of the vibrator when a user clicks a locked screen to
 * unlock it.
 *
 * <p>For example, a user may click the screen to enter the lock screen password, press the
 * Delete key, make an emergency call, or press the shortcut button at the bottom.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_LOCKSCREEN_UNLOCK_CLICK
        = "haptic.lockscreen.unlock_click";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds an icon on
 * the home screen.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DESKTOP_LONG_PRESS = "haptic.desktop.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the home screen.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DESKTOP_PAGE_LONG_PRESS
        = "haptic.desktop.page_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user clicks the page editing tool.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DESKTOP_PAGE_EDIT_CLICK
        = "haptic.desktop.page_edit_click";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds a widget on
 * the home screen to edit it.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_DESKTOP_WIDGET_LONG_PRESS
        = "haptic.desktop.widget_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the virtual
 * navigation bar.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_VIRTUALNAVIGATION_LONGPRESS_HOME
        = "haptic.virtual_navigation.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the Home
 * button in virtual navigation mode.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_VIRTUALNAVIGATION_CLICK_HOME
        = "haptic.virtual_navigation.click_home";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the Back
 * button in virtual navigation mode.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_VIRTUALNAVIGATION_CLICK_BACK
        = "haptic.virtual_navigation.click_back";

/**
 * @brief Describes the vibration effect of the vibrator when a user clicks multiple tasks in
 * virtual navigation mode.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_VIRTUALNAVIGATION_CLICK_MULTITASK
        = "haptic.virtual_navigation.click_multitask";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes up in full-screen mode
 * to initiate multiple tasks.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_ALLSCREEN_UPGLIDE_MULTITASK
        = "haptic.allscreen.upglide_multitask";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes leftward or rightward in
 * full-screen mode.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_ALLSCREEN_SLIP_BACK = "haptic.allscreen.slip_back";

/**
 * @brief Describes the vibration effect of the vibrator when a user clicks HiVoice.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_HIVOICE_CLICK = "haptic.hivoice.click";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the
 * navigation dock button.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_FLOAT_TASKS_LONGPRESS
        = "haptic.virtual_float_tasks.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the Delete
 * key on the calculator.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CALCULATOR_DELETE_LONG_PRESS
        = "haptic.calculator.delete_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds a
 * notification message.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_SYSTEMUI_NOTIFICATIONS_LONG_PRESS
        = "haptic.systemui.notifications_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds a shortcut
 * switch.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_SYSTEMUI_SWITCHES_LONG_PRESS
        = "haptic.systemui.switches_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the shortcut
 * switches to sort them.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_SYSTEMUI_SWITCHES_SORT_LONG_PRESS
        = "haptic.systemui.switches_sort_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes down from the status bar
 * to open the notification panel.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_SYSTEMUI_NOTIFICATIONS_MOVE
        = "haptic.systemui.notifications_move";

/**
 * @brief Describes the vibration effect of the vibrator when a user presses the key for stopping
 * recording.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_SYSTEMUI_SCREEN_RECORD_STOP
        = "haptic.systemui.screen_record_stop";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes down on the status bar
 * to show all shortcuts.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_SYSTEMUI_NOTIFICATIONS_EXPAND
        = "haptic.systemui.notifications_expand";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the gallery.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GALLERY_ALBUMS_LONG_PRESS
        = "haptic.gallery.albums_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds a photo.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GALLERY_PHOTOS_LONG_PRESS
        = "haptic.gallery.photos_long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user swipes up on a picture to view
 * its information.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GALLERY_UPGLIDE_RELATED
        = "haptic.gallery.upglide_related";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the notepad.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_NOTEPAD_NOTE_LONG_PRESS
        = "haptic.notepad.note_long_press";

/**
 * @brief Describes the level-1 (light) vibration effect of the Baidu input method (Huawei
 * customized edition).
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GRADE_STRENGTH1 = "haptic.grade.strength1";

/**
 * @brief Describes the level-2 vibration effect of the Baidu input method (Huawei customized edition).
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GRADE_STRENGTH2 = "haptic.grade.strength2";

/**
 * @brief Describes the level-3 vibration effect of the Baidu input method (Huawei customized edition).
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GRADE_STRENGTH3 = "haptic.grade.strength3";

/**
 * @brief Describes the level-4 vibration effect of the Baidu input method (Huawei customized edition).
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GRADE_STRENGTH4 = "haptic.grade.strength4";

/**
 * @brief Describes the level-5 (heavy) vibration effect of the Baidu input method (Huawei
 * customized edition).
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_GRADE_STRENGTH5 = "haptic.grade.strength5";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds an
 * application icon on the Launcher grid and list.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_LAUNCHER_LONG_PRESS = "watchhaptic.launcher.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the card list
 * to change the card sequence.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_TILES_LONG_PRESS = "watchhaptic.tiles.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when a user triggers a pairing request.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_PHONEPAIR_REQUIRING = "watchhaptic.phonepair.requiring";

/**
 * @brief Describes the vibration effect of the vibrator when the pairing is successful.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_PHONEPAIR_SUCCESS = "watchhaptic.phonepair.success";

/**
 * @brief Describes the vibration effect of the vibrator when the Bluetooth is disconnected.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_BLUETOOTHBREAK_WARNING = "watchhaptic.bluetoothbreak.warning";

/**
 * @brief Describes the vibration effect of the vibrator when the barometer sends a notification.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_BAROMETER_WARNING = "watchhaptic.barometer.warning";

/**
 * @brief Describes the vibration effect of the vibrator when the operation such as payment or card
 * swiping is successful or when the card reminder is switched.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_CARDPAY_SUCCESS = "watchhaptic.cardpay.success";

/**
 * @brief Describes the vibration effect of the vibrator when the operation such as payment or card
 * swiping fails.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_CARDPAY_FAIL = "watchhaptic.cardpay.fail";

/**
 * @brief Describes the vibration effect of the vibrator when a low-battery notification is received.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_LOWBATTERY_WARNING = "watchhaptic.lowbattery.warning";

/**
 * @brief Describes the vibration effect of the vibrator when an emergency notification is received.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEM_EMERGENCY_WARNING = "watchhaptic.system.emergency.warning";

/**
 * @brief Describes the vibration effect of the vibrator when an application message is received.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_APPLICATION_MESSAGE_NOTIFICATION
    = "watchhaptic.application.message.notification";

/**
 * @brief Describes the vibration effect of the vibrator when messages such as SMS messages and
 * emails are received.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_MESSAGE_NOTIFICATION = "watchhaptic.message.notification";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the screen to
 * change the watch face.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_WATCHFACE_CHANGE_LONG_PRESS
    = "watchhaptic.watchface.change.long_press";

/**
 * @brief Describes the vibration effect of the vibrator when the charger is connected.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_BATTERY_CHARGING_SUCCESS = "watchhaptic.battery.charging.success";

/**
 * @brief Describes the vibration effect of the vibrator when the alarm clock vibrates.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_ALARMCLOCK_NOTIFICATION = "watchhaptic.alarmclock.notification";

/**
 * @brief Describes the vibration effect of the vibrator when the timer stops timing.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_TIMER_NOTIFICATION = "watchhaptic.timer.notification";

/**
 * @brief Describes the vibration effect of the vibrator when measurement of the oxygen saturation
 * is complete.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SPO2MEASURE_FINISH = "watchhaptic.spo2measure.finish";

/**
 * @brief Describes the vibration effect of the vibrator when the breath-take speed is fast during a
 * breathing exercise.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_BREATHTAKE_SPEED1 = "watchhaptic.breathtake.speed1";

/**
 * @brief Describes the vibration effect of the vibrator when the breath-take speed is moderate
 * during a breathing exercise.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_BREATHTAKE_SPEED2 = "watchhaptic.breathtake.speed2";

/**
 * @brief Describes the vibration effect of the vibrator when the breath-take speed is slow during a
 * breathing exercise.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_BREATHTAKE_SPEED3 = "watchhaptic.breathtake.speed3";

/**
 * @brief Describes the vibration effect of the vibrator when the countdown for taking a photo
 * reaches 3 seconds.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_REMOTECAMERA_LONG = "watchhaptic.remotecamera.long";

/**
 * @brief Describes the vibration effect of the vibrator when the countdown for taking a photo
 * reaches 2 seconds and 1 second, respectively.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_REMOTECAMERA_SHORT = "watchhaptic.remotecamera.short";

/**
 * @brief Describes the vibration effect of the vibrator when an activity reminder is received.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SITLONGTIME_NOTIFICATION = "watchhaptic.sitlongtime.notification";

/**
 * @brief Describes the vibration effect of the vibrator when a notification is received to indicate
 * a fast or slow heartbeat in daily monitoring.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_HEARTBEATHIGH_WARNING = "watchhaptic.heartbeathigh.warning";

/**
 * @brief Describes the vibration effect of the vibrator when a user performs an exercise operation,
 * including starting, pausing, or ending an exercise, or pressing the power button.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_EXERCISE_START_END_PAUSE = "watchhaptic.exercise.start_end_pause";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the screen to
 * customize exercise data.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_EXERCISE_LONG_PRESS = "watchhaptic.exercise.long_press";

/**
 * @brief Describes the vibration effect of the vibrator during an exercise.
 *
 * <p>This constant applies to the scenarios when notifications are received to remind users
 * of the following:
 * <ul><li>Entire-kilometer workout, workout interval, goal achievement, fast or slow heartbeat,
 * track return, turn-left or turn-right, and workout segment </li>
 * <li>Automatic identification of the workout start and end </li>
 * <li>Start, pause, end, and Bluetooth disconnection in a synced workout tracking </li>
 * <li>Action changes and training completion in a running course, sports changes in a Triathlon,
 * and golf stroke and best stroke counters</li>
 * <li>Insufficient storage space for a single workout</li></ul>
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_EXERCISE_NOTIFICATION = "watchhaptic.exercise.notification";

/**
 * @brief Describes the vibration effect of the vibrator when a notification is received to indicate
 * a fast or slow heartbeat in an exercise.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_EXCERCISE_HEARTBEAT_WARNING
    = "watchhaptic.excercise.heartbeat.warning";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 1.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH1 = "watchhaptic.systemtype.strength1";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 2.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH2 = "watchhaptic.systemtype.strength2";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 3.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH3 = "watchhaptic.systemtype.strength3";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 4.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH4 = "watchhaptic.systemtype.strength4";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 5.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH5 = "watchhaptic.systemtype.strength5";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 6.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH6 = "watchhaptic.systemtype.strength6";

/**
 * @brief Describes the vibration effect of the vibrator on the wearable at intensity 7.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_WATCH_SYSTEMTYPE_STRENGTH7 = "watchhaptic.systemtype.strength7";

/**
 * @brief Describes the vibration effect of the vibrator when a user touches and holds the text to
 * edit it.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_COMMON_LONG_PRESS1 = "haptic.common.long_press1";

/**
 * @brief Describes the vibration effect of the vibrator when an incoming call is answered or ended.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CALL_ON_OFF = "haptic.call.on_off";

/**
 * @brief Describes the vibration effect of the vibrator for incoming calls with only vibrations.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_CALL_RING = "haptic.call.ring";

/**
 * @brief Describes the vibration effect of the vibrator for the Bounce ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_BOUNCE = "haptic.ringtone.Bounce";

/**
 * @brief Describes the vibration effect of the vibrator for the Cartoon ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_CARTOON = "haptic.ringtone.Cartoon";

/**
 * @brief Describes the vibration effect of the vibrator for the Chilled ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_CHILLED = "haptic.ringtone.Chilled";

/**
 * @brief Describes the vibration effect of the vibrator for the Classic Bell ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_CLASSIC_BELL = "haptic.ringtone.Classic_Bell";

/**
 * @brief Describes the vibration effect of the vibrator for the Concentrate ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_CONCENTRATE = "haptic.ringtone.Concentrate";

/**
 * @brief Describes the vibration effect of the vibrator for the Day lily ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_DAY_LILY = "haptic.ringtone.Day_lily";

/**
 * @brief Describes the vibration effect of the vibrator for the Digital Ringtone ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_DIGITAL_RINGTONE = "haptic.ringtone.Digital_Ringtone";

/**
 * @brief Describes the vibration effect of the vibrator for the Dream ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_DREAM = "haptic.ringtone.Dream";

/**
 * @brief Describes the vibration effect of the vibrator for the Dream It Possible ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_DREAM_IT_POSSIBLE = "haptic.ringtone.Dream_It_Possible";

/**
 * @brief Describes the vibration effect of the vibrator for the Dynamo ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_DYNAMO = "haptic.ringtone.Dynamo";

/**
 * @brief Describes the vibration effect of the vibrator for the Flipped ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_FLIPPED = "haptic.ringtone.Flipped";

/**
 * @brief Describes the vibration effect of the vibrator for the Forest Day ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_FOREST_DAY = "haptic.ringtone.Forest_Day";

/**
 * @brief Describes the vibration effect of the vibrator for the Free ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_FREE = "haptic.ringtone.Free";

/**
 * @brief Describes the vibration effect of the vibrator for the Halo ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_HALO = "haptic.ringtone.Halo";

/**
 * @brief Describes the vibration effect of the vibrator for the Harp ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_HARP = "haptic.ringtone.Harp";

/**
 * @brief Describes the vibration effect of the vibrator for the Hello Ya ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_HELLO_YA = "haptic.ringtone.Hello_Ya";

/**
 * @brief Describes the vibration effect of the vibrator for the Huawei Tune Clean ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_TUNE_CLEAN = "haptic.ringtone.Tune_Clean";

/**
 * @brief Describes the vibration effect of the vibrator for the Huawei Tune Living ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_TUNE_LIVING = "haptic.ringtone.Tune_Living";

/**
 * @brief Describes the vibration effect of the vibrator for the Huawei Tune Orchestral ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_TUNE_ORCHESTRAL = "haptic.ringtone.Tune_Orchestral";

/**
 * @brief Describes the vibration effect of the vibrator for the Menuet ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_MENUET = "haptic.ringtone.Menuet";

/**
 * @brief Describes the vibration effect of the vibrator for the Neon ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_NEON = "haptic.ringtone.Neon";

/**
 * @brief Describes the vibration effect of the vibrator for the Notes ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_NOTES = "haptic.ringtone.Notes";

/**
 * @brief Describes the vibration effect of the vibrator for the Pulse ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_PULSE = "haptic.ringtone.Pulse";

/**
 * @brief Describes the vibration effect of the vibrator for the Sailing ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_SAILING = "haptic.ringtone.Sailing";

/**
 * @brief Describes the vibration effect of the vibrator for the Sax ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_SAX = "haptic.ringtone.Sax";

/**
 * @brief Describes the vibration effect of the vibrator for the Spin ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_SPIN = "haptic.ringtone.Spin";

/**
 * @brief Describes the vibration effect of the vibrator for the Westlake ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_WESTLAKE = "haptic.ringtone.Westlake";

/**
 * @brief Describes the vibration effect of the vibrator for the Whistle ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_WHISTLE = "haptic.ringtone.Whistle";

/**
 * @brief Describes the vibration effect of the vibrator for the Amusement ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_AMUSEMENT_PARK = "haptic.ringtone.Amusement_Park";

/**
 * @brief Describes the vibration effect of the vibrator for the Breathfreely ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_BREATHE_FREELY = "haptic.ringtone.Breathe_Freely";

/**
 * @brief Describes the vibration effect of the vibrator for the Fantasy world ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_FANTASY_WORLD = "haptic.ringtone.Fantasy_World";

/**
 * @brief Describes the vibration effect of the vibrator for the Summerafternoon ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_SUMMER_AFTERNOON = "haptic.ringtone.Summer_Afternoon";

/**
 * @brief Describes the vibration effect of the vibrator for the Sunlit Garden ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_SUNLIT_GARDEN = "haptic.ringtone.Sunlit_Garden";

/**
 * @brief Describes the vibration effect of the vibrator for the Surging Power ringtone.
 *
 * @since 1
 */
const char *VIBRATOR_TYPE_RINGTONE_SURGING_POWER = "haptic.ringtone.Surging_Power";

/** @} */
#ifdef __cplusplus
};
#endif

#endif  // endif VIBRATOR_AGENT_TYPE_H