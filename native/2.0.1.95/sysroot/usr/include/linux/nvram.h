/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_NVRAM_H
#define _UAPI_LINUX_NVRAM_H
#include <linux/ioctl.h>
#define NVRAM_INIT	_IO('p', 0x40)
#define NVRAM_SETCKS	_IO('p', 0x41)
#define NVRAM_FIRST_BYTE    14
#define NVRAM_OFFSET(x)   ((x)-NVRAM_FIRST_BYTE)
#endif
