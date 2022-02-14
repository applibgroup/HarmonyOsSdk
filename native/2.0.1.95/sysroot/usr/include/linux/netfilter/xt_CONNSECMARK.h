/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_CONNSECMARK_H_target
#define _XT_CONNSECMARK_H_target
#include <linux/types.h>
enum {
	CONNSECMARK_SAVE = 1,
	CONNSECMARK_RESTORE,
};
struct xt_connsecmark_target_info {
	__u8 mode;
};
#endif
