/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_FRAD_H_
#define _UAPI_FRAD_H_
#include <linux/if.h>
struct dlci_add
{
   char  devname[IFNAMSIZ];
   short dlci;
};
#define DLCI_GET_CONF	(SIOCDEVPRIVATE + 2)
#define DLCI_SET_CONF	(SIOCDEVPRIVATE + 3)
struct dlci_conf {
   short flags;
   short CIR_fwd;
   short Bc_fwd;
   short Be_fwd;
   short CIR_bwd;
   short Bc_bwd;
   short Be_bwd;
   short Tc_fwd;
   short Tc_bwd;
   short Tf_max;
   short Tb_max;
};
#define DLCI_GET_SLAVE	(SIOCDEVPRIVATE + 4)
#define DLCI_IGNORE_CIR_OUT	0x0001
#define DLCI_ACCOUNT_CIR_IN	0x0002
#define DLCI_BUFFER_IF		0x0008
#define DLCI_VALID_FLAGS	0x000B
#define FRAD_GET_CONF	(SIOCDEVPRIVATE)
#define FRAD_SET_CONF	(SIOCDEVPRIVATE + 1)
#define FRAD_LAST_IOCTL	FRAD_SET_CONF
struct frad_conf
{
   short station;
   short flags;
   short kbaud;
   short clocking;
   short mtu;
   short T391;
   short T392;
   short N391;
   short N392;
   short N393;
   short CIR_fwd;
   short Bc_fwd;
   short Be_fwd;
   short CIR_bwd;
   short Bc_bwd;
   short Be_bwd;
};
#define FRAD_STATION_CPE	0x0000
#define FRAD_STATION_NODE	0x0001
#define FRAD_TX_IGNORE_CIR	0x0001
#define FRAD_RX_ACCOUNT_CIR	0x0002
#define FRAD_DROP_ABORTED	0x0004
#define FRAD_BUFFERIF		0x0008
#define FRAD_STATS		0x0010
#define FRAD_MCI		0x0100
#define FRAD_AUTODLCI		0x8000
#define FRAD_VALID_FLAGS	0x811F
#define FRAD_CLOCK_INT		0x0001
#define FRAD_CLOCK_EXT		0x0000
#endif
