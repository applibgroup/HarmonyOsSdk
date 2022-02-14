/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _IP6T_MH_H
#define _IP6T_MH_H
#include <linux/types.h>
struct ip6t_mh {
	__u8 types[2];
	__u8 invflags;
};
#define IP6T_MH_INV_TYPE	0x01
#define IP6T_MH_INV_MASK	0x01
#endif
