/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _VFIO_CCW_H_
#define _VFIO_CCW_H_
#include <linux/types.h>
struct ccw_io_region {
#define ORB_AREA_SIZE 12
	__u8	orb_area[ORB_AREA_SIZE];
#define SCSW_AREA_SIZE 12
	__u8	scsw_area[SCSW_AREA_SIZE];
#define IRB_AREA_SIZE 96
	__u8	irb_area[IRB_AREA_SIZE];
	__u32	ret_code;
} __packed;
#endif
