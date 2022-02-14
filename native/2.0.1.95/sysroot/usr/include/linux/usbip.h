/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_USBIP_H
#define _UAPI_LINUX_USBIP_H
enum usbip_device_status {

	SDEV_ST_AVAILABLE = 0x01,

	SDEV_ST_USED,

	SDEV_ST_ERROR,

	VDEV_ST_NULL,

	VDEV_ST_NOTASSIGNED,
	VDEV_ST_USED,
	VDEV_ST_ERROR
};
#endif
