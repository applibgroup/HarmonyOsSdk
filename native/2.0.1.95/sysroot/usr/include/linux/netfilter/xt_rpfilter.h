/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_RPATH_H
#define _XT_RPATH_H
#include <linux/types.h>
enum {
	XT_RPFILTER_LOOSE = 1 << 0,
	XT_RPFILTER_VALID_MARK = 1 << 1,
	XT_RPFILTER_ACCEPT_LOCAL = 1 << 2,
	XT_RPFILTER_INVERT = 1 << 3,
#ifdef __KERNEL__
	XT_RPFILTER_OPTION_MASK = XT_RPFILTER_LOOSE |
				  XT_RPFILTER_VALID_MARK |
				  XT_RPFILTER_ACCEPT_LOCAL |
				  XT_RPFILTER_INVERT,
#endif
};
struct xt_rpfilter_info {
	__u8 flags;
};
#endif
