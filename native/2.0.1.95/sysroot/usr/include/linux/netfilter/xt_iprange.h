/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_NETFILTER_XT_IPRANGE_H
#define _LINUX_NETFILTER_XT_IPRANGE_H 1
#include <linux/types.h>
#include <linux/netfilter.h>
enum {
	IPRANGE_SRC     = 1 << 0,
	IPRANGE_DST     = 1 << 1,
	IPRANGE_SRC_INV = 1 << 4,
	IPRANGE_DST_INV = 1 << 5,
};
struct xt_iprange_mtinfo {
	union nf_inet_addr src_min, src_max;
	union nf_inet_addr dst_min, dst_max;
	__u8 flags;
};
#endif
