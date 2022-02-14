/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__DLM_PLOCK_DOT_H__
#define _UAPI__DLM_PLOCK_DOT_H__
#include <linux/types.h>
#define DLM_PLOCK_MISC_NAME		"dlm_plock"
#define DLM_PLOCK_VERSION_MAJOR	1
#define DLM_PLOCK_VERSION_MINOR	2
#define DLM_PLOCK_VERSION_PATCH	0
enum {
	DLM_PLOCK_OP_LOCK = 1,
	DLM_PLOCK_OP_UNLOCK,
	DLM_PLOCK_OP_GET,
};
#define DLM_PLOCK_FL_CLOSE 1
struct dlm_plock_info {
	__u32 version[3];
	__u8 optype;
	__u8 ex;
	__u8 wait;
	__u8 flags;
	__u32 pid;
	__s32 nodeid;
	__s32 rv;
	__u32 fsid;
	__u64 number;
	__u64 start;
	__u64 end;
	__u64 owner;
};
#endif
