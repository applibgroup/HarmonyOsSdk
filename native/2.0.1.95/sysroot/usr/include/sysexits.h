/*	$OpenBSD: sysexits.h,v 1.5 2003/06/02 19:34:12 millert Exp $	*/
/*	$NetBSD: sysexits.h,v 1.4 1994/10/26 00:56:33 cgd Exp $	*/

/*
 * Copyright (c) 1987 Regents of the University of California.
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
 *	@(#)sysexits.h	4.8 (Berkeley) 4/3/91
 */

#pragma once


#include <sys/cdefs.h>

#define EX_OK  0

#define EX__BASE 64

#define EX_USAGE 64

#define EX_DATAERR 65

#define EX_NOINPUT 66

#define EX_NOUSER 67

#define EX_NOHOST 68

#define EX_UNAVAILABLE 69

#define EX_SOFTWARE 70

#define EX_OSERR 71

#define EX_OSFILE 72

#define EX_CANTCREAT 73

#define EX_IOERR 74

#define EX_TEMPFAIL 75

#define EX_PROTOCOL 76

#define EX_NOPERM 77

#define EX_CONFIG 78

#define EX__MAX  78
