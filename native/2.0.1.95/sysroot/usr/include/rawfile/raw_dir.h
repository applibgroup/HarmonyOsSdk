/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: Native methods for raw directories.
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
 * @file raw_dir.h
 *
 * @brief Declares native functions related to raw file directories.
 *
 * For example, you can use the functions to traverse and close a raw file directory, and reset its index.
 *
 * @since 3
 * @version 1.0
 */
#ifndef GLOBAL_RAW_DIR_H
#define GLOBAL_RAW_DIR_H

#ifdef __cplusplus
extern "C" {
#endif

struct RawDir;

/**
 * @brief Provides access to a raw file directory.
 *
 *
 *
 * @since 3
 * @version 1.0
 */
typedef struct RawDir RawDir;

/**
 * @brief Obtains the name of the file according to the index.
 *
 * You can use this method to traverse a raw file directory.
 *
 * @param rawDir Indicates the pointer to {@link RawDir}.
 * @param index Indicates the file index in {@link RawDir}.
 * @return Returns the name of the file according to the index,
 * which can be passed to {@link OpenRawFile} as an input parameter;
 * returns <b>NULL</b> if all files are returned.
 * @see OpenRawFile
 * @since 3
 * @version 1.0
 */
const char *GetRawFileName(RawDir *rawDir, size_t index);

/**
 * @brief get the count of the raw files in {@link RawDir}.
 *
 * You can use this method to get the valid index of {@link GetRawFileName}.
 *
 * @param rawDir Indicates the pointer to {@link RawDir}.
 * @see GetRawFileName
 * @since 3
 * @version 1.0
 */
size_t GetRawFileCount(RawDir *rawDir);

/**
 * @brief Closes an opened {@link RawDir} and releases all associated resources.
 *
 *
 *
 * @param rawDir Indicates the pointer to {@link RawDir}.
 * @see OpenRawDir
 * @since 3
 * @version 1.0
 */
void CloseRawDir(RawDir *rawDir);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // GLOBAL_RAW_DIR_H
