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

import {CommonMethod, Color, Resource} from "./common";

/**
 * QR code information
 * @devices phone, tablet, car
 * @since 7
 */
export declare class QRCodeExtend<T> extends QRCodeAttribute<T> {
}

/**
 * Provides an interface for generating QR codes.
 * @devices phone, tablet, car
 * @since 7
 */
interface QRCode extends QRCodeAttribute<QRCode> {
  /**
   * Called when a QR code is set.
   * @devices phone, tablet, car
   * @since 7
   */
  (
    value: string): QRCode;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class QRCodeAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the QR code color is set.
   * @devices phone, tablet, car
   * @since 7
   */
  color(value: Color | number | string | Resource): T;

  /**
   * Called when setting the QR code background color.
   * @devices phone, tablet, car
   * @since 7
   */
  backgroundColor(value: Color | number | string | Resource): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const QRCodeInterface: QRCode;
