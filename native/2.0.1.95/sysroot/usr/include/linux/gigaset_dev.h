/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef GIGASET_INTERFACE_H
#define GIGASET_INTERFACE_H
#include <linux/ioctl.h>
#define GIGASET_IOCTL 0x47
#define GIGASET_REDIR    _IOWR(GIGASET_IOCTL, 0, int)
#define GIGASET_CONFIG   _IOWR(GIGASET_IOCTL, 1, int)
#define GIGASET_BRKCHARS _IOW(GIGASET_IOCTL, 2, unsigned char[6])
#define GIGASET_VERSION  _IOWR(GIGASET_IOCTL, 3, unsigned[4])
#define GIGVER_DRIVER 0
#define GIGVER_COMPAT 1
#define GIGVER_FWBASE 2
#endif
