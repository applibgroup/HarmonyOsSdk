/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__CODA_PSDEV_H
#define _UAPI__CODA_PSDEV_H
#include <linux/magic.h>
#define CODA_PSDEV_MAJOR 67
#define MAX_CODADEVS  5
struct upc_req {
	struct list_head    uc_chain;
	caddr_t	            uc_data;
	u_short	            uc_flags;
	u_short             uc_inSize;
	u_short	            uc_outSize;
	u_short	            uc_opcode;
	int		    uc_unique;
	wait_queue_head_t   uc_sleep;
};
#define CODA_REQ_ASYNC  0x1
#define CODA_REQ_READ   0x2
#define CODA_REQ_WRITE  0x4
#define CODA_REQ_ABORT  0x8
#endif
