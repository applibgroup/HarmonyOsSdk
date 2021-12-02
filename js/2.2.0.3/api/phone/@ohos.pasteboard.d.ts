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

import { AsyncCallback } from './basic';

/**
 * pasteboard
 *
 * @since 6
 * @import pasteboard from '@ohos.pasteboard';
 * @devices phone, tablet, tv, wearable
 */
declare namespace pasteboard {
  function createPlainTextData(text: string): PasteData;

  function getSystemPasteboard(): SystemPasteboard;

  interface PasteData {
    /**
     * Obtains the plain text of the primary record in a PasteData object.
     */
    getPrimaryText(): string;
  }

  interface SystemPasteboard {
    /**
     * Obtains data in a PasteData object.
     */
    getPasteData(callback: AsyncCallback<PasteData>): void;
    getPasteData(): Promise<PasteData>;

    /**
     * Writes PasteData to the pasteboard.
     * @param data paste data
     */
    setPasteData(data: PasteData, callback: AsyncCallback<void>): void;
    setPasteData(data: PasteData): Promise<void>;
  }
}

export default pasteboard;
