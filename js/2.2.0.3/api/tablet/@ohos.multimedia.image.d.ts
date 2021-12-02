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
 * @name image
 * @since 6
 * @SysCap SystemCapability.Multimedia.Image
 * @import import image from '@ohos.multimedia.image';
 * @devices phone, tablet, tv, wearable
 */
declare namespace image {

  /**
   * Describes the size of an image.
   */
  interface Size {
    /**
     * Height
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @devices phone, tablet, tv, wearable
     */
    height: number;

    /**
     * Width
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @devices phone, tablet, tv, wearable
     */
    width: number;
  }

  /**
   * Describes image information.
   */
  interface ImageInfo {
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @devices phone, tablet, tv, wearable
     */
    size: Size;
  }

  /**
   * Describes the option for image packing.
   */
  interface PackingOption {
    /**
     * Multipurpose Internet Mail Extensions (MIME) format of the target image, for example, image/jpeg.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @devices phone, tablet, tv, wearable
     */
    format: string;

    /**
     * Quality of the target image. The value is an integer ranging from 0 to 100. A larger value indicates better
     * image quality but larger space occupied.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @devices phone, tablet, tv, wearable
     */
    quality: number;
  }

  /**
   * Creates an ImageSource instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.Image
   * @import import image from '@ohos.multimedia.image'
   * @param uri Image source URI.
   * @return Returns the ImageSource instance if the operation is successful; returns null otherwise.
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * Creates an ImagePacker instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.Image
   * @import import image from '@ohos.multimedia.image'
   * @return Returns the ImagePacker instance if the operation is successful; returns null otherwise.
   */
  function createImagePacker(): ImagePacker;

  interface ImageSource {
    /**
     * Obtains information about an image with the specified sequence number and uses a callback to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param index Sequence number of an image.
     * @param callback Callback used to return the image information.
     */
    getImageInfo(index: number, callback: AsyncCallback<ImageInfo>): void;

    /**
     * Obtains information about this image and uses a callback to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param callback Callback used to return the image information.
     */
    getImageInfo(callback: AsyncCallback<ImageInfo>): void;

    /**
     * Get image information from image source.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param index Sequence number of an image. If this parameter is not specified, the default value 0 is used.
     * @return A Promise instance used to return the image information.
     */
    getImageInfo(index?: number): Promise<ImageInfo>;

    /**
     * Releases an ImageSource instance and uses a callback to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param callback Callback to return the operation result.
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @return A Promise instance used to return the operation result.
     */
    release(): Promise<void>;

    /**
     * Supported image formats.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     */
    readonly supportedFormats: Array<string>;
  }

  interface ImagePacker {
    /**
     * Compresses or packs an image and uses a callback to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param source Image to be processed.
     * @param option Option for image packing.
     * @param callback Callback used to return the packed data.
     */
    packing(source: ImageSource, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param source Image to be processed.
     * @param option Option for image packing.
     * @return A Promise instance used to return the compressed or packed data.
     */
    packing(source: ImageSource, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * Releases an ImagePacker instance and uses a callback to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @param callback Callback to return the operation result.
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases an ImagePacker instance and uses a promise to return the result.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     * @return A Promise instance used to return the operation result.
     */
    release(): Promise<void>;

    /**
     * Supported image formats.
     * @since 6
     * @SysCap SystemCapability.Multimedia.Image
     * @import import image from '@ohos.multimedia.image'
     */
    readonly supportedFormats: Array<string>;
  }
}

export default image;