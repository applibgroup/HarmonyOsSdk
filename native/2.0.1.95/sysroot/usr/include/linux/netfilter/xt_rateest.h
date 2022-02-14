/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_RATEEST_TARGET_H
#define _XT_RATEEST_TARGET_H
#include <linux/types.h>
#include <linux/if.h>
struct xt_rateest_target_info {
	char			name[IFNAMSIZ];
	__s8			interval;
	__u8		ewma_log;

	struct xt_rateest	*est __attribute__((aligned(8)));
};
#endif
