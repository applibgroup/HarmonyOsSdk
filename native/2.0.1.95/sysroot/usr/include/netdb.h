/*-
 * Copyright (c) 1980, 1983, 1988, 1993
 *	The Regents of the University of California.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. All advertising materials mentioning features or use of this software
 *    must display the following acknowledgement:
 *	This product includes software developed by the University of
 *	California, Berkeley and its contributors.
 * 4. Neither the name of the University nor the names of its contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * -
 * Portions Copyright (c) 1993 by Digital Equipment Corporation.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies, and that
 * the name of Digital Equipment Corporation not be used in advertising or
 * publicity pertaining to distribution of the document or software without
 * specific, written prior permission.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND DIGITAL EQUIPMENT CORP. DISCLAIMS ALL
 * WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS.   IN NO EVENT SHALL DIGITAL EQUIPMENT
 * CORPORATION BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
 * DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
 * PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
 * ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS
 * SOFTWARE.
 * -
 * --Copyright--
 */

/*
 *      @(#)netdb.h	8.1 (Berkeley) 6/2/93
 *      From: Id: netdb.h,v 8.9 1996/11/19 08:39:29 vixie Exp $
 * $FreeBSD: /repoman/r/ncvs/src/include/netdb.h,v 1.41 2006/04/15 16:20:26 ume Exp $
 */

#ifndef _NETDB_H_
#define _NETDB_H_

#include <sys/cdefs.h>
#include <sys/types.h>
#include <sys/socket.h>

#ifndef _PATH_HEQUIV
# define	_PATH_HEQUIV	"/system/etc/hosts.equiv"
#endif
#define	_PATH_HOSTS	"/system/etc/hosts"
#define	_PATH_NETWORKS	"/system/etc/networks"
#define	_PATH_PROTOCOLS	"/system/etc/protocols"
#define	_PATH_SERVICES	"/system/etc/services"

struct hostent {
	char	*h_name;
	char	**h_aliases;
	int	h_addrtype;
	int	h_length;
	char	**h_addr_list;
#define	h_addr	h_addr_list[0]
};

struct netent {
	char		*n_name;
	char		**n_aliases;
	int		n_addrtype;
	uint32_t	n_net;
};

struct servent {
	char	*s_name;
	char	**s_aliases;
	int	s_port;
	char	*s_proto;
};

struct protoent {
	char	*p_name;
	char	**p_aliases;
	int	p_proto;
};

struct addrinfo {
	int	ai_flags;
	int	ai_family;
	int	ai_socktype;
	int	ai_protocol;
	socklen_t ai_addrlen;
	char	*ai_canonname;
	struct	sockaddr *ai_addr;
	struct	addrinfo *ai_next;
};


#define	NETDB_INTERNAL	-1
#define	NETDB_SUCCESS	0
#define	HOST_NOT_FOUND	1
#define	TRY_AGAIN	2
#define	NO_RECOVERY	3
#define	NO_DATA		4
#define	NO_ADDRESS	NO_DATA

#define	EAI_ADDRFAMILY	 1
#define	EAI_AGAIN	 2
#define	EAI_BADFLAGS	 3
#define	EAI_FAIL	 4
#define	EAI_FAMILY	 5
#define	EAI_MEMORY	 6
#define	EAI_NODATA	 7
#define	EAI_NONAME	 8
#define	EAI_SERVICE	 9
#define	EAI_SOCKTYPE	10
#define	EAI_SYSTEM	11
#define	EAI_BADHINTS	12
#define	EAI_PROTOCOL	13
#define	EAI_OVERFLOW	14
#define	EAI_MAX		15

#define	AI_PASSIVE	0x00000001
#define	AI_CANONNAME	0x00000002
#define	AI_NUMERICHOST	0x00000004
#define	AI_NUMERICSERV	0x00000008
#define AI_MASK \
    (AI_PASSIVE | AI_CANONNAME | AI_NUMERICHOST | AI_NUMERICSERV | \
    AI_ADDRCONFIG)

#define	AI_ALL		0x00000100
#define	AI_V4MAPPED_CFG	0x00000200
#define	AI_ADDRCONFIG	0x00000400
#define	AI_V4MAPPED	0x00000800
#define	AI_DEFAULT	(AI_V4MAPPED_CFG | AI_ADDRCONFIG)

#define	NI_MAXHOST	1025
#define	NI_MAXSERV	32

#define	NI_NOFQDN	0x00000001
#define	NI_NUMERICHOST	0x00000002
#define	NI_NAMEREQD	0x00000004
#define	NI_NUMERICSERV	0x00000008
#define	NI_DGRAM	0x00000010
#if 0
#define NI_WITHSCOPEID	0x00000020
#endif

#define	SCOPE_DELIMITER	'%'

#define IPPORT_RESERVED 1024

__BEGIN_DECLS

int getaddrinfo(const char* __node, const char* __service, const struct addrinfo* __hints, struct addrinfo** __result);
void freeaddrinfo(struct addrinfo* __ptr);

int getnameinfo(const struct sockaddr* __sa, socklen_t __sa_length, char* __host, size_t __host_length, char* __service, size_t __service_length, int __flags);
const char* gai_strerror(int __error);

#define h_errno (*__get_h_errno())
int* __get_h_errno(void);
void herror(const char* __s);
const char* hstrerror(int __error);
struct hostent* gethostbyaddr(const void* __addr, socklen_t __length, int __type);
int gethostbyaddr_r(const void* __addr, socklen_t __length, int __type, struct hostent* __ret, char* __buf, size_t __buf_size, struct hostent** __result, int* __h_errno_ptr);
struct hostent* gethostbyname(const char* __name);
int gethostbyname_r(const char* __name, struct hostent* __ret, char* __buf, size_t __buf_size, struct hostent** __result, int* __h_errno_ptr);
struct hostent* gethostbyname2(const char* __name, int __af);
int gethostbyname2_r(const char* __name, int __af, struct hostent* __ret, char* __buf, size_t __buf_size, struct hostent** __result, int* __h_errno_ptr);
void endhostent(void);
struct hostent* gethostent(void);
void sethostent(int __stay_open);

void endnetent(void);
struct netent* getnetbyaddr(uint32_t __net, int __type);
struct netent* getnetbyname(const char* __name);
struct netent* getnetent(void);
void setnetent(int __stay_open);

void endprotoent(void);
struct protoent* getprotobyname(const char* __name);
struct protoent* getprotobynumber(int __proto);
struct protoent* getprotoent(void);
void setprotoent(int __stay_open);

void endservent(void);
struct servent* getservbyname(const char* __name, const char* __proto);
struct servent* getservbyport(int __port_in_network_order, const char* __proto);
struct servent* getservent(void);
void setservent(int __stay_open);

__END_DECLS

#endif
