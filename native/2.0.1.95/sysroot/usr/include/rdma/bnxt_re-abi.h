/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __BNXT_RE_UVERBS_ABI_H__
#define __BNXT_RE_UVERBS_ABI_H__
#include <linux/types.h>
#define BNXT_RE_ABI_VERSION	1
struct bnxt_re_uctx_resp {
	__u32 dev_id;
	__u32 max_qp;
	__u32 pg_size;
	__u32 cqe_sz;
	__u32 max_cqd;
	__u32 rsvd;
};
struct bnxt_re_pd_resp {
	__u32 pdid;
	__u32 dpi;
	__u64 dbr;
} __attribute__((packed, aligned(4)));
struct bnxt_re_cq_req {
	__aligned_u64 cq_va;
	__aligned_u64 cq_handle;
};
struct bnxt_re_cq_resp {
	__u32 cqid;
	__u32 tail;
	__u32 phase;
	__u32 rsvd;
};
struct bnxt_re_qp_req {
	__aligned_u64 qpsva;
	__aligned_u64 qprva;
	__aligned_u64 qp_handle;
};
struct bnxt_re_qp_resp {
	__u32 qpid;
	__u32 rsvd;
};
struct bnxt_re_srq_req {
	__aligned_u64 srqva;
	__aligned_u64 srq_handle;
};
struct bnxt_re_srq_resp {
	__u32 srqid;
};
enum bnxt_re_shpg_offt {
	BNXT_RE_BEG_RESV_OFFT	= 0x00,
	BNXT_RE_AVID_OFFT	= 0x10,
	BNXT_RE_AVID_SIZE	= 0x04,
	BNXT_RE_END_RESV_OFFT	= 0xFF0
};
#endif
