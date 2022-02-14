/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_ELF_FDPIC_H
#define _UAPI_LINUX_ELF_FDPIC_H
#include <linux/elf.h>
#define PT_GNU_STACK    (PT_LOOS + 0x474e551)
struct elf32_fdpic_loadseg {
	Elf32_Addr	addr;
	Elf32_Addr	p_vaddr;
	Elf32_Word	p_memsz;
};
struct elf32_fdpic_loadmap {
	Elf32_Half	version;
	Elf32_Half	nsegs;
	struct elf32_fdpic_loadseg segs[];
};
#define ELF32_FDPIC_LOADMAP_VERSION	0x0000
#endif
