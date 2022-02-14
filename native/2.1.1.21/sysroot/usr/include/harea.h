/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Description: The struct HArea describes the coordinates of the four points of the rectangular layer area.
 * Author: lizheng
 * Create: 2020-06-01
 */

/**
 * @addtogroup native_layer
 * @{
 *
 * @brief Defines the leftmost, rightmost, top, and bottom areas of a layer.
 *
 * @since 3
 * @version 1.0
 */

/**
 * @file harea.h
 *
 * @brief Declares the <b>HArea</b> data structure used to describe a layer area.
 *
 * @since 3
 * @version 1.0
 */
#ifndef HAREA_H
#define HAREA_H

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Describes layer areas, in pixels.
 *
 * @since 3
 * @version 1.0
 */
typedef struct HArea {
    /** Leftmost pixel in the X-axis */
    int32_t posLeft;
    /** Top pixel in the Y-axis */
    int32_t posTop;
    /** Rightmost pixel in the X-axis */
    int32_t posRight;
    /** Bottom pixel in the Y-axis */
    int32_t posBottom;
} HArea;

#ifdef __cplusplus
};
#endif

/** @} */
#endif // HAREA_H
