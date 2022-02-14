/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_FLAT_H
#define _UAPI_LINUX_FLAT_H
#define	FLAT_VERSION			0x00000004L
#ifdef CONFIG_BINFMT_SHARED_FLAT
#define	MAX_SHARED_LIBS			(4)
#else
#define	MAX_SHARED_LIBS			(1)
#endif
struct flat_hdr {
	char magic[4];
	unsigned long rev;
	unsigned long entry;
	unsigned long data_start;
	unsigned long data_end;
	unsigned long bss_end;

	unsigned long stack_size;
	unsigned long reloc_start;
	unsigned long reloc_count;
	unsigned long flags;
	unsigned long build_date;
	unsigned long filler[5];
};
#define FLAT_FLAG_RAM    0x0001
#define FLAT_FLAG_GOTPIC 0x0002
#define FLAT_FLAG_GZIP   0x0004
#define FLAT_FLAG_GZDATA 0x0008
#define FLAT_FLAG_KTRACE 0x0010
#endif
