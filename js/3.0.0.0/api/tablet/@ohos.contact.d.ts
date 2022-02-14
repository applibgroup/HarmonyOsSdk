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
 * Contains variety of system contact, provides functions for adding, updating and deleting these system contact
 * and provides methods for querying the information of contact.
 *
 * @since 7
 * @sysCap SystemCapability.SysAppComponents.CONTACT
 * @devices phone, tablet, wearable, car
 */
declare namespace contact {
  /**
   * Creates a contact.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param contact Indicates the contact information.
   * @return Returns the contact ID (which can be obtained by {@link Contact#getId()}) if the creation is successful;
   * returns {@link Contact#INVALID_CONTACT_ID} if the creation fails.
   */
  function addContact(contact: Contact, callback: AsyncCallback<number>): void;
  function addContact(contact: Contact): Promise<number>;

  /**
   * Select contact.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @return Returns the contact list which user select;
   * returns empty contact list if user not select.
   * @devices phone, tablet
   */
  function selectContact(callback: AsyncCallback<Array<Contact>>): void;
  function selectContact(): Promise<Array<Contact>>;

  /**
   * Deletes a specified contact.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param key Indicates the unique query key of a contact to delete.
   * @return Returns {@code true} if the contact is deleted; returns {@code false} otherwise.
   */
  function deleteContact(key: string, callback: AsyncCallback<void>): void;
  function deleteContact(key: string): Promise<void>;

