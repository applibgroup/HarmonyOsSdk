/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI__LINUX_N_R3964_H__
#define _UAPI__LINUX_N_R3964_H__
#define R3964_ENABLE_SIGNALS      0x5301
#define R3964_SETPRIORITY         0x5302
#define R3964_USE_BCC             0x5303
#define R3964_READ_TELEGRAM       0x5304
#define R3964_MASTER   0
#define R3964_SLAVE    1
#define R3964_SIG_ACK   0x0001
#define R3964_SIG_DATA  0x0002
#define R3964_SIG_ALL   0x000f
#define R3964_SIG_NONE  0x0000
#define R3964_USE_SIGIO 0x1000
enum {R3964_MSG_ACK=1, R3964_MSG_DATA };
#define R3964_MAX_MSG_COUNT 32
#define R3964_OK 0
#define R3964_TX_FAIL -1
#define R3964_OVERFLOW -2
struct r3964_client_message {
	  int     msg_id;
	  int     arg;
	  int     error_code;
};
#define R3964_MTU      256
#endif
