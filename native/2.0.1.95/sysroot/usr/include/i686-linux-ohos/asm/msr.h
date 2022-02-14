/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_ASM_X86_MSR_H
#define _UAPI_ASM_X86_MSR_H
#ifndef __ASSEMBLY__
#include <linux/types.h>
#include <linux/ioctl.h>
#define X86_IOC_RDMSR_REGS	_IOWR('c', 0xA0, __u32[8])
#define X86_IOC_WRMSR_REGS	_IOWR('c', 0xA1, __u32[8])
#endif
#endif
