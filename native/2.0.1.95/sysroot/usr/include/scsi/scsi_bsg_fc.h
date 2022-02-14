/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef SCSI_BSG_FC_H
#define SCSI_BSG_FC_H
#define FC_DEFAULT_BSG_TIMEOUT		(10 * HZ)
#define FC_BSG_CLS_MASK		0xF0000000
#define FC_BSG_HST_MASK		0x80000000
#define FC_BSG_RPT_MASK		0x40000000

#define FC_BSG_HST_ADD_RPORT		(FC_BSG_HST_MASK | 0x00000001)
#define FC_BSG_HST_DEL_RPORT		(FC_BSG_HST_MASK | 0x00000002)
#define FC_BSG_HST_ELS_NOLOGIN		(FC_BSG_HST_MASK | 0x00000003)
#define FC_BSG_HST_CT			(FC_BSG_HST_MASK | 0x00000004)
#define FC_BSG_HST_VENDOR		(FC_BSG_HST_MASK | 0x000000FF)

#define FC_BSG_RPT_ELS			(FC_BSG_RPT_MASK | 0x00000001)
#define FC_BSG_RPT_CT			(FC_BSG_RPT_MASK | 0x00000002)
struct fc_bsg_host_add_rport {
	uint8_t		reserved;

	uint8_t		port_id[3];
};
struct fc_bsg_host_del_rport {
	uint8_t		reserved;

	uint8_t		port_id[3];
};
struct fc_bsg_host_els {

	uint8_t 	command_code;

	uint8_t		port_id[3];
};
#define FC_CTELS_STATUS_OK	0x00000000
#define FC_CTELS_STATUS_REJECT	0x00000001
#define FC_CTELS_STATUS_P_RJT	0x00000002
#define FC_CTELS_STATUS_F_RJT	0x00000003
#define FC_CTELS_STATUS_P_BSY	0x00000004
#define FC_CTELS_STATUS_F_BSY	0x00000006
struct fc_bsg_ctels_reply {

	uint32_t	status;

	struct	{
		uint8_t	action;
		uint8_t	reason_code;
		uint8_t	reason_explanation;
		uint8_t	vendor_unique;
	} rjt_data;
};
struct fc_bsg_host_ct {
	uint8_t		reserved;

	uint8_t		port_id[3];

	uint32_t	preamble_word0;
	uint32_t	preamble_word1;
	uint32_t	preamble_word2;
};
struct fc_bsg_host_vendor {

	uint64_t vendor_id;

	uint32_t vendor_cmd[0];
};
struct fc_bsg_host_vendor_reply {

	uint32_t vendor_rsp[0];
};
struct fc_bsg_rport_els {

	uint8_t els_code;
};
struct fc_bsg_rport_ct {

	uint32_t	preamble_word0;
	uint32_t	preamble_word1;
	uint32_t	preamble_word2;
};
struct fc_bsg_request {
	uint32_t msgcode;
	union {
		struct fc_bsg_host_add_rport	h_addrport;
		struct fc_bsg_host_del_rport	h_delrport;
		struct fc_bsg_host_els		h_els;
		struct fc_bsg_host_ct		h_ct;
		struct fc_bsg_host_vendor	h_vendor;
		struct fc_bsg_rport_els		r_els;
		struct fc_bsg_rport_ct		r_ct;
	} rqst_data;
} __attribute__((packed));
struct fc_bsg_reply {

	uint32_t result;

	uint32_t reply_payload_rcv_len;
	union {
		struct fc_bsg_host_vendor_reply		vendor_reply;
		struct fc_bsg_ctels_reply		ctels_reply;
	} reply_data;
};
#endif