  /**
   * Queries a specified contact of specified attributes.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param key Indicates the unique query key of a contact.
   * @param holder Indicates the contact holder. If this parameter is null, the default holder is used for matching.
   * @param attrs Indicates the contact attributes. If this parameter is null, all attributes are used for matching.
   * @return Returns the specified contact.
   */
  function queryContact(key: string, callback: AsyncCallback<Contact>): void;
  function queryContact(key: string, holder: Holder, callback: AsyncCallback<Contact>): void;
  function queryContact(key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;
  function queryContact(key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;
  function queryContact(key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>;

  /**
   * Queries contacts with query conditions.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param holder Indicates the contact holder. If this parameter is null, the default holder is used for matching.
   * @param attrs Indicates the contact attributes. If this parameter is null, all attributes are used for matching.
   * @return Returns the {@code Contact} list object.
   */
  function queryContacts(callback: AsyncCallback<Array<Contact>>): void;
  function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void;
  function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * Queries contacts by a specified email address, contact holder, and contact attributes.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param email Indicates the email address.
   * @param holder Indicates the contact holder. If this parameter is null, the default holder is used for matching.
   * @param attrs Indicates the contact attributes. If this parameter is null, all attributes are used for matching.
   * @return Returns a {@code Contact} list object.
   */
  function queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * Queries contacts by a phone number, holder, and contact attribute.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}.
   *
   * @param phoneNumber Indicates the phone number. Only full match is supported, and wildcards are not supported.
   * @param holder Indicates the contact holder. If this parameter is null, the default holder is used for matching.
   * @param attrs Indicates the contact attribute. If this parameter is null,
   * all attributes will be used for matching.
   * @return Returns the {@code Contact} list object.
   */
  function queryContactsByPhoneNumber(phoneNumber: string, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByPhoneNumber(phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  function queryContactsByPhoneNumber(phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * Queries contact groups.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param holder Indicates the contact holder. If this parameter is null, the default holder is used for matching.
   * @return Returns the contact group list.
   */
  function queryGroups(callback: AsyncCallback<Array<Group>>): void;
  function queryGroups(holder: Holder, callback: AsyncCallback<Array<Group>>): void;
  function queryGroups(holder?: Holder): Promise<Array<Group>>;

  /**
   * Queries contact holders.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @return Returns the {@code Holder} list object.
   */
  function queryHolders(callback: AsyncCallback<Array<Holder>>): void;
  function queryHolders(): Promise<Array<Holder>>;

  /**
   * Obtains the query key of a contact based on a specified ID and holder.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param id Indicates the contact ID.
   * @param holder Indicates the contact holder. If this parameter is null, the default holder is used for matching.
   * @return Returns the query key of the contact.
   */
  function queryKey(id: number, callback: AsyncCallback<string>): void;
  function queryKey(id: number, holder: Holder, callback: AsyncCallback<string>): void;
  function queryKey(id: number, holder?: Holder): Promise<string>;

  /**
   * Queries information about "my card".
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param attrs Indicates the contact attributes. If this parameter is null, all attributes are used for matching.
   * @return Returns information about "my card".
   */
  function queryMyCard(callback: AsyncCallback<Contact>): void;
  function queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;
  function queryMyCard(attrs?: ContactAttributes): Promise<Contact>;

  /**
   * Updates specified attributes of a contact.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param contact Indicates the contact whose information is to update.
   * @param attrs Indicates the contact attributes to update. If this parameter is null,
   * all available attributes will be updated.
   * @return Returns {@code true} if the update is successful; returns {@code false} otherwise.
   */
  function updateContact(contact: Contact, callback: AsyncCallback<void>): void;
  function updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void;
  function updateContact(contact: Contact, attrs?: ContactAttributes): Promise<void>;

  /**
   * Checks whether the contact ID is in the local phone book.
   *
   * <p>Permissions required: {@code ohos.permission.READ_CONTACTS} and {@code ohos.permission.WRITE_CONTACTS}
   *
   * @param id Indicates the contact ID.
   * @return Returns {@code true} if the contact ID is in the local phone book; returns {@code false} otherwise.
   */
  function isLocalContact(id: number, callback: AsyncCallback<boolean>): void;
  function isLocalContact(id: number): Promise<boolean>;

  /**
   * Checks whether the contact ID is of "my card".
   *
   * @param id Indicates the contact ID.
   * @return Returns {@code true} if the contact ID is of "my card"; returns {@code false} otherwise.
   */
  function isMyCard(id: number, callback: AsyncCallback<boolean>): void;
  function isMyCard(id: number): Promise<boolean>;

  /**
   * Provides methods for contact information
   */
  class Contact {
    /**
     * Indicates the contact ID.
     */
    static readonly INVALID_CONTACT_ID: -1

    /**
     * Indicates the contact ID.
     */
    readonly id: number

    /**
     * Indicates the query key that identifies the contact.
     */
    readonly key: string

    /**
     * Indicates the contact attributes.
     */
    contactAttributes: ContactAttributes

    /**
     * Indicates an email address of the contact.
     */
    emails: Email[]

    /**
     * Indicates an event (special date) of the contact.
     */
    events: Event[]

    /**
     * Indicates a group of the contact.
     */
    groups: Group[]

    /**
     * Indicates an IM address of the contact.
     */
    imAddresses: ImAddress[]

    /**
     * Indicates a phone number of the contact.
     */
    phoneNumbers: PhoneNumber[]

    /**
     * Indicates the contact portrait.
     */
    portrait: Portrait

    /**
     * Indicates a postal address of the contact.
     */
    postalAddresses: PostalAddress[]

    /**
     * Indicates a relation of the contact.
     */
    relations: Relation[]

    /**
     * Indicates a Session Initiation Protocol (SIP) address of the contact.
     */
    sipAddresses: SipAddress[]

    /**
     * Indicates a website of the contact.
     */
    websites: Website[]

    /**
     * Indicates the contact name.
     */
    name: Name

    /**
     * Indicates the contact nickname.
     */
    nickName: NickName

    /**
     * Indicates the contact note.
     */
    note: Note

    /**
     * Indicates organization information about the contact.
     */
    organization: Organization
  }

  /**
   * Provides methods for contact attributes information
   */
  class ContactAttributes {
    /**
     * Indicates the contact attributes.
     */
    attributes: Attribute[]
  }

  /**
   * Provides methods for attribute information
   */
  enum Attribute {
    /**
     * Indicates the contact event.
     */
    ATTR_CONTACT_EVENT,

    /**
     * Indicates the email address.
     */
    ATTR_EMAIL,

    /**
     * Indicates the contact group.
     */
    ATTR_GROUP_MEMBERSHIP,

    /**
     * Indicates the instant messaging (IM) address.
     */
    ATTR_IM,

    /**
     * Indicates the name.
     */
    ATTR_NAME,

    /**
     * Indicates the nickname.
     */
    ATTR_NICKNAME,

    /**
     * Indicates the note.
     */
    ATTR_NOTE,

    /**
     * Indicates the organization.
     */
    ATTR_ORGANIZATION,

    /**
     * Indicates the phone number.
     */
    ATTR_PHONE,

    /**
     * Indicates the portrait.
     */
    ATTR_PORTRAIT,

    /**
     * Indicates the postal address.
     */
    ATTR_POSTAL_ADDRESS,

    /**
     * Indicates the relation.
     */
    ATTR_RELATION,

    /**
     * Indicates the Session Initiation Protocol (SIP) address.
     */
    ATTR_SIP_ADDRESS,

    /**
     * Indicates the website.
     */
    ATTR_WEBSITE
  }

  /**
   * Provides methods for email information
   */
  class Email {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home email.
     */
    static readonly EMAIL_HOME: 1

    /**
     * Indicates a work email.
     */
    static readonly EMAIL_WORK: 2

    /**
     * Indicates an email of the OTHER type.
     */
    static readonly EMAIL_OTHER: 3

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the email address.
     */
    email: string

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the displayed email name.
     */
    displayName: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for event information
   */
  class Event {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates an anniversary event.
     */
    static readonly EVENT_ANNIVERSARY: 1

    /**
     * Indicates an event of the OTHER type.
     */
    static readonly EVENT_OTHER: 2

    /**
     * Indicates an birthday event.
     */
    static readonly EVENT_BIRTHDAY: 3

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the event date.
     */
    eventDate: string

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for group information
   */
  class Group {
    /**
     * Indicates the contact group ID.
     */
    groupId: number

    /**
     * Indicates the contact group title.
     */
    title: string
  }

  /**
   * Provides methods for holder information
   */
  class Holder {
    /**
     * Indicates the bundle name of a contact holder.
     */
    readonly bundleName: string

    /**
     * Indicates the displayed name of a contact holder.
     */
    readonly displayName: string

    /**
     * Indicates the holder ID.
     */
    holderId: number
  }

  /**
   * Provides methods for ImAddress information
   */
  class ImAddress {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: -1

    /**
     * Indicates an AIM instant message.
     */
    static readonly IM_AIM: 0

    /**
     * Indicates a Windows Live instant message.
     */
    static readonly IM_MSN: 1

    /**
     * Indicates a Yahoo instant message.
     */
    static readonly IM_YAHOO: 2

    /**
     * Indicates a Skype instant message.
     */
    static readonly IM_SKYPE: 3

    /**
     * Indicates a QQ instant message.
     */
    static readonly IM_QQ: 4

    /**
     * Indicates an ICQ instant message.
     */
    static readonly IM_ICQ: 6

    /**
     * Indicates a Jabber instant message.
     */
    static readonly IM_JABBER: 7

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -2

    /**
     * Indicates the IM address.
     */
    imAddress: string

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for name information
   */
  class Name {
    /**
     * Indicates the family name of the contact.
     */
    familyName: string

    /**
     * Indicates the phonetic family name of the contact.
     */
    familyNamePhonetic: string

    /**
     * Indicates the full name of the contact.
     */
    fullName: string

    /**
     * Indicates the given name of the contact.
     */
    givenName: string

    /**
     * Indicates the phonetic given name of the contact.
     */
    givenNamePhonetic: string

    /**
     * Indicates the middle name of the contact.
     */
    middleName: string

    /**
     * Indicates the phonetic middle name of the contact.
     */
    middleNamePhonetic: string

    /**
     * Indicates the prefix of the contact name.
     */
    namePrefix: string

    /**
     * Indicates the suffix of this contact name.
     */
    nameSuffix: string
  }

  /**
   * Provides methods for nick name information
   */
  class NickName {
    /**
     * Indicates the nickname of the contact.
     */
    nickName: string
  }

  /**
   * Provides methods for note information
   */
  class Note {
    /**
     * Indicates the note content.
     */
    noteContent: string
  }

  /**
   * Provides methods for organization information
   */
  class Organization {
    /**
     * Indicates the name of the organization to which the contact belongs.
     */
    name: string

    /**
     * Indicates the title of the contact.
     */
    title: string
  }

  /**
   * Provides methods for phone number information
   */
  class PhoneNumber {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home number.
     */
    static readonly NUM_HOME: 1

    /**
     * Indicates a mobile phone number.
     */
    static readonly NUM_MOBILE: 2

    /**
     * Indicates a work number.
     */
    static readonly NUM_WORK: 3

    /**
     * Indicates a work fax number.
     */
    static readonly NUM_FAX_WORK: 4

    /**
     * Indicates a home fax number.
     */
    static readonly NUM_FAX_HOME: 5

    /**
     * Indicates a pager number.
     */
    static readonly NUM_PAGER: 6

    /**
     * Indicates a number of the OTHER type.
     */
    static readonly NUM_OTHER: 7

    /**
     * Indicates a callback number.
     */
    static readonly NUM_CALLBACK: 8

    /**
     * Indicates a car number.
     */
    static readonly NUM_CAR: 9

    /**
     * Indicates a company director number.
     */
    static readonly NUM_COMPANY_MAIN: 10

    /**
     * Indicates an Integrated Services Digital Network (ISDN) number.
     */
    static readonly NUM_ISDN: 11

    /**
     * Indicates a main number.
     */
    static readonly NUM_MAIN: 12

    /**
     * Indicates a number of the OTHER_FAX type.
     */
    static readonly NUM_OTHER_FAX: 13

    /**
     * Indicates a radio number.
     */
    static readonly NUM_RADIO: 14

    /**
     * Indicates a telex number.
     */
    static readonly NUM_TELEX: 15

    /**
     * Indicates a teletypewriter (TTY) or test-driven development (TDD) number.
     */
    static readonly NUM_TTY_TDD: 16

    /**
     * Indicates a work mobile phone number.
     */
    static readonly NUM_WORK_MOBILE: 17

    /**
     * Indicates a work pager number.
     */
    static readonly NUM_WORK_PAGER: 18

    /**
     * Indicates an assistant number.
     */
    static readonly NUM_ASSISTANT: 19

    /**
     * Indicates an MMS number.
     */
    static readonly NUM_MMS: 20

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the phone number of the contact.
     */
    phoneNumber: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for portrait information
   */
  class Portrait {
    /**
     * Indicates the uri of the contact portrait.
     */
    uri: string
  }

  /**
   * Provides methods for postal address information
   */
  class PostalAddress {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home address.
     */
    static readonly ADDR_HOME: 1

    /**
     * Indicates a work address.
     */
    static readonly ADDR_WORK: 2

    /**
     * Indicates an address of the OTHER type.
     */
    static readonly ADDR_OTHER: 3

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the city where this contact is located.
     */
    city: string

    /**
     * Indicates the country/region where this contact is located.
     */
    country: string

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the neighborhood where this contact is located.
     */
    neighborhood: string

    /**
     * Indicates the post box of this contact.
     */
    pobox: string

    /**
     * Indicates the postal address of this contact.
     */
    postalAddress: string

    /**
     * Indicates the postal code of this contact.
     */
    postcode: string

    /**
     * Indicates the area where this contact is located.
     */
    region: string

    /**
     * Indicates the street where this contact is located.
     */
    street: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for relation information
   */
  class Relation {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates an assistant.
     */
    static readonly RELATION_ASSISTANT: 1

    /**
     * Indicates a brother.
     */
    static readonly RELATION_BROTHER: 2

    /**
     * Indicates a child.
     */
    static readonly RELATION_CHILD: 3

    /**
     * Indicates a domestic partner.
     */
    static readonly RELATION_DOMESTIC_PARTNER: 4

    /**
     * Indicates a father.
     */
    static readonly RELATION_FATHER: 5

    /**
     * Indicates a friend.
     */
    static readonly RELATION_FRIEND: 6

    /**
     * Indicates a manager.
     */
    static readonly RELATION_MANAGER: 7

    /**
     * Indicates a mother.
     */
    static readonly RELATION_MOTHER: 8

    /**
     * Indicates a parent.
     */
    static readonly RELATION_PARENT: 9

    /**
     * Indicates a partner.
     */
    static readonly RELATION_PARTNER: 10

    /**
     * Indicates a referrer.
     */
    static readonly RELATION_REFERRED_BY: 11

    /**
     * Indicates a relative.
     */
    static readonly RELATION_RELATIVE: 12

    /**
     * Indicates a sister.
     */
    static readonly RELATION_SISTER: 13

    /**
     * Indicates a spouse.
     */
    static readonly RELATION_SPOUSE: 14

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the relation name.
     */
    relationName: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for sip address information
   */
  class SipAddress {
    /**
     * Indicates a custom label.
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home SIP address.
     */
    static readonly SIP_HOME: 1

    /**
     * Indicates a work SIP address.
     */
    static readonly SIP_WORK: 2

    /**
     * Indicates an SIP address of the OTHER type.
     */
    static readonly SIP_OTHER: 3

    /**
     * Indicates an invalid label ID.
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the label name of an attribute.
     */
    labelName: string

    /**
     * Indicates the SIP address.
     */
    sipAddress: string

    /**
     * Indicates the label id.
     */
    labelId: number
  }

  /**
   * Provides methods for website information
   */
  class Website {
    /**
     * Indicates the website.
     */
    website: string
  }
}

export default contact;