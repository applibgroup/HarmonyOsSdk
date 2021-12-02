/*	$NetBSD: nameser.h,v 1.25 2009/04/12 17:07:34 christos Exp $	*/

/*
 * Portions Copyright (C) 2004, 2005, 2008, 2009  Internet Systems Consortium, Inc. ("ISC")
 * Portions Copyright (C) 1996-2003  Internet Software Consortium.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS.  IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

/*
 * Copyright (c) 1983, 1989, 1993
 *    The Regents of the University of California.  All rights reserved.
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
 */

/*
 *	Id: nameser.h,v 1.16 2009/03/03 01:52:48 each Exp
 */

#ifndef _ARPA_NAMESER_H_
#define _ARPA_NAMESER_H_

#define BIND_4_COMPAT

#include <sys/types.h>
#include <sys/cdefs.h>


#define __NAMESER	20090302

#define NS_PACKETSZ	512
#define NS_MAXDNAME	1025
#define NS_MAXMSG	65535
#define NS_MAXCDNAME	255
#define NS_MAXLABEL	63
#define NS_MAXLABELS	128
#define NS_MAXNNAME	256
#define	NS_MAXPADDR	(sizeof "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff")
#define NS_HFIXEDSZ	12
#define NS_QFIXEDSZ	4
#define NS_RRFIXEDSZ	10
#define NS_INT32SZ	4
#define NS_INT16SZ	2
#define NS_INT8SZ	1
#define NS_INADDRSZ	4
#define NS_IN6ADDRSZ	16
#define NS_CMPRSFLGS	0xc0
#define NS_DEFAULTPORT	53

typedef enum __ns_sect {
	ns_s_qd = 0,
	ns_s_zn = 0,
	ns_s_an = 1,
	ns_s_pr = 1,
	ns_s_ns = 2,
	ns_s_ud = 2,
	ns_s_ar = 3,
	ns_s_max = 4
} ns_sect;

typedef u_char ns_nname[NS_MAXNNAME];
typedef const u_char *ns_nname_ct;
typedef u_char *ns_nname_t;

struct ns_namemap { ns_nname_ct base; int len; };
typedef struct ns_namemap *ns_namemap_t;
typedef const struct ns_namemap *ns_namemap_ct;

typedef struct __ns_msg {
	const u_char	*_msg, *_eom;
	uint16_t	_id, _flags, _counts[ns_s_max];
	const u_char	*_sections[ns_s_max];
	ns_sect		_sect;
	int		_rrnum;
	const u_char	*_msg_ptr;
} ns_msg;
struct ns_newmsg {
	ns_msg		msg;
	const u_char	*dnptrs[25];
	const u_char	**lastdnptr;
};
typedef struct ns_newmsg ns_newmsg;


#define ns_msg_id(handle) ((handle)._id + 0)
#define ns_msg_base(handle) ((handle)._msg + 0)
#define ns_msg_end(handle) ((handle)._eom + 0)
#define ns_msg_size(handle) ((size_t)((handle)._eom - (handle)._msg))
#define ns_msg_count(handle, section) ((handle)._counts[section] + 0)

typedef	struct __ns_rr {
	char		name[NS_MAXDNAME];
	uint16_t	type;
	uint16_t	rr_class;
	uint32_t	ttl;
	uint16_t	rdlength;
	const u_char *	rdata;
} ns_rr;

typedef	struct __ns_rr2 {
	ns_nname	nname;
	size_t		nnamel;
	int		type;
	int		rr_class;
	u_int		ttl;
	int		rdlength;
	const u_char *	rdata;
} ns_rr2;
#define ns_rr_name(rr)	(((rr).name[0] != '\0') ? (rr).name : ".")
#define ns_rr_nname(rr)	((const ns_nname_t)(rr).nname)
#define ns_rr_nnamel(rr) ((rr).nnamel + 0)
#define ns_rr_type(rr)	((ns_type)((rr).type + 0))
#define ns_rr_class(rr)	((ns_class)((rr).rr_class + 0))
#define ns_rr_ttl(rr)	((u_long)(rr).ttl + 0)
#define ns_rr_rdlen(rr)	((size_t)(rr).rdlength + 0)
#define ns_rr_rdata(rr)	((rr).rdata + 0)

