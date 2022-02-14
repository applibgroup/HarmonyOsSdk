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

import { ErrorCallback, AsyncCallback, Callback } from './basic';

/**
 * @name media
 * @since 6
 * @SysCap SystemCapability.Multimedia.Media
 * @import import media from '@ohos.multimedia.media'
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace media {
  /**
   * Creates an AudioPlayer instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   * @return Returns an AudioPlayer instance if the operation is successful; returns null otherwise.
   */
  function createAudioPlayer(): AudioPlayer;

  /**
   * Creates an AudioRecorder instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   * @return Returns an AudioRecorder instance if the operation is successful; returns null otherwise.
   * @permission "ohos.permission.MICROPHONE"
   */
  function createAudioRecorder(): AudioRecorder;

  /**
   * Creates a MediaComposer instance.
   * @since 7
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   * @return Returns a MediaComposer instance if the operation is successful; returns null otherwise.
   * @permission "ohos.permission.INTERNET"
   */
  function createMediaComposer(): MediaComposer;

  /**
   * Creates a MediaDecoder instance.
   * @since 7
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   * @return Returns a MediaDecoder instance if the operation is successful; returns null otherwise.
   */
  function createMediaDecoder(): MediaDecoder;

  /**
   * Describes audio playback states.
   */
  type AudioState = 'idle' | 'playing' | 'paused' | 'stopped';

  /**
   * Manages and plays audio. Before calling an AudioPlayer method, you must use createAudioPlayer() to create an AudioPlayer instance.
   */
  interface AudioPlayer {
    /**
     * Starts audio playback.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    play(): void;

    /**
     * Pauses audio playback.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    pause(): void;

    /**
     * Stops audio playback.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    stop(): void;

    /**
     * Resets audio playback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     */
    reset(): void;

    /**
     * Jumps to the specified playback position.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param timeMs Playback position to jump
     */
    seek(timeMs: number): void;

    /**
     * Sets the volume.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param vol Relative volume. The value ranges from 0.00 to 1.00. The value 1 indicates the maximum volume (100%).
     */
    setVolume(vol: number): void;

    /**
     * Releases resources used for audio playback.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    release(): void;

    /**
     * Audio media URI. Mainstream audio formats are supported.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    src: string;

    /**
     * Whether to loop audio playback. The value true means to loop playback.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    loop: boolean;

    /**
     * Current playback position.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    readonly currentTime: number;

    /**
     * Playback duration.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    readonly duration: number;

    /**
     * Playback state.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    readonly state: AudioState;

    /**
     * Listens for audio playback events.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback event.
     */
    on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void;

    /**
     * Listens for audio playback events.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param type Type of the playback event to listen for.
     * @param callback Callback used to listen for the playback event.
     */
    on(type: 'timeUpdate', callback: Callback<number>): void;

    /**
     * Listens for playback error events.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param type Type of the playback error event to listen for.
     * @param callback Callback used to listen for the playback error event.
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

  /**
   * Enumerates audio encoding formats.
   * @since 6
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   */
  enum AudioEncoder {
    /**
     * Default audio encoding format, which is AMR-NB.
     */
    DEFAULT = 0,

    /**
     * Indicates the AMR-NB audio encoding format.
     */
    AMR_NB = 1,

    /**
     * Indicates the AMR-WB audio encoding format.
     */
    AMR_WB = 2,

    /**
     * Advanced Audio Coding Low Complexity (AAC-LC).
     */
    AAC_LC = 3,

    /**
     * High-Efficiency Advanced Audio Coding (HE-AAC).
     */
    HE_AAC = 4
  }

  /**
   * Enumerates audio output formats.
   * @since 6
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   */
  enum AudioOutputFormat {
    /**
     * Default audio output format, which is Moving Pictures Expert Group 4 (MPEG-4).
     */
    DEFAULT = 0,

    /**
     * Indicates the Moving Picture Experts Group-4 (MPEG4) media format.
     */
    MPEG_4 = 2,

    /**
     * Indicates the Adaptive Multi-Rate Narrowband (AMR-NB) media format.
     */
    AMR_NB = 3,

    /**
     * Indicates the Adaptive Multi-Rate Wideband (AMR-WB) media format.
     */
    AMR_WB = 4,

    /**
     * Audio Data Transport Stream (ADTS), a transmission stream format of Advanced Audio Coding (AAC) audio.
     */
    AAC_ADTS = 6
  }

  interface Location {
    /**
     * Latitude.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    latitude: number;

    /**
     * Longitude.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    longitude: number;
  }

  interface AudioRecorderConfig {
    /**
     * Audio encoding format. The default value is DEFAULT.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    audioEncoder?: AudioEncoder;

    /**
     * Audio encoding bit rate.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    audioEncodeBitRate?: number;

    /**
     * Audio sampling rate.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    audioSampleRate?: number;

    /**
     * Number of audio channels.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    numberOfChannels?: number;

    /**
     * Audio output format. The default value is DEFAULT.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    format?: AudioOutputFormat;

    /**
     * Audio output URI.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    uri: string;

    /**
     * Geographical location information.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     */
    location?: Location;
  }

  interface AudioRecorder {
    /**
     * Prepares for recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param config Recording parameters.
     * @permission "ohos.permission.MICROPHONE"
     */
    prepare(config: AudioRecorderConfig): void;

    /**
     * Starts audio recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @permission "ohos.permission.MICROPHONE"
     */
    start(): void;

    /**
     * Pauses audio recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @permission "ohos.permission.MICROPHONE"
     */
    pause(): void;

    /**
     * Resumes audio recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @permission "ohos.permission.MICROPHONE"
     */
    resume(): void;

    /**
     * Stops audio recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @permission "ohos.permission.MICROPHONE"
     */
    stop(): void;

    /**
     * Releases resources used for audio recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @permission "ohos.permission.MICROPHONE"
     */
    release(): void;

    /**
     * Resets audio recording.
     * Before resetting audio recording, you must call stop() to stop recording. After audio recording is reset, you must call prepare() to set the recording configurations for another recording.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @permission "ohos.permission.MICROPHONE"
     */
    reset(): void;

    /**
     * Listens for audio recording events.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param type Type of the audio recording event to listen for.
     * @param callback Callback used to listen for the audio recording event.
     */
    on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void;

    /**
     * Listens for audio recording error events.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.Media
     * @param type Type of the audio recording error event to listen for.
     * @param callback Callback used to listen for the audio recording error event.
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

  /**
   * Implements media composition.
   * This utility class creates a media composer container and composes tracks in the container into a video.
   * Before calling a MediaComposer method, you must use createMediaComposer() to create a MediaComposer instance.
   */
  interface MediaComposer {
    /**
     * Extracts the track of a media resource and returns the track information in a callback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param uri URI of the media source. The following types of URIs are supported.
     * @param callback Callback used to return the extracted track information.
     * @permission "ohos.permission.INTERNET"
     */
    extractSource(uri: string, callback: AsyncCallback<ComposerTracks>): void;

    /**
     * Extracts the track of a media resource and returns the track information in a promise.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param uri URI of the media source. The following types of URIs are supported.
     * @return A Promise instance used to return the extracted track information.
     * @permission "ohos.permission.INTERNET"
     */
    extractSource(uri: string): Promise<ComposerTracks>;

    /**
     * Creates a media composer container and returns the execution result in a callback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param outputUri URI for storing the new media file. The following two types of absolute paths are supported.
     * @param options Duration of the new media file.
     * @param callback Callback used to return the execution result.
     */
    configOutput(outputUri: string, options: ComposerOptions, callback: AsyncCallback<void>): void;

    /**
     * Creates a media composer container and returns the execution result in a promise.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param outputUri URI for storing the new media file. The following two types of absolute paths are supported.
     * @param options Duration of the new media file.
     * @return A Promise instance used to return the execution result.
     */
    configOutput(outputUri: string, options: ComposerOptions): Promise<void>;

    /**
     * Adds the extracted track information to the media composer container and returns the execution result in a callback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param track Track information to be added to the container.
     * @param callback Callback used to return the execution result.
     */
    addTrack(track: ComposerTrack, callback: AsyncCallback<void>): void;

    /**
     * Adds the extracted track information to the media composer container and returns the execution result in a promise.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param track Track information to be added to the container.
     * @return A Promise instance used to return the execution result.
     */
    addTrack(track: ComposerTrack): Promise<void>;

    /**
     * Removes track information and returns the execution result in a callback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param track Track information to be removed.
     * @param callback Callback used to return the execution result.
     */
    removeTrack(track: ComposerTrack, callback: AsyncCallback<void>): void;

    /**
     * Removes track information and returns the execution result in a promise.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param track Track information to be removed.
     * @return A Promise instance used to return the execution result.
     */
    removeTrack(track: ComposerTrack): Promise<void>;

    /**
     * Composes the audio track and video track in the media composer container and returns the execution result in a callback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param callback Callback used to return the execution result.
     */
    compose(callback: AsyncCallback<void>): void;

    /**
     * Composes the audio track and video track in the media composer container and returns the execution result in a promise.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @return A Promise instance used to return the execution result.
     */
    compose(): Promise<void>;

    /**
     * Releases this MediaComposer instance and returns the execution result in a callback.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param callback Callback used to return the execution result.
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this MediaComposer instance and returns the execution result in a promise.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @return A Promise instance used to return the execution result.
     */
    release(): Promise<void>;
  }

  /**
   * Extracted audio and video track information. (The attribute values in ComposerTrack are read-only.)
   * @since 7
   * @SysCap SystemCapability.Multimedia.Media
   * @devices phone, tablet, tv, wearable, car
   */
  type ComposerTracks = Array<Readonly<ComposerTrack>>;

  /**
   * Enumerates track types.
   * @since 7
   * @SysCap SystemCapability.Multimedia.Media
   * @import import media from '@ohos.multimedia.media'
   * @devices phone, tablet, tv, wearable, car
   */
  enum MediaType {
    /**
     * Video track.
     */
    VIDEO = 0,

    /**
     * Audio track.
     */
    AUDIO,
  }

  /**
   * Describes track information.
   */
  interface ComposerTrack {
    /**
     * Corresponding Extractor class that extracts track information from a media file.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    readonly trackId: number;

    /**
     * Track type.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    readonly type: MediaType;

    /**
     * Track duration, in microseconds.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    readonly duration: number;
  }

  /**
   * Describes data used for composing a media file.
   */
  interface ComposerOptions {
    /**
     * Duration of the composed media file, in microseconds.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    duration: number;
  }

  /**
   * Describes the video size, including the width and height, in pixels.
   */
  interface Size {
    /**
     * Video width.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    width: number;

    /**
     * Video height.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    height: number;
  }

  /**
   * Describes subsequent media status change data, including the video size,
   * timestamp returned after decoding, and buffer for storing data.
   */
  interface DecoderFrame {
    /**
     * Width and height of the video.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    size: Size;

    /**
     * Timestamp returned after media decoding.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    pts: number;

    /**
     * Buffer for storing the status change data returned after media decoding.
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @devices phone, tablet, tv, wearable, car
     */
    buffer: ArrayBuffer;
  }

  /**
   * Implements media decoding. You can use this class to start decoding after a MediaDecoder instance is created,
   * start decoding after seeking to the specified position, stop decoding, release the MediaDecoder instance,
   * and decode the next frame.
   */
  interface MediaDecoder {
    /**
     * Starts to decode media resources.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param URI of the media to decode. The URI can be an absolute path or a network URI.
     * The absolute path file:///data/data/com.example.myapplication/video.mp4 is recommended.
     * @param Type of the media to decode. The value 0 indicates video, and 1 indicates audio.
     */
    start(uri: string, type: MediaType): void;

    /**
     * Seeks to the specified position and starts decoding.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param Position to seek to, in ms.
     */
    seek(timeMs: number): void;

    /**
     * Stops media decoding.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     */
    stop(): void;

    /**
     * Releases this MediaDecoder instance.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     */
    release(): void;

    /**
     * Requests a frame for decoding.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     */
    requestFrame(): void;

    /**
     * Listens for decoding start events.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param Type of the decoding event to listen for. Only the start event is supported.
     * @param Callback invoked for the decoding event. The return value is of the Size type.
     */
    on(type: 'start', callback: Callback<Size>): void;

    /**
     * Listens for decoding pause, seek, and release events.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param Type of the decoding event to listen for. The supported events are stop, seek, and release.
     * @param Callback invoked for the decoding pause, seek, or release event.
     */
    on(type: 'stop' | 'seek' | 'release', callback: Callback<void>): void;

    /**
     * Listens for decoding of the first frame.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param Type of the decoding event to listen for. Only the frameChange event is supported.
     * @param Callback used to return the decoded data, which is of the Size type.
     */
    on(type: 'frameChange', callback: Callback<Size>): void;

    /**
     * Listens for decoding of subsequent frames.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param Type of the decoding event to listen for. Only the frameAvailable event is supported.
     * @param Callback used to return the decoding status.
     */
    on(type: 'frameAvailable', callback: Callback<DecoderFrame>): void;

    /**
     * Listens for decoding error events.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.Media
     * @param Type of the decoding event to listen for. Only the error event is supported.
     * @param Callback invoked for the decoding error event.
     */
    on(type: 'error', callback: ErrorCallback): void;
  }
}

export default media;