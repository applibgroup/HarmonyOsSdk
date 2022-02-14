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

import {CommonMethod, ImageFit, Resource} from "./common";

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class VideoController {
  /**
   * constructor.
   * @since 7
   * @devices phone, tablet, car
   */
  constructor();

  /**
   * Provides events to play.
   * @since 7
   * @devices phone, tablet, car
   */
  start();

  /**
   * Provides a pause event for playback.
   * @since 7
   * @devices phone, tablet, car
   */
  pause();

  /**
   * Provides an event to stop playback.
   * @since 6
   * @devices phone, tablet, car
   */
  stop();

  /**
   * Provide the progress method of video playback.
   * @since 7
   * @devices phone, tablet, car
   */
  setCurrentTime(value: number);

  /**
   * Provides a full screen playback method.
   * @since 7
   * @devices phone, tablet, car
   */
  requestFullscreen(value: boolean);

  /**
   * Provides a method to exit full screen playback.
   * @since 7
   * @devices phone, tablet, car
   */
  exitFullscreen();
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class VideoExtend<T> extends VideoAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface Video extends VideoAttribute<Video> {
  /**
   * Set the value.
   * @devices phone, tablet, car
   * @since 7
   */
  (value: {
    src?: string | Resource,
    currentProgressRate?: number | string,
    previewUri?: string,
    controller?: VideoController
  }): Video;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class VideoAttribute<T> extends CommonMethod<T> {
  /**
   * Called when judging whether the video is muted.
   * @since 7
   * @devices phone, tablet, car
   */
  muted(value: boolean): T;

  /**
   * Called when judging whether the video is played automatically.
   * @since 7
   * @devices phone, tablet, car
   */
  autoPlay(value: boolean): T;

  /**
   * Called when judging whether the control bar is displayed.
   * @since 7
   * @devices phone, tablet, car
   */
  controls(value: boolean): T;

  /**
   * Called when judging whether the video is played circularly.
   * @since 6
   * @devices phone, tablet, car
   */
  loop(value: boolean): T;

  /**
   * Called when determining the zoom type of the video source.
   * @since 7
   * @devices phone, tablet, car
   */
  objectFit(value: ImageFit): T;

  /**
   * Called when the video is played.
   * @since 7
   * @devices phone, tablet, car
   */
  onStart(event: () => void): T;

  /**
   * Called when the video is paused.
   * @since 7
   * @devices phone, tablet, car
   */
  onPause(event: () => void): T;

  /**
   * Called when the video playback ends.
   * @since 7
   * @devices phone, tablet, car
   */
  onFinish(event: () => void): T;

  /**
   * Called when the video enters and exits the full screen.
   * @since 7
   * @devices phone, tablet, car
   */
  onFullscreenChange(callback: (event?: { fullscreen: boolean }) => void): T;

  /**
   * Called when the video preparation is complete.
   * @since 7
   * @devices phone, tablet, car
   */
  onPrepared(callback: (event?: { duration: number }) => void): T;

  /**
   * Called when the time information is reported when the progress bar process is operated.
   * @since 7
   * @devices phone, tablet, car
   */
  onSeeking(callback: (event?: { time: number }) => void): T;

  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * @since 7
   * @devices phone, tablet, car
   */
  onSeeked(callback: (event?: { time: number }) => void): T;

  /**
   * Called when the playback progress changes.
   * @since 7
   * @devices phone, tablet, car
   */
  onUpdate(callback: (event?: { time: number }) => void): T;

  /**
   * Called when playback fails.
   * @since 7
   * @devices phone, tablet, car
   */
  onError(event: () => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const VideoInterface: Video;
