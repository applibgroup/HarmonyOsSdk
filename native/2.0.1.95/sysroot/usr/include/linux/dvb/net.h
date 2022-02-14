/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _DVBNET_H_
#define _DVBNET_H_
#include <linux/types.h>
struct dvb_net_if {
	__u16 pid;
	__u16 if_num;
	__u8  feedtype;
#define DVB_NET_FEEDTYPE_MPE 0
#define DVB_NET_FEEDTYPE_ULE 1
};
#define NET_ADD_IF    _IOWR('o', 52, struct dvb_net_if)
#define NET_REMOVE_IF _IO('o', 53)
#define NET_GET_IF    _IOWR('o', 54, struct dvb_net_if)
struct __dvb_net_if_old {
	__u16 pid;
	__u16 if_num;
};
#define __NET_ADD_IF_OLD _IOWR('o', 52, struct __dvb_net_if_old)
#define __NET_GET_IF_OLD _IOWR('o', 54, struct __dvb_net_if_old)
#endif
