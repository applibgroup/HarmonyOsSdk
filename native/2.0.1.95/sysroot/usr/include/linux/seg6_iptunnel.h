/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_SEG6_IPTUNNEL_H
#define _UAPI_LINUX_SEG6_IPTUNNEL_H
#include <linux/seg6.h>
enum {
	SEG6_IPTUNNEL_UNSPEC,
	SEG6_IPTUNNEL_SRH,
	__SEG6_IPTUNNEL_MAX,
};
#define SEG6_IPTUNNEL_MAX (__SEG6_IPTUNNEL_MAX - 1)
struct seg6_iptunnel_encap {
	int mode;
	struct ipv6_sr_hdr srh[0];
};
#define SEG6_IPTUN_ENCAP_SIZE(x) ((sizeof(*x)) + (((x)->srh->hdrlen + 1) << 3))
enum {
	SEG6_IPTUN_MODE_INLINE,
	SEG6_IPTUN_MODE_ENCAP,
	SEG6_IPTUN_MODE_L2ENCAP,
};
#ifdef __KERNEL__
static inline size_t seg6_lwt_headroom(struct seg6_iptunnel_encap *tuninfo)
{
	int head = 0;
	switch (tuninfo->mode) {
	case SEG6_IPTUN_MODE_INLINE:
		break;
	case SEG6_IPTUN_MODE_ENCAP:
		head = sizeof(struct ipv6hdr);
		break;
	case SEG6_IPTUN_MODE_L2ENCAP:
		return 0;
	}
	return ((tuninfo->srh->hdrlen + 1) << 3) + head;
}
#endif
#endif
