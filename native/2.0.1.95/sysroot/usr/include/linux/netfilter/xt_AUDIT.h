/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_AUDIT_TARGET_H
#define _XT_AUDIT_TARGET_H
#include <linux/types.h>
enum {
	XT_AUDIT_TYPE_ACCEPT = 0,
	XT_AUDIT_TYPE_DROP,
	XT_AUDIT_TYPE_REJECT,
	__XT_AUDIT_TYPE_MAX,
};
#define XT_AUDIT_TYPE_MAX (__XT_AUDIT_TYPE_MAX - 1)
struct xt_audit_info {
	__u8 type;
};
#endif
