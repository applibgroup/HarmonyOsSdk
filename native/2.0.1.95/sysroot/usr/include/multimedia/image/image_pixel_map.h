/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: Image C language interface.
 * Author: baiyonggang
 * Create: 2020-06-18
 */

/**
 * @addtogroup image
 * @{
 *
 * @brief Provides access to pixel data and pixel map information.
 *
 * @since 3
 * @version 1.0
 */

/**
 * @file image_pixel_map.h
 *
 * @brief Declares functions for you to lock and access or unlock pixel data, and obtain the width and height of a pixel
 * map.
 *
 * @since 3
 * @version 1.0
 */

#ifndef IMAGE_PIXEL_MAP_H
#define IMAGE_PIXEL_MAP_H
#include <jni.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Enumerates the result codes that may be returned by a function.
 *
 * @since 3
 * @version 1.0
 */
enum {
    /** Success result */
    OHOS_IMAGE_RESULT_SUCCESS = 0,
    /** Invalid parameters */
    OHOS_IMAGE_RESULT_BAD_PARAMETER = -1,
    /** JNI exception */
    OHOS_IMAGE_RESULT_JNI_EXCEPTION = -2,
};

/**
 * @brief Enumerates pixel formats.
 *
 * @since 3
 * @version 1.0
 */
enum {
    /**
     * Unknown format
     */
    OHOS_PIXEL_MAP_FORMAT_NONE = 0,
    /**
     * 32-bit RGBA. Components R, G, B, and A each occupies 8 bits
     * and are stored from the higher-order to the lower-order bits.
     */
    OHOS_PIXEL_MAP_FORMAT_RGBA_8888 = 3,
    /**
     * 16-bit RGB. Only the R, G, and B components are encoded
     * from the higher-order to the lower-order bits: red is stored with 5 bits of precision,
     * green is stored with 6 bits of precision, and blue is stored with 5 bits of precision.
     */
    OHOS_PIXEL_MAP_FORMAT_RGB_565 = 2,
};

/**
 * @brief Defines pixel map information.
 *
 * @since 3
 * @version 1.0
 */
struct OhosPixelMapInfo {
    /** Image width, in pixels. */
    uint32_t width;
    /** Image height, in pixels. */
    uint32_t height;
    /** Number of bytes in each row of a pixel map */
    uint32_t rowSize;
    /** Pixel format */
    int32_t pixelFormat;
};

/**
 * @brief Obtains information about a given <b>PixelMap</b> and stores the information in a {@link OhosPixelMapInfo}
 * structure.
 *
 * @param env Indicates the pointer to the JNI environment.
 * @param pixelMapObject Indicates the Java <b>PixelMap</b> object.
 * @param info Indicates the pointer to the pixel map information to obtain. For details, see {@link
 * OhosPixelMapInfo}.
 * @return Returns <b>0</b> if the information is obtained and stored in the structure; returns result codes if the
 * operation fails.
 * @see OhosPixelMapInfo
 * @since 3
 * @version 1.0
 */
int32_t GetImageInfo(JNIEnv *env, jobject pixelMapObject, OhosPixelMapInfo &info);
/**
 * @brief Obtains the memory address of a given <b>PixelMap</b> object and locks the memory.
 *
 * If this function call is successful, <b>*addrPtr</b> is set to the memory address. After accessing the pixel data,
 * you must use {@link UnAccessPixels} to unlock the memory. Otherwise, resources cannot be released.
 * After the memory is unlocked, it can be invalid and should not be accessed.
 *
 * @param env Indicates the pointer to the JNI environment.
 * @param pixelMapObject Indicates the Java <b>PixelMap</b> object.
 * @param addrPtr Indicates the double pointer to the memory address.
 * @see UnAccessPixels
 * @return Returns {@link OHOS_IMAGE_RESULT_SUCCESS} if the operation is successful; returns other result codes if
 * the operation fails.
 * @since 3
 * @version 1.0
 */
int32_t AccessPixels(JNIEnv *env, jobject pixelMapObject, void **addrPtr);
/**
 * @brief Unlocks the memory storing the pixel data of a given <b>PixelMap</b> to balance a successful call to {@link
 * AccessPixels}.
 *
 * @param env Indicates the pointer to the JNI environment.
 * @param pixelMapObject Indicates the Java <b>PixelMap</b> object.
 * @return Returns {@link OHOS_IMAGE_RESULT_SUCCESS} if the operation is successful; returns other result codes if
 * the operation fails.
 * @see AccessPixels
 * @since 3
 * @version 1.0
 */
int32_t UnAccessPixels(JNIEnv *env, jobject pixelMapObject);

#ifdef __cplusplus
};
#endif

/** @} */
#endif  // IMAGE_PIXEL_MAP_H