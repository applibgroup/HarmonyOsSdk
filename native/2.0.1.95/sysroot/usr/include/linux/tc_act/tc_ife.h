/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __UAPI_TC_IFE_H
#define __UAPI_TC_IFE_H
#include <linux/types.h>
#include <linux/pkt_cls.h>
#include <linux/ife.h>
#define TCA_ACT_IFE 25
#define IFE_ENCODE 1
#define IFE_DECODE 0
struct tc_ife {
	tc_gen;
	__u16 flags;
};
enum {
	TCA_IFE_UNSPEC,
	TCA_IFE_PARMS,
	TCA_IFE_TM,
	TCA_IFE_DMAC,
	TCA_IFE_SMAC,
	TCA_IFE_TYPE,
	TCA_IFE_METALST,
	TCA_IFE_PAD,
	__TCA_IFE_MAX
};
#define TCA_IFE_MAX (__TCA_IFE_MAX - 1)
#endif
