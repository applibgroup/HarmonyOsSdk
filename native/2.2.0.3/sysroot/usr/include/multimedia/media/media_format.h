/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: Media format C language interface.
 * Author: hezhiqiang
 * Create: 2020-11-09
 */

/**
 * @addtogroup media
 * @{
 *
 * @brief Provides functions to set and obtain media formats.
 *
 * @since 5
 * @version 1.0
 */

/**
 * @file media_format.h
 *
 * @brief Declares APIs to create and release a media format object, and to set and obtain media format data.
 *
 * This file defines the media format object
 * and metadata that can be parsed by the system.
 * You can set key-value pairs in the metadata for a media format object.
 *
 * @since 5
 * @version 1.0
 */

#ifndef MEDIA_FORMAT_H
#define MEDIA_FORMAT_H
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Enumerates function execution results.
 *
 * Function calls for obtaining metadata values may encounter exceptions or failure.
 *
 * @since 5
 * @version 1.0
 */
enum {
    /** Execution succeeded. */
    OHOS_MEDIA_RESULT_SUCCESS = 0,
    /** Execution failed because an input parameter is empty. */
    OHOS_MEDIA_RESULT_NULL_PARAMETER = -1,
    /** Execution failed because the metadata key does not exist. */
    OHOS_MEDIA_RESULT_NO_SUCH_TYPE = -2,
    /** Execution failed because the value matching the metadata key is empty. */
    OHOS_MEDIA_RESULT_EMPTY_FORMAT = -3,
    /** Exception occurred when obtaining a metadata value. */
    OHOS_MEDIA_GET_RESULT_EXCEPTION = -9,
};

struct Format;

/**
 * @brief Defines the media format object, which is usually accessed through a pointer.
 *
 *
 *
 * @since 5
 * @version 1.0
 */
typedef struct Format Format;

/**
 * @brief Creates a media format object.
 *
 * You can pass the pointer returned by this function to other functions to access the media format data.
 *
 * @return Returns the pointer to the {@code Format} object.
 *
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
Format *CreateFormat();

/**
 * @brief Releases a media format object.
 *
 * This function will set the pointer to null after the {@code Format} object is released.
 *
 * @param format Indicates the pointer to the {@code Format} object to release.
 * @return Returns {@code true} if the object is released; returns {@code false} otherwise.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
bool ReleaseFormat(Format *format);

/**
 * @brief Obtains the buffer information stored in this media format object.
 *
 * This function returns a void pointer to the target buffer. The buffer size is saved
 * in <b>bufferSize</b>.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the buffer information stored in this
 * media format object.
 * @param err Indicates the pointer to the execution result. Set the value to <b>1</b>.
 * @param bufferSize Indicates the pointer to the buffer size.
 * @return Returns the void pointer to the buffer if the buffer information is stored in the media format object;
 * returns a null pointer if an error or exception occurs.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
void *GetBufferValue(const Format *format, const char *formatType, int32_t *err, size_t *bufferSize);

/**
 * @brief Obtains a float value stored in this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the float value stored in this media
 * format object.
 * @param err Indicates the pointer to the execution result. Set the value to <b>1</b>.
 * @return Returns the float value if obtained; returns <b>-1.0</b> if an error or exception occurs.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
float GetFloatValue(const Format *format, const char *formatType, int32_t *err);

/**
 * @brief Obtains an int32 value stored in this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the int32 value stored in this media
 * format object.
 * @param err Indicates the pointer to the execution result. Set the value to <b>1</b>.
 * @return Returns the int32 value if obtained; returns <b>-1</b> if an error or exception occurs.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
int32_t GetInt32Value(const Format *format, const char *formatType, int32_t *err);

/**
 * @brief Obtains an int64 value stored in this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the int64 value stored in this media
 * format object.
 * @param err Indicates the pointer to the execution result. Set the value to <b>1</b>.
 * @return Returns the int64 value if obtained; returns <b>-1</b> if an error or exception occurs.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
int64_t GetInt64Value(const Format *format, const char *formatType, int32_t *err);

/**
 * @brief Obtains a string stored in this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the string stored in this media
 * format object.
 * @param err Indicates the pointer to the execution result. Set the value to <b>1</b>.
 * @return Returns the pointer to the string if the execution is successful; returns a null pointer if an error or
 * exception occurs.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
const char *GetStringValue(const Format *format, const char *formatType, int32_t *err);

/**
 * @brief Puts the buffer information matching a specified metadata key into this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the buffer information to put.
 * @param buffer Indicates the pointer to the buffer information to put.
 * @param bufferSize Indicates the buffer size.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
void PutBufferValue(const Format *format, const char *formatType, const void *buffer, size_t bufferSize);

/**
 * @brief Puts the float value matching a specified metadata key into this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the float value to put.
 * @param data Indicates the float value to put.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
void PutFloatValue(const Format *format, const char *formatType, float data);

/**
 * @brief Puts the int32 value matching a specified metadata key into this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the int32 value to put.
 * @param data Indicates the int32 value to put.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
void PutInt32Value(const Format *format, const char *formatType, int32_t data);

/**
 * @brief Puts the int64 value matching a specified metadata key into this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the int64 value to put.
 * @param data Indicates the int64 value to put.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
void PutInt64Value(const Format *format, const char *formatType, int64_t data);

/**
 * @brief Puts a string matching a specified metadata key in this media format object.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @param formatType Indicates the pointer to the predefined metadata key matching the string to put.
 * @param data Indicates the pointer to the string to put.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
void PutStringValue(const Format *format, const char *formatType, const char *data);

/**
 * @brief Converts a media format object to a string for stream output or comparison.
 *
 * @param format Indicates the pointer to the media format object created via <b>Create()</b>.
 * @return Returns a string in <b>[key1: valueType1(value1), key2: valueType2(value2)]</b> format, where <b>key</b>
 * indicates a metadata key. The <b>valueType</b> can be <b>int32</b>, <b>float</b>, <b>string</b>, or other. The
 * <b>value</b> is the configured format data.\n Note that the format data is <b>data</b> for a buffer metadata. For
 * example: <b>[max-height: int64(3000), mimetype: string(MPGE4), color-format: data]</b>.
 * @Syscap SystemCapability.Multimedia.Media
 * @since 5
 * @version 1.0
 */
