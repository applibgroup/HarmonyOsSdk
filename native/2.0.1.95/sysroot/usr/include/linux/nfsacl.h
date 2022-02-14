/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__LINUX_NFSACL_H
#define _UAPI__LINUX_NFSACL_H
#define NFS_ACL_PROGRAM	100227
#define ACLPROC2_GETACL		1
#define ACLPROC2_SETACL		2
#define ACLPROC2_GETATTR	3
#define ACLPROC2_ACCESS		4
#define ACLPROC3_GETACL		1
#define ACLPROC3_SETACL		2
#define NFS_ACL			0x0001
#define NFS_ACLCNT		0x0002
#define NFS_DFACL		0x0004
#define NFS_DFACLCNT		0x0008
#define NFS_ACL_MASK		0x000f
#define NFS_ACL_DEFAULT		0x1000
#endif
