/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_REALM_H
#define _XT_REALM_H
#include <linux/types.h>
struct xt_realm_info {
	__u32 id;
	__u32 mask;
	__u8 invert;
};
#endif
