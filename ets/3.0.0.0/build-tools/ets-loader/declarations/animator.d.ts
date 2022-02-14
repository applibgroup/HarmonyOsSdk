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

declare class SpringProp {
    constructor(mass: number, stiffness: number, damping: number);
}
declare class SpringMotion {
    constructor(start: number, end: number, velocity: number, prop: SpringProp);
}
declare class FrictionMotion {
    constructor(friction: number, position: number, velocity: number);
}
declare class ScrollMotion {
    constructor(position: number, velocity: number, min: number, max: number, prop: SpringProp);
}
declare class AnimatorExtend<T> extends AnimatorAttribute<T> {
}
interface Animator extends AnimatorAttribute<Animator> {
    (value: string): Animator;
}
declare class AnimatorAttribute<T> extends CommonMethod<T> {
    state(value: AnimationStatus): T;
    duration(value: number): T;
    curve(value: Curve): T;
    delay(value: number): T;
    fillMode(value: FillMode): T;
    iterations(value: number): T;
    playMode(value: PlayMode): T;
    motion(value: SpringMotion | FrictionMotion | ScrollMotion): T;
    onStart(event: () => void): T;
    onPause(event: () => void): T;
    onRepeat(event: () => void): T;
    onCancel(event: () => void): T;
    onFinish(event: () => void): T;
    onFrame(event: (value: number) => void): T;
}
declare const Animator: Animator;