const char *ConvertToString(const Format *format);

/** Indicates the metadata key of the encoding MIME type. */
extern const char *FORMAT_KEY_MIMETYPE;

/** Indicates the metadata key of the media duration. */
extern const char *FORMAT_KEY_DURATION;

/** Indicates the metadata key of the video width. */
extern const char *FORMAT_KEY_WIDTH;

/** Indicates the metadata key of the video height. */
extern const char *FORMAT_KEY_HEIGHT;

/** Indicates the metadata key of the video stride. */
extern const char *FORMAT_KEY_STRIDE;

/** Indicates the metadata key of the maximum video height. */
extern const char *FORMAT_KEY_MAX_HEIGHT;

/** Indicates the metadata key of the maximum video width. */
extern const char *FORMAT_KEY_MAX_WIDTH;

/** Indicates the metadata key of the I-frame interval. */
extern const char *FORMAT_KEY_I_FRAME_INTERVAL;

/** Indicates the metadata key of the rotation angle. */
extern const char *FORMAT_KEY_ROTATION;

/** Indicates the metadata key of the frame rate. */
extern const char *FORMAT_KEY_FRAME_RATE;

/** Indicates the metadata key of the color format. */
extern const char *FORMAT_KEY_COLOR_FORMAT;

/** Indicates the metadata key of the bit rate mode. */
extern const char *FORMAT_KEY_BITRATE_MODE;

/** Indicates the metadata key of the bit rate. */
extern const char *FORMAT_KEY_BIT_RATE;

/** Indicates the metadata key of the frame rate. */
extern const char *FORMAT_KEY_CAPTURE_RATE;

/** Indicates the metadata key of the audio sampling rate. */
extern const char *FORMAT_KEY_SAMPLE_RATE;

/** Indicates the metadata key of the number of audio channels. */
extern const char *FORMAT_KEY_CHANNEL_COUNT;

#ifdef __cplusplus
};
#endif

/** @} */
#endif  // MEDIA_FORMAT_H