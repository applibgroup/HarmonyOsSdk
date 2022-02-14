/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback } from './basic';
import { Callback } from './basic';
import { Want } from './ability/want';
import formBindingData from './@ohos.ability.formBindingData';

/**
 * Client to communication with FormManagerService.
 *
 * @name formManager
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace formManager {
  /**
   * update the given form.
   *
   * <p>You can use this method to update the given form</p>
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @permission ohos.permission.REQUIRE_FORM.
   * @param formId Indicates the given form.
   * @param formBindingData Indicates the form data.
   * @return -
   */
  function updateForm(formId: string, formBindingData: formBindingData.FormBindingData, callback: AsyncCallback<void>): void;
  function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;

  /**
  * Provides information about a form.
  *
  * @name FormInfo
  * @devices phone, tablet, tv, wearable, car
  * @since 7
  * @sysCap AAFwk
  */
  interface FormInfo {
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    bundleName: string;

    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    abilityName: string;

    /**
     * Obtains the name of this form.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    name: string;

    /**
     * Obtains the description of this form.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    description?: string;

    /**
     * Obtains the type of this form. Currently, Java and JS forms are supported.
     * a constant value, one of [FormType.JAVA, FormType.JS].
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    type: FormType;

    /**
     * Obtains the JS component name of this JS form.
     * <p>This method is valid only when the type of this form is JS.</p>
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    jsComponentName: string;

    /**
     * Obtains the color mode of this form.
     * A constant value, one of ColorMode.MODE_AUTO, ColorMode.MODE_DARK, ColorMode.MODE_LIGHT.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    colorMode: ColorMode;

    /**
     * Checks whether this form is a default form.
     * <p>A form is considered a default form if no form name is specified. Specifically, the system determines
     * whether a form is a default form based on the value of the isDefault attribute defined under
     * forms in the <b>config.json</b> file of the Harmony application.</p>
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    isDefault: boolean;

    /**
     * Obtains whether notify visible of this form.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    formVisibleNotify: boolean;

    /**
     * Obtains the form config ability about this form.
     * <p>A form config ability is a user-defined ability.</p>
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    formConfigAbility: string;

    /**
     * Obtains the default grid style of this form.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    defaultDimension: number;

    /**
     * Obtains the grid styles supported by this form.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    supportDimensions: Array<number>;

    /**
     * Obtains the custom data defined in this form.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    customizeData: {[key: string]: [value: string]};

    /**
     * Indicates the compatibility object.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     * @default -
     */
    jsonObject: object;
  }

  /**
  * Provides state information about a form.
  *
  * @name FormStateInfo
  * @devices phone, tablet, tv, wearable, car
  * @since 7
  * @sysCap AAFwk
  */
  interface FormStateInfo {
    /**
     * Obtains the form state.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    formState: FormState;

    /**
     * Obtains the want form .
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    want: Want;
  }

  /**
  * Provides state about a form.
  *
  * @name FormState
  * @devices phone, tablet, tv, wearable, car
  * @since 7
  * @sysCap AAFwk
  */
  enum FormState {
      /**
       * Indicates that the form status is unknown due to an internal error.
       *
       * @devices phone, tablet, tv, wearable, car
       * @since 7
       * @sysCap AAFwk
       */
      UNKNOWN = -1,

      /**
       * Indicates that the form is in the default state.
       *
       * @devices phone, tablet, tv, wearable, car
       * @since 7
       * @sysCap AAFwk
       */
      DEFAULT = 0,

      /**
       * Indicates that the form is ready.
       *
       * @devices phone, tablet, tv, wearable, car
       * @since 7
       * @sysCap AAFwk
       */
      READY = 1,
  }

  /**
   * Type of form.
   *
   * @name FormType
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  enum FormType {
    /**
     * Java form.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    JAVA = 0,

    /**
     * Js form.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    JS = 1
  }

  /**
   * Visibility type of form.
   *
   * @name FormType
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  enum VisibilityType {
    /**
     * form visibility type.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    FORM_VISIBLE = 1,

    /**
     * form invisibility type.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 7
     * @sysCap AAFwk
     */
    FORM_INVISIBLE = 2
  }

  /**
   * Parameter of form.
   *
   * @name FormParam
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  enum FormParam {}

  /**
   * Error of form.
   *
   * @name FormError
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  enum FormError {
    /**
     * A common internal error occurs during form processing.
     *
     * @since 7
     * @devices phone, tablet, tv, wearable, car
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_COMMON = 1,

    /**
     * The application does not have permission to use forms.
     * Ensure that the application is granted with the ohos.permission.REQUIRE_FORM
     * and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED permissions.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_PERMISSION_DENY = 2,

    /**
     * Failed to obtain the configuration information about the form specified by the
     * request parameters. Ensure that the parameters of the form to be added are
     * consistent with those provided by the form provider.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_GET_INFO_FAILED = 4,

    /**
     * Failed to obtain the bundle to which the form belongs based on the request parameters.
     * Ensure that the bundle to which the form to be added belongs is available.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_GET_BUNDLE_FAILED = 5,

    /**
     * Failed to initialize the form layout based on the request parameters.
     * Ensure that the grid style of the form is supported by the form provider.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_GET_LAYOUT_FAILED = 6,

    /**
     * Invalid input parameter during form operation. Ensure that all input
     * parameters are valid.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_ADD_INVALID_PARAM = 7,

    /**
     * The form configuration to be obtained using an existing form ID is
     * different from that obtained for the first time.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_CFG_NOT_MATCH_ID = 8,

    /**
     * The ID of the form to be operated does not exist in the Form Manager Service.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_NOT_EXIST_ID = 9,

    /**
     * Failed to bind the Form Manager Service to the provider service.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_BIND_PROVIDER_FAILED = 10,

    /**
     * The total number of added forms exceeds the maximum allowed by the system.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_MAX_SYSTEM_FORMS = 11,

    /**
     * The number of form instances generated using the same form configuration
     * exceeds the maximum allowed by the system.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_MAX_INSTANCES_PER_FORM = 12,

    /**
     * The form being requested was added by other applications and cannot be
     * operated by the current application.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_OPERATION_FORM_NOT_SELF = 13,

    /**
     * The Form Manager Service failed to instruct the form provider to delete the form.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_PROVIDER_DEL_FAIL = 14,

    /**
     * The total number of added forms exceeds the maximum per client.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_MAX_FORMS_PER_CLIENT = 15,

    /**
     * The total number of added temp forms exceeds the maximum in system.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_MAX_SYSTEM_TEMP_FORMS = 16,

    /**
     * The module can not be find in system.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_FORM_NO_SUCH_MODULE = 17,

    /**
     * The ability can not be find in system.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_FORM_NO_SUCH_ABILITY = 18,

    /**
     * The dimension is not exist in the form.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_FORM_NO_SUCH_DIMENSION = 19,

    /**
     * The ability is not installed.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_FORM_FA_NOT_INSTALLED = 20,

    /**
     * Failed to obtain the RPC object of the Form Manager Service because
     * the service is not started.Please try again after the service is started.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_SYSTEM_RESPONSES_FAILED = 30,

    /**
     * Failed to obtain the form requested by the client because another form
     * with the same form ID is in use. Forms in use cannot have the same ID.
     * To obtain and display a form that has the same configuration as an in-use
     * form in the same application, you are advised to set the form ID to 0 in
     * the request parameters.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_FORM_DUPLICATE_ADDED = 31,

    /**
     * The form is being restored. Perform operations on the form only after
     * the restoration is complete.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    ERR_IN_RECOVERY = 36
  }

  /**
   * Color mode.
   *
   * @name ColorMode
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   */
  enum ColorMode {
    /**
     * Automatic mode.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    MODE_AUTO = -1,

    /**
     * Dark mode.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
     MODE_DARK = 0,

    /**
     * Light mode.
     *
     * @since 7
     * @sysCap AAFwk
     * @devices phone, tablet, tv, wearable, car
     */
    MODE_LIGHT = 1
  }
}
export default formManager;