/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */

#ifndef _LINUX_IF_PLIP_H
#define _LINUX_IF_PLIP_H
#include <linux/sockios.h>
#define	SIOCDEVPLIP	SIOCDEVPRIVATE
struct plipconf {
	unsigned short pcmd;
	unsigned long  nibble;
	unsigned long  trigger;
};
#define PLIP_GET_TIMEOUT	0x1
#define PLIP_SET_TIMEOUT	0x2
#endif
