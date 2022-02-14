/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_CLUSTER_MATCH_H
#define _XT_CLUSTER_MATCH_H
#include <linux/types.h>
enum xt_cluster_flags {
	XT_CLUSTER_F_INV	= (1 << 0)
};
struct xt_cluster_match_info {
	__u32 total_nodes;
	__u32 node_mask;
	__u32 hash_seed;
	__u32 flags;
};
#define XT_CLUSTER_NODES_MAX	32
#endif
