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
 * @file camera_kit.h
 *
 * @brief Defines the entry for using camera functions.
 *
 * In general, the camera workflow is as follows:
 * <ul>
 *     <li>[Mandatory] Call {@link CameraKit_GetInstance} to obtain a <b>CameraKit</b> instance.</li>
 *     <li>[Optional] Register a callback to monitor camera usage states using
 *         {@link CameraKit_RegisterCameraDeviceCallback},and unregister the callback by
 *         {@link CameraKit_UnregisterCameraDeviceCallback}. </li>
 *     <li>[Mandatory] Obtain all the supported logical cameras by calling {@link CameraKit_GetCameraIds}. </li>
 *     <li>[Optional] Obtain more information about a physical camera by calling {@link CameraKit_GetCameraInfo}.
 *         The information includes the camera facing type, a physical camera belong to the logical camera,
 *         and link type of physical camera. </li>
 *     <li>[Optional] Obtain static abilities of a logical or physical camera by calling
 *         {@link CameraKit_GetCameraAbility} and query the supported abilities and their configuration ranges
 *         through a specific ability querying function. </li>
 *     <li>[Mandatory] Create a logical or physical camera object by calling {@link CameraKit_CreateCamera}. </li>
 *     <li>[Mandatory] Start running the camera by calling functions provided in {@link camera_device}. </li>
 * </ul>
 *
 * @since 5
 * @version 1.0
 */

#ifndef NDK_CAMERA_KIT_H
#define NDK_CAMERA_KIT_H

#include <stdint.h>
#include "camera_utils.h"
#include "camera_info.h"
#include "camera_ability.h"
#include "camera_device.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Enumerates the camera states.
 *
 * @since 5
 * @version 1.0
 */
enum {
    /** Unavailable camera */
    CAMERA_DEVICE_UNAVAILABLE = 0,
    /** Available camera */
    CAMERA_DEVICE_AVAILABLE = 1,
};

/**
 * @brief Defines a <b>CameraKit</b> object, which is usually accessed via pointers.
 *
 * @brief Defines the <b>CameraKit</b> object, which is usually accessed via pointers.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraKit CameraKit;

/**
 * @brief Defines callbacks for camera usage states.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraDeiviceCallback {
    /** Application context */
    void* context;

    /** Called when the logical camera status changes. */
    void (*onCameraStatus)(const char* cameraId, int32_t status);

    /** Called when the physical camera status changes. */
    void (*onPhysicalCameraStatus)(const char* cameraId, int32_t status);

} CameraDeiviceCallback;

/**
 * @brief Obtains a <b>CameraKit</b> instance.
 *
 * @return Returns the <b>CameraKit</b> instance.
 *
 * @since 5
 * @version 1.0
 */
CameraKit* CameraKit_GetInstance();

/**
 * @brief Obtains information about a specified logical camera.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @param cameraId Indicates the pointer to the logical camera ID.
 * @param cameraInfo Indicates the double pointer to <b>CameraInfo</b> instance.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraKit_GetCameraInfo(CameraKit* cameraKit, const char* cameraId,
                                CameraInfo** cameraInfo);

/**
 * @brief Obtains the static ability of a specified logical or physical camera.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @param cameraId Indicates the pointer to the ID of the logical or physical camera.
 * @param cameraAbility Indicates the double pointer to the <b>CameraAbility</b> instance.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraKit_GetCameraAbility(CameraKit* cameraKit, const char* cameraId,
                                CameraAbility** cameraAbility);

/**
 * @brief Obtains the current logical camera IDs.
 *
 * This function applies for a memory block to store the camera ID list. You must call {@link CameraKit_Destroy} to
 * release memory if the camera is no longer used.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @param cameraList Indicates the double pointer to the <b>CameraList</b> instance.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraKit_GetCameraIds(CameraKit* cameraKit, CameraList** cameraList);

/**
 * @brief Creates a camera instance.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @param cameraId Indicates the pointer to the ID of a logical or physical camera.
 * @param callback Indicates the pointer to the callback for camera creation and running states.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraKit_CreateCamera(CameraKit* cameraKit, const char* cameraId, const CameraStateCallback* callback);

/**
 * @brief Registers a camera status callback.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @param callback Indicates the pointer to the callback to register.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraKit_RegisterCameraDeviceCallback(CameraKit* cameraKit, const CameraDeiviceCallback* callback);

/**
 * @brief Unregisters a camera status callback.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @param callback Indicates the pointer to the callback to unregister.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraKit_UnregisterCameraDeviceCallback(CameraKit* cameraKit, const CameraDeiviceCallback* callback);

/**
 * @brief Releases this <b>CameraKit</b> instance.
 *
 * This function releases the memory applied by {@link CameraKit_GetCameraIds}.
 * You must call this function to release the memory if the camera is no longer used.
 *
 * @param cameraKit Indicates the pointer to this <b>CameraKit</b> instance.
 * @since 5
 * @version 1.0
 */
void CameraKit_Destory(CameraKit* camerakit);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // NDK_CAMERA_KIT_H