/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _IPT_CLUSTERIP_H_target
#define _IPT_CLUSTERIP_H_target
#include <linux/types.h>
#include <linux/if_ether.h>
enum clusterip_hashmode {
    CLUSTERIP_HASHMODE_SIP = 0,
    CLUSTERIP_HASHMODE_SIP_SPT,
    CLUSTERIP_HASHMODE_SIP_SPT_DPT,
};
#define CLUSTERIP_HASHMODE_MAX CLUSTERIP_HASHMODE_SIP_SPT_DPT
#define CLUSTERIP_MAX_NODES 16
#define CLUSTERIP_FLAG_NEW 0x00000001
struct clusterip_config;
struct ipt_clusterip_tgt_info {
	__u32 flags;

	__u8 clustermac[ETH_ALEN];
	__u16 num_total_nodes;
	__u16 num_local_nodes;
	__u16 local_nodes[CLUSTERIP_MAX_NODES];
	__u32 hash_mode;
	__u32 hash_initval;

	struct clusterip_config *config;
};
#endif
