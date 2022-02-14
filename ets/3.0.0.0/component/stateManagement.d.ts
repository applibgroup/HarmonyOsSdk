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

/**
 * Provides an interface for attribute subscribers.
 * @devices phone, tablet, car
 * @since 7
 */
interface IPropertySubscriber {
  /**
   * Called when the ID of the property subscriber is queried.
   * @devices phone, tablet, car
   * @since 7
   */
  id(): number;

  /**
   * Provides a single attribute change user interface.
   * @devices phone, tablet, car
   * @since 7
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Provides a single attribute change user interface.
   * @devices phone, tablet, car
   * @since 7
   */
  hasChanged(newValue: T): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * Setting Subscribers.
   * @devices phone, tablet, car
   * @since 7
   */
  protected subscribers_: Set<number>;

  /**
   * Private user ID.
   * @devices phone, tablet, car
   * @since 7
   */
  private id_;

  /**
   * Private user information.
   * @devices phone, tablet, car
   * @since 7
   */
  private info_?;

  /**
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(

  /**
   * Subscriber Information.
   * @devices phone, tablet, car
   * @since 7
   */
    subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when the subscriber ID is entered.
   * @devices phone, tablet, car
   * @since 7
   */
  id(): number;

  /**
   * Called when a subscriber information description is entered.
   * @devices phone, tablet, car
   * @since 7
   */
  info(): string;

  /**
   * Called when data is obtained.
   * @devices phone, tablet, car
   * @since 7
   */
  abstract get(): T;

  /**
   * Called when data is created.
   * @devices phone, tablet, car
   * @since 7
   */
  abstract set(newValue: T): void;

  /**
   * Called when a two-way synchronization is created.
   * @devices phone, tablet, car
   * @since 7
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Called when a one-way synchronization is created.
   * @devices phone, tablet, car
   * @since 7
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Called when the subscriber is unlinked.
   * @devices phone, tablet, car
   * @since 7
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Called when the notification has changed.
   * @devices phone, tablet, car
   * @since 7
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Called when the notification property is read.
   * @devices phone, tablet, car
   * @since 7
   */
  protected notifyPropertyRead(): void;

  /**
   * Called when the number of users is queried.
   * @devices phone, tablet, car
   * @since 7
   */
  numberOfSubscrbers(): number;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T> implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Sources of synchronization attributes bidirectionally.
   * @devices phone, tablet, car
   * @since 7
   */
  private source_;

  /**
   * constructor parameters.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @devices phone, tablet, car
   * @since 7
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @devices phone, tablet, car
   * @since 7
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @devices phone, tablet, car
   * @since 7
   */
  get(): T;

  /**
   * Called when data is created.
   * @devices phone, tablet, car
   * @since 7
   */
  set(newValue: T): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T> implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Pack value for single-item binding.
   * @devices phone, tablet, car
   * @since 7
   */
  private wrappedValue_;

  /**
   * Sources of synchronization attributes bidirectionally.
   * @devices phone, tablet, car
   * @since 7
   */
  private source_;

  /**
   * Constructor parameters.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @devices phone, tablet, car
   * @since 7
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @devices phone, tablet, car
   * @since 7
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @devices phone, tablet, car
   * @since 7
   */
  get(): T;

  /**
   * Called when data is created.
   * @devices phone, tablet, car
   * @since 7
   */
  set(newValue: T): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class AppStorage {
  /**
   * Called when a link is set.
   * @devices phone, tablet, car
   * @since 7
   */
  static Link<T>(propName: string): any;

  /**
   * Called when a hyperlink is set.
   * @devices phone, tablet, car
   * @since 7
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   * @devices phone, tablet, car
   * @since 7
   */
  static Prop<S>(propName: string): any;

  /**
   * Called when dynamic properties are set.
   * @devices phone, tablet, car
   * @since 7
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Called when owning or not.
   * @devices phone, tablet, car
   * @since 7
   */
  static Has(propName: string): boolean;

  /**
   * Called when data is obtained.
   * @devices phone, tablet, car
   * @since 7
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Called when setting.
   * @devices phone, tablet, car
   * @since 7
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Called when setting or creating.
   * @devices phone, tablet, car
   * @since 7
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Called when a deletion is made.
   * @devices phone, tablet, car
   * @since 7
   */
  static Delete(propName: string): boolean;

  /**
   * Called when a dictionary is sorted.
   * @devices phone, tablet, car
   * @since 7
   */
  static Keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @devices phone, tablet, car
   * @since 7
   */
  static staticClear(): boolean;

  /**
   * Called when the data can be changed.
   * @devices phone, tablet, car
   * @since 7
   */
  static IsMutable(propName: string): boolean;

  /**
   * Called when you check how much data is stored.
   * @devices phone, tablet, car
   * @since 7
   */
  static Size(): number;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class Environment {
  /**
   * Constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor();

  /**
   * Called when a property value is checked.
   * @devices phone, tablet, car
   * @since 7
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when multiple property values are checked.
   * @devices phone, tablet, car
   * @since 7
   */
  static EnvProps(props: {
    key: string;
    defaultValue: any;
  }[]): void;

  /**
   * Set the key value.
   * @devices phone, tablet, car
   * @since 7
   */
  static Keys(): Array<string>;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum ColorMode {
  /**
   * Bright color.
   * @devices phone, tablet, car
   * @since 7
   */
  LIGHT = 0,

  /**
   * Dark.
   * @devices phone, tablet, car
   * @since 7
   */
  DARK,
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare enum LayoutDirection {
  /**
   * Elements are laid out from left to right.
   * @devices phone, tablet, car
   * @since 7
   */
  LTR = 0,

  /**
   * Elements are laid out from right to left.
   * @devices phone, tablet, car
   * @since 7
   */
  RTL,
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class PersistentStorage {
  /**
   * Constructor parameters.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Called when a persistence property is stored.
   * @devices phone, tablet, car
   * @since 7
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Called when a property is deleted.
   * @devices phone, tablet, car
   * @since 7
   */
  static DeleteProp(key: string): void;

  /**
   * Called when multiple persistence properties are stored.
   * @devices phone, tablet, car
   * @since 7
   */
  static PersistProps(properties: {
      key: string;
      defaultValue: any;
  }[]): void;

  /**
   * Set the key value.
   * @devices phone, tablet, car
   * @since 7
   */
  static Keys(): Array<string>;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare class Storage {
  /**
   * Constructor parameters.
   * @devices phone, tablet, car
   * @since 7
   */
  constructor(
    needCrossThread?: boolean, file?: string);

  /**
   * Called when data is obtained.
   * @devices phone, tablet, car
   * @since 7
   */
  get(key: string): string | undefined;

  /**
   * Called when setting.
   * @devices phone, tablet, car
   * @since 7
   */
  set(key: string, val: any): void;

  /**
   * Called when data is cleared.
   * @devices phone, tablet, car
   * @since 7
   */
  clear(): void;

  /**
   * Called when data is deleted.
   * @devices phone, tablet, car
   * @since 7
   */
  delete(key: string): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
declare abstract class SubscribaleAbstract {
  /**
   * Returns the ownership attribute set by the.
   * @devices phone, tablet, car
   * @since 7
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   * @devices phone, tablet, car
   * @since 7
   */
  protected constructor();

  /**
   * Called when the notification property has changed.
   * @devices phone, tablet, car
   * @since 7
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Called when adding an already owned property.
   * @devices phone, tablet, car
   * @since 7
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted.
   * @devices phone, tablet, car
   * @since 7
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted by ID
   * @devices phone, tablet, car
   * @since 7
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const appStorage: AppStorage;
