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

/**
 * systemScreenLock
 * @devices phone, tablet, tv, wearable, car
 * @since 7
 */
declare namespace screenLock {

  /**
   * Checks whether the screen is currently locked.
   *
   * @return Returns {@code true} if the screen is currently locked; returns {@code false}
   * otherwise.
   * @since 7
   */
  function isScreenLocked(callback: AsyncCallback<boolean>): void;
  function isScreenLocked(): Promise<boolean>;

  /**
   * Checks whether the screen lock of the current device is secure.
   *
   * @return Returns {@code true} if the screen lock of the current device is secure; returns {@code false}
   * otherwise.
   * @since 7
   */
  function isSecureMode(callback: AsyncCallback<boolean>): void;
  function isSecureMode(): Promise<boolean>;

  /**
   * Unlocks the screen.
   *
   * @return -
   * @since 7
   */
  function unlockScreen(callback: AsyncCallback<void>): void;
  function unlockScreen(): Promise<void>;
}

export default screenLock;


