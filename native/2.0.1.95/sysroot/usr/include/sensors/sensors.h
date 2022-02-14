/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2019-2019. All rights reserved.
 * Description: Sensor C language interface.
 * Author: pengyalong
 * Create: 2019-12-2
 */

/**
 * @addtogroup sensors
 * @{
 *
 * @brief Provides functions for you to configure sensors and obtain sensor data.
 *
 * @since 1
 * @version 1.0
 */

/**
 * @file sensors.h
 *
 * @brief Declares the functions for you to enable or disable sensors, query or
 * set sensor parameters, and obtain required sensor data.
 *
 * @since 1
 * @version 1.0
 */
#ifndef SENSORS_INTERFACE_H
#define SENSORS_INTERFACE_H

#include <cstdint>

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Enumerates sensor categories.
 *
 * @since 1
 * @version 1.0
 */
enum SensorGroup {
    /** Motion sensor category */
    GROUP_DEVICEMOTION = 0,
    /** Environment sensor category */
    GROUP_ENVIRONMENT,
    /** Orientation sensor category */
    GROUP_ORIENTATION,
    /** Light sensor category */
    GROUP_LIGHT,
    /** Other sensor category */
    GROUP_OTHER,
    /** Body sensor category */
    GROUP_BODY,
};

/**
 * @brief Enumerates the types of sensors in the motion category.
 *
 * @since 1
 * @version 1.0
 */
enum DeviceMotionType {
    /** Acceleration sensors */
    TYPE_ACCELEROMETER = 0,
    /** Uncalibrated acceleration sensors */
    TYPE_ACCELEROMETER_UNCALIBRATED,
    /** Linear acceleration sensors */
    TYPE_LINEAR_ACCELERATION,
    /** Gravity sensors */
    TYPE_GRAVITY,
    /** Gyroscope sensors */
    TYPE_GYROSCOPE,
    /** Uncalibrated gyroscope sensors */
    TYPE_GYROSCOPE_UNCALIBRATED,
    /** Significant motion sensors */
    TYPE_SIGNIFICANT_MOTION,
    /** Drop detection sensors */
    TYPE_DROP_DETECTION,
};

/**
 * @brief Enumerates the types of sensors in the environment category.
 *
 * @since 1
 * @version 1.0
 */
enum EnvironmentType {
    /** Temperature sensors */
    TYPE_AMBIENT_TEMPERATURE = 0,
    /** Magnetic field sensors */
    TYPE_MAGNETIC_FIELD,
    /** Uncalibrated magnetic field sensors */
    TYPE_MAGNETIC_FIELD_UNCALIBRATED,
    /** Humidity sensors */
    TYPE_HUMIDITY,
    /** Barometric pressure sensors */
    TYPE_BAROMETER,
    /** Specific Absorption Rate (SAR) sensors */
    TYPE_SAR,
};

/**
 * @brief Enumerates the types of sensors in the orientation category.
 *
 *
 *
 * @since 1
 * @version 1.0
 */
enum OrientationType {
    /** Six Degrees of Freedom (6DOF) attitude sensors */
    TYPE_6DOF = 0,
    /** Screen rotation sensors */
    TYPE_SCREEN_ROTATION,
    /** Device orientation sensors */
    TYPE_DEVICE_ORIENTATION,
    /** Orientation sensors */
    TYPE_ORIENTATION,
    /** Rotation vector sensors */
    TYPE_ROTATION_VECTOR,
    /** Game rotation vector sensors */
    TYPE_GAME_ROTATION_VECTOR,
    /** Geomagnetic rotation vector sensors */
    TYPE_GEOMAGNETIC_ROTATION_VECTOR,
};

/**
 * @brief Enumerates the types of sensors in the light category.
 *
 * @since 1
 * @version 1.0
 */
enum LightType {
    /** Proximity sensors */
    TYPE_PROXIMITY = 0,
    /** Time-of-Flight (TOF) sensors */
    TYPE_TOF,
    /** Ambient light sensors */
    TYPE_AMBIENT_LIGHT,
    /** Color temperature sensors */
    TYPE_COLOR_TEMPERATURE,
    /** RGB color sensors */
    TYPE_COLOR_RGB,
    /** XYZ color sensors */
    TYPE_COLOR_XYZ,
};

/**
 * @brief Enumerates the types of sensors in the other category.
 *
 * @since 1
 * @version 1.0
 */
enum OtherType {
    /** Hall effect sensors */
    TYPE_HALL = 0,
    /** Grip detection sensors */
    TYPE_GRIP_DETECTOR,
    /** Magnet bracket sensors */
    TYPE_MAGNET_BRACKET,
    /** Pressure detection sensors */
    TYPE_PRESSURE_DETECTOR,
};

