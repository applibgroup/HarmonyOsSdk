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
 * Hyperlink component, which gives the scope of subcomponents.
 * @devices phone, tablet, car
 * @since 7
 */
export declare class HyperlinkExtend<T> extends HyperlinkAttribute<T> {
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface Hyperlink extends HyperlinkAttribute<Hyperlink> {
  /**
   * Return to get Hyperlink.
   * adress: Web page redirected by the hyperlink component.
   * content: Hyperlinks in the hyperlink component display text.
   * @devices phone, tablet, car
   * @since 7
   */
  (address: string | Resource, content?: string | Resource): Hyperlink;
}

/**
 * inheritance CommonMethod
 * @devices phone, tablet, car
 * @since 7
 */
declare class HyperlinkAttribute<T> extends CommonMethod<T> {
  /**
   * Set Color
   * @devices phone, tablet, car
   * @since 7
   */
  color(value: Color | number | string | Resource): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const HyperlinkInterface: Hyperlink;
