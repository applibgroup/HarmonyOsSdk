/*	$OpenBSD: limits.h,v 1.13 2005/12/31 19:29:38 millert Exp $	*/
/*	$NetBSD: limits.h,v 1.7 1994/10/26 00:56:00 cgd Exp $	*/

/*
 * Copyright (c) 1988 The Regents of the University of California.
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
 *	@(#)limits.h	5.9 (Berkeley) 4/3/91
 */

#ifndef _LIMITS_H_
#define _LIMITS_H_

#include <sys/cdefs.h>

#include <float.h>

#include <linux/limits.h>

#define PASS_MAX		128

#define NL_ARGMAX		9
#define NL_LANGMAX		14
#define NL_MSGMAX		32767
#define NL_NMAX			1
#define NL_SETMAX		255
#define NL_TEXTMAX		255

#define TMP_MAX                 308915776


#define CHAR_BIT 8
#ifdef __LP64__
# define LONG_BIT 64
#else
# define LONG_BIT 32
#endif
#define WORD_BIT 32

#define	SCHAR_MAX	0x7f
#define SCHAR_MIN	(-0x7f-1)

#define	UCHAR_MAX	0xffU
#ifdef __CHAR_UNSIGNED__
# define CHAR_MIN	0
# define CHAR_MAX	0xff
#else
# define CHAR_MAX	0x7f
# define CHAR_MIN	(-0x7f-1)
#endif

#define	USHRT_MAX	0xffffU
#define	SHRT_MAX	0x7fff
#define SHRT_MIN        (-0x7fff-1)

#define	UINT_MAX	0xffffffffU
#define	INT_MAX		0x7fffffff
#define	INT_MIN		(-0x7fffffff-1)

#ifdef __LP64__
# define ULONG_MAX	0xffffffffffffffffUL
# define LONG_MAX	0x7fffffffffffffffL
# define LONG_MIN	(-0x7fffffffffffffffL-1)
#else
# define ULONG_MAX	0xffffffffUL
# define LONG_MAX	0x7fffffffL
# define LONG_MIN	(-0x7fffffffL-1)
#endif

# define ULLONG_MAX	0xffffffffffffffffULL
# define LLONG_MAX	0x7fffffffffffffffLL
# define LLONG_MIN	(-0x7fffffffffffffffLL-1)

#ifndef LONG_LONG_MIN
#define LONG_LONG_MIN  LLONG_MIN
#endif

#ifndef LONG_LONG_MAX
#define LONG_LONG_MAX  LLONG_MAX
#endif

#ifndef ULONG_LONG_MAX
#define ULONG_LONG_MAX  ULLONG_MAX
#endif

#if defined(__USE_BSD) || defined(__BIONIC__)
# define UID_MAX	UINT_MAX
# define GID_MAX	UINT_MAX
#if defined(__LP64__)
#define SIZE_T_MAX ULONG_MAX
#else
#define SIZE_T_MAX UINT_MAX
#endif
#endif

#if defined(__LP64__)
#define SSIZE_MAX LONG_MAX
#else
#define SSIZE_MAX INT_MAX
#endif

#define MB_LEN_MAX 4

#define NZERO 20

#define IOV_MAX 1024
#define SEM_VALUE_MAX 0x3fffffff

#include <bits/posix_limits.h>

#define HOST_NAME_MAX _POSIX_HOST_NAME_MAX
#define LOGIN_NAME_MAX 256
#define TTY_NAME_MAX 32

#define PTHREAD_DESTRUCTOR_ITERATIONS 4
#define PTHREAD_KEYS_MAX 128
#undef PTHREAD_THREADS_MAX

#endif
