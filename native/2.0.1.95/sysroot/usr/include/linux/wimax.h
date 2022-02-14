/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __LINUX__WIMAX_H__
#define __LINUX__WIMAX_H__
#include <linux/types.h>
enum {

	WIMAX_GNL_VERSION = 01,

	WIMAX_GNL_ATTR_INVALID = 0x00,
	WIMAX_GNL_ATTR_MAX = 10,
};
enum {
	WIMAX_GNL_OP_MSG_FROM_USER,
	WIMAX_GNL_OP_MSG_TO_USER,
	WIMAX_GNL_OP_RFKILL,
	WIMAX_GNL_OP_RESET,
	WIMAX_GNL_RE_STATE_CHANGE,
	WIMAX_GNL_OP_STATE_GET,
};
enum {
	WIMAX_GNL_MSG_IFIDX = 1,
	WIMAX_GNL_MSG_PIPE_NAME,
	WIMAX_GNL_MSG_DATA,
};
enum wimax_rf_state {
	WIMAX_RF_OFF = 0,
	WIMAX_RF_ON = 1,
	WIMAX_RF_QUERY = 2,
};
enum {
	WIMAX_GNL_RFKILL_IFIDX = 1,
	WIMAX_GNL_RFKILL_STATE,
};
enum {
	WIMAX_GNL_RESET_IFIDX = 1,
};
enum {
	WIMAX_GNL_STGET_IFIDX = 1,
};
enum {
	WIMAX_GNL_STCH_IFIDX = 1,
	WIMAX_GNL_STCH_STATE_OLD,
	WIMAX_GNL_STCH_STATE_NEW,
};
 enum wimax_st {
	__WIMAX_ST_NULL = 0,
	WIMAX_ST_DOWN,
	__WIMAX_ST_QUIESCING,
	WIMAX_ST_UNINITIALIZED,
	WIMAX_ST_RADIO_OFF,
	WIMAX_ST_READY,
	WIMAX_ST_SCANNING,
	WIMAX_ST_CONNECTING,
	WIMAX_ST_CONNECTED,
	__WIMAX_ST_INVALID
};
#endif