/**
 * @brief Enumerates the types of sensors in the body category.
 *
 * @since 1
 * @version 1.0
 */
enum GroupBody {
    /** Heart rate sensors */
    TYPE_HEART_RATE_DETECTOR = 0,
    /** Wear state sensors */
    TYPE_WEAR_DETECTOR       = 1,
};

/**
 * @brief Defines the length of the <b>reserved</b> array in the
 * {@link SensorNativeData} struct.
 *
 * The array holds 16 elements of the float type for future extension. \n
 * You are not allowed to change the array length. If the length is changed,
 * exceptions such as the array index out of bounds error may occur. \n
 *
 * @since 1
 * @version 1.0
 */
#define RESERVE_DATA_LEN  16

/**
 * @brief Defines the length of the <b>values</b> array in the
 * {@link SensorNativeData} struct.
 *
 * The array holds 16 elements of the float type for storing the data reported
 * by sensors. \n
 * You are not allowed to change the array length. If the length is changed,
 * exceptions such as the array index out of bounds error may occur. \n
 *
 * @since 1
 * @version 1.0
 */
#define SENSOR_DATA_DIMS  16

/**
 * @brief Defines the length of the <b>sensorId</b> array in the
 * {@link SensorIdList} struct.
 *
 * The array holds 128 elements of the unsinged int type for storing the
 * obtained sensor IDs. \n
 * You are not allowed to change the array length. If the length is changed,
 * exceptions such as the array index out of bounds error may occur. \n
 *
 * @since 1
 * @version 1.0
 */
#define MAX_SENSOR_NUM    128

/**
 * @brief Stores basic sensor data.
 *
 * After you register the {@link SensorDataListener} callback and enables a
 * specific sensor,
 * sensor data will be reported to you via this struct. \n
 *
 * @since 1
 * @version 1.0
 */
struct SensorNativeData {
    /** Indicates the sensor ID. */
    uint32_t sensorId;
    /** Indicates the sensor timestamp. */
    int64_t timestamp;
    /** Indicates the sensor accuracy. */
    int accuracy;
    /** Indicates the data dimension of the sensor. */
    uint32_t dataDim;
    /** Indicates the data values of the sensor. */
    float values[SENSOR_DATA_DIMS];
    /** Indicates a reserved field. */
    float reserved[RESERVE_DATA_LEN];
};

/**
 * @brief Stores a list of sensor IDs supported by this device.
 *
 * You can call the {@link GetSensorId} function to obtain the sensor ID list.
 *
 * @since 1
 * @version 1.0
 */
struct SensorIdList {
    /** Indicates the list of sensor IDs supported by this device. */
    uint32_t sensorId[MAX_SENSOR_NUM];
    /** Indicates the number of sensors supported by this device. */
    uint32_t sensorNum;
};

/*
 * @brief The SensorsImplement declares that it is transparent and invisible to
 * developers.
 */
struct SensorsImplement;

/*
 * @brief The SensorInterfaceImplement type definition that it is transparent
 * and invisible to developers.
 */
typedef struct SensorsImplement SensorsImplement;

/**
 * @brief Called when sensor data is obtained.
 *
 * You need to implement this function and pass it to the
 * {@link CreateSensorDataChannel} function as an input parameter to register
 * the listener and obtain sensor data. \n
 *
 * @param events Indicates the pointer to the {@link SensorNativeData} struct
 * for storing sensor data.
 * You can use this pointer to obtain sensor data without the need to apply for
 * or release the pointer space. \n
 * @param num Indicates the number of received sensor data packages.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see CreateSensorDataChannel
 * @since 1
 * @version 1.0
 */
typedef int (*SensorDataListener)(struct SensorNativeData *events, uint32_t num);

/**
 * @brief Obtains the version number of the current sensor module.
 *
 * @return Returns the current version number. For example, value <b>10</b>
 * indicates version 1.0.
 * @since 1
 * @version 1.0
 */
int GetSensorInterfaceVersion();

/**
 * @brief Obtains the {@link SensorsImplement} instance.
 *
 * You need to call this function to obtain the {@link SensorInterfaceImplement}
 * instance, which will be passed to other functions you will call. \n
 *
 * @param events Indicates the pointer to the {@link SensorNativeData} struct
 * for storing sensor data.
 * You can use this pointer to obtain sensor data without the need to apply for
 * or release the pointer space. \n
 *
 * @param num Indicates the number of received sensor data packages.
 * @return Returns the handle of the {@link SensorsImplement} instance if it is
 * successfully obtained; returns <b>null</b> if the instance fails to be
 * obtained.
 * @see CreateSensorDataChannel
 * @see DestroySensorDataChannel
 * @since 1
 * @version 1.0
 */
const SensorsImplement *GetSensorInterfaceObject();

