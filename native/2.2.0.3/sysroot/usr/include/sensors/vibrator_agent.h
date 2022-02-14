/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 * Description: Vibrator native API base C language.
 * Author: houpengfei
 * Create: 2021-02-01
 */

/**
 * @addtogroup vibrator
 * @{
 *
 * @brief Provides functions for you to control vibrator.
 *
 * @since 6
 * @version 1.0
 */

/**
 * @file vibrator_agent.h
 *
 * @brief Declares the functions for you to start or stop vibrator.
 *
 * @since 6
 * @version 1.0
 */
#ifndef VIBRATOR_AGENT_H
#include <stdint.h>
#define VIBRATOR_AGENT_H

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Indicates the mode of stopping a one-shot vibration effect.
 *
 * @since 1
 */
const char *VIBRATOR_STOP_MODE_TIME = "time";

/**
 * @brief Indicates the mode of stopping a preset vibration effect.
 *
 * @since 1
 */
const char *VIBRATOR_STOP_MODE_PRESET = "preset";

/**
 * @brief Controls this vibrator to perform a one-shot vibration with a preset vibration effect.
 *
 * @param effectId Indicates the preset vibration effect, which is described in
 * {@link VIBRATOR_TYPE_WATCH_CROWN_STRENGTH1}
 * {@link VIBRATOR_TYPE_WATCH_CROWN_STRENGTH2}
 * {@link VIBRATOR_TYPE_WATCH_CROWN_STRENGTH3}.
 * @return Returns 0 if the vibrator vibrates as expected; returns -1
 *  otherwise, for example, the preset vibration effect is not supported.
 * @since 6
 * @version 1.0
 */
int32_t StartVibrator(const char *effectId);

/**
 * @brief Controls this vibrator to perform a one-shot vibration at a given duration.
 *
 * @param duration Indicates the duration that the one-shot vibration lasts, in milliseconds.
 * @return Returns 0 if the vibrator vibrates as expected; returns -1 otherwise,
 * for example, the given duration for the one-shot vibration is invalid.
 * @since 6
 * @version 1.0
 */
int32_t StartVibratorOnce(uint32_t duration);

/**
 * @brief Controls this vibrator to stop the vibration.
 *
 * @param mode Indicates the mode of the vibration to stop. The values can be time or
 * preset, respectively representing a one-shot vibration effect, a preset vibration effect.
 * @return Returns 0 if the vibrator stops as expected; returns -1 otherwise.
 * @since 6
 * @version 1.0
 */
int32_t StopVibrator(const char *mode);

/** @} */
#ifdef __cplusplus
};
#endif

#endif  // endif VIBRATOR_AGENT_H
