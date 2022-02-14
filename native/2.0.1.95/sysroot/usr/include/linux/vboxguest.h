/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef __UAPI_VBOXGUEST_H__
#define __UAPI_VBOXGUEST_H__
#include <asm/bitsperlong.h>
#include <linux/ioctl.h>
#include <linux/vbox_err.h>
#include <linux/vbox_vmmdev_types.h>
#define VBG_IOCTL_HDR_VERSION		0x10001
#define VBG_IOCTL_HDR_TYPE_DEFAULT		0
struct vbg_ioctl_hdr {

	__u32 size_in;

	__u32 version;

	__u32 type;

	__s32 rc;

	__u32 size_out;

	__u32 reserved;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_hdr, 24);
#define VBG_IOC_VERSION		0x00010000u
struct vbg_ioctl_driver_version_info {

	struct vbg_ioctl_hdr hdr;
	union {
		struct {

			__u32 req_version;

			__u32 min_version;

			__u32 reserved1;

			__u32 reserved2;
		} in;
		struct {

			__u32 session_version;

			__u32 driver_version;

			__u32 driver_revision;

			__u32 reserved1;

			__u32 reserved2;
		} out;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_driver_version_info, 24 + 20);
#define VBG_IOCTL_DRIVER_VERSION_INFO \
	_IOWR('V', 0, struct vbg_ioctl_driver_version_info)
#define VBG_IOCTL_VMMDEV_REQUEST(s)	_IOC(_IOC_READ | _IOC_WRITE, 'V', 2, s)
#define VBG_IOCTL_VMMDEV_REQUEST_BIG	_IOC(_IOC_READ | _IOC_WRITE, 'V', 3, 0)
struct vbg_ioctl_hgcm_connect {
	struct vbg_ioctl_hdr hdr;
	union {
		struct {
			struct vmmdev_hgcm_service_location loc;
		} in;
		struct {
			__u32 client_id;
		} out;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_hgcm_connect, 24 + 132);
#define VBG_IOCTL_HGCM_CONNECT \
	_IOWR('V', 4, struct vbg_ioctl_hgcm_connect)
struct vbg_ioctl_hgcm_disconnect {
	struct vbg_ioctl_hdr hdr;
	union {
		struct {
			__u32 client_id;
		} in;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_hgcm_disconnect, 24 + 4);
#define VBG_IOCTL_HGCM_DISCONNECT \
	_IOWR('V', 5, struct vbg_ioctl_hgcm_disconnect)
struct vbg_ioctl_hgcm_call {

	struct vbg_ioctl_hdr hdr;

	__u32 client_id;

	__u32 function;

	__u32 timeout_ms;

	__u8 interruptible;

	__u8 reserved;

	__u16 parm_count;

};
VMMDEV_ASSERT_SIZE(vbg_ioctl_hgcm_call, 24 + 16);
#define VBG_IOCTL_HGCM_CALL_32(s)	_IOC(_IOC_READ | _IOC_WRITE, 'V', 6, s)
#define VBG_IOCTL_HGCM_CALL_64(s)	_IOC(_IOC_READ | _IOC_WRITE, 'V', 7, s)
#if __BITS_PER_LONG == 64
#define VBG_IOCTL_HGCM_CALL(s)		VBG_IOCTL_HGCM_CALL_64(s)
#else
#define VBG_IOCTL_HGCM_CALL(s)		VBG_IOCTL_HGCM_CALL_32(s)
#endif
struct vbg_ioctl_log {

	struct vbg_ioctl_hdr hdr;
	union {
		struct {

			char msg[1];
		} in;
	} u;
};
#define VBG_IOCTL_LOG(s)		_IOC(_IOC_READ | _IOC_WRITE, 'V', 9, s)
struct vbg_ioctl_wait_for_events {

	struct vbg_ioctl_hdr hdr;
	union {
		struct {

			__u32 timeout_ms;

			__u32 events;
		} in;
		struct {

			__u32 events;
		} out;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_wait_for_events, 24 + 8);
#define VBG_IOCTL_WAIT_FOR_EVENTS \
	_IOWR('V', 10, struct vbg_ioctl_wait_for_events)
#define VBG_IOCTL_INTERRUPT_ALL_WAIT_FOR_EVENTS \
	_IOWR('V', 11, struct vbg_ioctl_hdr)
struct vbg_ioctl_change_filter {

	struct vbg_ioctl_hdr hdr;
	union {
		struct {

			__u32 or_mask;

			__u32 not_mask;
		} in;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_change_filter, 24 + 8);
#define VBG_IOCTL_CHANGE_FILTER_MASK \
	_IOWR('V', 12, struct vbg_ioctl_change_filter)
struct vbg_ioctl_set_guest_caps {

	struct vbg_ioctl_hdr hdr;
	union {
		struct {

			__u32 or_mask;

			__u32 not_mask;
		} in;
		struct {

			__u32 session_caps;

			__u32 global_caps;
		} out;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_set_guest_caps, 24 + 8);
#define VBG_IOCTL_CHANGE_GUEST_CAPABILITIES \
	_IOWR('V', 14, struct vbg_ioctl_set_guest_caps)
struct vbg_ioctl_check_balloon {

	struct vbg_ioctl_hdr hdr;
	union {
		struct {

			__u32 balloon_chunks;

			__u8 handle_in_r3;

			__u8 padding[3];
		} out;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_check_balloon, 24 + 8);
#define VBG_IOCTL_CHECK_BALLOON \
	_IOWR('V', 17, struct vbg_ioctl_check_balloon)
struct vbg_ioctl_write_coredump {
	struct vbg_ioctl_hdr hdr;
	union {
		struct {
			__u32 flags;
		} in;
	} u;
};
VMMDEV_ASSERT_SIZE(vbg_ioctl_write_coredump, 24 + 4);
#define VBG_IOCTL_WRITE_CORE_DUMP \
	_IOWR('V', 19, struct vbg_ioctl_write_coredump)
#endif