/**
 * @brief Creates a sensor data channel.
 *
 * You can call this function to create a sensor data channel after implementing
 * data listening and obtaining the sensor instance.
 * This channel is used for obtaining sensor data. \n
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param dataCallback Indicates the {@link SensorDataListener} callback for
 * receiving sensor data. You need to define how to implement this callback.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see SensorDataListener
 * @see GetSensorInterfaceObject
 * @since 1
 * @version 1.0
 */
int CreateSensorDataChannel(const SensorsImplement *obj, SensorDataListener dataCallback);

/**
 * @brief Destroys the sensor data channel.
 *
 * You can call this function to destroy the previously created sensor data
 * channel after you disable all sensors when exiting the application.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see GetSensorInterfaceObject
 * @since 1
 * @version 1.0
 */
int DestroySensorDataChannel(const SensorsImplement *obj);

/**
 * @brief Obtains all sensor IDs (for example, <b>ACC1</b> and <b>ACC2</b>) of a
 * specific type in a particular category supported by the current device.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param sensorId Indicates the pointer to the {@link SensorIdList} struct for
 * storing the obtained sensor information list.
 * You need to apply for and release the pointer space. \n
 * @param sensorGroup Indicates the sensor category.
 * @param sensorType Indicates the sensor type in the specified category.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see struct SensorIdList
 * @see GetSensorInterfaceObject
 * @since 1
 * @version 1.0
 */
int GetSensorId(const SensorsImplement *obj,
    struct SensorIdList *sensorId,
    uint32_t sensorGroup,
    uint32_t sensorType);

/**
 * @brief Obtains the default sensor ID of a specific type in a particular
 * category supported by the current device.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param sensorGroup Indicates the sensor category.
 * @param sensorType Indicates the sensor type in the specified category.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see GetSensorInterfaceObject
 * @since 1
 * @version 1.0
 */
int GetDefaultSensorId(const SensorsImplement *obj, uint32_t sensorGroup, uint32_t sensorType);

/**
 * @brief Obtains the minimum sampling interval of a specified sensor on your
 * device.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param sensorId Indicates the sensor ID, which is obtained from
 * {@link GetSensorId} or {@link GetDefaultSensorId}.
 * @return Returns a value greater than <b>0</b> if the function is successfully
 * executed; returns other value if the function execution fails.
 * @see GetSensorInterfaceObject
 * @since 1
 * @version 1.0
 */
int64_t GetSensorMinSamplePeriod(const SensorsImplement *obj, uint32_t sensorId);

/**
 * @brief Enables a specified sensor on your device.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param sensorId Indicates the sensor ID, which is obtained from
 * {@link GetSensorId} or {@link GetDefaultSensorId}.
 * @param samplingPeriodNs Indicates the sampling interval, in nanoseconds. The
 * value must be greater than <b>0</b>.
 * @param maxReportDelay Indicates the maximum latency for the sensor to report
 * data, in nanoseconds. The value must be <b>0</b> or greater.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see GetSensorInterfaceObject
 * @see GetSensorId
 * @see GetDefaultSensorId
 * @since 1
 * @version 1.0
 */
int EnableSensor(const SensorsImplement *obj,
    uint32_t sensorId,
    int64_t sampingPeriodNs,
    int64_t maxReportDelay);

/**
 * @brief Disables a specified sensor on your device.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param sensorId Indicates the sensor ID, which is obtained from
 * {@link GetSensorId} or {@link GetDefaultSensorId}.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see GetSensorInterfaceObject
 * @see GetSensorId
 * @see GetDefaultSensorId
 * @since 1
 * @version 1.0
 */
int DisableSensor(const SensorsImplement *obj, uint32_t sensorId);

/**
 * @brief Changes the minimum sampling interval and data reporting latency of a
 * specified sensor on your device.
 *
 * @param obj Indicates the sensor instance you obtained using
 * {@link GetSensorInterfaceObject}.
 * @param sensorId Indicates the sensor ID, which is obtained from
 * {@link GetSensorId} or {@link GetDefaultSensorId}.
 * @param samplingPeriodNs Indicates the sampling interval, in nanoseconds. The
 * value must be greater than <b>0</b>.
 * @param maxReportDelay Indicates the maximum latency for the sensor to report
 * data, in nanoseconds. The value must be <b>0</b> or greater.
 * @return Returns <b>0</b> if the function is successfully executed; returns a
 * non-zero value if the function execution fails.
 * @see GetSensorInterfaceObject
 * @see GetSensorId
 * @see GetDefaultSensorId
 * @since 1
 * @version 1.0
 */
int ChanageSensorInterval(const SensorsImplement *obj,
    uint32_t sensorId,
    int64_t sampingPeriodNs,
    int64_t maxReportDelay);

/** @} */
#ifdef __cplusplus
};
#endif

#endif // endif SENSORS_INTERFACE_H