/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: The native layer of ohos.
 * Author: lizheng
 * Create: 2020-06-01
 */

 /**
 * @addtogroup native_layer
 * @{
 *
 * @brief Provides functions for you to configure layers and obtain layer data.
 *
 * @since 3
 * @version 1.0
 */

/**
 * @file native_layer.h
 *
 * @brief Declares functions used to obtain the number of pixels and pixel format of a layer,
 *        change the size and format of the layer, as well as lock and unlock the surface of the layer.
 *
 * @since 3
 * @version 1.0
 */
#ifndef NATIVE_LAYER_H
#define NATIVE_LAYER_H

#include <harea.h>

#ifdef __cplusplus
extern "C" {
#endif

struct NativeLayer;

/**
 * @brief Provides access to a native layer. The pointer to the <b>NativeLayer</b> structure can
 *        be obtained from the JNI {@link GetNativeLayer}.
 *
 * @since 3
 * @version 1.0
 */
typedef struct NativeLayer NativeLayer;


/**
 * @brief Describes details about the native layer for ohos.
 *
 * @since 3
 * @version 1.0
 */
typedef struct NativeLayerBuffer {
    /** Number of pixels in each row of the layer */
    int32_t buffer_width;
    /** Number of pixels in each column of the layer */
    int32_t buffer_height;
    /** Number of pixels that can be displayed in a row in the memory */
    int32_t buffer_steps;
    /** Format in the buffer */
    int32_t buffer_pattern;
    /** Image data in the native layer buffer */
    void *buffer_bits;
    /** Reserved field */
    uint32_t saved[6];
} NativeLayerBuffer;

/**
 * @brief Describes details about the perations for the funtion {@link NativeLayerHandle}.
 *
 * @since 3
 * @version 1.0
 */
enum NativeLayerOps {
    /** Operation: Obtains the reference on a given <b>NativeLayer</b>,e.g:NativeLayerHandle(layer, ACQUIRE_REF) */
    ACQUIRE_REF = 0,
    /** Operation: Release the reference on a given <b>NativeLayer</b>,e.g:NativeLayerHandle(layer, RELEASE_REF) */
    RELEASE_REF,
    /** Operation: Obtains the number of horizontal pixels of the layer, e.g:NativeLayerHandle(layer, GET_WIDTH) */
    GET_WIDTH,
    /** Operation: Obtains the number of vertical pixels of the layer. e.g:NativeLayerHandle(layer, GET_HEIGHT) */
    GET_HEIGHT,
    /** Operation: Obtains the pixel format of a given layer, e.g:NativeLayerHandle(layer, RELEASE_REF) */
    GET_FORMAT,
    /** Operation: Changes the layer size, e.g:NativeLayerHandle(layer, SET_WIDTH_AND_HEIGHT, width, height) */
    SET_WIDTH_AND_HEIGHT,
    /** Operation: Changes the layer format, e.g:NativeLayerHandle(layer, SET_FORMAT, format) */
    SET_FORMAT,
    /** Operation: Locks the next surface of a given layer for writing, e.g:NativeLayerHandle(layer, LOCK_LAYER) */
    LOCK_LAYER,
    /** Operation: Draw the layer and unlock the next surface,e.g:NativeLayerHandle(layer,DRAW_LAYER) */
    DRAW_LAYER,
};

/**
 * @brief Handle the operations on a given <b>NativeLayer</b> object.
 *
 * @param layer Indicates the pointer to the given <b>NativeLayer</b> object.
 * @param ops Indicates the operations upon the given <b>NativeLayer</b> object.
 * @since 3
 * @version 1.0
 */
int32_t NativeLayerHandle(NativeLayer *layer, int32_t ops, ...);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // NATIVE_LAYER_H
