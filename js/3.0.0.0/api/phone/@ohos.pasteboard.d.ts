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
import { Want } from './ability/want';

/**
 * systemPasteboard
 * @sysCap SystemCapability.Miscservices.Pasteboard
 * @devices phone, tablet, tv, wearable, car
 * @import import pasteboard from '@ohos.pasteboard';
 */
declare namespace pasteboard {
  /**
   * Indicates the maximum number of records allowed in a PasteData object.
   * @since 7
   */
  const MAX_RECORD_NUM: number;
  /**
   * Indicates MIME types of HTML text.
   * @since 7
   */
  const MIMETYPE_TEXT_HTML: string;
  /**
   * Indicates MIME types of wants.
   * @since 7
   */
  const MIMETYPE_TEXT_WANT: string;
  /**
   * Indicates MIME types of plain text.
   * @since 7
   */
  const MIMETYPE_TEXT_PLAIN: string;
  /**
   * Indicates MIME types of URIs.
   * @since 7
   */
  const MIMETYPE_TEXT_URI: string;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_HTML.
   * @param htmlText To save the Html text content.
   * @return Containing the contents of the clipboard content object.
   * @since 7
   */
  function createHtmlData(htmlText: string): PasteData;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_WANT.
   * @param want To save the want of content.
   * @return Containing the contents of the clipboard content object.
   * @since 7
   */
  function createWantData(want: Want): PasteData;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_PLAIN.
   * @param text To save the text of content.
   * @return Containing the contents of the clipboard content object.
   * @since 6
   */
  function createPlainTextData(text: string): PasteData;

  /**
   * Creates a PasteData object for PasteData#MIMETYPE_TEXT_URI.
   * @param uri To save the uri of content.
   * @return Containing the contents of the clipboard content object.
   * @since 7
   */
  function createUriData(uri: string): PasteData;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_HTML.
   * @param htmlText To save the Html text content.
   * @return The content of a new record
   * @since 7
   */
  function createHtmlTextRecord(htmlText: string): PasteDataRecord;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_WANT.
   * @param want To save the want of content.
   * @return The content of a new record
   * @since 7
   */
  function createWantRecord(want: Want): PasteDataRecord;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_PLAIN.
   * @param text To save the text of content.
   * @return The content of a new record
   * @since 7
   */
  function createPlainTextRecord(text: string): PasteDataRecord;

  /**
   * Creates a Record object for PasteData#MIMETYPE_TEXT_URI.
   * @param uri To save the uri of content.
   * @return The content of a new record
   * @since 7
   */
  function createUriRecord(uri: string): PasteDataRecord;

  /**
   * get SystemPasteboard
   * @return The system clipboard object
   * @since 6
   */
  function getSystemPasteboard(): SystemPasteboard;

  interface PasteDataProperty {
    /**
     * additional property data. key-value pairs.
     * @since 7
     */
    additions: {
      [key: string]: object
    }
    /**
     * non-repeating MIME types of all records in PasteData.
     * @since 7
     */
    mimeTypes: Array<string>;
    /**
     * the user-defined tag of a PasteData object.
     * @since 7
     */
    tag: string;
    /**
     * a timestamp, which indicates when data is written to the system pasteboard.
     * @since 7
     */
    timestamp: number;
    /**
     * Checks whether PasteData is set for local access only.
     * @since 7
     */
    localOnly: boolean;
  }

  interface PasteDataRecord {
    /**
     * HTML text in a record.
     * @since 7
     */
    htmlText: string;
    /**
     * an want in a record.
     * @since 7
     */
    want: Want;
    /**
     * MIME types of a record.
     * @since 7
     */
    mimeType: string;
    /**
     * plain text in a record.
     * @since 7
     */
    plainText: string;
    /**
     * an URI in a record.
     * @since 7
     */
    uri: string;

    /**
     * Will a PasteData cast to the content of text content
     * @return callback Type string callback function
     * @since 7
     */
    convertToText(callback: AsyncCallback<string>): void;
    convertToText(): Promise<string>;
  }

  interface PasteData {
    /**
     * Adds a Record for HTML text to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_HTML in DataProperty.
     * @param htmlText To save the Html text content.
     * @since 7
     */
    addHtmlRecord(htmlText: string): void;