typedef enum __ns_flag {
	ns_f_qr,
	ns_f_opcode,
	ns_f_aa,
	ns_f_tc,
	ns_f_rd,
	ns_f_ra,
	ns_f_z,
	ns_f_ad,
	ns_f_cd,
	ns_f_rcode,
	ns_f_max
} ns_flag;

typedef enum __ns_opcode {
	ns_o_query = 0,
	ns_o_iquery = 1,
	ns_o_status = 2,
	ns_o_notify = 4,
	ns_o_update = 5,
	ns_o_max = 6
} ns_opcode;

typedef	enum __ns_rcode {
	ns_r_noerror = 0,
	ns_r_formerr = 1,
	ns_r_servfail = 2,
	ns_r_nxdomain = 3,
	ns_r_notimpl = 4,
	ns_r_refused = 5,
	ns_r_yxdomain = 6,
	ns_r_yxrrset = 7,
	ns_r_nxrrset = 8,
	ns_r_notauth = 9,
	ns_r_notzone = 10,
	ns_r_max = 11,
	ns_r_badvers = 16,
	ns_r_badsig = 16,
	ns_r_badkey = 17,
	ns_r_badtime = 18
} ns_rcode;

typedef enum __ns_update_operation {
	ns_uop_delete = 0,
	ns_uop_add = 1,
	ns_uop_max = 2
} ns_update_operation;

struct ns_tsig_key {
        char name[NS_MAXDNAME], alg[NS_MAXDNAME];
        unsigned char *data;
        int len;
};
typedef struct ns_tsig_key ns_tsig_key;

struct ns_tcp_tsig_state {
	int counter;
	struct dst_key *key;
	void *ctx;
	unsigned char sig[NS_PACKETSZ];
	int siglen;
};
typedef struct ns_tcp_tsig_state ns_tcp_tsig_state;

#define NS_TSIG_FUDGE 300
#define NS_TSIG_TCP_COUNT 100
#define NS_TSIG_ALG_HMAC_MD5 "HMAC-MD5.SIG-ALG.REG.INT"

#define NS_TSIG_ERROR_NO_TSIG -10
#define NS_TSIG_ERROR_NO_SPACE -11
#define NS_TSIG_ERROR_FORMERR -12

typedef enum __ns_type {
	ns_t_invalid = 0,
	ns_t_a = 1,
	ns_t_ns = 2,
	ns_t_md = 3,
	ns_t_mf = 4,
	ns_t_cname = 5,
	ns_t_soa = 6,
	ns_t_mb = 7,
	ns_t_mg = 8,
	ns_t_mr = 9,
	ns_t_null = 10,
	ns_t_wks = 11,
	ns_t_ptr = 12,
	ns_t_hinfo = 13,
	ns_t_minfo = 14,
	ns_t_mx = 15,
	ns_t_txt = 16,
	ns_t_rp = 17,
	ns_t_afsdb = 18,
	ns_t_x25 = 19,
	ns_t_isdn = 20,
	ns_t_rt = 21,
	ns_t_nsap = 22,
	ns_t_nsap_ptr = 23,
	ns_t_sig = 24,
	ns_t_key = 25,
	ns_t_px = 26,
	ns_t_gpos = 27,
	ns_t_aaaa = 28,
	ns_t_loc = 29,
	ns_t_nxt = 30,
	ns_t_eid = 31,
	ns_t_nimloc = 32,
	ns_t_srv = 33,
	ns_t_atma = 34,
	ns_t_naptr = 35,
	ns_t_kx = 36,
	ns_t_cert = 37,
	ns_t_a6 = 38,
	ns_t_dname = 39,
	ns_t_sink = 40,
	ns_t_opt = 41,
	ns_t_apl = 42,
	ns_t_ds = 43,
	ns_t_sshfp = 44,
	ns_t_ipseckey = 45,
	ns_t_rrsig = 46,
	ns_t_nsec = 47,
	ns_t_dnskey = 48,
	ns_t_dhcid = 49,
	ns_t_nsec3 = 50,
	ns_t_nsec3param = 51,
	ns_t_hip = 55,
	ns_t_spf = 99,
	ns_t_tkey = 249,
	ns_t_tsig = 250,
	ns_t_ixfr = 251,
	ns_t_axfr = 252,
	ns_t_mailb = 253,
	ns_t_maila = 254,
	ns_t_any = 255,
	ns_t_zxfr = 256,
	ns_t_dlv = 32769,
	ns_t_max = 65536
} ns_type;

