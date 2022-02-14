/*
* Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
* Description: The entry for using camera function.
*/

#ifndef META_DATA_H
#define META_DATA_H

#include <stdint.h>
#include "camera_ability.h"

#ifdef __cplusplus
extern "C" {
#endif

typedef enum {
    AE_MODE_OFF,
    AE_MODE_ON,
} AE_MODE;

typedef enum {
    AE_TRIGGER_NONE,
    AE_TRIGGER_START,
    AE_TRIGGER_CANCEL,
} AE_TRIGGER;

typedef enum {
    AF_MODE_OFF,
    AF_MODE_CONTINUOUS,
    AF_MODE_TOUCH_LOCK,
} AF_MODE;

typedef enum {
    AF_TRIGGER_NONE,
    AF_TRIGGER_START,
    AF_TRIGGER_CANCEL,
} AF_TRIGGER;


// parameter Key
extern const CameraAbilityKey PARAMETER_ZOOM_RATIO;

// property key
extern const CameraAbilityKey PROPERTY_ZOOM_RATIO;

// result key
extern const CameraAbilityKey VIDEO_STABILIZATION_STATE;


#ifdef __cplusplus
};
#endif


#endif // META_DATA_H
