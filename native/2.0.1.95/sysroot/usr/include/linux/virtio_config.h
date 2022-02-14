/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_VIRTIO_CONFIG_H
#define _UAPI_LINUX_VIRTIO_CONFIG_H
#include <linux/types.h>
#define VIRTIO_CONFIG_S_ACKNOWLEDGE	1
#define VIRTIO_CONFIG_S_DRIVER		2
#define VIRTIO_CONFIG_S_DRIVER_OK	4
#define VIRTIO_CONFIG_S_FEATURES_OK	8
#define VIRTIO_CONFIG_S_NEEDS_RESET	0x40
#define VIRTIO_CONFIG_S_FAILED		0x80
#define VIRTIO_TRANSPORT_F_START	28
#define VIRTIO_TRANSPORT_F_END		38
#ifndef VIRTIO_CONFIG_NO_LEGACY
#define VIRTIO_F_NOTIFY_ON_EMPTY	24
#define VIRTIO_F_ANY_LAYOUT		27
#endif
#define VIRTIO_F_VERSION_1		32
#define VIRTIO_F_IOMMU_PLATFORM		33
#define VIRTIO_F_RING_PACKED		34
#define VIRTIO_F_ORDER_PLATFORM		36
#define VIRTIO_F_SR_IOV			37
#endif
