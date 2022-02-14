/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _LINUX_VIRTIO_INPUT_H
#define _LINUX_VIRTIO_INPUT_H
#include <linux/types.h>
enum virtio_input_config_select {
	VIRTIO_INPUT_CFG_UNSET      = 0x00,
	VIRTIO_INPUT_CFG_ID_NAME    = 0x01,
	VIRTIO_INPUT_CFG_ID_SERIAL  = 0x02,
	VIRTIO_INPUT_CFG_ID_DEVIDS  = 0x03,
	VIRTIO_INPUT_CFG_PROP_BITS  = 0x10,
	VIRTIO_INPUT_CFG_EV_BITS    = 0x11,
	VIRTIO_INPUT_CFG_ABS_INFO   = 0x12,
};
struct virtio_input_absinfo {
	__u32 min;
	__u32 max;
	__u32 fuzz;
	__u32 flat;
	__u32 res;
};
struct virtio_input_devids {
	__u16 bustype;
	__u16 vendor;
	__u16 product;
	__u16 version;
};
struct virtio_input_config {
	__u8    select;
	__u8    subsel;
	__u8    size;
	__u8    reserved[5];
	union {
		char string[128];
		__u8 bitmap[128];
		struct virtio_input_absinfo abs;
		struct virtio_input_devids ids;
	} u;
};
struct virtio_input_event {
	__le16 type;
	__le16 code;
	__le32 value;
};
#endif
