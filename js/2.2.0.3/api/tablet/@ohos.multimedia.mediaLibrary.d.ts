/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from './basic';

/**
 * @name mediaLibrary
 * @since 6
 * @SysCap SystemCapability.Multimedia.MediaLibrary
 * @import import media from '@ohos.multimedia.mediaLibrary'
 * @devices phone, tablet, tv, wearable
 */
declare namespace mediaLibrary {
  /**
   * Obtains a MediaLibrary instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @return Returns a MediaLibrary instance if the operation is successful; returns null otherwise.
   */
  function getMediaLibrary(): MediaLibrary;

  /**
   * Describes media resource options.
   * @since 6
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   */
  interface MediaAssetOption {

    /**
     * URI of the media source.
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable
     */
    src: string;

    /**
     * Multipurpose Internet Mail Extensions (MIME) type of the media.
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable
     */
    mimeType: string;

    /**
     * Relative path for storing media resources.
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable
     */
    relativePath?: string;
  }

  /**
   * Describes media selection options.
   * @since 6
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   */
  interface MediaSelectOption {

    /**
     * Media type, which can be image, video, or media (indicating both image and video).
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable
     */
    type: 'image' | 'video' | 'media';

    /**
     * Maximum number of media items that can be selected
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable
     */
    count: number;
  }

  /**
   * Manages media resources such as images, audios, and videos.
   * Before calling a MediaLibrary method, you must use getMediaLibrary() to create a MediaLibrary instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, wearable
   */
  interface MediaLibrary {
    /**
     * Stores media resources. This method uses an asynchronous callback to return the URI that stores the media resources.
     * @devices phone, tablet, tv, wearable
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media resource option.
     * @param callback Callback used to return the URI that stores the media resources.
     */
    storeMediaAsset(option: MediaAssetOption, callback: AsyncCallback<string>): void;

    /**
     * Stores media resources. This method uses a promise to return the URI that stores the media resources.
     * @devices phone, tablet, tv, wearable
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media resource option.
     * @return Promise used to return the URI that stores the media resources.
     */
    storeMediaAsset(option: MediaAssetOption): Promise<string>;

    /**
     * Starts image preview, with the first image to preview specified. This method uses an asynchronous callback to receive the execution result.
     * @devices phone, tablet, tv
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param images List of images to preview.
     * @param index Sequence number of the first image to preview.
     * @param callback Callback used for image preview. No value is returned.
     */
    startImagePreview(images: Array<string>, index: number, callback: AsyncCallback<void>): void;

    /**
     * Starts image preview. This method uses an asynchronous callback to receive the execution result.
     * @devices phone, tablet, tv
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param images List of images to preview.
     * @param callback Callback used for image preview. No value is returned.
     */
    startImagePreview(images: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Starts image preview, with the first image to preview specified. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param images List of images to preview.
     * @param index Sequence number of the first image to preview.
     * @return Promise used to return whether the operation is successful.
     */
    startImagePreview(images: Array<string>, index?: number): Promise<void>;

    /**
     * Starts media selection. This method uses an asynchronous callback to return the list of URIs that store the selected media resources.
     * @devices phone, tablet, tv
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media selection option.
     * @param callback Callback used to return the list of URIs that store the selected media resources.
     */
    startMediaSelect(option: MediaSelectOption, callback: AsyncCallback<Array<string>>): void;

    /**
     * Starts media selection. This method uses a promise to return the list of URIs that store the selected media resources.
     * @devices phone, tablet, tv
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media selection option.
     * @return Promise used to return the list of URIs that store the selected media resources.
     */
    startMediaSelect(option: MediaSelectOption): Promise<Array<string>>;
  }
}

export default mediaLibrary;