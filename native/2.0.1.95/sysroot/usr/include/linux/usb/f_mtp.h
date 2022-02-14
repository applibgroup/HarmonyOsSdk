/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _UAPI_LINUX_USB_F_MTP_H
#define _UAPI_LINUX_USB_F_MTP_H
#include <linux/ioctl.h>
#include <linux/types.h>
struct mtp_file_range {
  int fd;
  loff_t offset;
  int64_t length;
  uint16_t command;
  uint32_t transaction_id;
};
struct mtp_event {
  size_t length;
  void * data;
};
#define MTP_SEND_FILE _IOW('M', 0, struct mtp_file_range)
#define MTP_RECEIVE_FILE _IOW('M', 1, struct mtp_file_range)
#define MTP_SEND_EVENT _IOW('M', 3, struct mtp_event)
#define MTP_SEND_FILE_WITH_HEADER _IOW('M', 4, struct mtp_file_range)
#endif
