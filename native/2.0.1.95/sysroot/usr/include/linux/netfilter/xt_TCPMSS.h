/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _XT_TCPMSS_MATCH_H
#define _XT_TCPMSS_MATCH_H
#include <linux/types.h>
struct xt_tcpmss_match_info {
    __u16 mss_min, mss_max;
    __u8 invert;
};
#endif
