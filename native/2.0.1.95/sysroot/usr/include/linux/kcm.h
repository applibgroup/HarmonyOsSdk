/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef KCM_KERNEL_H
#define KCM_KERNEL_H
struct kcm_attach {
	int fd;
	int bpf_fd;
};
struct kcm_unattach {
	int fd;
};
struct kcm_clone {
	int fd;
};
#define SIOCKCMATTACH	(SIOCPROTOPRIVATE + 0)
#define SIOCKCMUNATTACH	(SIOCPROTOPRIVATE + 1)
#define SIOCKCMCLONE	(SIOCPROTOPRIVATE + 2)
#define KCMPROTO_CONNECTED	0
#define KCM_RECV_DISABLE	1
#endif
