/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_NSFS_H
#define __LINUX_NSFS_H
#include <linux/ioctl.h>
#define NSIO	0xb7
#define NS_GET_USERNS		_IO(NSIO, 0x1)
#define NS_GET_PARENT		_IO(NSIO, 0x2)
#define NS_GET_NSTYPE		_IO(NSIO, 0x3)
#define NS_GET_OWNER_UID	_IO(NSIO, 0x4)
#endif
