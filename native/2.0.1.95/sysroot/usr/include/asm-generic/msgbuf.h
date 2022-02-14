/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __ASM_GENERIC_MSGBUF_H
#define __ASM_GENERIC_MSGBUF_H
#include <asm/bitsperlong.h>
struct msqid64_ds {
	struct ipc64_perm msg_perm;
#if __BITS_PER_LONG == 64
	__kernel_time_t msg_stime;
	__kernel_time_t msg_rtime;
	__kernel_time_t msg_ctime;
#else
	unsigned long	msg_stime;
	unsigned long	msg_stime_high;
	unsigned long	msg_rtime;
	unsigned long	msg_rtime_high;
	unsigned long	msg_ctime;
	unsigned long	msg_ctime_high;
#endif
	unsigned long	msg_cbytes;
	unsigned long	msg_qnum;
	unsigned long	 msg_qbytes;
	__kernel_pid_t msg_lspid;
	__kernel_pid_t msg_lrpid;
	unsigned long	 __unused4;
	unsigned long	 __unused5;
};
#endif