#define	ns_t_qt_p(t) (ns_t_xfr_p(t) || (t) == ns_t_any || \
		      (t) == ns_t_mailb || (t) == ns_t_maila)
#define	ns_t_mrr_p(t) ((t) == ns_t_tsig || (t) == ns_t_opt)
#define ns_t_rr_p(t) (!ns_t_qt_p(t) && !ns_t_mrr_p(t))
#define ns_t_udp_p(t) ((t) != ns_t_axfr && (t) != ns_t_zxfr)
#define ns_t_xfr_p(t) ((t) == ns_t_axfr || (t) == ns_t_ixfr || \
		       (t) == ns_t_zxfr)

typedef enum __ns_class {
	ns_c_invalid = 0,
	ns_c_in = 1,
	ns_c_2 = 2,
	ns_c_chaos = 3,
	ns_c_hs = 4,
	ns_c_none = 254,
	ns_c_any = 255,
	ns_c_max = 65536
} ns_class;


typedef enum __ns_key_types {
	ns_kt_rsa = 1,
	ns_kt_dh  = 2,
	ns_kt_dsa = 3,
	ns_kt_private = 254
} ns_key_types;

typedef enum __ns_cert_types {
	cert_t_pkix = 1,
	cert_t_spki = 2,
	cert_t_pgp  = 3,
	cert_t_url  = 253,
	cert_t_oid  = 254
} ns_cert_types;

#define	NS_KEY_TYPEMASK		0xC000
#define	NS_KEY_TYPE_AUTH_CONF	0x0000
#define	NS_KEY_TYPE_CONF_ONLY	0x8000
#define	NS_KEY_TYPE_AUTH_ONLY	0x4000
#define	NS_KEY_TYPE_NO_KEY	0xC000
#define	NS_KEY_NO_AUTH		0x8000
#define	NS_KEY_NO_CONF		0x4000
#define	NS_KEY_RESERVED2	0x2000
#define	NS_KEY_EXTENDED_FLAGS	0x1000
#define	NS_KEY_RESERVED4	0x0800
#define	NS_KEY_RESERVED5	0x0400
#define	NS_KEY_NAME_TYPE	0x0300
#define	NS_KEY_NAME_USER	0x0000
#define	NS_KEY_NAME_ENTITY	0x0200
#define	NS_KEY_NAME_ZONE	0x0100
#define	NS_KEY_NAME_RESERVED	0x0300
#define	NS_KEY_RESERVED8	0x0080
#define	NS_KEY_RESERVED9	0x0040
#define	NS_KEY_RESERVED10	0x0020
#define	NS_KEY_RESERVED11	0x0010
#define	NS_KEY_SIGNATORYMASK	0x000F
#define	NS_KEY_RESERVED_BITMASK ( NS_KEY_RESERVED2 | \
				  NS_KEY_RESERVED4 | \
				  NS_KEY_RESERVED5 | \
				  NS_KEY_RESERVED8 | \
				  NS_KEY_RESERVED9 | \
				  NS_KEY_RESERVED10 | \
				  NS_KEY_RESERVED11 )
