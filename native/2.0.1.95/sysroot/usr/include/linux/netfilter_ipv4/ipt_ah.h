/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _IPT_AH_H
#define _IPT_AH_H
#include <linux/types.h>
struct ipt_ah {
	__u32 spis[2];
	__u8  invflags;
};
#define IPT_AH_INV_SPI		0x01
#define IPT_AH_INV_MASK	0x01
#endif
