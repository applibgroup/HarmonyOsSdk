/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_NFACCT_MATCH_H
#define _XT_NFACCT_MATCH_H
#include <linux/netfilter/nfnetlink_acct.h>
struct nf_acct;
struct xt_nfacct_match_info {
	char		name[NFACCT_NAME_MAX];
	struct nf_acct	*nfacct;
};
#endif
