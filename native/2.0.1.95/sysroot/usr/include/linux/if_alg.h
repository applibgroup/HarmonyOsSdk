/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_IF_ALG_H
#define _LINUX_IF_ALG_H
#include <linux/types.h>
struct sockaddr_alg {
	__u16	salg_family;
	__u8	salg_type[14];
	__u32	salg_feat;
	__u32	salg_mask;
	__u8	salg_name[64];
};
struct af_alg_iv {
	__u32	ivlen;
	__u8	iv[0];
};
#define ALG_SET_KEY			1
#define ALG_SET_IV			2
#define ALG_SET_OP			3
#define ALG_SET_AEAD_ASSOCLEN		4
#define ALG_SET_AEAD_AUTHSIZE		5
#define ALG_OP_DECRYPT			0
#define ALG_OP_ENCRYPT			1
#endif
