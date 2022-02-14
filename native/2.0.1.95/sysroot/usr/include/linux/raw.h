/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_RAW_H
#define __LINUX_RAW_H
#include <linux/types.h>
#define RAW_SETBIND	_IO( 0xac, 0 )
#define RAW_GETBIND	_IO( 0xac, 1 )
struct raw_config_request
{
	int	raw_minor;
	__u64	block_major;
	__u64	block_minor;
};
#define MAX_RAW_MINORS CONFIG_MAX_RAW_DEVS
#endif
