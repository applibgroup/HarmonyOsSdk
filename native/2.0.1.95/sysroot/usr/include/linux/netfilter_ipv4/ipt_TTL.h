/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _IPT_TTL_H
#define _IPT_TTL_H
#include <linux/types.h>
enum {
	IPT_TTL_EQ = 0,
	IPT_TTL_NE,
	IPT_TTL_LT,
	IPT_TTL_GT,
};
struct ipt_ttl_info {
	__u8	mode;
	__u8	ttl;
};
#endif
