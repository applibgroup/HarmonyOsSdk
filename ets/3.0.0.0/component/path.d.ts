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

import {CommonShapeMethod} from "./common";

/**
 * Path drawing.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PathExtend<T> extends PathAttribute<T> {
}

/**
 * Provides the path drawing interface.
 * @devices phone, tablet, car
 * @since 7
 */
interface Path extends PathAttribute<Path> {
  /**
   * Called when drawing with a new path.
   * @devices phone, tablet, car
   * @since 7
   */
  new (value?: { width?: number | string, height?: number | string, commands?: string }): Path;

  /**
   * Called when drawing path.
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { width?: number | string, height?: number | string, commands?: string }): Path;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class PathAttribute<T> extends CommonShapeMethod<T> {
  /**
   * Called when the command string drawn by the path is set.
   * @devices phone, tablet, car
   * @since 7
   */
  commands(value: string): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const PathInterface: Path;
