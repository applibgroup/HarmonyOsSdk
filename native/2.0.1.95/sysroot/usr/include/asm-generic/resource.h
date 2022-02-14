/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_ASM_GENERIC_RESOURCE_H
#define _UAPI_ASM_GENERIC_RESOURCE_H
#define RLIMIT_CPU		0
#define RLIMIT_FSIZE		1
#define RLIMIT_DATA		2
#define RLIMIT_STACK		3
#define RLIMIT_CORE		4
#ifndef RLIMIT_RSS
# define RLIMIT_RSS		5
#endif
#ifndef RLIMIT_NPROC
# define RLIMIT_NPROC		6
#endif
#ifndef RLIMIT_NOFILE
# define RLIMIT_NOFILE		7
#endif
#ifndef RLIMIT_MEMLOCK
# define RLIMIT_MEMLOCK		8
#endif
#ifndef RLIMIT_AS
# define RLIMIT_AS		9
#endif
#define RLIMIT_LOCKS		10
#define RLIMIT_SIGPENDING	11
#define RLIMIT_MSGQUEUE		12
#define RLIMIT_NICE		13
#define RLIMIT_RTPRIO		14
#define RLIMIT_RTTIME		15
#define RLIM_NLIMITS		16
#ifndef RLIM_INFINITY
# define RLIM_INFINITY		(~0UL)
#endif
#endif
