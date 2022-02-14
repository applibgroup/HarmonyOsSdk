/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */


#ifndef _LINUX_ATMAPI_H
#define _LINUX_ATMAPI_H
#if defined(__sparc__) || defined(__ia64__)
#define __ATM_API_ALIGN	__attribute__((aligned(8)))
#else
#define __ATM_API_ALIGN
#endif

typedef struct { unsigned char _[8]; } __ATM_API_ALIGN atm_kptr_t;
#endif
