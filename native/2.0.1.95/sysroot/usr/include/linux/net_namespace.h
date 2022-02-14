/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_NET_NAMESPACE_H_
#define _UAPI_LINUX_NET_NAMESPACE_H_
enum {
	NETNSA_NONE,
#define NETNSA_NSID_NOT_ASSIGNED -1
	NETNSA_NSID,
	NETNSA_PID,
	NETNSA_FD,
	NETNSA_TARGET_NSID,
	NETNSA_CURRENT_NSID,
	__NETNSA_MAX,
};
#define NETNSA_MAX		(__NETNSA_MAX - 1)
#endif
