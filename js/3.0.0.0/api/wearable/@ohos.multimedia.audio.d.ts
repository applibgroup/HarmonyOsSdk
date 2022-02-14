/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback, Callback } from './basic';

/**
 * @name audio
 * @since 7
 * @sysCap SystemCapability.Multimedia.Audio
 * @import import audio from '@ohos.multimedia.audio'
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace audio {

  /**
   * Obtains an AudioManager instance.
   * @since 7
   * @SysCap SystemCapability.Multimedia.audio
   * @import import audio from '@ohos.multimedia.audio'
   * @devices phone, tablet, tv, wearable, car
   * @return Returns an AudioManager instance if the operation is successful; returns null otherwise.
   */
  function getAudioManager(): AudioManager;

  /**
   * Enumerates audio stream types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum AudioVolumeType {

    /**
     * Audio stream for ringtones.
     */
    RINGTONE = 2,

    /**
     * Audio stream for media purposes.
     */
    MEDIA = 3,
  }

  /**
   * Enumerates media content types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum ContentType {

    /**
     * Unknown.
     */
    CONTENT_TYPE_UNKNOWN = 0,

    /**
     * Audio.
     */
    CONTENT_TYPE_SPEECH = 1,

    /**
     * Music.
     */
    CONTENT_TYPE_MUSIC = 2,

    /**
     * Movie.
     */
    CONTENT_TYPE_MOVIE = 3,

    /**
     * Sonification.
     */
    CONTENT_TYPE_SONIFICATION = 4,
  }

  /**
   * Enumerates audio stream usage types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum StreamUsage {

    /**
     * Unknown.
     */
    STREAM_USAGE_UNKNOWN = 0,

    /**
     * Audio.
     */
    STREAM_USAGE_MEDIA = 1,

    /**
     * Voice communication.
     */
    STREAM_USAGE_VOICE_COMMUNICATION = 2,

    /**
     * Notification ringtone.
     */
    STREAM_USAGE_NOTIFICATION_RINGTONE = 6,
  }

  /**
   * Enumerates audio interruption event types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum InterruptType {

    /**
     * An audio interruption event starts.
     */
    INTERRUPT_TYPE_BEGIN = 1,

    /**
     * An audio interruption event ends.
     */
    INTERRUPT_TYPE_END = 2
  }

  /**
   * Enumerates the types of hints for audio interruption.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum InterruptHint {

    /**
     * Audio resumed.
     */
    INTERRUPT_HINT_RESUME = 1,

    /**
     * Audio paused.
     */
    INTERRUPT_HINT_PAUSE = 2,

    /**
     * Audio stopped.
     */
    INTERRUPT_HINT_STOP = 3,

    /**
     * Audio ducking. (In ducking, the audio volume is reduced, but not silenced.)
     */
    INTERRUPT_HINT_DUCK = 4,

  }

  /**
   * Enumerates event types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum InterruptActionType {

    /**
     * Focus gain event.
     */
    TYPE_ACTIVATED = 0,

    /**
     * Audio interruption event.
     */
    TYPE_INTERRUPT = 1
  }

  /**
   * Enumerates device flags.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum DeviceFlag {

    /**
     * Output device.
     */
    OUTPUT_DEVICES_FLAG = 1,

    /**
     * Input device.
     */
    INPUT_DEVICES_FLAG = 2,

    /**
     * All devices.
     */
    ALL_DEVICES_FLAG = 3,
  }

  /**
   * Enumerates device roles.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum DeviceRole {

    /**
     * Input role.
     */
    INPUT_DEVICE = 1,

    /**
     * Output role.
     */
    OUTPUT_DEVICE = 2,
  }

  /**
   * Enumerates device types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum DeviceType {

    /**
     * Invalid device.
     */
    INVALID = 0,

    /**
     * A pair of built-in earpieces.
     */
    EARPIECE = 1,

    /**
     * Built-in speaker.
     */
    SPEAKER = 2,

    /**
     * Wired headset, which is a combination of a pair of earpieces and a microphone.
     */
    WIRED_HEADSET = 3,

    /**
     * A pair of wired headphones.
     */
    WIRED_HEADPHONES = 4,

    /**
     * Device that uses analog connections.
     */
    ANALOG = 5,

    /**
     * Device that uses digital connections.
     */
    DIGITAL = 6,

    /**
     * Bluetooth device that is usually used for calls.
     */
    BLUETOOTH_SCO = 7,

    /**
     * Bluetooth device that supports the Advanced Audio Distribution Profile (A2DP)
     */
    BLUETOOTH_A2DP = 8,

    /**
     * Device connected through the High Definition Multimedia Interface (HDMI)
     */
    HDMI = 9,

    /**
     * Audio Return Channel (ARC) device connected through the HDMI.
     */
    HDMI_ARC = 10,

    /**
     * USB audio device.
     */
    USB_DEVICE = 11,

    /**
     * USB audio device in accessory mode.
     */
    USB_ACCESSORY = 12,

    /**
     * Dock device.
     */
    DOCK = 13,

    /**
     * Device that uses frequency modulation (FM) to transmit audio signals.
     */
    FM = 14,

    /**
     * Built-in microphone.
     */
    MIC = 15,

    /**
     * Device that uses FM to transmit audio content.
     */
    FM_TUNER = 16,

    /**
     * Device that transmits audio content over the TV tuner system.
     */
    TV_TUNER = 17,

    /**
     * Device that transmits audio signals through mobile data.
     */
    TELEPHONY = 18,

    /**
     * Auxiliary connector.
     */
    AUXILIARY = 19,

    /**
     * Device that is connected over an IP network.
     */
    IP = 20,

    /**
     * Communication device with an external audio system.
     */
    BUS = 21,

    /**
     * USB audio headset.
     */
    USB_HEADSET = 22,

    /**
     * Hearing aid.
     */
    HEARING_AID = 23,
  }

  /**
   * Enumerates device types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum ActiveDeviceType {

    /**
     * Speaker.
     */
    SPEAKER = 2,

    /**
     * Bluetooth.
     */
    BLUETOOTH_SCO = 7,
  }

  /**
   * Enumerates ringer modes.
   * @devices phone, tablet, tv, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum AudioRingMode {

    /**
     * Silent mode.
     */
    RINGER_MODE_SILENT = 0,

    /**
     * Vibration mode.
     */
    RINGER_MODE_VIBRATE = 1,

    /**
     * Normal mode.
     */
    RINGER_MODE_NORMAL = 2,
  }

  /**
   * Enumerates device change types.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum DeviceChangeType {

    /**
     * Device connection.
     */
    CONNECT = 0,

    /**
     * Device disconnection.
     */
    DISCONNECT = 1,
  }

  /**
   * Enumerates audio encoding formats.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  enum AudioEncodingFormat {

    /**
     * Default encoding format.
     */
    ENCODING_DEFAULT = 1,

    /**
     * Invalid encoding.
     */
    ENCODING_INVALID = 0,

    /**
     * PCM 16-bit encoding.
     */
    ENCODING_PCM_16BIT = 1,

    /**
     * PCM 8-bit encoding.
     */
    ENCODING_PCM_8BIT = 2,

    /**
     * PCM float encoding.
     */
    ENCODING_PCM_FLOAT = 5,
  }

  /**
   * AudioDeviceDescriptor array.
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @SysCap SystemCapability.Multimedia.Audio
   */
  type AudioDeviceDescriptors = Array<Readonly<AudioDeviceDescriptor>>;

  /**
   * Describes the callback invoked for audio interruption or focus gain events.When the audio of an application
   * is interrupted by another application, the callback is invoked to notify the former application.
   */
  interface InterruptAction {

    /**
     * Event type.
     * The value 0 means the focus gain event, and 1 means the audio interruption event.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.MultiAudio.Audio
     */
    actionType: InterruptActionType;

    /**
     * Type of the audio interruption event.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    type?: InterruptType;

    /**
     * Hint for the audio interruption event.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    hint?: InterruptHint;

    /**
     * Whether the focus is gained or released. The value true means that the focus is gained or released,
     * and false means that the focus fails to be gained or released.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    activated?: boolean;
  }

  /**
   * Describes input parameters of audio listening events.
   */
  interface AudioInterrupt {

    /**
     * Audio stream usage type.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    streamUsage: StreamUsage;

    /**
     * Type of the media interrupted.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    contentType: ContentType;

    /**
     * Whether audio playback can be paused when it is interrupted.
     * The value true means that audio playback can be paused when it is interrupted, and false means the opposite.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    pauseWhenDucked: boolean;
  }

  /**
   * Describes the device change type and device information.
   */
  interface DeviceChangeAction {

    /**
     * Device change type.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    type: DeviceChangeType;

    /**
     * Device information.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * Manages and plays audio. Before calling an AudioPlayer method, you must use createAudioPlayer() to create
   * an AudioPlayer instance.
   */
  interface AudioDeviceDescriptor {

    /**
     * Device ID.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    id: number;

    /**
     * Device type.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    name: string;

    /**
     * Device address.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    address: string;

    /**
     * Sampling rate.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    sampleRates: Array<number>;

    /**
     * Number of channels.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    channelCounts: Array<number>;

    /**
     * Channel index mask.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    channelIndexMasks: Array<number>;

    /**
     * Channel masks.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    channelMasks: Array<number>;

    /**
     * Encoding formats.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    encodingFormats: Array<AudioEncodingFormat>;

    /**
     * Device role.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    readonly deviceRole: DeviceRole;

    /**
     * Device type.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     */
    readonly deviceType: DeviceType;
  }

  /**
   * Audio Management
   * @devices phone, tablet, tv, wearable, car
   * @sysCap SystemCapability.Multimedia.Audio
   */
  interface AudioManager {

    /**
     * Sets the volume for an audio stream. This method uses an asynchronous callback to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param volume Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param Callback used to return the execution result.
     * @permission "ohos.permission.ACCESS_NOTIFICATION_POLICY"
     */
    setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void;

    /**
     * Sets the volume for an audio stream. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param volume Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @return return A Promise instance used to return the execution result.
     * @permission "ohos.permission.ACCESS_NOTIFICATION_POLICY"
     */
    setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>;

    /**
     * Obtains the volume of an audio stream. This method uses a promise to return the volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param callback Callback used to return the volume.
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;

    /**
     * Obtains the volume of an audio stream. This method uses a promise to return the volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @return return A Promise instance used to return the volume.
     */
    getVolume(volumeType: AudioVolumeType): Promise<number>;

    /**
     * Obtains the minimum volume allowed for an audio stream. This method uses an asynchronous callback to return the
     * minimum volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param callback Callback used to return the minimum volume.
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void

    /**
     * Obtains the minimum volume allowed for an audio stream. This method uses a promise to return the minimum volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @return return A Promise instance used to return the minimum volume.
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<number>;

    /**
     * Obtains the maximum volume allowed for an audio stream. This method uses an asynchronous callback to return
     * the maximum volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param callback Callback used to return the maximum volume.
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void

    /**
     * Obtains the maximum volume allowed for an audio stream. This method uses a promise to return the maximum volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @return return A Promise instance used to return the maximum volume.
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<number>;

    /**
     * Determines whether audio streams of a given type are muted.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param callback Callback used to return the mute status of the stream. The value true means that the stream
     * is muted,and false means the opposite.
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether a stream is muted. This method uses an asynchronous callback to return the query result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @return return A Promise instance used to return the mute status of the stream. The value true means that the
     * stream is muted, and false means the opposite.
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;

    /**
     * Checks whether a stream is muted. This method uses a promise to return the query result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param mute Whether to mute the stream. The value true meas to mute the stream, and false means the opposite.
     * @param callback Callback used to return the execution result.
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;

    /**
     * Mutes or unmutes a stream. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param mute Whether to mute the stream. The value true meas to mute the stream, and false means the opposite.
     * @return return A Promise instance used to return the execution result.
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;

    /**
     * Checks whether a stream is active, that is, whether a stream is being played rather than being stopped or paused.
     * This method uses an asynchronous callback to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @param callback Callback used to return the stream activation status. The value true means that the stream is
     * active,and false means the opposite.
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether a stream is active, that is, whether a stream is being played rather than being stopped or paused.
     * This method uses a promise to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param volumeType Audio stream type.
     * @return return A Promise instance used to return the stream activation status. The value true means that the
     * stream is active,and false means the opposite.
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;

    /**
     * Checks whether the microphone is muted. This method uses an asynchronous callback to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param callback Callback used to return the mute status of the microphone. The value true means that
     * the microphone is muted, and false means the opposite.
     * @permission "ohos.permission.MICROPHONE"
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the microphone is muted. This method uses a promise to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @return return A Promise instance used to return the mute status of the microphone. The value true means
     * that the microphone is muted, and false means the opposite.
     * @permission "ohos.permission.MICROPHONE"
     */
    isMicrophoneMute(): Promise<boolean>;

    /**
     * Mutes or unmutes the microphone. This method uses an asynchronous callback to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param mute Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param callback Callback used to return the execution result.
     * @permission "ohos.permission.MICROPHONE"
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;

    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param mute Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @return return A Promise instance used to return the execution result.
     * @permission "ohos.permission.MICROPHONE"
     */
    setMicrophoneMute(mute: boolean): Promise<void>;

    /**
     * Obtains a list of audio devices with a specific flag. This method uses an asynchronous callback to
     * return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param deviceFlag Device flag.
     * @param callback Callback used to return the device list.
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;

    /**
     * Obtains a list of audio devices with a specific flag. This method uses a promise to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param deviceFlag Device flag.
     * @return return A Promise instance used to return the device list.
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;

    /**
     * Checks whether a type of device is active. This method uses an asynchronous callback to return the
     * query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param deviceType Audio device type.
     * @param callback Callback used to return the active status of the device.
     */
    isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether a type of device is active. This method uses a promise to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param deviceType Audio device type.
     * @return return A Promise instance used to return the active status of the device.
     */
    isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>;

    /**
     * Sets a type of device to the active state. This method uses an asynchronous callback to return the
     * execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param deviceType Audio device type.
     * @param active Active status to set. The value true means to set the device to the active status,
     * and false means the opposite.
     * @param callback Callback used to return the execution result.
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets a type of device to the active state. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param deviceType Audio device type.
     * @param active Active status to set. The value true means to set the device to the active status,
     * and false means the opposite
     * @return return A Promise instance used to return the execution result.
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>;

    /**
     * Sets an audio parameter. This method uses an asynchronous callback to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param key Key of the audio parameter to set.
     * @param value Value of the audio parameter to set.
     * @param callback Callback used to return the execution result.
     * @permission "ohos.permission.MODIFY_AUDIO_SETTINGS"
     */
    setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * Sets an audio parameter. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param key Key of the audio parameter to set.
     * @param value Value of the audio parameter to set.
     * @return return A Promise instance used to return the execution result.
     * @permission "ohos.permission.MODIFY_AUDIO_SETTINGS"
     */
    setAudioParameter(key: string, value: string): Promise<void>;

    /**
     * Obtains the value of an audio parameter. This method uses an asynchronous callback to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param key Key of the audio parameter whose value is to be obtained.
     * @param callback Callback used to return the value of the audio parameter.
     */
    getAudioParameter(key: string, callback: AsyncCallback<string>): void;

    /**
     * Obtains the value of an audio parameter. This method uses a promise to return the query result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param key Key of the audio parameter whose value is to be obtained.
     * @return return A Promise instance used to return the value of the audio parameter.
     */
    getAudioParameter(key: string): Promise<string>;

    /**
     * Sets the ringer mode. This method uses an asynchronous callback to return the execution result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param mode Ringer mode to set.
     * @param callback Callback used to return the execution result.
     * @permission "ohos.permission.ACCESS_NOTIFICATION_POLICY"
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;

    /**
     * Sets the ringer mode. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param mode Ringer mode to set.
     * @return return A Promise instance used to return the execution result.
     * @permission "ohos.permission.ACCESS_NOTIFICATION_POLICY"
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;

    /**
     * Obtains the ringer mode. This method uses an asynchronous callback to return the query result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param callback Callback used to return the ringer mode.
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;

    /**
     * Obtains the ringer mode. This method uses a promise to return the query result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @return return A Promise instance used to return the ringer mode.
     */
    getRingerMode(): Promise<AudioRingMode>;

    /**
     * Listens for device change events.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param type Type of the event to listen for. Only the deviceChange event is supported.
     * This event is triggered when a device change is detected.
     * @param callback Callback invoked for the device change event.
     */
    on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void;

    /**
     * Cancels the listening of device change events.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param type Type of the event for which the listening is to be canceled. Only the deviceChange event is supported.
     * @param callback Callback invoked for the device change event.
     */
    off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * Listens for audio interruption events. When the audio of an application is interrupted by another application,
     * the callback is invoked to notify the former application.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param type Type of the event to listen for. Only the interrupt event is supported.
     * @param interrupt Parameters of the audio interruption event type.
     * @param callback Callback invoked for the audio interruption event.
     */
    on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void;

    /**
     * Cancels the listening of audio interruption events.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Audio
     * @param type Type of the event to listen for. Only the interrupt event is supported.
     * @param interrupt Input parameters of the audio interruption event.
     * @param callback Callback invoked for the audio interruption event.
     */
    off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void;
  }
}

export default audio;