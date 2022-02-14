/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__LINUX_IP6_NETFILTER_H
#define _UAPI__LINUX_IP6_NETFILTER_H
#include <linux/netfilter.h>
#ifndef __KERNEL__
#include <limits.h>
#define NF_IP6_PRE_ROUTING	0
#define NF_IP6_LOCAL_IN		1
#define NF_IP6_FORWARD		2
#define NF_IP6_LOCAL_OUT		3
#define NF_IP6_POST_ROUTING	4
#define NF_IP6_NUMHOOKS		5
#endif
enum nf_ip6_hook_priorities {
	NF_IP6_PRI_FIRST = INT_MIN,
	NF_IP6_PRI_RAW_BEFORE_DEFRAG = -450,
	NF_IP6_PRI_CONNTRACK_DEFRAG = -400,
	NF_IP6_PRI_RAW = -300,
	NF_IP6_PRI_SELINUX_FIRST = -225,
	NF_IP6_PRI_CONNTRACK = -200,
	NF_IP6_PRI_MANGLE = -150,
	NF_IP6_PRI_NAT_DST = -100,
	NF_IP6_PRI_FILTER = 0,
	NF_IP6_PRI_SECURITY = 50,
	NF_IP6_PRI_NAT_SRC = 100,
	NF_IP6_PRI_SELINUX_LAST = 225,
	NF_IP6_PRI_CONNTRACK_HELPER = 300,
	NF_IP6_PRI_LAST = INT_MAX,
};
#endif
