/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_BINDERFS_H
#define _UAPI_LINUX_BINDERFS_H
#include <linux/android/binder.h>
#include <linux/types.h>
#include <linux/ioctl.h>
#define BINDERFS_MAX_NAME 255
struct binderfs_device {
	char name[BINDERFS_MAX_NAME + 1];
	__u32 major;
	__u32 minor;
};
#define BINDER_CTL_ADD _IOWR('b', 1, struct binderfs_device)
#endif
