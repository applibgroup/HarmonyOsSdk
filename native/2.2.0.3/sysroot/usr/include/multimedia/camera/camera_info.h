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
 * @file camera_info.h
 *
 * @brief Declares information about the logical camera, for example, the facing type, connected physical camera,
 *        and link type of the physical camera.
 *
 * @since 5
 * @version 1.0
 */

#ifndef NDK_CAMERA_INFO_H
#define NDK_CAMERA_INFO_H

#include <stdint.h>
#include "camera_utils.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Defines the <b>CameraInfo</b> object, which is usually accessed via pointers.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraInfo CameraInfo;

/**
 * @brief Obtains the logical camera ID.
 *
 * @param cameraInfo Indicates the pointer to this <b>CameraInfo</b> object.
 * @param cameraId Indicates the double pointer to the logical camera ID.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraInfo_GetLogicalId(CameraInfo* cameraInfo, const char** cameraId);

/**
 * @brief Obtains the camera facing type.
 *
 * @param cameraInfo Indicates the pointer to this <b>CameraInfo</b> object.
 * @param facingType Indicates the pointer to the camera facing type.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraInfo_GetFacingType(CameraInfo* cameraInfo, int32_t* facingType);

/**
 * @brief Obtains a physical camera link type.
 *
 * @param cameraInfo Indicates the pointer to this <b>CameraInfo</b> object.
 * @param linkType Indicates the pointer to camera link type.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraInfo_GetDeviceLinkType(CameraInfo* cameraInfo, int32_t* linkType);

/**
 * @brief Obtains the physical camera ID list.
 *
 * @param cameraInfo Indicates the pointer to the <b>CameraInfo</b> object.
 * @param physicalCameraList Indicates the double pointer to the physical camera ID list.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraInfo_GetPhysicalIds(CameraInfo* cameraInfo, CameraList**  physicalCameraList);

/**
 * @brief Releases this <b>CameraInfo</b> object.
 *
 * This function also releases the memory applied by {@link CameraInfo_GetPhysicalIds} for storing the physical
 * camera ID list.
 * You must call this function if the camera is no longer used.
 *
 * @param cameraInfo Indicates the pointer to the <b>CameraInfo</b> object to release.
 * @since 5
 * @version 1.0
 */
void CameraInfo_Destory(CameraInfo* cameraInfo);

/**
 * @brief Enumerates the facing types.
 *
 * @since 5
 * @version 1.0
 */
enum {
    /** An unknown or changeable facing type */
    OHOS_CAMERA_FACING_OTHERS = -1,
    /**  A front-facing camera */
    OHOS_CAMERA_FACING_FRONT = 0,
    /**  A back-facing camera */
    OHOS_CAMERA_FACING_BACK = 1,
};

/**
 * @brief Enumerates the link types of a physical camera.
 *
 * @since 5
 * @version 1.0
 */
enum {
    /** An unknown link type */
    DEVICE_LINK_OTHERS = -1,
    /** A native physical camera that is physically connected and will not be disconnected */
    DEVICE_LINK_NATIVE = 0,
    /** A physical camera that is connected via USB */
    DEVICE_LINK_EXTERNAL_USB = 1,
    /** A physical camera that is connected based on Multicast Source Discovery Protocol (MSDP) */
    DEVICE_LINK_EXTERNAL_MSDP = 2,
};


#ifdef __cplusplus
};
#endif

/** @} */
#endif // NDK_CAMERA_INFO_H