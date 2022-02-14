/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef SCSI_NETLINK_FC_H
#define SCSI_NETLINK_FC_H
#include <scsi/scsi_netlink.h>

#define FC_NL_ASYNC_EVENT			0x0100

#define FC_NL_MSGALIGN(len)		(((len) + 7) & ~7)
struct fc_nl_event {
	struct scsi_nl_hdr snlh;
	uint64_t seconds;
	uint64_t vendor_id;
	uint16_t host_no;
	uint16_t event_datalen;
	uint32_t event_num;
	uint32_t event_code;
	uint32_t event_data;
} __attribute__((aligned(sizeof(uint64_t))));
#endif
