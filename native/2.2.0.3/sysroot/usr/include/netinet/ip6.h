/*	$NetBSD: ip6.h,v 1.23 2007/12/25 18:33:46 perry Exp $	*/
/*	$KAME: ip6.h,v 1.45 2003/06/05 04:46:38 keiichi Exp $	*/

/*
 * Copyright (C) 1995, 1996, 1997, and 1998 WIDE Project.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the project nor the names of its contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE PROJECT AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE PROJECT OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

/*
 * Copyright (c) 1982, 1986, 1993
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
 * 3. Neither the name of the University nor the names of its contributors
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
 *	@(#)ip.h	8.1 (Berkeley) 6/10/93
 */

#ifndef _NETINET_IP6_H_
#define _NETINET_IP6_H_

#include <sys/cdefs.h>
#include <sys/types.h>
#include <endian.h>

#include <linux/in6.h>


struct ip6_hdr {
	union {
		struct ip6_hdrctl {
			u_int32_t ip6_un1_flow;
			u_int16_t ip6_un1_plen;
			u_int8_t  ip6_un1_nxt;
			u_int8_t  ip6_un1_hlim;
		} ip6_un1;
		u_int8_t ip6_un2_vfc;
	} ip6_ctlun;
	struct in6_addr ip6_src;
	struct in6_addr ip6_dst;
} __packed;

#define ip6_vfc		ip6_ctlun.ip6_un2_vfc
#define ip6_flow	ip6_ctlun.ip6_un1.ip6_un1_flow
#define ip6_plen	ip6_ctlun.ip6_un1.ip6_un1_plen
#define ip6_nxt		ip6_ctlun.ip6_un1.ip6_un1_nxt
#define ip6_hlim	ip6_ctlun.ip6_un1.ip6_un1_hlim
#define ip6_hops	ip6_ctlun.ip6_un1.ip6_un1_hlim

#define IPV6_VERSION		0x60
#define IPV6_VERSION_MASK	0xf0

#define IPV6_FLOWINFO_MASK	0xffffff0f
#define IPV6_FLOWLABEL_MASK	0xffff0f00

#if 1
#define IP6TOS_CE		0x01
#define IP6TOS_ECT		0x02
#endif


struct	ip6_ext {
	u_int8_t ip6e_nxt;
	u_int8_t ip6e_len;
} __packed;

struct ip6_hbh {
	u_int8_t ip6h_nxt;
	u_int8_t ip6h_len;
} __packed;

struct ip6_dest {
	u_int8_t ip6d_nxt;
	u_int8_t ip6d_len;
} __packed;

#define IP6OPT_PAD1		0x00
#define IP6OPT_PADN		0x01
#define IP6OPT_JUMBO		0xC2
#define IP6OPT_NSAP_ADDR	0xC3
#define IP6OPT_TUNNEL_LIMIT	0x04
#define IP6OPT_RTALERT		0x05
#define IP6OPT_ROUTER_ALERT	0x05

#define IP6OPT_RTALERT_LEN	4
#define IP6OPT_RTALERT_MLD	0
#define IP6OPT_RTALERT_RSVP	1
#define IP6OPT_RTALERT_ACTNET	2
#define IP6OPT_MINLEN		2

#define IP6OPT_TYPE(o)		((o) & 0xC0)
#define IP6OPT_TYPE_SKIP	0x00
#define IP6OPT_TYPE_DISCARD	0x40
#define IP6OPT_TYPE_FORCEICMP	0x80
#define IP6OPT_TYPE_ICMP	0xC0

#define IP6OPT_MUTABLE		0x20

struct ip6_opt {
	u_int8_t ip6o_type;
	u_int8_t ip6o_len;
} __packed;

struct ip6_opt_jumbo {
	u_int8_t ip6oj_type;
	u_int8_t ip6oj_len;
	u_int8_t ip6oj_jumbo_len[4];
} __packed;
#define IP6OPT_JUMBO_LEN 6

struct ip6_opt_nsap {
	u_int8_t ip6on_type;
	u_int8_t ip6on_len;
	u_int8_t ip6on_src_nsap_len;
	u_int8_t ip6on_dst_nsap_len;
} __packed;

struct ip6_opt_tunnel {
	u_int8_t ip6ot_type;
	u_int8_t ip6ot_len;
	u_int8_t ip6ot_encap_limit;
} __packed;

struct ip6_opt_router {
	u_int8_t ip6or_type;
	u_int8_t ip6or_len;
	u_int8_t ip6or_value[2];
} __packed;
#define IP6_ALERT_MLD	0x0000
#define IP6_ALERT_RSVP	0x0100
#define IP6_ALERT_AN	0x0200

struct ip6_rthdr {
	u_int8_t  ip6r_nxt;
	u_int8_t  ip6r_len;
	u_int8_t  ip6r_type;
	u_int8_t  ip6r_segleft;
} __packed;

struct ip6_rthdr0 {
	u_int8_t  ip6r0_nxt;
	u_int8_t  ip6r0_len;
	u_int8_t  ip6r0_type;
	u_int8_t  ip6r0_segleft;
	u_int32_t ip6r0_reserved;
} __packed;

struct ip6_frag {
	u_int8_t  ip6f_nxt;
	u_int8_t  ip6f_reserved;
	u_int16_t ip6f_offlg;
	u_int32_t ip6f_ident;
} __packed;

#define IP6F_OFF_MASK		0xf8ff
#define IP6F_RESERVED_MASK	0x0600
#define IP6F_MORE_FRAG		0x0100

#define IPV6_MAXHLIM	255
#define IPV6_DEFHLIM	64
#define IPV6_FRAGTTL	120
#define IPV6_HLIMDEC	1

#define IPV6_MMTU	1280
#define IPV6_MAXPACKET	65535

#endif
