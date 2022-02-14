/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__LINUX_USB_CHARGER_H
#define _UAPI__LINUX_USB_CHARGER_H
enum usb_charger_type {
	UNKNOWN_TYPE,
	SDP_TYPE,
	DCP_TYPE,
	CDP_TYPE,
	ACA_TYPE,
};
enum usb_charger_state {
	USB_CHARGER_DEFAULT,
	USB_CHARGER_PRESENT,
	USB_CHARGER_ABSENT,
};
#endif
