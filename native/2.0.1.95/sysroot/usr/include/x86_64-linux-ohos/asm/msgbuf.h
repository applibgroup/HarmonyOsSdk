/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __ASM_X64_MSGBUF_H
#define __ASM_X64_MSGBUF_H
#if !defined(__x86_64__) || !defined(__ILP32__)
#include <asm-generic/msgbuf.h>
#else
struct msqid64_ds {
	struct ipc64_perm msg_perm;
	__kernel_time_t msg_stime;
	__kernel_time_t msg_rtime;
	__kernel_time_t msg_ctime;
	__kernel_ulong_t msg_cbytes;
	__kernel_ulong_t msg_qnum;
	__kernel_ulong_t msg_qbytes;
	__kernel_pid_t msg_lspid;
	__kernel_pid_t msg_lrpid;
	__kernel_ulong_t __unused4;
	__kernel_ulong_t __unused5;
};
#endif
#endif
