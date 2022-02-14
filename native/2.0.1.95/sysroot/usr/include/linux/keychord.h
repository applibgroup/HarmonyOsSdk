/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_KEYCHORD_H_
#define _UAPI_LINUX_KEYCHORD_H_
#include <linux/input.h>
#define KEYCHORD_VERSION 1
struct input_keychord {
  __u16 version;
  __u16 id;
  __u16 count;
  __u16 keycodes[];
};
#endif
