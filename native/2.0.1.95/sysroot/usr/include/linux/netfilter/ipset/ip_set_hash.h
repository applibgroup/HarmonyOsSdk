/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__IP_SET_HASH_H
#define _UAPI__IP_SET_HASH_H
#include <linux/netfilter/ipset/ip_set.h>
enum {

	IPSET_ERR_HASH_FULL = IPSET_ERR_TYPE_SPECIFIC,

	IPSET_ERR_HASH_ELEM,

	IPSET_ERR_INVALID_PROTO,

	IPSET_ERR_MISSING_PROTO,

	IPSET_ERR_HASH_RANGE_UNSUPPORTED,

	IPSET_ERR_HASH_RANGE,
};
#endif
