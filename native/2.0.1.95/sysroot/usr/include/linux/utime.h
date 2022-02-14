/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_UTIME_H
#define _LINUX_UTIME_H
#include <linux/types.h>
struct utimbuf {
	__kernel_time_t actime;
	__kernel_time_t modtime;
};
#endif
