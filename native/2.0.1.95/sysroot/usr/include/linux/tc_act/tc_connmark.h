/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __UAPI_TC_CONNMARK_H
#define __UAPI_TC_CONNMARK_H
#include <linux/types.h>
#include <linux/pkt_cls.h>
#define TCA_ACT_CONNMARK 14
struct tc_connmark {
	tc_gen;
	__u16 zone;
};
enum {
	TCA_CONNMARK_UNSPEC,
	TCA_CONNMARK_PARMS,
	TCA_CONNMARK_TM,
	TCA_CONNMARK_PAD,
	__TCA_CONNMARK_MAX
};
#define TCA_CONNMARK_MAX (__TCA_CONNMARK_MAX - 1)
#endif
