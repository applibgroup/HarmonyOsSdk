/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _MEYE_H_
#define _MEYE_H_
struct meye_params {
	unsigned char subsample;
	unsigned char quality;
	unsigned char sharpness;
	unsigned char agc;
	unsigned char picture;
	unsigned char framerate;
};
#define MEYEIOC_G_PARAMS	_IOR ('v', BASE_VIDIOC_PRIVATE+0, struct meye_params)
#define MEYEIOC_S_PARAMS	_IOW ('v', BASE_VIDIOC_PRIVATE+1, struct meye_params)
#define MEYEIOC_QBUF_CAPT	_IOW ('v', BASE_VIDIOC_PRIVATE+2, int)
#define MEYEIOC_SYNC		_IOWR('v', BASE_VIDIOC_PRIVATE+3, int)
#define MEYEIOC_STILLCAPT	_IO  ('v', BASE_VIDIOC_PRIVATE+4)
#define MEYEIOC_STILLJCAPT	_IOR ('v', BASE_VIDIOC_PRIVATE+5, int)
#define V4L2_CID_MEYE_AGC		(V4L2_CID_USER_MEYE_BASE + 0)
#define V4L2_CID_MEYE_PICTURE		(V4L2_CID_USER_MEYE_BASE + 1)
#define V4L2_CID_MEYE_FRAMERATE		(V4L2_CID_USER_MEYE_BASE + 2)
#endif
