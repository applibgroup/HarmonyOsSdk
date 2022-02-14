/*
* Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
* Description: The entry for using camera function.
*/

/**
 * @addtogroup camera
 * @{
 *
 * @brief Provides camera-related native APIs.
 *
 * @since 5
 * @version 1.0
 */

/**
 * @file camera_ability.h
 *
 * @brief Declares common structures.
 *
 * @since 5
 * @version 1.0
 */

#ifndef NDK_CAMERA_UTILS_H
#define NDK_CAMERA_UTILS_H

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Enumerates the result codes that can be returned by a function.
 *
 * @since 5
 * @version 1.0
 */
enum {
    /** Success result */
    CAMERA_RESULT_SUCCESS = 0,
    /** Failed result */
    CAMERA_RESULT_FAILED = -1,
    /** Invalid parameters */
    CAMERA_RESULT_BAD_PARAMETER = -2,
    /** No memory */
    CAMERA_RESULT_NOT_ENOUGH_MEMORY = -3,
};

/**
 * @brief Defines the camera ID list.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraList {
    int32_t cameraCnt;
    const char** cameraIds;
}CameraList;

/**
 * @brief Defines the output image size.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraPicSize {
    int32_t width;
    int32_t height;
}CameraPicSize;

#ifdef __cplusplus
};
#endif

/** @} */
#endif // NDK_CAMERA_UTILS_H
