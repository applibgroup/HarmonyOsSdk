/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__VM_SOCKETS_DIAG_H__
#define _UAPI__VM_SOCKETS_DIAG_H__
#include <linux/types.h>
struct vsock_diag_req {
	__u8	sdiag_family;
	__u8	sdiag_protocol;
	__u16	pad;
	__u32	vdiag_states;
	__u32	vdiag_ino;
	__u32	vdiag_show;
	__u32	vdiag_cookie[2];
};
struct vsock_diag_msg {
	__u8	vdiag_family;
	__u8	vdiag_type;
	__u8	vdiag_state;
	__u8	vdiag_shutdown;
	__u32   vdiag_src_cid;
	__u32   vdiag_src_port;
	__u32   vdiag_dst_cid;
	__u32   vdiag_dst_port;
	__u32	vdiag_ino;
	__u32	vdiag_cookie[2];
};
#endif
