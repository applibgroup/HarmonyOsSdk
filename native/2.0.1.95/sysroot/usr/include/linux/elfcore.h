/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_ELFCORE_H
#define _UAPI_LINUX_ELFCORE_H
#include <linux/types.h>
#include <linux/signal.h>
#include <linux/time.h>
#include <linux/ptrace.h>
#include <linux/elf.h>
#include <linux/fs.h>
struct elf_siginfo
{
	int	si_signo;
	int	si_code;
	int	si_errno;
};
#ifndef __KERNEL__
typedef elf_greg_t greg_t;
typedef elf_gregset_t gregset_t;
typedef elf_fpregset_t fpregset_t;
typedef elf_fpxregset_t fpxregset_t;
#define NGREG ELF_NGREG
#endif
struct elf_prstatus
{
#if 0
	long	pr_flags;
	short	pr_why;
	short	pr_what;
#endif
	struct elf_siginfo pr_info;
	short	pr_cursig;
	unsigned long pr_sigpend;
	unsigned long pr_sighold;
#if 0
	struct sigaltstack pr_altstack;
	struct sigaction pr_action;
#endif
	pid_t	pr_pid;
	pid_t	pr_ppid;
	pid_t	pr_pgrp;
	pid_t	pr_sid;
	struct timeval pr_utime;
	struct timeval pr_stime;
	struct timeval pr_cutime;
	struct timeval pr_cstime;
#if 0
	long	pr_instr;
#endif
	elf_gregset_t pr_reg;
#ifdef CONFIG_BINFMT_ELF_FDPIC

	unsigned long pr_exec_fdpic_loadmap;
	unsigned long pr_interp_fdpic_loadmap;
#endif
	int pr_fpvalid;
};
#define ELF_PRARGSZ	(80)
struct elf_prpsinfo
{
	char	pr_state;
	char	pr_sname;
	char	pr_zomb;
	char	pr_nice;
	unsigned long pr_flag;
	__kernel_uid_t	pr_uid;
	__kernel_gid_t	pr_gid;
	pid_t	pr_pid, pr_ppid, pr_pgrp, pr_sid;

	char	pr_fname[16];
	char	pr_psargs[ELF_PRARGSZ];
};
#ifndef __KERNEL__
typedef struct elf_prstatus prstatus_t;
typedef struct elf_prpsinfo prpsinfo_t;
#define PRARGSZ ELF_PRARGSZ
#endif
#endif
