/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_ECN_H
#define _XT_ECN_H
#include <linux/types.h>
#include <linux/netfilter/xt_dscp.h>
#define XT_ECN_IP_MASK	(~XT_DSCP_MASK)
#define XT_ECN_OP_MATCH_IP	0x01
#define XT_ECN_OP_MATCH_ECE	0x10
#define XT_ECN_OP_MATCH_CWR	0x20
#define XT_ECN_OP_MATCH_MASK	0xce
struct xt_ecn_info {
	__u8 operation;
	__u8 invert;
	__u8 ip_ect;
	union {
		struct {
			__u8 ect;
		} tcp;
	} proto;
};
#endif
