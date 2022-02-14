/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__ASM_SIGCONTEXT_H
#define _UAPI__ASM_SIGCONTEXT_H
#ifndef __ASSEMBLY__
#include <linux/types.h>
struct sigcontext {
	__u64 fault_address;

	__u64 regs[31];
	__u64 sp;
	__u64 pc;
	__u64 pstate;

	__u8 __reserved[4096] __attribute__((__aligned__(16)));
};
struct _aarch64_ctx {
	__u32 magic;
	__u32 size;
};
#define FPSIMD_MAGIC	0x46508001
struct fpsimd_context {
	struct _aarch64_ctx head;
	__u32 fpsr;
	__u32 fpcr;
	__uint128_t vregs[32];
};
#define ESR_MAGIC	0x45535201
struct esr_context {
	struct _aarch64_ctx head;
	__u64 esr;
};
#define EXTRA_MAGIC	0x45585401
struct extra_context {
	struct _aarch64_ctx head;
	__u64 datap;
	__u32 size;
	__u32 __reserved[3];
};
#define SVE_MAGIC	0x53564501
struct sve_context {
	struct _aarch64_ctx head;
	__u16 vl;
	__u16 __reserved[3];
};
#endif
#include <asm/sve_context.h>
#define SVE_VQ_BYTES		__SVE_VQ_BYTES
#define SVE_VQ_MIN		__SVE_VQ_MIN
#define SVE_VQ_MAX		__SVE_VQ_MAX
#define SVE_VL_MIN		__SVE_VL_MIN
#define SVE_VL_MAX		__SVE_VL_MAX
#define SVE_NUM_ZREGS		__SVE_NUM_ZREGS
#define SVE_NUM_PREGS		__SVE_NUM_PREGS
#define sve_vl_valid(vl)	__sve_vl_valid(vl)
#define sve_vq_from_vl(vl)	__sve_vq_from_vl(vl)
#define sve_vl_from_vq(vq)	__sve_vl_from_vq(vq)
#define SVE_SIG_ZREG_SIZE(vq)	__SVE_ZREG_SIZE(vq)
#define SVE_SIG_PREG_SIZE(vq)	__SVE_PREG_SIZE(vq)
#define SVE_SIG_FFR_SIZE(vq)	__SVE_FFR_SIZE(vq)
#define SVE_SIG_REGS_OFFSET					\
	((sizeof(struct sve_context) + (__SVE_VQ_BYTES - 1))	\
		/ __SVE_VQ_BYTES * __SVE_VQ_BYTES)
#define SVE_SIG_ZREGS_OFFSET \
		(SVE_SIG_REGS_OFFSET + __SVE_ZREGS_OFFSET)
#define SVE_SIG_ZREG_OFFSET(vq, n) \
		(SVE_SIG_REGS_OFFSET + __SVE_ZREG_OFFSET(vq, n))
#define SVE_SIG_ZREGS_SIZE(vq) __SVE_ZREGS_SIZE(vq)
#define SVE_SIG_PREGS_OFFSET(vq) \
		(SVE_SIG_REGS_OFFSET + __SVE_PREGS_OFFSET(vq))
#define SVE_SIG_PREG_OFFSET(vq, n) \
		(SVE_SIG_REGS_OFFSET + __SVE_PREG_OFFSET(vq, n))
#define SVE_SIG_PREGS_SIZE(vq) __SVE_PREGS_SIZE(vq)
#define SVE_SIG_FFR_OFFSET(vq) \
		(SVE_SIG_REGS_OFFSET + __SVE_FFR_OFFSET(vq))
#define SVE_SIG_REGS_SIZE(vq) \
		(__SVE_FFR_OFFSET(vq) + __SVE_FFR_SIZE(vq))
#define SVE_SIG_CONTEXT_SIZE(vq) \
		(SVE_SIG_REGS_OFFSET + SVE_SIG_REGS_SIZE(vq))
#endif
