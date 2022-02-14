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
import image from './@ohos.multimedia.image';

/**
 * @name mediaLibrary
 * @since 6
 * @SysCap SystemCapability.Multimedia.MediaLibrary
 * @import import media from '@ohos.multimedia.mediaLibrary'
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace mediaLibrary {
  /**
   * Obtains a MediaLibrary instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, wearable, car
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
     * @devices phone, tablet, tv, wearable, car
     */
    src: string;

    /**
     * Multipurpose Internet Mail Extensions (MIME) type of the media.
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable, car
     */
    mimeType: string;

    /**
     * Relative path for storing media resources.
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable, car
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
     * @devices phone, tablet, tv, wearable, car
     */
    type: 'image' | 'video' | 'media';

    /**
     * Maximum number of media items that can be selected
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, wearable, car
     */
    count: number;
  }

  /**
   * Enumerates media metadata keys.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, wearable, car
   */
  enum MetadataCode {
    /**
     * Retrieves a numeric string that describes the order of audio data sources in the original data record.
     */
    AV_KEY_CD_TRACK_NUMBER = 0,

    /**
     * Retrieves the album title of a data source.
     */
    AV_KEY_ALBUM = 1,

    /**
     * Retrieves information about performers or artists related to a data source.
     */
    AV_KEY_ARTIST = 2,

    /**
     * Retrieves information about the author of a data source.
     */
    AV_KEY_AUTHOR = 3,

    /**
     * Retrieves information about the composer of a data source.
     */
    AV_KEY_COMPOSER = 4,

    /**
     * Retrieves the date when a data source was created or modified.
     */
    AV_KEY_DATE = 5,

    /**
     * Retrieves the type or content type of a data source.
     */
    AV_KEY_GENRE = 6,

    /**
     * Retrieves the title of a data source.
     */
    AV_KEY_TITLE = 7,

    /**
     * Retrieves the year when a data source was created or modified.
     */
    AV_KEY_YEAR = 8,

    /**
     * Retrieves the playback duration (in milliseconds) of a data source.
     */
    AV_KEY_DURATION = 9,

    /**
     * Retrieves the number of audio tracks (such as audio, video, and text) in a data source
     * (such as an MP4 or 3GPP file).
     */
    AV_KEY_NUM_TRACKS = 10,

    /**
     * Retrieves information about the author (such as the lyric author) of a data source.
     */
    AV_KEY_WRITER = 11,

    /**
     * Retrieves data sources of the MIME types. MIME types include video/mp4, audio/mp4,
     * and audio/amr-wb.
     */
    AV_KEY_MIMETYPE = 12,

    /**
     * Retrieves information about performers or artists related to a data source.
     */
    AV_KEY_ALBUM_ARTIST = 13,

    /**
     * Retrieves a numeric string that describes which part of the collection an audio data
     * source comes from.
     */
    AV_KEY_DISC_NUMBER = 14,

    /**
     * Retrieves a music album in the editing state.
     */
    AV_KEY_COMPILATION = 15,

    /**
     * Retrieves whether the media contains audio.
     */
    AV_KEY_HAS_AUDIO = 16,

    /**
     * Retrieves whether the media contains video.
     */
    AV_KEY_HAS_VIDEO = 17,

    /**
     * Retrieves the video width of the media containing video.
     */
    AV_KEY_VIDEO_WIDTH = 18,

    /**
     * Retrieves the video height of the media containing video.
     */
    AV_KEY_VIDEO_HEIGHT = 19,

    /**
     * Retrieves the average bitrate, in bits per second, if any.
     */
    AV_KEY_BITRATE = 20,

    /**
     * Retrieves the language code of the text track, if any. If there are multiple text tracks, an
     * example return value is eng:Chi.
     */
    AV_KEY_TIMED_TEXT_LANGUAGES = 21,

    /**
     * Retrieves information about whether a media file is protected by the Digital Rights Management (DRM).
     */
    AV_KEY_IS_DRM = 22,

    /**
     * Retrieves location information, if any. The location should be specified under an
     * mp4/3gp box "@xyz" according to ISO 6709. For example, if the longitude is -90
     * degrees and the latitude is 180 degrees, the retrieval result is +180.0000-90.0000/.
     */
    AV_KEY_LOCATION = 23,

    /**
     * Retrieves the video rotation angle, in degrees, if any. The rotation angle can be 0, 90, 180, or 270 degrees.
     */
    AV_KEY_VIDEO_ROTATION = 24,

    /**
     * Retrieves the original capture frame rate, if any. The capture frame rate will be a floating point number.
     */
    AV_KEY_CAPTURE_FRAMERATE = 25,

    /**
     * Retrieves whether the media contains static images.
     */
    AV_KEY_HAS_IMAGE = 26,

    /**
     * Retrieves the number of static images of the media containing static images.
     */
    AV_KEY_IMAGE_COUNT = 27,

    /**
     * Retrieves the main image index of the media containing static images.
     */
    AV_KEY_IMAGE_PRIMARY = 28,

    /**
     * Retrieves the main image width of the media containing static images.
     */
    AV_KEY_IMAGE_WIDTH = 29,

    /**
     * Retrieves the main image height of the media containing static images.
     */
    AV_KEY_IMAGE_HEIGHT = 30,

    /**
     * Retrieves the rotation angle, in clockwise, of the main image of the media containing
     * static images. The rotation angle can be 0, 90, 180, or 270 degrees.
     */
    AV_KEY_IMAGE_ROTATION = 31,

    /**
     * Retrieves the total number of frames in the video sequence of the media containing video.
     */
    AV_KEY_VIDEO_FRAME_COUNT = 32,

    /**
     * Retrieves the offset of the media containing Exchangeable image file format (Exif) data.
     */
    AV_KEY_EXIF_OFFSET = 33,

    /**
     * Retrieves the data length of the media containing Exif data.
     */
    AV_KEY_EXIF_LENGTH = 34,

    /**
     * Retrieves the color standard, if any.
     */
    AV_KEY_COLOR_STANDARD = 35,

    /**
     * Retrieves the color transmission characteristic curve, if any.
     */
    AV_KEY_COLOR_TRANSFER = 36,

    /**
     * Retrieves the color range, if any.
     */
    AV_KEY_COLOR_RANGE = 37,

    /**
     * Retrieves the sampling rate, if any.
     */
    AV_KEY_SAMPLE_RATE = 38,

    /**
     * Retrieves each sampling bit, if any.
     */
    AV_KEY_BITS_PER_SAMPLE = 39,
  }

  /**
   * Creates an AVMetadataHelper instance.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary';
   * @return Returns an AVMetadataHelper instance if the operation is successful; returns null otherwise.
   * @devices phone, tablet, tv, wearable, car
   */
  function createAVMetadataHelper(): AVMetadataHelper;

  /**
   * Provides methods for obtaining media frame data and metadata. Before calling a method of
   * AVMetadataHelper, you must use createAVMetadataHelper() to create an instance.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, wearable, car
   */
  interface AVMetadataHelper {
    /**
     * Sets the media file with the specified URI as the media source. This method uses a callback
     * to return the setting result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param uri URI of the media file.
     * @param callback Callback invoked when the media source is set. If the operation fails, an
     * error message is returned.
     * @permission ohos.permission.READ_MEDIA.
     */
    setSource(uri: string, callback: AsyncCallback<void>): void;

    /**
     * Sets the media file with the specified URI as the media source. This method uses a promise
     * to return the setting result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param uri URI of the media file.
     * @return A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @permission ohos.permission.READ_MEDIA.
     */
    setSource(uri: string): Promise<void>;

    /**
     * Obtains the PixelMap object closest to the specified timestamp in the video source.
     * This method uses a callback to return the PixelMap object.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param time Timestamp of a frame.
     * @param callback Callback used to return a PixelMap object.
     * @permission ohos.permission.READ_MEDIA.
     */
    fetchVideoPixelMapByTime(time: number, callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Obtains the PixelMap object closest to the specified timestamp in the video source.
     * This method uses a promise to return the object.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param time Timestamp of a frame.
     * @return A Promise instance used to return a PixelMap object.
     * @permission ohos.permission.READ_MEDIA.
     */
    fetchVideoPixelMapByTime(time: number): Promise<image.PixelMap>;

    /**
     * Obtains the value of the media metadata based on the specified key.
     * This method uses a callback to return the metadata value.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param key Key of the metadata whose value is to be obtained. For details, see MetadataCode.
     * @param callback Callback used to return the metadata value
     * @permission ohos.permission.READ_MEDIA.
     */
    resolveMetadata(key: MetadataCode, callback: AsyncCallback<string>): void;

    /**
     * Obtains the value of the media metadata based on the specified key.
     * This method uses a promise to return the metadata value.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param key Key of the metadata whose value is to be obtained. For details, see MetadataCode.
     * @return A Promise instance used to return the metadata value.
     * @permission ohos.permission.READ_MEDIA.
     */
    resolveMetadata(key: MetadataCode): Promise<string>;

    /**
     * Releases the media resources. This method uses a callback to return the release result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param callback Callback used to return the operation result. If the operation fails, an error
     * message is returned.
     * @permission ohos.permission.READ_MEDIA.
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases the media resources. This method uses a promise to return the release result.
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return A Promise instance used to return the operation result. If the operation fails, an error
     * message is returned.
     * @permission ohos.permission.READ_MEDIA.
     */
    release(): Promise<void>;
  }

  /**
   * Provides methods to encapsulate file attributes.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, car
   */
  interface FileAsset {
    /**
     * File ID.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    id: number;

    /**
     * URI of the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    uri: string;

    /**
     * URI of the file thumbnail.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    thumbnailUri: string;

    /**
     * MIME type, for example, video/mp4, audio/mp4, or audio/amr-wb.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    mimeType: string;

    /**
     * Media type.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    mediaType: string;

    /**
     * Display name (with a file name extension) of the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    displayName: string;

    /**
     * File name title (without the file name extension).
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    title: string;

    /**
     * Data size of the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    size: number;

    /**
     * ID of the album where the file is located.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    albumId: string;

    /**
     * Name of the album where the file is located.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    albumName: string;

    /**
     * Date (timestamp) when the file was added.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    dateAdded: number;

    /**
     * Date (timestamp) when the file was modified.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    dateModified: number;

    /**
     * Date (timestamp) when the file was taken.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    dateTaken: number;

    /**
     * Rotation angle of the file, in degrees.
     * The rotation angle can be 0, 90, 180, or 270 degrees. This is valid only for videos.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    orientation: number;

    /**
     * Display width of the file. This is valid only for videos and images.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    width: number;

    /**
     * Display height of the file. This is valid only for videos and images.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    height: number;

    /**
     * Extended attributes, in the format of a JSON object. They must be parsed by the application
     * as key:value, key:value, ....
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    extendedValues: string;
  }

  /**
   * Describes media retrieval options.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, car
   */
  interface MediaFetchOptions {
    /**
     * Fields to retrieve, for example, selections: "media_type =? OR media_type =?".
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    selections: string;

    /**
     * Conditions for retrieval, for example, selectionArgs: ["/storage/emulated/0"].
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    selectionArgs: Array<string>;

    /**
     * Sorting criterion of the retrieval results, for example, order: "datetaken DESC,_display_name DESC, _id DESC".
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    order?: string;

    /**
     * Device ID. If this parameter is not passed or is set to null, the device is a local device.
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    selfId?: string;

    /**
     * Extended retrieval parameters, which are in JSON format.
     * They are SQL statements that do not map to table fields, for example,
     * the column names corresponding to the keywords min, max, count, and as.
     * Example:
     *   extendArgs: {
     *       "customProjections": ["count(0) as count","min(_id) as minId"],
     *   }
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    extendArgs?: string;
  }

  /**
   * Implements file retrieval.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, car
   */
  interface FetchFileResult {
    /**
     * Obtains the total number of files in the file retrieval result.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return Total number of files.
     */
    getCount(): number;

    /**
     * Checks whether the result set points to the last row.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return Whether the file is the last one.
     * You need to check whether the file is the last one before calling getNextObject,
     * which returns the next file only when True is returned for this method.
     */
    isAfterLast(): boolean;

    /**
     * Releases the FetchFileResult instance and invalidates it. Other methods cannot be called.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     */
    close(): void;

    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getFirstObject(callback: AsyncCallback<FileAsset>): void;

    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a promise to return the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getFirstObject(): Promise<FileAsset>;

    /**
     * Obtains the next FileAsset in the file retrieval result.
     * This method uses a callback to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when True is returned for isAfterLast().
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getNextObject(callback: AsyncCallback<FileAsset>): void;

    /**
     * Obtains the next FileAsset in the file retrieval result.
     * This method uses a promise to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when True is returned for isAfterLast().
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getNextObject(): Promise<FileAsset>;

    /**
     * Obtains the last FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getLastObject(callback: AsyncCallback<FileAsset>): void;

    /**
     * Obtains the last FileAsset in the file retrieval result. This method uses a promise to return the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getLastObject(): Promise<FileAsset>;

    /**
     * Obtains the FileAsset with the specified index in the file retrieval result.
     * This method uses a callback to return the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param index Index of the file to obtain.
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getPositionObject(index: number, callback: AsyncCallback<FileAsset>): void;

    /**
     * Obtains the FileAsset with the specified index in the file retrieval result.
     * This method uses a promise to return the file.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param index Index of the file to obtain.
     * @return A Promise instance used to return the file in the format of a FileAsset instance.
     */
    getPositionObject(index: number): Promise<FileAsset>;

     /**
     * Obtains all FileAssets in the file retrieval result.
     * This method uses a callback to return the result.
     * After this method is called, close() is automatically called to release the FetchFileResult instance and invalidate it.
     * In this case, other methods cannot be called.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param callback Callback used to return a FileAsset array.
     */
    getAllObject(callback: AsyncCallback<Array<FileAsset>>): void;

    /**
     * Obtains all FileAssets in the file retrieval result.
     * This method uses a promise to return the result.
     * After this method is called, close() is automatically called to release the FetchFileResult instance and invalidate it.
     * In this case, other methods cannot be called.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @return A Promise instance used to return a FileAsset array.
     */
    getAllObject(): Promise<Array<FileAsset>>;
  }

  /**
   * Provides album attributes and methods for querying media resources in albums.
   * @since 7
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, car
   */
  interface Album {
    /**
     * Album ID.
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    albumId: number;

    /**
     * Album name.
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    albumName: string;

    /**
     * Absolute path of the album.
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    path: string;

    /**
     * Date (timestamp) when the album was last modified.
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @devices phone, tablet, tv, car
     */
    dateModified: number;

    /**
     * SObtains files in an album. This method uses an asynchronous callback to return the files.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(callback: AsyncCallback<FetchFileResult>): void;

    /**
     * SObtains files in an album. This method uses an asynchronous callback to return the files.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media retrieval options.
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;

    /**
     * Obtains files in an album. This method uses a promise to return the files.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media retrieval options.
     * @return A Promise instance used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(options?: MediaFetchOptions): Promise<FetchFileResult>;
  }

  /**
   * Manages media resources such as images, audios, and videos.
   * Before calling a MediaLibrary method, you must use getMediaLibrary() to create a MediaLibrary instance.
   * @since 6
   * @SysCap SystemCapability.Multimedia.MediaLibrary
   * @import import mediaLibrary from '@ohos.multimedia.mediaLibrary'
   * @devices phone, tablet, tv, wearable, car
   */
  interface MediaLibrary {
    /**
     * Obtains all files. This method uses an asynchronous callback to return the files.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media retrieval options.
     * @permission ohos.permission.READ_MEDIA (read permission required to use extendArgs or extendedValues).
     * @param callback Callback used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(options: MediaFetchOptions, callback: AsyncCallback<FetchFileResult>): void;

    /**
     * Obtains all files. This method uses a promise to return the files.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media retrieval options.
     * @permission ohos.permission.READ_MEDIA (read permission required to use extendArgs or extendedValues).
     * @return A Promise instance used to return the files in the format of a FetchFileResult instance.
     */
    getFileAssets(options: MediaFetchOptions): Promise<FetchFileResult>;

    /**
     * Obtains albums based on the media retrieval options. This method uses an asynchronous callback to return the albums.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media retrieval options.
     * @param callback Callback used to return an album array.
     */
    getAlbums(options: MediaFetchOptions, callback: AsyncCallback<Array<Album>>): void;

    /**
     * Obtains albums based on the media retrieval options. This method uses a promise to return the albums.
     * @devices phone, tablet, tv, car
     * @since 7
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media retrieval options.
     * @return A Promise instance used to return an album array.
     */
    getAlbums(options: MediaFetchOptions): Promise<Array<Album>>;

    /**
     * Stores media resources. This method uses an asynchronous callback to return the URI that stores the media resources.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media resource option.
     * @param callback Callback used to return the URI that stores the media resources.
     */
    storeMediaAsset(option: MediaAssetOption, callback: AsyncCallback<string>): void;

    /**
     * Stores media resources. This method uses a promise to return the URI that stores the media resources.
     * @devices phone, tablet, tv, wearable, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media resource option.
     * @return Promise used to return the URI that stores the media resources.
     */
    storeMediaAsset(option: MediaAssetOption): Promise<string>;

    /**
     * Starts image preview, with the first image to preview specified. This method uses an asynchronous callback to receive the execution result.
     * @devices phone, tablet, tv, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param images List of images to preview.
     * @param index Sequence number of the first image to preview.
     * @param callback Callback used for image preview. No value is returned.
     */
    startImagePreview(images: Array<string>, index: number, callback: AsyncCallback<void>): void;

    /**
     * Starts image preview. This method uses an asynchronous callback to receive the execution result.
     * @devices phone, tablet, tv, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param images List of images to preview.
     * @param callback Callback used for image preview. No value is returned.
     */
    startImagePreview(images: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Starts image preview, with the first image to preview specified. This method uses a promise to return the execution result.
     * @devices phone, tablet, tv, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param images List of images to preview.
     * @param index Sequence number of the first image to preview.
     * @return Promise used to return whether the operation is successful.
     */
    startImagePreview(images: Array<string>, index?: number): Promise<void>;

    /**
     * Starts media selection. This method uses an asynchronous callback to return the list of URIs that store the selected media resources.
     * @devices phone, tablet, tv, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media selection option.
     * @param callback Callback used to return the list of URIs that store the selected media resources.
     */
    startMediaSelect(option: MediaSelectOption, callback: AsyncCallback<Array<string>>): void;

    /**
     * Starts media selection. This method uses a promise to return the list of URIs that store the selected media resources.
     * @devices phone, tablet, tv, car
     * @since 6
     * @SysCap SystemCapability.Multimedia.MediaLibrary
     * @param option Media selection option.
     * @return Promise used to return the list of URIs that store the selected media resources.
     */
    startMediaSelect(option: MediaSelectOption): Promise<Array<string>>;
  }
}

export default mediaLibrary;
