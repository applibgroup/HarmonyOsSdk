/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _ASM_X86_SEMBUF_H
#define _ASM_X86_SEMBUF_H
struct semid64_ds {
	struct ipc64_perm sem_perm;
#ifdef __i386__
	unsigned long	sem_otime;
	unsigned long	sem_otime_high;
	unsigned long	sem_ctime;
	unsigned long	sem_ctime_high;
#else
	__kernel_time_t	sem_otime;
	__kernel_ulong_t __unused1;
	__kernel_time_t	sem_ctime;
	__kernel_ulong_t __unused2;
#endif
	__kernel_ulong_t sem_nsems;
	__kernel_ulong_t __unused3;
	__kernel_ulong_t __unused4;
};
#endif