#define NS_KEY_RESERVED_BITMASK2 0xFFFF

#define	NS_ALG_MD5RSA		1
#define	NS_ALG_DH               2
#define	NS_ALG_DSA              3
#define	NS_ALG_DSS              NS_ALG_DSA
#define	NS_ALG_EXPIRE_ONLY	253
#define	NS_ALG_PRIVATE_OID	254

#define NS_KEY_PROT_TLS         1
#define NS_KEY_PROT_EMAIL       2
#define NS_KEY_PROT_DNSSEC      3
#define NS_KEY_PROT_IPSEC       4
#define NS_KEY_PROT_ANY		255

#define	NS_MD5RSA_MIN_BITS	 512
#define	NS_MD5RSA_MAX_BITS	4096
#define	NS_MD5RSA_MAX_BYTES	((NS_MD5RSA_MAX_BITS+7/8)*2+3)
#define	NS_MD5RSA_MAX_BASE64	(((NS_MD5RSA_MAX_BYTES+2)/3)*4)
#define NS_MD5RSA_MIN_SIZE	((NS_MD5RSA_MIN_BITS+7)/8)
#define NS_MD5RSA_MAX_SIZE	((NS_MD5RSA_MAX_BITS+7)/8)

#define NS_DSA_SIG_SIZE         41
#define NS_DSA_MIN_SIZE         213
#define NS_DSA_MAX_BYTES        405

#define	NS_SIG_TYPE	0
#define	NS_SIG_ALG	2
#define	NS_SIG_LABELS	3
#define	NS_SIG_OTTL	4
#define	NS_SIG_EXPIR	8
#define	NS_SIG_SIGNED	12
#define	NS_SIG_FOOT	16
#define	NS_SIG_SIGNER	18

#define	NS_NXT_BITS 8
#define	NS_NXT_BIT_SET(  n,p) (p[(n)/NS_NXT_BITS] |=  (0x80>>((n)%NS_NXT_BITS)))
#define	NS_NXT_BIT_CLEAR(n,p) (p[(n)/NS_NXT_BITS] &= ~(0x80>>((n)%NS_NXT_BITS)))
#define	NS_NXT_BIT_ISSET(n,p) (p[(n)/NS_NXT_BITS] &   (0x80>>((n)%NS_NXT_BITS)))
#define NS_NXT_MAX 127

#define NS_OPT_DNSSEC_OK	0x8000U
#define NS_OPT_NSID             3
#define NS_OPT_PADDING          12

#define NS_GET16(s, cp) do { \
	const u_char *t_cp = (const u_char *)(cp); \
	(s) = ((uint16_t)t_cp[0] << 8) \
	    | ((uint16_t)t_cp[1]) \
	    ; \
	(cp) += NS_INT16SZ; \
} while (0)

#define NS_GET32(l, cp) do { \
	const u_char *t_cp = (const u_char *)(cp); \
	(l) = ((uint32_t)t_cp[0] << 24) \
	    | ((uint32_t)t_cp[1] << 16) \
	    | ((uint32_t)t_cp[2] << 8) \
	    | ((uint32_t)t_cp[3]) \
	    ; \
	(cp) += NS_INT32SZ; \
} while (0)

#define NS_PUT16(s, cp) do { \
	uint32_t t_s = (uint32_t)(s); \
	u_char *t_cp = (u_char *)(cp); \
	*t_cp++ = t_s >> 8; \
	*t_cp   = t_s; \
	(cp) += NS_INT16SZ; \
} while (0)

#define NS_PUT32(l, cp) do { \
	uint32_t t_l = (uint32_t)(l); \
	u_char *t_cp = (u_char *)(cp); \
	*t_cp++ = t_l >> 24; \
	*t_cp++ = t_l >> 16; \
	*t_cp++ = t_l >> 8; \
	*t_cp   = t_l; \
	(cp) += NS_INT32SZ; \
} while (0)

