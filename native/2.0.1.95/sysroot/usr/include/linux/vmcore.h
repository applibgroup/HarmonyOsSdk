/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_VMCORE_H
#define _UAPI_VMCORE_H
#include <linux/types.h>
#define VMCOREDD_NOTE_NAME "LINUX"
#define VMCOREDD_MAX_NAME_BYTES 44
struct vmcoredd_header {
	__u32 n_namesz;
	__u32 n_descsz;
	__u32 n_type;
	__u8 name[8];
	__u8 dump_name[VMCOREDD_MAX_NAME_BYTES];
};
#endif
