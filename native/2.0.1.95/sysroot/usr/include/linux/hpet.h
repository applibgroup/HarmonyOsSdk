/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__HPET__
#define _UAPI__HPET__
#include <linux/compiler.h>
struct hpet_info {
	unsigned long hi_ireqfreq;
	unsigned long hi_flags;
	unsigned short hi_hpet;
	unsigned short hi_timer;
};
#define HPET_INFO_PERIODIC	0x0010
#define	HPET_IE_ON	_IO('h', 0x01)
#define	HPET_IE_OFF	_IO('h', 0x02)
#define	HPET_INFO	_IOR('h', 0x03, struct hpet_info)
#define	HPET_EPI	_IO('h', 0x04)
#define	HPET_DPI	_IO('h', 0x05)
#define	HPET_IRQFREQ	_IOW('h', 0x6, unsigned long)
#define MAX_HPET_TBS	8
#endif
