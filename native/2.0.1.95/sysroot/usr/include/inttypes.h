/*	$OpenBSD: inttypes.h,v 1.9 2006/01/15 00:47:51 millert Exp $	*/

/*
 * Copyright (c) 1997, 2005 Todd C. Miller <Todd.Miller@courtesan.com>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

#ifndef	_INTTYPES_H_
#define	_INTTYPES_H_

#include <stdint.h>
#include <sys/cdefs.h>

#ifdef __LP64__
#define __PRI_64_prefix  "l"
#define __PRI_PTR_prefix "l"
#else
#define __PRI_64_prefix "ll"
#define __PRI_PTR_prefix
#endif
#define __PRI_FAST_prefix __PRI_PTR_prefix


#define	PRId8			"d"
#define	PRId16			"d"
#define	PRId32			"d"
#define	PRId64			__PRI_64_prefix"d"

#define	PRIdLEAST8		"d"
#define	PRIdLEAST16		"d"
#define	PRIdLEAST32		"d"
#define	PRIdLEAST64		__PRI_64_prefix"d"

#define	PRIdFAST8		"d"
#define	PRIdFAST16		__PRI_FAST_prefix"d"
#define	PRIdFAST32		__PRI_FAST_prefix"d"
#define	PRIdFAST64		__PRI_64_prefix"d"

#define	PRIdMAX			"jd"
#define	PRIdPTR			__PRI_PTR_prefix"d"

#define	PRIi8			"i"
#define	PRIi16			"i"
#define	PRIi32			"i"
#define	PRIi64			__PRI_64_prefix"i"

#define	PRIiLEAST8		"i"
#define	PRIiLEAST16		"i"
#define	PRIiLEAST32		"i"
#define	PRIiLEAST64		__PRI_64_prefix"i"

#define	PRIiFAST8		"i"
#define	PRIiFAST16		__PRI_FAST_prefix"i"
#define	PRIiFAST32		__PRI_FAST_prefix"i"
#define	PRIiFAST64		__PRI_64_prefix"i"

#define	PRIiMAX			"ji"
#define	PRIiPTR			__PRI_PTR_prefix"i"

#define	PRIo8			"o"
#define	PRIo16			"o"
#define	PRIo32			"o"
#define	PRIo64			__PRI_64_prefix"o"

#define	PRIoLEAST8		"o"
#define	PRIoLEAST16		"o"
#define	PRIoLEAST32		"o"
#define	PRIoLEAST64		__PRI_64_prefix"o"

#define	PRIoFAST8		"o"
#define	PRIoFAST16		__PRI_FAST_prefix"o"
#define	PRIoFAST32		__PRI_FAST_prefix"o"
#define	PRIoFAST64		__PRI_64_prefix"o"

#define	PRIoMAX			"jo"
#define	PRIoPTR			__PRI_PTR_prefix"o"

#define	PRIu8			"u"
#define	PRIu16			"u"
#define	PRIu32			"u"
#define	PRIu64			__PRI_64_prefix"u"

#define	PRIuLEAST8		"u"
#define	PRIuLEAST16		"u"
#define	PRIuLEAST32		"u"
#define	PRIuLEAST64		__PRI_64_prefix"u"

#define	PRIuFAST8		"u"
#define	PRIuFAST16		__PRI_FAST_prefix"u"
#define	PRIuFAST32		__PRI_FAST_prefix"u"
#define	PRIuFAST64		__PRI_64_prefix"u"

#define	PRIuMAX			"ju"
#define	PRIuPTR			__PRI_PTR_prefix"u"

#define	PRIx8			"x"
#define	PRIx16			"x"
#define	PRIx32			"x"
#define	PRIx64			__PRI_64_prefix"x"

#define	PRIxLEAST8		"x"
#define	PRIxLEAST16		"x"
#define	PRIxLEAST32		"x"
#define	PRIxLEAST64		__PRI_64_prefix"x"

#define	PRIxFAST8		"x"
#define	PRIxFAST16		__PRI_FAST_prefix"x"
#define	PRIxFAST32		__PRI_FAST_prefix"x"
#define	PRIxFAST64		__PRI_64_prefix"x"

#define	PRIxMAX			"jx"
#define	PRIxPTR			__PRI_PTR_prefix"x"

#define	PRIX8			"X"
#define	PRIX16			"X"
#define	PRIX32			"X"
#define	PRIX64			__PRI_64_prefix"X"

#define	PRIXLEAST8		"X"
#define	PRIXLEAST16		"X"
#define	PRIXLEAST32		"X"
#define	PRIXLEAST64		__PRI_64_prefix"X"

#define	PRIXFAST8		"X"
#define	PRIXFAST16		__PRI_FAST_prefix"X"
#define	PRIXFAST32		__PRI_FAST_prefix"X"
#define	PRIXFAST64		__PRI_64_prefix"X"

#define	PRIXMAX			"jX"
#define	PRIXPTR			__PRI_PTR_prefix"X"

#define	SCNd8			"hhd"
#define	SCNd16			"hd"
#define	SCNd32			"d"
#define	SCNd64			__PRI_64_prefix"d"

#define	SCNdLEAST8		"hhd"
#define	SCNdLEAST16		"hd"
#define	SCNdLEAST32		"d"
#define	SCNdLEAST64		__PRI_64_prefix"d"

#define	SCNdFAST8		"hhd"
#define	SCNdFAST16		__PRI_FAST_prefix"d"
#define	SCNdFAST32		__PRI_FAST_prefix"d"
#define	SCNdFAST64		__PRI_64_prefix"d"

#define	SCNdMAX			"jd"
#define	SCNdPTR			__PRI_PTR_prefix"d"

#define	SCNi8			"hhi"
#define	SCNi16			"hi"
#define	SCNi32			"i"
#define	SCNi64			__PRI_64_prefix"i"

#define	SCNiLEAST8		"hhi"
#define	SCNiLEAST16		"hi"
#define	SCNiLEAST32		"i"
#define	SCNiLEAST64		__PRI_64_prefix"i"

#define	SCNiFAST8		"hhi"
#define	SCNiFAST16		__PRI_FAST_prefix"i"
#define	SCNiFAST32		__PRI_FAST_prefix"i"
#define	SCNiFAST64		__PRI_64_prefix"i"

#define	SCNiMAX			"ji"
#define	SCNiPTR			__PRI_PTR_prefix"i"

#define	SCNo8			"hho"
#define	SCNo16			"ho"
#define	SCNo32			"o"
#define	SCNo64			__PRI_64_prefix"o"

#define	SCNoLEAST8		"hho"
#define	SCNoLEAST16		"ho"
#define	SCNoLEAST32		"o"
#define	SCNoLEAST64		__PRI_64_prefix"o"

#define	SCNoFAST8		"hho"
#define	SCNoFAST16		__PRI_FAST_prefix"o"
#define	SCNoFAST32		__PRI_FAST_prefix"o"
#define	SCNoFAST64		__PRI_64_prefix"o"

#define	SCNoMAX			"jo"
#define	SCNoPTR			__PRI_PTR_prefix"o"

#define	SCNu8			"hhu"
#define	SCNu16			"hu"
#define	SCNu32			"u"
#define	SCNu64			__PRI_64_prefix"u"

#define	SCNuLEAST8		"hhu"
#define	SCNuLEAST16		"hu"
#define	SCNuLEAST32		"u"
#define	SCNuLEAST64		__PRI_64_prefix"u"

#define	SCNuFAST8		"hhu"
#define	SCNuFAST16		__PRI_FAST_prefix"u"
#define	SCNuFAST32		__PRI_FAST_prefix"u"
#define	SCNuFAST64		__PRI_64_prefix"u"

#define	SCNuMAX			"ju"
#define	SCNuPTR			__PRI_PTR_prefix"u"

#define	SCNx8			"hhx"
#define	SCNx16			"hx"
#define	SCNx32			"x"
#define	SCNx64			__PRI_64_prefix"x"

#define	SCNxLEAST8		"hhx"
#define	SCNxLEAST16		"hx"
#define	SCNxLEAST32		"x"
#define	SCNxLEAST64		__PRI_64_prefix"x"

#define	SCNxFAST8		"hhx"
#define	SCNxFAST16		__PRI_FAST_prefix"x"
#define	SCNxFAST32		__PRI_FAST_prefix"x"
#define	SCNxFAST64		__PRI_64_prefix"x"

#define	SCNxMAX			"jx"
#define	SCNxPTR			__PRI_PTR_prefix"x"

typedef struct {
	intmax_t quot;
	intmax_t rem;
} imaxdiv_t;

__BEGIN_DECLS
intmax_t imaxabs(intmax_t __i) __attribute_const__;
imaxdiv_t imaxdiv(intmax_t __numerator, intmax_t __denominator) __attribute_const__;
intmax_t strtoimax(const char* __s, char** __end_ptr, int __base);
uintmax_t strtoumax(const char* __s, char** __end_ptr, int __base);
intmax_t wcstoimax(const wchar_t* __s, wchar_t** __end_ptr, int __base);
uintmax_t wcstoumax(const wchar_t* __s, wchar_t** __end_ptr, int __base);
__END_DECLS

#endif
