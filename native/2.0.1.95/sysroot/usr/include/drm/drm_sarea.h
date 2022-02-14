/*
 * This header was generated from the Linux kernel headers by update_headers.py,
 * to provide necessary information from kernel to userspace, such as constants,
 * structures, and macros, and thus, contains no copyrightable information.
 */
#ifndef _DRM_SAREA_H_
#define _DRM_SAREA_H_
#include "drm.h"
#if defined(__cplusplus)
extern "C" {
#endif
#if defined(__alpha__)
#define SAREA_MAX                       0x2000U
#elif defined(__mips__)
#define SAREA_MAX                       0x4000U
#elif defined(__ia64__)
#define SAREA_MAX                       0x10000U
#else
#define SAREA_MAX                       0x2000U
#endif
#define SAREA_MAX_DRAWABLES		256
#define SAREA_DRAWABLE_CLAIMED_ENTRY    0x80000000
struct drm_sarea_drawable {
	unsigned int stamp;
	unsigned int flags;
};
struct drm_sarea_frame {
	unsigned int x;
	unsigned int y;
	unsigned int width;
	unsigned int height;
	unsigned int fullscreen;
};
struct drm_sarea {

	struct drm_hw_lock lock;

	struct drm_hw_lock drawable_lock;
	struct drm_sarea_drawable drawableTable[SAREA_MAX_DRAWABLES];
	struct drm_sarea_frame frame;
	drm_context_t dummy_context;
};
#ifndef __KERNEL__
typedef struct drm_sarea_drawable drm_sarea_drawable_t;
typedef struct drm_sarea_frame drm_sarea_frame_t;
typedef struct drm_sarea drm_sarea_t;
#endif
#if defined(__cplusplus)
}
#endif
#endif