__BEGIN_DECLS

#if !defined(__LP64__)
#define	ns_msg_getflag		__ns_msg_getflag
#define ns_get16		__ns_get16
#define ns_get32		__ns_get32
#define ns_put16		__ns_put16
#define ns_put32		__ns_put32
#define ns_initparse		__ns_initparse
#define ns_skiprr		__ns_skiprr
#define ns_parserr		__ns_parserr
#define ns_parserr2		__ns_parserr2
#define	ns_sprintrr		__ns_sprintrr
#define	ns_sprintrrf		__ns_sprintrrf
#define	ns_format_ttl		__ns_format_ttl
#define	ns_parse_ttl		__ns_parse_ttl
#define ns_datetosecs		__ns_datetosecs
#define	ns_name_ntol		__ns_name_ntol
#define	ns_name_ntop		__ns_name_ntop
#define	ns_name_pton		__ns_name_pton
#define	ns_name_pton2		__ns_name_pton2
#define	ns_name_unpack		__ns_name_unpack
#define	ns_name_unpack2		__ns_name_unpack2
#define	ns_name_pack		__ns_name_pack
#define	ns_name_compress	__ns_name_compress
#define	ns_name_uncompress	__ns_name_uncompress
#define	ns_name_skip		__ns_name_skip
#define	ns_name_rollback	__ns_name_rollback
#define	ns_name_length		__ns_name_length
#define	ns_name_eq		__ns_name_eq
#define	ns_name_owned		__ns_name_owned
#define	ns_name_map		__ns_name_map
#define	ns_name_labels		__ns_name_labels
#define	ns_sign			__ns_sign
#define	ns_sign2		__ns_sign2
#define	ns_sign_tcp		__ns_sign_tcp
#define	ns_sign_tcp2		__ns_sign_tcp2
#define	ns_sign_tcp_init	__ns_sign_tcp_init
#define ns_find_tsig		__ns_find_tsig
#define	ns_verify		__ns_verify
#define	ns_verify_tcp		__ns_verify_tcp
#define	ns_verify_tcp_init	__ns_verify_tcp_init
#define	ns_samedomain		__ns_samedomain
#define	ns_subdomain		__ns_subdomain
#define	ns_makecanon		__ns_makecanon
#define	ns_samename		__ns_samename

int ns_msg_getflag(ns_msg __handle, int __flag);
uint16_t ns_get16(const u_char* __src);
uint32_t ns_get32(const u_char* __src);
void ns_put16(uint16_t __src, u_char* __dst);
void ns_put32(uint32_t __src, u_char* __dst);
int ns_initparse(const u_char* __msg, int __msg_size, ns_msg* __handle);
int ns_skiprr(const u_char* __ptr, const u_char* __eom, ns_sect __section, int __count);
int ns_parserr(ns_msg* __handle, ns_sect __section, int __rr_number, ns_rr* __rr);
int ns_name_uncompress(const u_char* __msg, const u_char* __eom, const u_char* __src, char* __dst, size_t __dst_size);


#else
int ns_msg_getflag(ns_msg __handle, int __flag);
uint16_t ns_get16(const u_char* __src);
uint32_t ns_get32(const u_char* __src);
void ns_put16(uint16_t __src, u_char* __dst);
void ns_put32(uint32_t __src, u_char* __dst);
int ns_initparse(const u_char* __msg, int __msg_size, ns_msg* __handle);
int ns_skiprr(const u_char* __ptr, const u_char* __eom, ns_sect __section, int __count);
int ns_parserr(ns_msg* __handle, ns_sect __section, int __rr_number, ns_rr* __rr);
int ns_name_uncompress(const u_char* __msg, const u_char* __eom, const u_char* __src, char* __dst, size_t __dst_size)
;

#endif

__END_DECLS

#ifdef BIND_4_COMPAT
#include <arpa/nameser_compat.h>
#endif

#endif
