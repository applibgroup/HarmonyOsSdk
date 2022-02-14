/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_TC_BPF_H
#define __LINUX_TC_BPF_H
#include <linux/pkt_cls.h>
#define TCA_ACT_BPF 13
struct tc_act_bpf {
	tc_gen;
};
enum {
	TCA_ACT_BPF_UNSPEC,
	TCA_ACT_BPF_TM,
	TCA_ACT_BPF_PARMS,
	TCA_ACT_BPF_OPS_LEN,
	TCA_ACT_BPF_OPS,
	TCA_ACT_BPF_FD,
	TCA_ACT_BPF_NAME,
	TCA_ACT_BPF_PAD,
	TCA_ACT_BPF_TAG,
	TCA_ACT_BPF_ID,
	__TCA_ACT_BPF_MAX,
};
#define TCA_ACT_BPF_MAX (__TCA_ACT_BPF_MAX - 1)
#endif
