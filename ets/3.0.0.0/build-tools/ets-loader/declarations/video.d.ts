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

declare class VideoController {
    constructor();
    start();
    pause();
    stop();
    setCurrentTime(value: number);
    requestFullscreen(value: boolean);
    exitFullscreen();
}
declare class VideoExtend<T> extends VideoAttribute<T> {
}
interface Video extends VideoAttribute<Video> {
    (value: {
        src?: string | Resource;
        currentProgressRate?: number | string;
        previewUri?: string;
        controller?: VideoController;
    }): Video;
}
declare class VideoAttribute<T> extends CommonMethod<T> {
    muted(value: boolean): T;
    autoPlay(value: boolean): T;
    controls(value: boolean): T;
    loop(value: boolean): T;
    objectFit(value: ImageFit): T;
    onStart(event: () => void): T;
    onPause(event: () => void): T;
    onFinish(event: () => void): T;
    onFullscreenChange(callback: (event?: {
        fullscreen: boolean;
    }) => void): T;
    onPrepared(callback: (event?: {
        duration: number;
    }) => void): T;
    onSeeking(callback: (event?: {
        time: number;
    }) => void): T;
    onSeeked(callback: (event?: {
        time: number;
    }) => void): T;
    onUpdate(callback: (event?: {
        time: number;
    }) => void): T;
    onError(event: () => void): T;
}
declare const Video: Video;
