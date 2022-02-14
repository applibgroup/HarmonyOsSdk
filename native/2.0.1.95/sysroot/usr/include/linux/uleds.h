/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__ULEDS_H_
#define _UAPI__ULEDS_H_
#define LED_MAX_NAME_SIZE	64
struct uleds_user_dev {
	char name[LED_MAX_NAME_SIZE];
	int max_brightness;
};
#endif
