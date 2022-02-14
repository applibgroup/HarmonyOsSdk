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

import {DialogAlignment} from "./alert_dialog";
import {Resource} from "./common";

/**
 * Use the CustomDialogController class to display the custom pop-up window.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class CustomDialogController {
  /**
   * The constructor transfers parameter settings.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(value: {
    builder: any, cancel?: () => void,
    autoCancel?: boolean,
    alignment?: DialogAlignment,
    offset?: { dx: number | string | Resource, dy: number | string | Resource },
    customStyle?: boolean
  });

  /**
   * Display the content of the customized pop-up window. If the content has been displayed, it does not take effect.
   * @devices phone, tablet, car
   * @since 7
   */
  open();

  /**
   * Closes the custom pop-up window. If the window is closed, the window does not take effect.
   * @devices phone, tablet, car
   * @since 7
   */
  close();
}
