/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef LINUX_ATM_HE_H
#define LINUX_ATM_HE_H
#include <linux/atmioc.h>
#define HE_GET_REG	_IOW('a', ATMIOC_SARPRV, struct atmif_sioc)
#define HE_REGTYPE_PCI	1
#define HE_REGTYPE_RCM	2
#define HE_REGTYPE_TCM	3
#define HE_REGTYPE_MBOX	4
struct he_ioctl_reg {
	unsigned addr, val;
	char type;
};
#endif
