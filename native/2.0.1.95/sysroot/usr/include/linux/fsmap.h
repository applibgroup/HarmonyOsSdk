/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_FSMAP_H
#define _LINUX_FSMAP_H
#include <linux/types.h>
struct fsmap {
	__u32		fmr_device;
	__u32		fmr_flags;
	__u64		fmr_physical;
	__u64		fmr_owner;
	__u64		fmr_offset;
	__u64		fmr_length;
	__u64		fmr_reserved[3];
};
struct fsmap_head {
	__u32		fmh_iflags;
	__u32		fmh_oflags;
	__u32		fmh_count;
	__u32		fmh_entries;
	__u64		fmh_reserved[6];
	struct fsmap	fmh_keys[2];
	struct fsmap	fmh_recs[];
};
static inline size_t
fsmap_sizeof(
	unsigned int	nr)
{
	return sizeof(struct fsmap_head) + nr * sizeof(struct fsmap);
}
static inline void
fsmap_advance(
	struct fsmap_head	*head)
{
	head->fmh_keys[0] = head->fmh_recs[head->fmh_entries - 1];
}
#define FMH_IF_VALID		0
#define FMH_OF_DEV_T		0x1
#define FMR_OF_PREALLOC		0x1
#define FMR_OF_ATTR_FORK	0x2
#define FMR_OF_EXTENT_MAP	0x4
#define FMR_OF_SHARED		0x8
#define FMR_OF_SPECIAL_OWNER	0x10
#define FMR_OF_LAST		0x20
#define FMR_OWNER(type, code)	(((__u64)type << 32) | \
				 ((__u64)code & 0xFFFFFFFFULL))
#define FMR_OWNER_TYPE(owner)	((__u32)((__u64)owner >> 32))
#define FMR_OWNER_CODE(owner)	((__u32)(((__u64)owner & 0xFFFFFFFFULL)))
#define FMR_OWN_FREE		FMR_OWNER(0, 1)
#define FMR_OWN_UNKNOWN		FMR_OWNER(0, 2)
#define FMR_OWN_METADATA	FMR_OWNER(0, 3)
#define FS_IOC_GETFSMAP		_IOWR('X', 59, struct fsmap_head)
#endif
