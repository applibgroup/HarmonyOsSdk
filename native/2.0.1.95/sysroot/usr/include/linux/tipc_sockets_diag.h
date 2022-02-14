/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__TIPC_SOCKETS_DIAG_H__
#define _UAPI__TIPC_SOCKETS_DIAG_H__
#include <linux/types.h>
#include <linux/sock_diag.h>
struct tipc_sock_diag_req {
	__u8	sdiag_family;
	__u8	sdiag_protocol;
	__u16	pad;
	__u32	tidiag_states;
};
#endif
