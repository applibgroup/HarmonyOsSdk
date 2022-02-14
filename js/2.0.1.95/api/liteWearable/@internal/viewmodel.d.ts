/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

interface ViewModel {
  /**
   * Displays content based on the current system language and a path of the language resource key specified through $t.
   * @param path Path of the language resource key
   * @param param Content used to replace placeholders during runtime. There are two types of placeholders available:
   *              1. Named placeholder, for example, {name}. The actual content must be of the object type, for example, $t('strings.object', {name: 'Hello world'}).
   *              2. Digit placeholder, for example, {0}. The actual content must be of the array type, for example, $t('strings.array', ['Hello world']).
   * @returns content to display
   */
  $t(path: string, param?: object | Array<any>): string;

  /**
   * An object that holds all DOM elements and component instances that have been registered with the refs attribute
   */
  $refs: IReference;
}

interface IReference {
  [k: string]: any;
}

interface Options<T extends ViewModel, Data = DefaultData<T>> {
  /**
   * Data model of the page that can be converted into a JSON object.
   * The attribute name cannot start with $ or an underscore (_) or contain the reserved words such as for, if, show, and tid.
   * For a function, the return value must be an object.
   * Set the value of data to the return value of the function during page initialization.
   */
  data?: Data;

  /**
   * Called when the page is initialized. This function can be called only once in a lifecycle.
   */
  onInit?(): void;

  /**
   * Called when the page is created. This function can be called only once in a lifecycle.
   */
  onReady?(): void;

  /**
   * Called when the page is displayed.
   */
  onShow?(): void;

  /**
   * Called when the application is created
   */
  onCreate?(): void;

  /**
   * Called when the application is destroyed or called when the page is redirected to another one (without entering the navigation stack).
   */
  onDestroy?(): void;
}

type DefaultData<T> = object;
type CombinedOptions<T extends ViewModel, Data> = object &
  Options<T, Data> &
  ThisType<T & ViewModel & Data>;
export declare function extendViewModel<T extends ViewModel, Data>(
  options: CombinedOptions<T, Data>
): ViewModel & Data;
