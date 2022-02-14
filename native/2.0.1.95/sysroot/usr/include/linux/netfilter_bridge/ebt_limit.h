/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_BRIDGE_EBT_LIMIT_H
#define __LINUX_BRIDGE_EBT_LIMIT_H
#include <linux/types.h>
#define EBT_LIMIT_MATCH "limit"
#define EBT_LIMIT_SCALE 10000
struct ebt_limit_info {
	__u32 avg;
	__u32 burst;

	unsigned long prev;
	__u32 credit;
	__u32 credit_cap, cost;
};
#endif
