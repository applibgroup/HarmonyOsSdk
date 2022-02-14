/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef MTHCA_ABI_USER_H
#define MTHCA_ABI_USER_H
#include <linux/types.h>
#define MTHCA_UVERBS_ABI_VERSION	1
struct mthca_alloc_ucontext_resp {
	__u32 qp_tab_size;
	__u32 uarc_size;
};
struct mthca_alloc_pd_resp {
	__u32 pdn;
	__u32 reserved;
};
#define MTHCA_MR_DMASYNC	0x1
struct mthca_reg_mr {
	__u32 mr_attrs;
	__u32 reserved;
};
struct mthca_create_cq {
	__u32 lkey;
	__u32 pdn;
	__aligned_u64 arm_db_page;
	__aligned_u64 set_db_page;
	__u32 arm_db_index;
	__u32 set_db_index;
};
struct mthca_create_cq_resp {
	__u32 cqn;
	__u32 reserved;
};
struct mthca_resize_cq {
	__u32 lkey;
	__u32 reserved;
};
struct mthca_create_srq {
	__u32 lkey;
	__u32 db_index;
	__aligned_u64 db_page;
};
struct mthca_create_srq_resp {
	__u32 srqn;
	__u32 reserved;
};
struct mthca_create_qp {
	__u32 lkey;
	__u32 reserved;
	__aligned_u64 sq_db_page;
	__aligned_u64 rq_db_page;
	__u32 sq_db_index;
	__u32 rq_db_index;
};
#endif
