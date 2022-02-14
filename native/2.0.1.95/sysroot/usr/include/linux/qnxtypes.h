/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _QNX4TYPES_H
#define _QNX4TYPES_H
#include <linux/types.h>
typedef __le16 qnx4_nxtnt_t;
typedef __u8  qnx4_ftype_t;
typedef struct {
	__le32 xtnt_blk;
	__le32 xtnt_size;
} qnx4_xtnt_t;
typedef __le16 qnx4_mode_t;
typedef __le16 qnx4_muid_t;
typedef __le16 qnx4_mgid_t;
typedef __le32 qnx4_off_t;
typedef __le16 qnx4_nlink_t;
#endif
