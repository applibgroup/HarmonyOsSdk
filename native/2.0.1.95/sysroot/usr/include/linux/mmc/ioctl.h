/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef LINUX_MMC_IOCTL_H
#define LINUX_MMC_IOCTL_H
#include <linux/types.h>
struct mmc_ioc_cmd {

	int write_flag;

	int is_acmd;
	__u32 opcode;
	__u32 arg;
	__u32 response[4];
	unsigned int flags;
	unsigned int blksz;
	unsigned int blocks;

	unsigned int postsleep_min_us;
	unsigned int postsleep_max_us;

	unsigned int data_timeout_ns;
	unsigned int cmd_timeout_ms;

	__u32 __pad;

	__u64 data_ptr;
};
#define mmc_ioc_cmd_set_data(ic, ptr) ic.data_ptr = (__u64)(unsigned long) ptr
struct mmc_ioc_multi_cmd {
	__u64 num_of_cmds;
	struct mmc_ioc_cmd cmds[0];
};
#define MMC_IOC_CMD _IOWR(MMC_BLOCK_MAJOR, 0, struct mmc_ioc_cmd)
#define MMC_IOC_MULTI_CMD _IOWR(MMC_BLOCK_MAJOR, 1, struct mmc_ioc_multi_cmd)
#define MMC_IOC_MAX_BYTES  (512L * 1024)
#define MMC_IOC_MAX_CMDS    255
#endif
