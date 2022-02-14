/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__IP_SET_LIST_H
#define _UAPI__IP_SET_LIST_H
#include <linux/netfilter/ipset/ip_set.h>
enum {

	IPSET_ERR_NAME = IPSET_ERR_TYPE_SPECIFIC,

	IPSET_ERR_LOOP,

	IPSET_ERR_BEFORE,

	IPSET_ERR_NAMEREF,

	IPSET_ERR_LIST_FULL,

	IPSET_ERR_REF_EXIST,
};
#endif
