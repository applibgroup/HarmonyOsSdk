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

import {Resource, Color} from "./common"

/**
 * The alignment of dialog,
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum DialogAlignment {
  /**
   * Vertical top alignment.
   * @devices phone, tablet, car
   * @since 7
   */
  Top,

  /**
   * Align vertically to the center.
   * @devices phone, tablet, car
   * @since 7
   */
  Center,

  /**
   * Vertical bottom alignment.
   * @devices phone, tablet, car
   * @since 7
   */
  Bottom,

  /**
   * Default alignment.
   * @devices phone, tablet, car
   * @since 7
   */
  Default
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface AlertDialog {
  /**
   * Invoking method display.
   * @devices phone, tablet, car
   * @since 7
   */
  show(value: {
    /**
     * Title Properties
     * @devices phone, tablet, car
     * @since 7
     */
    title?: string | Resource;

    /**
     * message Properties
     * @devices phone, tablet, car
     * @since 7
     */
    message: string | Resource;

    /**
     * Allows users to click the mask layer to exit.
     * @devices phone, tablet, car
     * @since 7
     */
    autoCancel?: boolean;

    /**
     * Invoke the commit function.
     * @devices phone, tablet, car
     * @since 7
     */
    confirm?: {

      /**
       * Text content of the confirmation button.
       * @devices phone, tablet, car
       * @since 7
       */
      value: string | Resource;

      /**
       * Text color of the confirmation button.
       * @devices phone, tablet, car.
       * @since 7
       */
      fontColor?: Color | number | string | Resource;

      /**
       * Background color of the confirmation button.
       * @devices phone, tablet, car.
       * @since 7
       */
      backgroundColor?: Color | number | string | Resource;

      /**
       * Method executed by the callback.
       * @devices phone, tablet, car
       * @since 7
       */
      action: () => void;
    };

    /**
     * Execute Cancel Function.
     * @devices phone, tablet, car
     * @since 7
     */
    cancel?: () => void;

    /**
     * Alignment in the vertical direction.
     * @devices phone, tablet, car
     * @since 7
     */
    alignment?: DialogAlignment;

    /**
     * Offset of the pop-up window relative to the alignment position.
     * @devices phone, tablet, car
     * @since 7
     */
    offset?: { dx: number | string | Resource, dy: number | string | Resource };

    /**
     * Grid count of dialog.
     * @devices phone, tablet, car.
     * @since 7
     */
    gridCount?: number;
  } | {

    /**
     * Title Properties
     * @devices phone, tablet, car
     * @since 7
     */
    title?: string | Resource;

    /**
     * message Properties
     * @devices phone, tablet, car
     * @since 7
     */
    message: string | Resource;

    /**
     * Allows users to click the mask layer to exit.
     * @devices phone, tablet, car
     * @since 7
     */
    autoCancel?: boolean;

    /**
     * First button.
     * @devices phone, tablet, car
     * @since 7
     */
    primaryButton: {
      /**
       * Text content of the confirmation button.
       * @devices phone, tablet, car
       * @since 7
       */
      value: string | Resource;

      /**
       * Text color of the confirmation button.
       * @devices phone, tablet, car.
       * @since 7
       */
      fontColor?: Color | number | string | Resource;

      /**
       * Background color of the confirmation button.
       * @devices phone, tablet, car.
       * @since 7
       */
      backgroundColor?: Color | number | string | Resource;

      /**
       * Method executed by the callback.
       * @devices phone, tablet, car
       * @since 7
       */
      action: () => void;
    };

    /**
     * Second button.
     * @devices phone, tablet, car
     * @since 7
     */
    secondaryButton: {
      /**
       * Text content of the confirmation button.
       * @devices phone, tablet, car
       * @since 7
       */
      value: string | Resource;

      /**
       * Text color of the confirmation button.
       * @devices phone, tablet, car.
       * @since 7
       */
      fontColor?: Color | number | string | Resource;

      /**
       * Background color of the confirmation button.
       * @devices phone, tablet, car.
       * @since 7
       */
      backgroundColor?: Color | number | string | Resource;

      /**
       * Method executed by the callback.
       * @devices phone, tablet, car
       * @since 7
       */
      action: () => void;
    };

    /**
     * Execute Cancel Function.
     * @devices phone, tablet, car
     * @since 7
     */
    cancel?: () => void;

    /**
     * Alignment in the vertical direction.
     * @devices phone, tablet, car
     * @since 7
     */
    alignment?: DialogAlignment;

    /**
     * Offset of the pop-up window relative to the alignment position.
     * @devices phone, tablet, car
     * @since 7
     */
    offset?: { dx: number | string | Resource, dy: number | string | Resource };

    /**
     * Grid count of dialog.
     * @devices phone, tablet, car.
     * @since 7
     */
    gridCount?: number;
  });
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const AlertDialogInterface: AlertDialog;
