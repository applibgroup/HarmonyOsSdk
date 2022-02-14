/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_IDLETIMER_H
#define _XT_IDLETIMER_H
#include <linux/types.h>
#define MAX_IDLETIMER_LABEL_SIZE 28
struct idletimer_tg_info {
	__u32 timeout;
	char label[MAX_IDLETIMER_LABEL_SIZE];

	struct idletimer_tg *timer __attribute__((aligned(8)));
};
#endif
