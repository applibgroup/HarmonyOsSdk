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

export default class Socket {
  /**
   * Create socket
   * @param options
   */
  static create(options: {
    /**
     * Type of socket, fixed at tcp or udp
     */
    type: "tcp" | "udp";

    /**
     * Callback when success.
     */
    success?: (id: number) => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Clost socket through id
   * @param options
   */
  static close(options: {
    /**
     * Id of socket
     */
    id: number;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Binds a socket to a specified IP address and port for the TCP/UDP server to use.
   * @param options
   */
  static bind(options: {
    /**
     * Id of socket
     */
    id: number;

    /**
     * Binds a socket to a specified port
     */
    port: number;
    /**
     * Binds a socket to a specified IP address，defalut is 127.0.0.1
     */
    addr?: string;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Connects a socket to a specified IP address and port. Invoked only by TCP and is used by clients.
   * @param options
   */
  static connect(options: {
    /**
     * Id of socket
     */
    id: number;

    /**
     * Binds a socket to a specified port
     */
    port: number;
    /**
     * Binds a socket to a specified IP address，defalut is 127.0.0.1
     */
    addr?: string;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Indicates that the socket enters the passive listening state. This command is invoked only by the TCP server.
   * @param options
   */
  static listen(options: {
    /**
     * Id of socket
     */
    id: number;

    /**
     * Maximum number of client connections. The default value is 128.
     */
    backlog: number;

    /**
     * Callback when success
     */
    success?: () => void;

    /**
     * Callback when failure
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed
     */
    complete?: () => void;
  }): void;

  /**
   * When the socket is in the listening state, this function can be used to receive client requests.
   * This function is invoked only by the TCP server.
   * @param options Options.
   */
  static accept(options: {
    /**
     * socket id.
     */
    id: number;

    /**
     * Callback when a client is connected
     */
    accept: (clietn: {
      /**
       * Unique identifier of the connected client socket.
       */
      id: number;

      /**
       * IP address of the connected client.
       */
      addr: string;

      /**
       * Port number of the connected client.
       */
      port: number;
    }) => void;

    /**
     * Callback when success
     */
    success?: () => void;

    /**
     * Callback when failure
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed
     */
    complete?: () => void;
  }): void;

  /**
   * Writes data to a socket, for TCP calls only (server and client).
   * @param options Options.
   */
  static write(options: {
    /**
     * socket id.
     */
    id: number;

    /**
     * Data to be written
     */
    data: string | Uint8Array;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Continuous reading of data from sockets, only TCP calls (server and client).
   * @param options Options.
   */
  static read(options: {
    /**
     * socket id.
     */
    id: number;

    /**
     * Callback when data can be read on the socket connection.
     * The parameters in the callback function are the received data content.
     */
    data: (data: Uint8Array) => void;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Uses the socket to send packets to a specified address. Only UDP is supported.
   * @param options Options.
   */
  static send(options: {
    /**
     * Socket ID of the sender.
     */
    id: number;

    /**
     * The value is sent to the specified IP address. The default value is 127.0.0.1.
     */
    addr?: string;

    /**
     * Send to the specified port.
     */
    port: number;

    /**
     * Content to be sent. The value can be a string in UTF-8 format or uint8Array.
     */
    data: string | Uint8Array;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Start to continuously receive packets, including information about the sender. Only UDP is supported.
   * @param options Options.
   */
  static recv(options: {
    /**
     * socket id.
     */
    id: number;

    /**
     * Callback when data can be read on the socket connection.
     */
    data: (param: {
      /**
       * Content of the received packet.
       */
      data: Uint8Array;

      /**
       * Size of the packet content.
       */
      size: number;

      /**
       * IP address of the sender.
       */
      ip: string;

      /**
       * Sender port
       */
      port: number;
    }) => void;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;

  /**
   * Configure socket attributes. The socket attributes can be invoked multiple times.
   * The last invoking prevails. Setsockopt Function
   * @param options Options.
   */
  static setOpt(options: {
    /**
     * socket id.
     */
    id: number;

    /**
     * Timeout interval for the socket to read/receive packets, in milliseconds.
     */
    timeout: number;

    /**
     * Whether the socket supports broadcast.
     */
    supportBroad: boolean;

    /**
     * When a socket joins a specified multicast group and leaves the multicast group,
     * an empty string is explicitly input.
     */
    groupAddr: string;

    /**
     * Callback when success.
     */
    success?: () => void;

    /**
     * Callback when failure.
     */
    fail?: (data: string, code: number) => void;

    /**
     * Callback when completed.
     */
    complete?: () => void;
  }): void;
}
