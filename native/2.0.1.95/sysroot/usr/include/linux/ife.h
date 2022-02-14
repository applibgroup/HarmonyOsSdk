/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __UAPI_IFE_H
#define __UAPI_IFE_H
#define IFE_METAHDRLEN 2
enum {
	IFE_META_SKBMARK = 1,
	IFE_META_HASHID,
	IFE_META_PRIO,
	IFE_META_QMAP,
	IFE_META_TCINDEX,
	__IFE_META_MAX
};
#define IFE_META_MAX (__IFE_META_MAX - 1)
#endif
