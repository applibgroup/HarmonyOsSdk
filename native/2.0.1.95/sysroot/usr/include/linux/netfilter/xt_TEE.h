/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_TEE_TARGET_H
#define _XT_TEE_TARGET_H
#include <linux/netfilter.h>
struct xt_tee_tginfo {
	union nf_inet_addr gw;
	char oif[16];

	struct xt_tee_priv *priv __attribute__((aligned(8)));
};
#endif
