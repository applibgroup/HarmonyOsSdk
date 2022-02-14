/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_REISERFS_XATTR_H
#define _LINUX_REISERFS_XATTR_H
#include <linux/types.h>
#define REISERFS_XATTR_MAGIC 0x52465841
struct reiserfs_xattr_header {
	__le32 h_magic;
	__le32 h_hash;
};
struct reiserfs_security_handle {
	const char *name;
	void *value;
	size_t length;
};
#endif
