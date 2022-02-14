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
 * @devices phone, tablet, car
 * @since 7
 */
export declare class CircleExtend<T> extends CircleAttribute<T> {
}

/**
 * new Circle component.
 * @devices phone, tablet, car
 * @since 7
 */
interface Circle extends CircleAttribute<Circle> {

  /**
   * Set new value..
   * @devices phone, tablet, car
   * @since 7
   */
  new (value?: { width?: string | number, height?: string | number }): Circle;

  /**
   * Set the value..
   * @devices phone, tablet, car
   * @since 7
   */
  (value?: { width?: string | number, height?: string | number }): Circle;
}

/**
 * Circle drawing component.
 * @devices phone, tablet, car
 * @since 7
 */
declare class CircleAttribute<T> extends CommonShapeMethod<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const CircleInterface: Circle;
