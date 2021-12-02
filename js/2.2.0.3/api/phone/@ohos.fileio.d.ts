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
import { AsyncCallback } from './basic'

export default fileIO;

/**
 * @devices phone, tablet, tv, wearable
 */
declare namespace fileIO {
    export { stat };
    export { statSync };
    export { opendir };
    export { opendirSync };
    export { access };
    export { accessSync };
    export { closeSync };
    export { copyFile };
    export { copyFileSync };
    export { mkdir };
    export { mkdirSync };
    export { openSync };
    export { read };
    export { readSync };
    export { rmdirSync };
    export { unlink };
    export { unlinkSync };
    export { write };
    export { writeSync };
    export { hash };
    export { Dir };
    export { Dirent };
    export { Stat };
    export { ReadOut };
}

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface Stat {
    /**
     * @type {number}
     * @readonly
     */
    readonly dev: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly ino: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly mode: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly nlink: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly uid: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly gid: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly rdev: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly size: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly blocks: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly atime: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly mtime: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly ctime: number;
    /**
     * isBlockDevice.
     * @returns {boolean} is or not
     */
    isBlockDevice(): boolean;
    /**
     * isCharacterDevice.
     * @returns {boolean} is or not
     */
    isCharacterDevice(): boolean;
    /**
     * isDirectory.
     * @returns {boolean} is or not
     */
    isDirectory(): boolean;
    /**
     * isFIFO.
     * @returns {boolean} is or not
     */
    isFIFO(): boolean;
    /**
     * isFile.
     * @returns {boolean} is or not
     */
    isFile(): boolean;
    /**
     * isSocket.
     * @returns {boolean} is or not
     */
    isSocket(): boolean;
    /**
     * isSymbolicLink.
     * @returns {boolean} is or not
     */
    isSymbolicLink(): boolean;
}

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface Dir {
    /**
     * read.
     *
     * @param {fileDirCallBack} [callback] - callback.
     * @returns {void | Promise<Dirent>} no callback return Promise otherwise return void
     * @throws {TypedError} Parameter check failed if read to end, Error.msg = "NoMore"
     */
    read(): Promise<Dirent>;
    read(callback: AsyncCallback<Dirent>): void;
    /**
     * readSync.
     *
     * @returns {Dirent} Dirent Object
     * @throws {TypedError | Error} read fail if read to end, Error.msg = "NoMore"
     */
    readSync(): Dirent;
    /**
     * closeSync.
     *
     * @returns {void} close success
     * @throws {TypedError | Error} close fail
     */
    closeSync(): void;
}

 /**
 * hash.
 * @static
 * @param {string} path - path.
 * @param {string} algorithm - algorithm md5 sha1 sha256.
 * @param {fileStringCallBack} [callback] - callback.
 * @returns {void | Promise<string>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function hash(path: string, algorithm: string): Promise<string>;
declare function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void;
/**
 * stat.
 * @static
 * @param {string} path - path.
 * @param {fileStatCallBack} [callback] - callback.
 * @returns {void | Promise<Stat>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function stat(path: string): Promise<Stat>;
declare function stat(path: string, callback: AsyncCallback<Stat>): void;

/**
 * statSync.
 * @static
 * @param {string} path - path.
 * @returns {Stat} stat success
 * @throws {TypedError | Error} stat fail
 */
declare function statSync(path: string): Stat;
/**
 * opendir.
 *
 * @param {string} path - directory name.
 * @param {fileDirCallBack} [callback] - callback.
 * @returns {void | Promise<Dir>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function opendir(path: string): Promise<Dir>;
declare function opendir(path: string, callback: AsyncCallback<Dir>): void;
/**
 * opendirSync.
 *
 * @param {string} path - directory name.
 * @returns {Dir} opendir Dir Object
 * @throws {TypedError | Error} opendir fail
 */
declare function opendirSync(path: string): Dir;
/**
 * access.
 *
 * @function access
 * @param {string} path - path.
 * @param {number} [mode = 0] - mode.
 * @param {fileErrCallBack} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function access(path: string, mode?: number): Promise<void>;
declare function access(path: string, callback: AsyncCallback<void>): void;
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * accessSync.
 *
 * @function accessSync
 * @param {string} path - path.
 * @param {number} [mode = 0] - mode.
 * @returns {void} access success
 * @throws {TypedError | Error} access fail
 */
declare function accessSync(path: string, mode?: number): void;
/**
 * closeSync.
 *
 * @function closeSync
 * @param {number} fd - fd.
 * @returns {void} close success
 * @throws {TypedError | Error} close fail
 */
declare function closeSync(fd: number): void;
/**
 * copyFile.
 *
 * @function copyFile
 * @param {string | number} src - src.
 * @param {string | number} dest - dest.
 * @param {number} [mode = 0] - mode.
 * @param {fileErrCallBack} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;
declare function copyFile(src: string | number, dest: string | number, mode: number, callback: AsyncCallback<void>): void;
/**
 * copyFileSync.
 *
 * @function copyFileSync
 * @param {string | number} src - src.
 * @param {string | number} dest - dest.
 * @param {number} [mode = 0] - mode.
 * @returns {void} copyFile success
 * @throws {TypedError | Error} copyFile fail
 */
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void;

