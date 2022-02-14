/*
* Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
* Description: The entry for using camera function.
*/

#ifndef NDK_CAMERA_DEVICE_H
#define NDK_CAMERA_DEVICE_H

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef struct CameraDevice CameraDevice;

typedef struct CameraStateCallback {
    void (*onCreated)();

    void (*onCreateFailed)();

    void (*onConfigured)();

    void (*onConfigureFailed)();

    void (*onReleased)();
} CameraStateCallback;

int32_t CameraDevice_GetCameraId(CameraDevice* cameraDevice, const char** cameraId);

#ifdef __cplusplus
};
#endif


#endif // NDK_CAMERA_DEVICE_H
