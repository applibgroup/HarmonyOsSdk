/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX_IVTVFB_H__
#define __LINUX_IVTVFB_H__
#include <linux/compiler.h>
#include <linux/types.h>
struct ivtvfb_dma_frame {
	void __user *source;
	unsigned long dest_offset;
	int count;
};
#define IVTVFB_IOC_DMA_FRAME 	_IOW('V', BASE_VIDIOC_PRIVATE+0, struct ivtvfb_dma_frame)
#endif
