/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_USB_GADGETFS_H
#define __LINUX_USB_GADGETFS_H
#include <linux/types.h>
#include <linux/ioctl.h>
#include <linux/usb/ch9.h>
enum usb_gadgetfs_event_type {
	GADGETFS_NOP = 0,
	GADGETFS_CONNECT,
	GADGETFS_DISCONNECT,
	GADGETFS_SETUP,
	GADGETFS_SUSPEND,

};
struct usb_gadgetfs_event {
	union {


		enum usb_device_speed	speed;

		struct usb_ctrlrequest	setup;
	} u;
	enum usb_gadgetfs_event_type	type;
};
#define	GADGETFS_FIFO_STATUS	_IO('g', 1)
#define	GADGETFS_FIFO_FLUSH	_IO('g', 2)
#define	GADGETFS_CLEAR_HALT	_IO('g', 3)
#endif
