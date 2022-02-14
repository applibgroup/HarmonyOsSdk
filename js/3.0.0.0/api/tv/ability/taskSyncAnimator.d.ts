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

import { AsyncCallback } from './basic';

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type Matrix = [number, number, number, number, number, number]

export interface layerInfo {
  surfaceIndex: number;
  mode: number;
  positionX: number;
  positionY: number;
  zIndex: number;
  taskId: number;
}

export interface CallbackData {
  taskSyncAnimationId: number;
  layerArray: layerInfo[];
}

export interface TaskSyncAnimationParameters {
  surfaceIndex: number;
  opacity: number;
  borderRadius: number;
  zIndex: number;
  hide: Boolean;
  windowCrop: Rect;
  matrix: Matrix;
  frameCount: number;
}

export interface TaskSyncAnimationOptions {
  enable: Boolean;
  type: number;
  duration: number;
  stateBarDelay: number;
  onAnimationBegin(callbackData: CallbackData);
  onAnimationCancel();
}
