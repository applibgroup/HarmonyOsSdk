/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_VIRTIO_CONSOLE_H
#define _UAPI_LINUX_VIRTIO_CONSOLE_H
#include <linux/types.h>
#include <linux/virtio_types.h>
#include <linux/virtio_ids.h>
#include <linux/virtio_config.h>
#define VIRTIO_CONSOLE_F_SIZE	0
#define VIRTIO_CONSOLE_F_MULTIPORT 1
#define VIRTIO_CONSOLE_F_EMERG_WRITE 2
#define VIRTIO_CONSOLE_BAD_ID		(~(__u32)0)
struct virtio_console_config {

	__u16 cols;

	__u16 rows;

	__u32 max_nr_ports;

	__u32 emerg_wr;
} __attribute__((packed));
struct virtio_console_control {
	__virtio32 id;
	__virtio16 event;
	__virtio16 value;
};
#define VIRTIO_CONSOLE_DEVICE_READY	0
#define VIRTIO_CONSOLE_PORT_ADD		1
#define VIRTIO_CONSOLE_PORT_REMOVE	2
#define VIRTIO_CONSOLE_PORT_READY	3
#define VIRTIO_CONSOLE_CONSOLE_PORT	4
#define VIRTIO_CONSOLE_RESIZE		5
#define VIRTIO_CONSOLE_PORT_OPEN	6
#define VIRTIO_CONSOLE_PORT_NAME	7
#endif
