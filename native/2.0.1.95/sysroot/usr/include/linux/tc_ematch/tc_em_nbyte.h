/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_TC_EM_NBYTE_H
#define __LINUX_TC_EM_NBYTE_H
#include <linux/types.h>
#include <linux/pkt_cls.h>
struct tcf_em_nbyte {
	__u16		off;
	__u16		len:12;
	__u8		layer:4;
};
#endif
