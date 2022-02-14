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
 * The process is mainly used to obtain the relevant ID of the process, obtain and modify
 * the working directory of the process, exit and close the process.
 * @since 7
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet, tv, wearable, car
 * @import import url from '@ohos.process';
 */
declare namespace process {

    export interface ChildProcess {
        /**
        * return pid is the pid of the current process
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return the pid of the current process.
        */
        readonly pid: number;

        /**
        * return ppid is the pid of the current child process
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return the pid of the current child process.
        */
        readonly ppid: number;

        /**
        * return exitCode is the exit code of the current child process
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return the exit code of the current child process.
        */
        readonly exitCode: number;

        /**
        * return boolean is whether the current process signal is sent successfully
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return whether the current process signal is sent successfully.
        */
        readonly killed: boolean;

        /**
        * return 'number' is the targer process exit code
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return the targer process exit code.
        */
        wait(): Promise<number>;

        /**
        * return it as 'Uint8Array' of the stdout until EOF
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return subprocess standard outpute.
        */
        getOutput(): Promise<Uint8Array>;

        /**
        * return it as 'Uint8Array of the stderr until EOF
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @return return subprocess standard error output.
        */
        getErrorOutput(): Promise<Uint8Array>;

        /**
        * close the target process
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        */
        close(): void;

        /**
        * send a signal to process
        * @since 7
        * @sysCap SystemCapability.CCRuntime
        * @param signal number or string represents the signal sent.
        */
        kill(signal: number | string): void;
    }

    /**
    * returns the numeric valid group ID of the process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return the numeric valid group ID of the process.
    */
    readonly getEgid: number;

    /**
    * return the numeric valid user identity of the process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return the numeric valid user identity of the process.
    */
    readonly getEuid: number;

    /**
    * returns the numeric group id of the process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return the numeric group if of the process.
    */
    readonly getGid: number

    /**
    * returns the digital user id of the process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return the digital user id of the process.
    */
    readonly getUid: number;

    /**
    * return an array with supplementary group id
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return an array with supplementary group id.
    */
    readonly getGroups: number[];

    /**
    * return pid is The pid of the current process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return The pid of the current process.
    */
    readonly getPid: number;

    /**
    * return ppid is The pid of the current child process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return return The pid of the current child processs.
    */
    readonly getPpid: number;

    type EventListener = (evt: Object) => void;
    /**
    * Return a child process object and spawns a new ChildProcess to run the command
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @param command string of the shell commands executed by the child process.
    * @param options This is an object. The object contains three parameters. Timeout is the running time of the child
    * process, killSignal is the signal sent when the child process reaches timeout, and maxBuffer is the size of the
    * maximum buffer area for standard input and output.
    * @return Return a child process object.
    */
    function runCmd(command: string,
        options?: { timeout : number, killSignal : number | string, maxBuffer : number }): ChildProcess;

    /**
    * Abort current process
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    */
    function abort(): void;

    /**
    * Register for an event
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @param type Indicates the type of event registered.
    * @param listener Represents the registered event function
    */
    function on(type: string, listener: EventListener): void;

    /**
    * Remove registered event
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @param type Remove the type of registered event.
    * @return Return removed result.
    */
    function off(type: string): boolean;

    /**
    * Process exit
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @param code Process exit code.
    */
    function exit(code: number): void;

    /**
    * Return the current work directory;
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return Return the current work directory.
    */
    function cwd(): string;

    /**
    * Change current  directory
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @param dir The path you want to change.
    */
    function chdir(dir: string): void;

    /**
    * Returns the running time of the system
    * @since 7
    * @sysCap SystemCapability.CCRuntime
    * @return Return the running time of the system.
    */
    function uptime(): number;

    /**
     * Return whether the signal was sent successfully
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param signal Signal sent.
     * @param pid Send signal to target pid.
     * @return Return the result of the signal.
     */
    function kill(signal: number, pid: number): boolean;
}
export default process;
