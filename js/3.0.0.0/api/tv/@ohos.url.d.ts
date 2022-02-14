/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * The url module provides utilities for URL resolution and parsing.
 * @since 7
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet, tv, wearable, car
 * @import import url from '@ohos.url';
 */
declare namespace url {
    class URLSearchParams {
        /**
         * A parameterized constructor used to create an URLSearchParams instance.
         * As the input parameter of the constructor function, init supports four types.
         * The input parameter is a character string two-dimensional array.
         * The input parameter is the object list.
         * The input parameter is a character string.
         * The input parameter is the URLSearchParams object.
         */
        constructor(init?: string[][] | Record<string, string> | string | URLSearchParams);

        /**
         * Appends a specified key/value pair as a new search parameter.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param name Key name of the search parameter to be inserted.
         * @param value Values of search parameters to be inserted.
         */
        append(name: string, value: string): void;

        /**
         * Deletes the given search parameter and its associated value,from the list of all search parameters.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param Name of the key-value pair to be deleted.
         */
        delete(name: string): void;

        /**
         * Returns all key-value pairs associated with a given search parameter as an array.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param Name Specifies the name of a key value.
         * @return string[] Returns all key-value pairs with the specified name.
         */
        getAll(name: string): string[];

        /**
         * Returns an ES6 iterator. Each item of the iterator is a JavaScript Array.
         * The first item of Array is name, and the second item of Array is value.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns an iterator for ES6.
         */
         entries(): IterableIterator<[string, string]>;

        /**
         * Callback functions are used to traverse key-value pairs on the URLSearchParams instance object.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param value Current traversal key value.
         * @param key Indicates the name of the key that is traversed.
         * @param searchParams The instance object that is currently calling the forEach method.
         */
        forEach(callbackfn: (value: string, key: string, searchParams: this) => void): void;

        /**
         * Returns the first value associated to the given search parameter.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param name Specifies the name of a key-value pair.
         * @return Returns the first value found by name. If no value is found, null is returned.
         */
        get(name: string): string | null;

        /**
         * Returns a Boolean that indicates whether a parameter with the specified name exists.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param name Specifies the name of a key-value pair.
         * @return Returns a Boolean value that indicates whether a found
         */
        has(name: string): boolean;

        /**
         * Sets the value associated with a given search parameter to the
         * given value. If there were several matching values, this method
         * deletes the others. If the search parameter doesn't exist, this
         * method creates it.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param name Key name of the parameter to be set.
         * @param value Indicates the parameter value to be set.
         */
        set(name: string, value: string): void;

        /**
        * Sort all key/value pairs contained in this object in place and return undefined.
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        */
        sort(): void;

        /**
         * Returns an iterator allowing to go through all keys contained in this object.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns an ES6 Iterator over the names of each name-value pair.
         */
        keys(): IterableIterator<string>;

        /**
         * Returns an iterator allowing to go through all values contained in this object.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns an ES6 Iterator over the values of each name-value pair.
         */
        values(): IterableIterator<string>;

        /**
         * Returns an iterator allowing to go through all key/value
         * pairs contained in this object.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns an ES6 iterator. Each item of the iterator is a JavaScript Array.
         * The first item of Array is name, and the second item of Array is value.
         */
        [Symbol.iterator](): IterableIterator<[string, string]>;

        /**
         * Returns a query string suitable for use in a URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns a search parameter serialized as a string, percent-encoded if necessary.
         */
        toString(): string;
    }

    class URL {
        /**
         * URL constructor, which is used to instantiate a URL object.
         * url: Absolute or relative input URL to resolve. Base is required if input is relative.
         * If input is an absolute value, base ignores the value.
         * base: Base URL to parse if input is not absolute.
         */
        constructor(url: string, base?: string | URL);

        /**
         * Returns the serialized URL as a string.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the serialized URL as a string.
         */
        toString(): string;

        /**
         * Returns the serialized URL as a string.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @return Returns the serialized URL as a string.
         */
        toJSON(): string;

        /**
         * Gets and sets the fragment portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        hash: string;

        /**
         * Gets and sets the host portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        host: string;

        /**
         * Gets and sets the host name portion of the URL，not include the port.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        hostname: string;

        /**
         * Gets and sets the serialized URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        href: string;

        /**
         * Gets the read-only serialization of the URL's origin.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly origin: string;

        /**
         * Gets and sets the password portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        password: string;

        /**
         * Gets and sets the path portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        pathname: string;

        /**
         * Gets and sets the port portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        port: string;

        /**
         * Gets and sets the protocol portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        protocol: string;

        /**
         * Gets and sets the serialized query portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        search: string;

        /**
         * Gets the URLSearchParams object that represents the URL query parameter.
         * This property is read-only, but URLSearchParams provides an object that can be used to change
         * the URL instance. To replace the entire query parameter for a URL, use url.searchsetter.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @note Be careful when modifying with .searchParams, because the URLSearchParams
         * object uses different rules to determine which characters to
         * percent-encode according to the WHATWG specification.
         */
        readonly searchParams: URLSearchParams;

        /**
         * Gets and sets the username portion of the URL.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        username: string;
    }
}
export default url;