/**
 * mkdir.
 *
 * @function mkdir
 * @param {string} path - path.
 * @param {number} [mode = 0o775] - path.
 * @param {fileStatCallBack} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function mkdir(path: string, mode?: number): Promise<void>;
declare function mkdir(path: string, callback: AsyncCallback<void>): void;
declare function mkdir(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * mkdirSync.
 *
 * @function mkdirSync
 * @param {string} path - path.
 * @param {number} [mode = 0o775] - path.
 * @returns {void} mkdir success
 * @throws {TypedError | Error} mkdir fail
 */
declare function mkdirSync(path: string, mode?: number): void;

/**
 * openSync.
 *
 * @function openSync
 * @param {string} path - path.
 * @param {number} [flags = 0] - flags.
 * @param {number} [mode = 0o666] - mode.
 * @returns {number} open fd
 * @throws {TypedError | Error} open fail
 */
declare function openSync(path: string, flags?: number, mode?: number): number;

/**
 * read.
 *
 * @function read
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset.
 * @param {number} [options.length = -1] - length.
 * @param {number} [options.position = -1] - position.
 * @param {fileReadCallBack} [callback] - callback.
 * @returns {void | Promise<ReadOut>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function read(fd: number, buffer: ArrayBuffer, options?: {
    offset?: number;
    length?: number;
    position?: number;
}): Promise<ReadOut>
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;
declare function read(fd: number, buffer: ArrayBuffer, options: {
    offset?: number;
    length?: number;
    position?: number;
}, callback: AsyncCallback<ReadOut>): void;
/**
 * readSync.
 *
 * @function readSync
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset.
 * @param {number} [options.length = -1] - length.
 * @param {number} [options.position = -1] - position.
 * @returns {number} number of bytesRead
 * @throws {TypedError | Error} read fail
 */
declare function readSync(fd: number, buffer: ArrayBuffer, options?: {
    offset?: number;
    length?: number;
    position?: number;
}): number;

/**
 * rmdirSync.
 *
 * @function rmdirSync
 * @param {string} path - path.
 * @returns {void} rmdir success
 * @throws {TypedError | Error} rmdir fail
 */
declare function rmdirSync(path: string): void;
/**
 * unlink.
 *
 * @function unlink
 * @param {string} path - path.
 * @param {fileErrCallBack} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function unlink(path: string): Promise<void>;
declare function unlink(path: string, callback: AsyncCallback<void>): void;
/**
 * unlinkSync.
 *
 * @function unlinkSync
 * @param {string} path - path.
 * @returns {void} unlink success
 * @throws {TypedError | Error} unlink fail
 */
declare function unlinkSync(path: string): void;
/**
 * write.
 *
 * @function write
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer | string} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
 * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
 * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
 * @param {string} [options.encoding = 'utf-8'] - encoding.
 * @param {fileWriteCallBack} [callback] - callback.
 * @returns {void | Promise<number>} no callback return Promise otherwise return void
 * @throws {TypedError | RangeError} Parameter check failed
 */
declare function write(fd: number, buffer: ArrayBuffer | string, options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}): Promise<number>;
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;
declare function write(fd: number, buffer: ArrayBuffer | string, options: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}, callback: AsyncCallback<number>): void;
/**
 * writeSync.
 *
 * @function writeSync
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer | string} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
 * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
 * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
 * @param {string} [options.encoding = 'utf-8'] -  encoding.
 * @returns {number} on success number of bytesRead
 * @throws {TypedError | RangeError | Error} write fail
 */
declare function writeSync(fd: number, buffer: ArrayBuffer | string, options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}): number;

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface ReadOut {
    /**
     * @type {number}
     * @readonly
     */
    bytesRead: number;
    /**
     * @type {number}
     * @readonly
     */
    offset: number;
    /**
     * @type {ArrayBuffer}
     * @readonly
     */
    buffer: ArrayBuffer;
}

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface Dirent {
    /**
     * @type {string}
     * @readonly
     */
    readonly name: string;
    /**
     * isBlockDevice.
     * @returns {boolean} is or not
     */
    isBlockDevice(): boolean;
    /**
     * isCharacterDevice.
     * @returns {boolean} is or not
     */
    isCharacterDevice(): boolean;
    /**
     * isDirectory.
     * @returns {boolean} is or not
     */
    isDirectory(): boolean;
    /**
     * isFIFO.
     * @returns {boolean} is or not
     */
    isFIFO(): boolean;
    /**
     * isFile.
     * @returns {boolean} is or not
     */
    isFile(): boolean;
    /**
     * isSocket.
     * @returns {boolean} is or not
     */
    isSocket(): boolean;
    /**
     * isSymbolicLink.
     * @returns {boolean} is or not
     */
    isSymbolicLink(): boolean;
}
