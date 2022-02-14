/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: Native methods for resource manager.
 * Author: zhoujunquan
 * Create: 2020-05-08
 */

/**
 * @addtogroup rawfile
 * @{
 *
 * @brief Provides native functions for the resource manager to operate raw file directories and their raw files.
 *
 * You can use the resource manager to traverse, open, seek, read, and close raw files.
 *
 * @since 3
 * @version 1.0
 */

/**
 * @file resource_manager.h
 *
 * @brief Declares native functions for the resource manager.
 *
 * You can use the resource manager to open raw files for subsequent operations, such as seeking and reading.
 *
 * @since 3
 * @version 1.0
 */
#ifndef GLOBAL_NATIVE_RESOURCE_MANAGER_H
#define GLOBAL_NATIVE_RESOURCE_MANAGER_H

#include <jni.h>
#include "raw_dir.h"
#include "raw_file.h"

#ifdef __cplusplus
extern "C" {
#endif

struct ResourceManager;

/**
 * @brief Presents the resource manager.
 *
 * This class encapsulates the native implementation of the Java-side resource manager. The pointer to a
 * <b>ResourceManager</b> object can be obtained by calling {@link InitNativeResourceManager}.
 *
 * @since 3
 * @version 1.0
 */
typedef struct ResourceManager ResourceManager;

/**
 * @brief Obtains the native resource manager based on the Java resource manager.
 *
 * You need to obtain the resource manager to process raw files as required.
 *
 * @param env Indicates the pointer to the Java Native Interface (JNI) environment.
 * @param resourceManager Indicates the Java resource manager.
 * @return Returns the pointer to {@link ResourceManager}.
 * @since 3
 * @version 1.0
 */
ResourceManager *InitNativeResourceManager(JNIEnv *env, jobject resourceManager);

/**
 * @brief Opens a raw file directory.
 *
 * After it is opened, you can traverse its raw files.
 *
 * @param mgr Indicates the pointer to {@link ResourceManager} obtained by calling
 * {@link InitNativeResourceManager}.
 * @param dirName Indicates the name of the raw file directory to open. You can pass an empty string to open the
 * top-level raw file directory.
 * @return Returns the pointer to {@link RawDir}. After you finish using the pointer, call {@link CloseRawDir} to
 * release it.
 * @see InitNativeResourceManager
 * @see CloseRawDir
 * @since 3
 * @version 1.0
 */
RawDir *OpenRawDir(const ResourceManager *mgr, const char *dirName);

/**
 * @brief Opens a raw file.
 *
 * After it is opened, you can read its data.
 *
 * @param mgr Indicates the pointer to {@link ResourceManager} obtained by calling
 * {@link InitNativeResourceManager}.
 * @param filename Indicates the file path relative to the top-level raw file directory.
 * @return Returns the pointer to {@link RawFile}. After you finish using the pointer, call {@link CloseRawFile} to
 * release it.
 * @see InitNativeResourceManager
 * @see CloseRawFile
 * @since 3
 * @version 1.0
 */
RawFile *OpenRawFile(const ResourceManager *mgr, const char *filename);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // GLOBAL_NATIVE_RESOURCE_MANAGER_H
