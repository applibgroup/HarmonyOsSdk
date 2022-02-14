/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_DECNET_NETFILTER_H
#define __LINUX_DECNET_NETFILTER_H
#include <linux/netfilter.h>
#ifndef __KERNEL__
#include <limits.h>
#define NF_DN_NUMHOOKS		7
#endif
#define NF_DN_PRE_ROUTING	0
#define NF_DN_LOCAL_IN		1
#define NF_DN_FORWARD		2
#define NF_DN_LOCAL_OUT		3
#define NF_DN_POST_ROUTING	4
#define NF_DN_HELLO		5
#define NF_DN_ROUTE		6
enum nf_dn_hook_priorities {
	NF_DN_PRI_FIRST = INT_MIN,
	NF_DN_PRI_CONNTRACK = -200,
	NF_DN_PRI_MANGLE = -150,
	NF_DN_PRI_NAT_DST = -100,
	NF_DN_PRI_FILTER = 0,
	NF_DN_PRI_NAT_SRC = 100,
	NF_DN_PRI_DNRTMSG = 200,
	NF_DN_PRI_LAST = INT_MAX,
};
struct nf_dn_rtmsg {
	int nfdn_ifindex;
};
#define NFDN_RTMSG(r) ((unsigned char *)(r) + NLMSG_ALIGN(sizeof(struct nf_dn_rtmsg)))
#ifndef __KERNEL__
#define DNRMG_L1_GROUP 0x01
#define DNRMG_L2_GROUP 0x02
#endif
enum {
	DNRNG_NLGRP_NONE,
#define DNRNG_NLGRP_NONE	DNRNG_NLGRP_NONE
	DNRNG_NLGRP_L1,
#define DNRNG_NLGRP_L1		DNRNG_NLGRP_L1
	DNRNG_NLGRP_L2,
#define DNRNG_NLGRP_L2		DNRNG_NLGRP_L2
	__DNRNG_NLGRP_MAX
};
#define DNRNG_NLGRP_MAX	(__DNRNG_NLGRP_MAX - 1)
#endif
