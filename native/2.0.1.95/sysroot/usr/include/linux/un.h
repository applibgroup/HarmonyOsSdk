/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_UN_H
#define _LINUX_UN_H
#include <linux/socket.h>
#define UNIX_PATH_MAX	108
struct sockaddr_un {
	__kernel_sa_family_t sun_family;
	char sun_path[UNIX_PATH_MAX];
};
#define SIOCUNIXFILE (SIOCPROTOPRIVATE + 0)
#endif
