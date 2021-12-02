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
 * @brief Declares APIs to query static abilities of a camera.
 *
 * @since 5
 * @version 1.0
 */

#ifndef NDK_CAMERA_ABILITY_H
#define NDK_CAMERA_ABILITY_H

#include "camera_utils.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Defines image formats.
 *
 * @since 5
 * @version 1.0
 */
typedef struct FormatList {
    int32_t formatCnt;
    const int32_t* formats;
}FormatList;

/**
 * @brief Defines auto exposure (AE) modes.
 *
 * @since 5
 * @version 1.0
 */
typedef struct AeModeList {
    int32_t aeCnt;
    const int32_t* aeModes;
}AeModeList;

/**
 * @brief Defines autofocus (AF) modes.
 *
 * @since 5
 * @version 1.0
 */
typedef struct AfModeList {
    int32_t afCnt;
    const int32_t* afModes;
}AfModeList;

/**
 * @brief Defines output image sizes.
 *
 * @since 5
 * @version 1.0
 */
typedef struct OutputSizeList {
    int32_t picSizeCnt;
    const CameraPicSize* picSizes;
}OutputSizeList;

/**
 * @brief Defines camera ability keys.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraAbilityKey {
    const char* keyName;
    int32_t dataType;
} CameraAbilityKey;

/**
 * @brief Defines parameters supported by the camera.
 *
 * @since 5
 * @version 1.0
 */
typedef struct ParameterList {
    int32_t parameterCnt;
    const CameraAbilityKey** parameters;
}ParameterList;

/**
 * @brief Defines keys for camera properties.
 *
 * @since 5
 * @version 1.0
 */
typedef struct PropertyList {
    int32_t propertyCnt;
    const CameraAbilityKey** properties;
}PropertyList;

/**
 * @brief Defines the keys of returnable results related to the parameter settings supported by the camera.
 *
 * @since 5
 * @version 1.0
 */
typedef struct ResultList {
    int32_t resultCnt;
    const CameraAbilityKey** results;
}ResultList;

/**
 * @brief Enumerates the supported data types.
 *
 * @since 5
 * @version 1.0
 */
enum {
    CAMERA_DATATYPE_BYTE = 0,
    CAMERA_DATATYPE_INT32 = 1,
    CAMERA_DATATYPE_INT64 = 2,
    CAMERA_DATATYPE_STRING = 3,
    CAMERA_DATATYPE_FLOAT = 4,
    CAMERA_DATATYPE_DOUBLE = 5,
    CAMERA_NODATA = 6,
};

/**
 * @brief Defines the data types for key values.
 *
 * @since 5
 * @version 1.0
 */
typedef struct KeyValue {
    int32_t dataType;
    int32_t dataCnt;
    union {
        int8_t* byteDataPtr;
        int32_t* int32DataPtr;
        float* floatDataPtr;
        char** strDataPtr;
        double* doubleDataPtr;
    } dataPtr;
}KeyValue;

/**
 * @brief Defines the <b>CameraAbility</b> object, which is usually accessed via pointers.
 *
 * @since 5
 * @version 1.0
 */
typedef struct CameraAbility CameraAbility;

/**
 * @brief Obtains the supported output image formats.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param formats Indicates the double pointer to the supported output image formats.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedFormats(CameraAbility* cameraAbility, FormatList** formats);

/**
 * @brief Obtains supported output image sizes based on a specified format.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param format Indicates the image format.
 * @param outputSizes Indicates the double pointer to the output image sizes.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedSizes(CameraAbility* cameraAbility, int32_t format, OutputSizeList** outputSizes);

/**
 * @brief Obtains the AF modes supported by the camera.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param afModes Indicates the supported AF modes.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedAfMode(CameraAbility* cameraAbility, AfModeList** afModes);

/**
 * @brief Obtains the AE modes supported by the camera.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param aeModes Indicates the supported AE modes.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedAeMode(CameraAbility* cameraAbility, AeModeList** aeModes);

/**
 * @brief Obtains the parameters supported by the camera.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param parameters Indicates the double pointer to the supported parameters.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedParameters(CameraAbility* cameraAbility, ParameterList** parameters);

/**
 * @brief Obtains the camera properties.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param properties Indicates the double pointer to the supported properties.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedProperties(CameraAbility* cameraAbility, PropertyList** properties);

/**
 * @brief Obtains the keys of returnable results related to the parameter settings supported by the camera.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param results Indicates the double pointer to the keys of returnable results related to the supported
 *        parameter settings.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetSupportedResults(CameraAbility* cameraAbility, ResultList** results);

/**
 * @brief Obtains the values of the parameters and property keys supported by the camera.
 *
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @param cameraKey Indicates the pointer to the supported parameters and properties.
 * @param keyValue Indicates the pointer to the values of the supported parameters and properties.
 * @return Returns the execution result.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_GetKeyValue(CameraAbility* cameraAbility, const CameraAbilityKey* cameraKey, KeyValue* keyValue);

/**
 * @brief Releases this <b>CameraAbility</b> object.
 *
 * This function releases the memory applied by {@link CameraAbility_GetSupportedFormats},
 * {@link CameraAbility_GetSupportedSizes}, {@link CameraAbility_GetSupportedSizes},
 * {@link CameraAbility_GetSupportedAfMode}, {@link CameraAbility_GetSupportedAeMode},
 * {@link CameraAbility_GetSupportedParameters},{@link CameraAbility_GetSupportedProperties},
 *  and {@link CameraAbility_GetSupportedResults}.
 *
 * You must call this function to release the memory when the camera is no longer used.
 * @param cameraAbility Indicates the pointer to this <b>CameraAbility</b> object.
 * @since 5
 * @version 1.0
 */
int32_t CameraAbility_Destory(CameraAbility* cameraAbility);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // CAMERA_ABILITY_H
