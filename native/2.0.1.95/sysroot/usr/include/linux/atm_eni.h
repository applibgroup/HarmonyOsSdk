/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef LINUX_ATM_ENI_H
#define LINUX_ATM_ENI_H
#include <linux/atmioc.h>
struct eni_multipliers {
	int tx,rx;
};
#define ENI_MEMDUMP     _IOW('a',ATMIOC_SARPRV,struct atmif_sioc)

#define ENI_SETMULT	_IOW('a',ATMIOC_SARPRV+7,struct atmif_sioc)

#endif
