/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef HNS_ABI_USER_H
#define HNS_ABI_USER_H
#include <linux/types.h>
struct hns_roce_ib_create_cq {
	__aligned_u64 buf_addr;
	__aligned_u64 db_addr;
};
struct hns_roce_ib_create_cq_resp {
	__aligned_u64 cqn;
	__aligned_u64 cap_flags;
};
struct hns_roce_ib_create_srq {
	__aligned_u64 buf_addr;
	__aligned_u64 db_addr;
	__aligned_u64 que_addr;
};
struct hns_roce_ib_create_srq_resp {
	__u32	srqn;
	__u32	reserved;
};
struct hns_roce_ib_create_qp {
	__aligned_u64 buf_addr;
	__aligned_u64 db_addr;
	__u8    log_sq_bb_count;
	__u8    log_sq_stride;
	__u8    sq_no_prefetch;
	__u8    reserved[5];
	__aligned_u64 sdb_addr;
};
struct hns_roce_ib_create_qp_resp {
	__aligned_u64 cap_flags;
};
struct hns_roce_ib_alloc_ucontext_resp {
	__u32	qp_tab_size;
	__u32	reserved;
};
struct hns_roce_ib_alloc_pd_resp {
	__u32 pdn;
};
#endif
