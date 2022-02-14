/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_FPGA_DFL_H
#define _UAPI_LINUX_FPGA_DFL_H
#include <linux/types.h>
#include <linux/ioctl.h>
#define DFL_FPGA_API_VERSION 0
#define DFL_FPGA_MAGIC 0xB6
#define DFL_FPGA_BASE 0
#define DFL_PORT_BASE 0x40
#define DFL_FME_BASE 0x80
#define DFL_FPGA_GET_API_VERSION	_IO(DFL_FPGA_MAGIC, DFL_FPGA_BASE + 0)
#define DFL_FPGA_CHECK_EXTENSION	_IO(DFL_FPGA_MAGIC, DFL_FPGA_BASE + 1)
#define DFL_FPGA_PORT_RESET		_IO(DFL_FPGA_MAGIC, DFL_PORT_BASE + 0)
struct dfl_fpga_port_info {

	__u32 argsz;

	__u32 flags;
	__u32 num_regions;
	__u32 num_umsgs;
};
#define DFL_FPGA_PORT_GET_INFO		_IO(DFL_FPGA_MAGIC, DFL_PORT_BASE + 1)
struct dfl_fpga_port_region_info {

	__u32 argsz;

	__u32 flags;
#define DFL_PORT_REGION_READ	(1 << 0)
#define DFL_PORT_REGION_WRITE	(1 << 1)
#define DFL_PORT_REGION_MMAP	(1 << 2)

	__u32 index;
#define DFL_PORT_REGION_INDEX_AFU	0
#define DFL_PORT_REGION_INDEX_STP	1
	__u32 padding;

	__u64 size;
	__u64 offset;
};
#define DFL_FPGA_PORT_GET_REGION_INFO	_IO(DFL_FPGA_MAGIC, DFL_PORT_BASE + 2)
struct dfl_fpga_port_dma_map {

	__u32 argsz;
	__u32 flags;
	__u64 user_addr;
	__u64 length;

	__u64 iova;
};
#define DFL_FPGA_PORT_DMA_MAP		_IO(DFL_FPGA_MAGIC, DFL_PORT_BASE + 3)
struct dfl_fpga_port_dma_unmap {

	__u32 argsz;
	__u32 flags;
	__u64 iova;
};
#define DFL_FPGA_PORT_DMA_UNMAP		_IO(DFL_FPGA_MAGIC, DFL_PORT_BASE + 4)
struct dfl_fpga_fme_port_pr {

	__u32 argsz;
	__u32 flags;
	__u32 port_id;
	__u32 buffer_size;
	__u64 buffer_address;
};
#define DFL_FPGA_FME_PORT_PR	_IO(DFL_FPGA_MAGIC, DFL_FME_BASE + 0)
#endif
