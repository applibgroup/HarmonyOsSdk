/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __ASM_X86_SHMBUF_H
#define __ASM_X86_SHMBUF_H
#if !defined(__x86_64__) || !defined(__ILP32__)
#include <asm-generic/shmbuf.h>
#else
struct shmid64_ds {
	struct ipc64_perm	shm_perm;
	size_t			shm_segsz;
	__kernel_time_t		shm_atime;
	__kernel_time_t		shm_dtime;
	__kernel_time_t		shm_ctime;
	__kernel_pid_t		shm_cpid;
	__kernel_pid_t		shm_lpid;
	__kernel_ulong_t	shm_nattch;
	__kernel_ulong_t	__unused4;
	__kernel_ulong_t	__unused5;
};
struct shminfo64 {
	__kernel_ulong_t	shmmax;
	__kernel_ulong_t	shmmin;
	__kernel_ulong_t	shmmni;
	__kernel_ulong_t	shmseg;
	__kernel_ulong_t	shmall;
	__kernel_ulong_t	__unused1;
	__kernel_ulong_t	__unused2;
	__kernel_ulong_t	__unused3;
	__kernel_ulong_t	__unused4;
};
#endif
#endif
