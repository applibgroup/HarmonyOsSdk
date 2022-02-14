/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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
import { AbilityInfo } from './bundle/abilityInfo';

/**
 * Accessibility
 * @name Accessibility
 * @since 7
 * @sysCap SystemCapability.Accessibility.Ability
 * @devices phone, tablet, wearable, tv
 * @import basic,abilityInfo
 */
declare namespace accessibility {

  /**
   * The type of the Ability app.
   * @since 7
   */
  type AbilityType = 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual';

  /**
   * The action that the ability can execute.
   * @since 7
   */
  type Action = 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
    'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
    'scrollForward' | 'scrollBackward' | 'setSelection';

  /**
   * The type of the accessibility event.
   * @note windowsChange
   * @note windowContentChange
   * @note windowStateChange
   * @note announcement
   * @note notificationChange
   * @note textTraversedAtMove
   * @since 7
   */
  type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
    'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
    'textUpdate' | 'textSelectionUpdate' | 'scroll';

  /**
   * The change type of the windowsChange event.
   * @note It's used when received the {@code windowsChange} event.
   * @since 7
   */
  type WindowUpdateType = 'add' | 'remove' | 'title' | 'bounds' | 'layer' | 'active' |
    'focus' | 'accessibilityFocus' | 'parent' | 'children' | 'pip';

  /**
   * The type of the StateEvent.
   * @since 7
   */
  type StateEventType = 'accessibility' | 'touchGuide';

  /**
   * The type of the ability state.
   * @since 7
   */
  type AbilityState = 'enable' | 'disable' | 'install';

  /**
   * The ability that accessibility subsystem support.
   * @note touchExplorer: Describes the capability to talkback.
   * magnification: Describes the capability to request to control the display magnification.
   * gesturesSimulation: Describes the capability to request to simulate the gesture.
   * windowContent: Describes the capability to search for the content of the active window.
   * filterKeyEvents: Describes the capability to request to filter key events.
   * fingerprintGesture: Describes the capability to request to fingerprint gesture.
   * @since 7
   */
  type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture';

  /**
   * The granularity of text move.
   * @note The granularity of text move.
   * @since 7
   */
  type TextMoveUnit = 'char' | 'word' | 'line' | 'page' | 'paragraph';

  /**
   * Checks whether accessibility ability is enabled.
   * @since 7
   * @param callback Asynchronous callback interface.
   * @return Returns {@code true} if the accessibility is enabled; returns {@code false} otherwise.
  */
  function isOpenAccessibility(callback: AsyncCallback<boolean>): void;
  function isOpenAccessibility(): Promise<boolean>;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   * @since 7
   * @param callback Asynchronous callback interface.
   * @return Returns {@code true} if the touch browser is enabled; returns {@code false} otherwise.
  */
  function isOpenTouchGuide(callback: AsyncCallback<boolean>): void;
  function isOpenTouchGuide(): Promise<boolean>;

  /**
   * Queries the list of accessibility abilities.
   * @since 7
   * @param abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @return Returns the list of abilityInfos.
  */
  function getAbilityLists(abilityType: AbilityType, stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>): void;
  function getAbilityLists(abilityType: AbilityType,
    stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Send accessibility Event.
   * @since 7
   * @param event The object of the accessibility {@code EventInfo} .
   * @param callback Asynchronous callback interface.
   * @return Returns {@code true} if success ; returns {@code false} otherwise.
   */
  function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void;
  function sendEvent(event: EventInfo): Promise<void>;

  /**
   * Register the observe of the state changed.
   * @since 7
   * @param type state event type.
   * @param callback Asynchronous callback interface.
   * @return Returns {@code true} if the register is success ; returns {@code false} otherwise.
   */
  function on(type: StateEventType, callback: Callback<StateEvent>): void;

  /**
   * Deregister the observe of the state changed.
   * @since 7
   * @param type state event type
   * @param callback Asynchronous callback interface.
   * @return Returns {@code true} if the deregister is success ; returns {@code false} otherwise.
   */
  function off(type?: StateEventType, callback?: Callback<StateEvent>): void;

  interface AccessibilityAbilityInfo {
    /**
     * The ability id.
     * @since 7
     */
    readonly id: string;

    /* The ability name.
     * @since 7
     */
    readonly name: string;

    /* The bundle name of the ability.
     * @since 7
     */
    readonly bundleName: string;

    /**
     * The ability info.
     * @since 7
     */
    readonly abilityInfo: AbilityInfo;

    /**
     * The type of the ability.
     * @since 7
     */
    readonly abilityTypes: Array<AbilityType>;

    /**
     * The capabilities of the ability.
     * @since 7
     */
    readonly capabilities: Array<Capability>;

    /**
     * The description of the ability.
     * @since 7
     */
    readonly description: string;

    /**
     * The events which the accessibility ability wants to observe.
     * @since 7
     */
    readonly eventTypes: Array<EventType>;

  }

  class EventInfo {
    constructor(jsonObject);
    /**
     * The type of an accessibility event.
     * @since 7
     */
    type: EventType;

    /**
     * The type of the window change event.
     * @since 7
     */
    windowUpdateType?: WindowUpdateType;

    /**
     * The bundle name of the target application.
     * @since 7
     */
    bundleName: string;

    /**
     * The type of the event source component,such as button, chart.
     * @since 7
     */
    componentType?: string;

    /** The page id of the event source.
     * @since 7
     */
    pageId ?: number;

    /**
     * The accessibility event description.
     * @since 7
     */
    description?: string;

    /**
     * The action that triggers the accessibility event, for example, clicking or focusing a view.
     * @since 7
     */
    triggerAction: Action;

    /**
     * The movement step used for reading texts.
     * @since 7
     */
    textMoveUnit?: TextMoveUnit;

    /**
     * The content list.
     * @note
     * @since 7
     */
    contents?: Array<string>;

    /**
     * The content changed before.
     * @since 7
     */
    lastContent?: string;

    /**
     * The start index of listed items on the screen.
     * @since 7
     */
    beginIndex?: number;

    /**
     * The index of the current item on the screen.
     * @since 7
     */
    currentIndex?: number;

    /**
     * The end index of listed items on the screen.
     * @since 7
     */
    endIndex?: number;

    /**
     * The total of the items.
     * @note talkback used it when scroll.
     * @since 7
     */
    itemCount?: number;
  }

  interface StateEvent {
    /**
     * The type of the state event.
     * @since 7
     */
    readonly eventType: StateEventType;

    /**
     * The state of the ability.
     * @since 7
     */
    readonly state: boolean;

    /**
     * The description of the ability.
     * @since 7
     */
    readonly description: string;
  }
}
export default accessibility;