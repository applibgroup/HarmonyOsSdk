/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __UAPI_CORESIGHT_STM_H_
#define __UAPI_CORESIGHT_STM_H_
#define STM_FLAG_TIMESTAMPED   BIT(3)
#define STM_FLAG_GUARANTEED    BIT(7)
enum {
	STM_OPTION_GUARANTEED = 0,
	STM_OPTION_INVARIANT,
};
#endif
