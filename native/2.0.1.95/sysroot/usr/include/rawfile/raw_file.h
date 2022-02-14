/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: Native methods for raw files.
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
 * @file raw_file.h
 *
 * @brief Declares native functions and enumerations related to raw file directories.
 *
 * For example, you can use the functions to search for, read, and close raw files.
 *
 * @since 3
 * @version 1.0
 */
#ifndef GLOBAL_RAW_FILE_H
#define GLOBAL_RAW_FILE_H

#include <string>

#ifdef __cplusplus
extern "C" {
#endif

struct RawFile;

/**
 * @brief Provides access to a raw file.
 *
 *
 *
 * @since 3
 * @version 1.0
 */
typedef struct RawFile RawFile;

/**
 * @brief Enumerates the modes to access raw files.
 *
 * You can select your desired access mode as required.
 *
 * @since 3
 * @version 1.0
 */
enum {
    /** Information about how to access data is not specified. */
    RAW_FILE_MODE_UNDEFINED = 0,
    /** File chunks are read, with forward and backward seek. */
    RAW_FILE_MODE_RANDOM = 1,
    /** Files are read sequentially, with an occasional forward seek. */
    RAW_FILE_MODE_SEQUENTIAL = 2,
    /** The caller plans to ask for a read-only buffer with all data. */
    RAW_FILE_MODE_BUFFER = 3
};

/**
 * @brief Represent the raw file descriptor's info.
 *
 * The RawFileDescriptor is an output parameter in the {@link GetRawFileDescriptor},
 * and desripts the raw file's file descriptor, start position and the length in the Harmony Ability Package (HAP).
 *
 * @since 3
 * @version 1.0
 */
typedef struct {
    /** the raw file fd */
    int fd;

    /** the offset from where the raw file starts in the Harmony Ability Package (HAP) */
    off_t start;

    /** the length of the raw file. */
    off_t length;
} RawFileDescriptor;

/**
 * @brief Reads a raw file.
 *
 * This function attempts to read data of <b>count</b> bytes from the current offset.
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @param buf Indicates the pointer to the buffer for receiving the data read.
 * @param length Indicates the number of bytes to read.
 * @return Returns the number of bytes read if any; returns <b>0</b> if the number reaches the end of file (EOF);
 * returns a value less than <b>0</b> if an error occurs.
 * @since 3
 * @version 1.0
 */
int ReadRawFile(const RawFile *rawFile, void *buf, size_t length);

/**
 * @brief Obtains the raw file buffer.
 *
 * This function returns the pointer to the buffer for storing all contents of the raw file.
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @return Returns the pointer to the buffer if the operation is successful; returns <b>NULL</b> otherwise.
 * @since 3
 * @version 1.0
 */
const void *GetRawFileBuffer(const RawFile *rawFile);

/**
 * @brief Uses the 32-bit data type to seek a data read/write position based on the specified offset within a raw file.
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @param offset Indicates the specified offset.
 * @param whence Indicates the new read/write position, which can be one of the following values: \n
 * <b>0</b>: The new read/write position is set to <b>offset</b>. \n
 * <b>1</b>: The read/write position is set to the current position plus <b>offset</b>. \n
 * <b>2</b>: The read/write position is set to the end of file (EOF) plus <b>offset</b>.
 * @return Returns the new read/write position if the operation is successful; returns <b>(off_t) -1</b> if an error
 * occurs.
 * @since 3
 * @version 1.0
 */
off_t SeekRawFile(const RawFile *rawFile, off_t offset, int whence);

/**
 * @brief Obtains the raw file length represented by an int32_t.
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @return Returns the total length of the raw file.
 * @since 3
 * @version 1.0
 */
off_t GetRawFileSize(RawFile *rawFile);

/**
 * @brief Closes an opened {@link RawFile} and releases all associated resources.
 *
 *
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @see OpenRawFile
 * @since 3
 * @version 1.0
 */
void CloseRawFile(RawFile *rawFile);

/**
 * @brief Obtains the current offset of a raw file, represented by an int32_t.
 *
 * The current offset of a raw file.
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @return Returns the current offset of a raw file.
 * @since 3
 * @version 1.0
 */
off_t GetRawFileOffset(const RawFile *rawFile);

/**
 * @brief Opens the file descriptor of a raw file based on the int32_t offset and file length.
 *
 * The opened raw file descriptor is used to read the raw file.
 *
 * @param rawFile Indicates the pointer to {@link RawFile}.
 * @param descriptor Indicates the raw file's file descriptor, start position and the length
 * in the Harmony Ability Package (HAP).
 * @return Returns true: open the raw file descriptor successfully, false: the raw file is not allowed to access.
 * @since 3
 * @version 1.0
 */
bool GetRawFileDescriptor(const RawFile *rawFile, RawFileDescriptor &descriptor);

/**
 * @brief Closes the file descriptor of a raw file.
 *
 * The opened raw file descriptor must be released after used to avoid the file descriptor leak.
 *
 * @param descriptor Indicates the raw file's file descriptor, start position and the length
 * in the Harmony Ability Package (HAP).
 * @return Returns true: closes the raw file descriptor successfully, false: closes the raw file descriptor failed.
 * @since 3
 * @version 1.0
 */
bool ReleaseRawFileDescriptor(const RawFileDescriptor &descriptor);

#ifdef __cplusplus
};
#endif

/** @} */
#endif // GLOBAL_RAW_FILE_H
