/*
 * Copyright (c) 1983, 1989, 1993
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
 *	@(#)ftp.h	8.1 (Berkeley) 6/2/93
 *
 * $FreeBSD$
 */

#ifndef _ARPA_FTP_H_
#define	_ARPA_FTP_H_


#define PRELIM		1
#define COMPLETE	2
#define CONTINUE	3
#define TRANSIENT	4
#define ERROR		5

#define	TYPE_A		1
#define	TYPE_E		2
#define	TYPE_I		3
#define	TYPE_L		4

#ifdef FTP_NAMES
char *typenames[] =  {"0", "ASCII", "EBCDIC", "Image", "Local" };
#endif

#define	FORM_N		1
#define	FORM_T		2
#define	FORM_C		3
#ifdef FTP_NAMES
char *formnames[] =  {"0", "Nonprint", "Telnet", "Carriage-control" };
#endif

#define	STRU_F		1
#define	STRU_R		2
#define	STRU_P		3
#ifdef FTP_NAMES
char *strunames[] =  {"0", "File", "Record", "Page" };
#endif

#define	MODE_S		1
#define	MODE_B		2
#define	MODE_C		3
#ifdef FTP_NAMES
char *modenames[] =  {"0", "Stream", "Block", "Compressed" };
#endif

#define	REC_ESC		'\377'
#define	REC_EOR		'\001'
#define REC_EOF		'\002'

#define	BLK_EOR		0x80
#define	BLK_EOF		0x40
#define BLK_ERRORS	0x20
#define	BLK_RESTART	0x10

#define	BLK_BYTECOUNT	2

#endif
