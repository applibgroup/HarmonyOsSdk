/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_IF_FC_H
#define _LINUX_IF_FC_H
#include <linux/types.h>
#define FC_ALEN	6
#define FC_HLEN   (sizeof(struct fch_hdr)+sizeof(struct fcllc))
#define FC_ID_LEN 3
#define EXTENDED_SAP 0xAA
#define UI_CMD       0x03
struct fch_hdr {
	__u8  daddr[FC_ALEN];
	__u8  saddr[FC_ALEN];
};
struct fcllc {
	__u8  dsap;
	__u8  ssap;
	__u8  llc;
	__u8  protid[3];
	__be16 ethertype;
};
#endif
