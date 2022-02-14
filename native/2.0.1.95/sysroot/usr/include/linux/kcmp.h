/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_KCMP_H
#define _UAPI_LINUX_KCMP_H
#include <linux/types.h>
enum kcmp_type {
	KCMP_FILE,
	KCMP_VM,
	KCMP_FILES,
	KCMP_FS,
	KCMP_SIGHAND,
	KCMP_IO,
	KCMP_SYSVSEM,
	KCMP_EPOLL_TFD,
	KCMP_TYPES,
};
struct kcmp_epoll_slot {
	__u32 efd;
	__u32 tfd;
	__u32 toff;
};
#endif
