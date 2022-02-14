/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _MIC_IOCTL_H_
#define _MIC_IOCTL_H_
#include <linux/types.h>
struct mic_copy_desc {
#ifdef __KERNEL__
	struct iovec __user *iov;
#else
	struct iovec *iov;
#endif
	__u32 iovcnt;
	__u8 vr_idx;
	__u8 update_used;
	__u32 out_len;
};
#define MIC_VIRTIO_ADD_DEVICE _IOWR('s', 1, struct mic_device_desc *)
#define MIC_VIRTIO_COPY_DESC	_IOWR('s', 2, struct mic_copy_desc *)
#define MIC_VIRTIO_CONFIG_CHANGE _IOWR('s', 5, __u8 *)
#endif
