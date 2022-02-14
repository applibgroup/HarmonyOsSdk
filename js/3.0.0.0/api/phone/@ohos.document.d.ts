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
import { AsyncCallback } from './basic'

export default document;

/**
 * document
 * @sysCap N/A
 * @since 6
 * @devices phone, tablet, tv, wearable, car
 * @import import document from '@ohos.document';
 * @permission N/A
 */
declare namespace document {
    export { choose };
    export { show };
    export { create };
}

/**
 * choose.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function choose
 * @param {string} type - type.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function choose(types?: string[]): Promise<string>;
declare function choose(callback: AsyncCallback<string>): void;
declare function choose(types: string[], callback: AsyncCallback<string>): void;

/**
 * show.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function show
 * @param {string} uri - uri.
 * @param {string} type - type.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function show(uri: string, type: string): Promise<void>;
declare function show(uri: string, type: string, callback: AsyncCallback<void>): void;

/**
 * create.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function create
 * @param {string} name - name.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function create(name: string): Promise<string>;
declare function create(name: string, callback: AsyncCallback<string>): void;
