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

declare enum GestureDirection {
    All,
    Horizontal,
    Vertical
}
declare enum PanDirection {
    None,
    Horizontal,
    Left,
    Right,
    Vertical,
    Up,
    Down,
    All
}
declare enum GestureMode {
    Sequence,
    Parallel,
    Exclusive
}
declare enum GestureMask {
    Normal,
    IgnoreInternal
}
declare type GestureType = TapGesture | LongPressGesture | PanGesture | PinchGesture | RotationGesture | GestureGroup;
interface GestureEvent {
    repeat: boolean;
    offsetX: number;
    offsetY: number;
    scale: number;
    angle: number;
    timestamp: number;
    globalX: number;
    globalY: number;
    localX: number;
    localY: number;
    pinchCenterX: number;
    pinchCenterY: number;
}
interface TapGesture {
    (value?: {
        count?: number;
        fingers?: number;
    }): TapGesture;
    onAction(event: (event?: GestureEvent) => void): TapGesture;
}
interface LongPressGesture {
    (value?: {
        fingers?: number;
        repeat?: boolean;
        duration?: number;
    }): LongPressGesture;
    onAction(event: (event?: GestureEvent) => void): LongPressGesture;
    onActionEnd(event: (event?: GestureEvent) => void): LongPressGesture;
    onActionCancel(event: () => void): LongPressGesture;
}
declare class PanGestureOption {
    constructor(value?: {
        fingers?: number;
        direction?: PanDirection;
        distance?: number;
    });
    setDirection(value: PanDirection);
    setDistance(value: number);
    setFingers(value: number);
}
interface PanGesture {
    (value?: {
        fingers?: number;
        direction?: PanDirection;
        distance?: number;
    } | PanGestureOption): PanGesture;
    onActionStart(event: (event?: GestureEvent) => void): PanGesture;
    onActionUpdate(event: (event?: GestureEvent) => void): PanGesture;
    onActionEnd(event: (event?: GestureEvent) => void): PanGesture;
    onActionCancel(event: () => void): PanGesture;
}
interface PinchGesture {
    (value?: {
        fingers?: number;
        distance?: number;
    }): PinchGesture;
    onActionStart(event: (event?: GestureEvent) => void): PinchGesture;
    onActionUpdate(event: (event?: GestureEvent) => void): PinchGesture;
    onActionEnd(event: (event?: GestureEvent) => void): PinchGesture;
    onActionCancel(event: () => void): PinchGesture;
}
interface RotationGesture {
    (value?: {
        fingers?: number;
        angle?: number;
    }): RotationGesture;
    onActionStart(event: (event?: GestureEvent) => void): RotationGesture;
    onActionUpdate(event: (event?: GestureEvent) => void): RotationGesture;
    onActionEnd(event: (event?: GestureEvent) => void): RotationGesture;
    onActionCancel(event: () => void): RotationGesture;
}
interface GestureGroup {
    (mode: GestureMode, ...gesture: GestureType[]): GestureGroup;
    onCancel(event: () => void): GestureGroup;
}
declare const TapGesture: TapGesture;
declare const LongPressGesture: LongPressGesture;
declare const PanGesture: PanGesture;
declare const PinchGesture: PinchGesture;
declare const RotationGesture: RotationGesture;
declare const GestureGroup: GestureGroup;
