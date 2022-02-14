/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: The jni interface for native layer.
 * Author: lizheng
 * Create: 2020-06-01
 */

/**
 * @addtogroup native_layer
 * @{
 *
 * @brief Defines Java Native Interfaces (JNIs) related to the native layer.
 *
 * @since 3
 * @version 1.0
 */

/**
 * @file native_layer_jni.h
 *
 * @brief Declares JNIs related to the native layer. These JNIs enable an application to obtain the native
 *        layer matching the Java surface object or obtain the Java surface object matching the native layer.
 *
 * @since 3
 * @version 1.0
 */
#ifndef NATIVE_LAYER_JNI_H
#define NATIVE_LAYER_JNI_H

#include <jni.h>
#include <native_layer.h>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Obtains the pointer to <b>NativeLayer</b> matching the Java surface object.
 *
 * @param env Indicates the pointer to the JNI.
 * @param surface Indicates the Java surface object for ohos.
 * @return Returns the pointer to <b>NativeLayer</b> if the operation is successful; returns <b>null</b> otherwise.
 * @since 3
 * @version 1.0
 */
NativeLayer *GetNativeLayer(JNIEnv *env, jobject surface);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // NATIVE_LAYER_JNI_H