    /**
     * Adds an want Record to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_WANT in DataProperty.
     * @param want To save the want content.
     * @since 7
     */
    addWantRecord(want: Want): void;

    /**
     * Adds a PasteRecord to a PasteData object and updates MIME types in DataProperty.
     * @param record The content of a new record.
     * @since 7
     */
    addRecord(record: PasteDataRecord): void;

    /**
     * Adds a Record for plain text to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_PLAIN in DataProperty.
     * @param text To save the text of content.
     * @since 7
     */
    addTextRecord(text: string): void;

    /**
     * Adds a URI Record to a PasteData object, and updates the MIME type to PasteData#MIMETYPE_TEXT_URI in DataProperty.
     * @param uri To save the uri of content.
     * @since 7
     */
    addUriRecord(uri: string): void;

    /**
     * MIME types of all content on the pasteboard.
     * @return string type of array
     * @since 7
     */
    getMimeTypes(): Array<string>;

    /**
     * HTML text of the primary record in a PasteData object.
     * @return string type of htmltext
     * @since 7
     */
    getPrimaryHtml(): string;

    /**
     * the want of the primary record in a PasteData object.
     * @return want type of want
     * @since 7
     */
    getPrimaryWant(): Want;

    /**
     * the MIME type of the primary record in a PasteData object.
     * @return string type of mimetype
     * @since 7
     */
    getPrimaryMimeType(): string;

    /**
     * the plain text of the primary record in a PasteData object.
     * @return string type of text
     * @since 6
     */
    getPrimaryText(): string;

    /**
     * the URI of the primary record in a PasteData object.
     * @return string type of uri
     * @since 7
     */
    getPrimaryUri(): string;

    /**
     * DataProperty of a PasteData object.
     * @return PasteDataProperty type of PasteDataProperty
     * @since 7
     */
    getProperty(): PasteDataProperty;

    /**
     * a Record based on a specified index.
     * @param index The index to specify the content item
     * @return PasteDataRecord type of PasteDataRecord
     * @since 7
     */
    getRecordAt(index: number): PasteDataRecord;

    /**
     * the number of records in a PasteData object.
     * @return The number of the clipboard contents
     * @since 7
     */
    getRecordCount(): number;

    /**
     * the user-defined tag of a PasteData object.
     * @return string type of tag
     * @since 7
     */
    getTag(): string;

    /**
     * Checks whether there is a specified MIME type of data in DataProperty.
     * @param mimeType To query data types.
     * @return The query returns True on success, or False on failure.
     * @since 7
     */
    hasMimeType(mimeType: string): boolean;

    /**
     * Removes a Record based on a specified index.
     * @param index The index to specify the content item.
     * @return The query returns True on success, or False on failure.
     * @since 7
     */
    removeRecordAt(index: number): boolean;

    /**
     * Replaces a specified record with a new one.
     * @param index The index to specify the content item. record record The content of a new record.
     * @return The query returns True on success, or False on failure.
     * @since 7
     */
    replaceRecordAt(index: number, record: PasteDataRecord): boolean;
  }

  interface SystemPasteboard {
    /**
     * Callback invoked when pasteboard content changes.
     * @param type 'update'
     * @since 7
     */
    on(type: 'update', callback: () => void): void;
    /**
     * Callback invoked when pasteboard content changes.
     * @param type 'update'
     * @since 7
     */
    off(type: 'update', callback?: () => void): void;

    /**
     * Clears the pasteboard.
     * @since 7
     */
    clear(callback: AsyncCallback<void>): void;
    clear(): Promise<void>;

    /**
     * data in a PasteData object.
     * @return PasteData callback data in a PasteData object.
     * @since 6
     */
    getPasteData(callback: AsyncCallback<PasteData>): void;
    getPasteData(): Promise<PasteData>;

    /**
     * Checks whether there is content in the pasteboard.
     * @return boolean The callback success to true to false failure
     * @since 7
     */
    hasPasteData(callback: AsyncCallback<boolean>): void;
    hasPasteData(): Promise<boolean>;

    /**
     * Writes PasteData to the pasteboard.
     * @param  data Containing the contents of the clipboard content object.
     * @since 6
     */
    setPasteData(data: PasteData, callback: AsyncCallback<void>): void;
    setPasteData(data: PasteData): Promise<void>;
  }
}

export default pasteboard;
