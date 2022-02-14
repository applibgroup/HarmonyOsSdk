/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __ASM_GENERIC_SHMBUF_H
#define __ASM_GENERIC_SHMBUF_H
#include <asm/bitsperlong.h>
struct shmid64_ds {
	struct ipc64_perm	shm_perm;
	size_t			shm_segsz;
#if __BITS_PER_LONG == 64
	__kernel_time_t		shm_atime;
	__kernel_time_t		shm_dtime;
	__kernel_time_t		shm_ctime;
#else
	unsigned long		shm_atime;
	unsigned long		shm_atime_high;
	unsigned long		shm_dtime;
	unsigned long		shm_dtime_high;
	unsigned long		shm_ctime;
	unsigned long		shm_ctime_high;
#endif
	__kernel_pid_t		shm_cpid;
	__kernel_pid_t		shm_lpid;
	unsigned long		shm_nattch;
	unsigned long		__unused4;
	unsigned long		__unused5;
};
struct shminfo64 {
	unsigned long		shmmax;
	unsigned long		shmmin;
	unsigned long		shmmni;
	unsigned long		shmseg;
	unsigned long		shmall;
	unsigned long		__unused1;
	unsigned long		__unused2;
	unsigned long		__unused3;
	unsigned long		__unused4;
};
#endif
