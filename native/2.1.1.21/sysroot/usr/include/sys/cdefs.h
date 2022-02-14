/*	$NetBSD: cdefs.h,v 1.58 2004/12/11 05:59:00 christos Exp $	*/

/*
 * Copyright (c) 1991, 1993
 *	The Regents of the University of California.  All rights reserved.
 *
 * This code is derived from software contributed to Berkeley by
 * Berkeley Software Design, Inc.
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
 *	@(#)cdefs.h	8.8 (Berkeley) 1/9/95
 */

#pragma once

#define __BIONIC__ 1

#if defined(__cplusplus)
#define __BEGIN_DECLS extern "C" {
#define __END_DECLS }
#else
#define __BEGIN_DECLS
#define __END_DECLS
#endif

#define __strong_alias(alias, sym) \
    __asm__(".global " #alias "\n" \
            #alias " = " #sym);

#if defined(__cplusplus)
#define __BIONIC_CAST(_k,_t,_v) (_k<_t>(_v))
#else
#define __BIONIC_CAST(_k,_t,_v) ((_t) (_v))
#endif

#define __BIONIC_ALIGN(__value, __alignment) (((__value) + (__alignment)-1) & ~((__alignment)-1))


#define	__P(protos)	protos

#define	__CONCAT1(x,y)	x ## y
#define	__CONCAT(x,y)	__CONCAT1(x,y)
#define	___CONCAT(x,y)	__CONCAT(x,y)

#define	__STRING(x)	#x
#define	___STRING(x)	__STRING(x)

#if defined(__cplusplus)
#define	__inline	inline
#endif

#define __always_inline __attribute__((__always_inline__))
#define __attribute_const__ __attribute__((__const__))
#define __attribute_pure__ __attribute__((__pure__))
#define __dead __attribute__((__noreturn__))
#define __noreturn __attribute__((__noreturn__))
#define __mallocfunc  __attribute__((__malloc__))
#define __packed __attribute__((__packed__))
#define __unused __attribute__((__unused__))
#define __used __attribute__((__used__))

#define __printflike(x, y) __attribute__((__format__(printf, x, y)))
#define __scanflike(x, y) __attribute__((__format__(scanf, x, y)))
#define __strftimelike(x) __attribute__((__format__(strftime, x, 0)))

#define	__predict_true(exp)	__builtin_expect((exp) != 0, 1)
#define	__predict_false(exp)	__builtin_expect((exp) != 0, 0)

#define __wur __attribute__((__warn_unused_result__))

#define __errorattr(msg) __attribute__((unavailable(msg)))
#define __warnattr(msg) __attribute__((deprecated(msg)))
#define __warnattr_real(msg) __attribute__((deprecated(msg)))
#define __enable_if(cond, msg) __attribute__((enable_if(cond, msg)))
#define __clang_error_if(cond, msg) __attribute__((diagnose_if(cond, msg, "error")))
#define __clang_warning_if(cond, msg) __attribute__((diagnose_if(cond, msg, "warning")))

#if defined(ANDROID_STRICT)
#  define __warnattr_strict(msg)
#else
#  define __warnattr_strict(msg)
#endif

#define __IDSTRING(_prefix,_s)
#define __COPYRIGHT(_s)
#define __FBSDID(_s)
#define __RCSID(_s)
#define __SCCSID(_s)

#if defined(_GNU_SOURCE)
#  define __USE_BSD 1
#  define __USE_GNU 1
#endif

#if defined(_BSD_SOURCE)
#  define __USE_BSD 1
#endif

#if !defined(__LP64__) && defined(_FILE_OFFSET_BITS) && _FILE_OFFSET_BITS == 64
#  define __USE_FILE_OFFSET64 1
#  define __RENAME_IF_FILE_OFFSET64(func) __RENAME(func)
#else
#  define __RENAME_IF_FILE_OFFSET64(func)
#endif

#if defined(__LP64__) || defined(__BIONIC_LP32_USE_LONG_DOUBLE)

#else

#endif

#if defined(__LP64__) || defined(__BIONIC_LP32_USE_STAT64)

#else

#endif

#if defined(__LP64__)
#define __WORDSIZE 64
#else
#define __WORDSIZE 32
#endif


#define __BIONIC_FORTIFY_UNKNOWN_SIZE ((size_t) -1)

#if defined(_FORTIFY_SOURCE) && _FORTIFY_SOURCE > 0
#  if !__has_feature(address_sanitizer) && !defined(__clang_analyzer__)
#    define __BIONIC_FORTIFY 1
#  endif
#endif



#if defined(__BIONIC_FORTIFY)
#  if _FORTIFY_SOURCE == 2
#    define __bos_level 1
#  else
#    define __bos_level 0
#  endif
#else
#  define __bos_level 0
#endif

#define __bosn(s, n) __builtin_object_size((s), (n))
#define __bos(s) __bosn((s), __bos_level)

#if defined(__BIONIC_FORTIFY)
#  define __bos0(s) __bosn((s), 0)
#  define __pass_object_size_n(n) __attribute__((pass_object_size(n)))
#  define __call_bypassing_fortify(fn) (&fn)
#  define __BIONIC_FORTIFY_INLINE static __inline__ __always_inline
#  define __BIONIC_FORTIFY_VARIADIC static __inline__
#  define __BIONIC_ERROR_FUNCTION_VISIBILITY static __attribute__((unused))
#else
#  define __pass_object_size_n(n)
#endif
#define __pass_object_size __pass_object_size_n(__bos_level)
#define __pass_object_size0 __pass_object_size_n(0)

#if defined(__BIONIC_FORTIFY) || defined(__BIONIC_DECLARE_FORTIFY_HELPERS)
#  define __BIONIC_INCLUDE_FORTIFY_HEADERS 1
#endif

#define __overloadable __attribute__((overloadable))

#define __LIBC_HIDDEN__ __attribute__((visibility("hidden")))

#ifdef __LP64__
#define __LIBC32_LEGACY_PUBLIC__ __attribute__((visibility("hidden")))
#else
#define __LIBC32_LEGACY_PUBLIC__ __attribute__((visibility("default")))
#endif

#define __RENAME(x) __asm__(#x)

#if __has_builtin(__builtin_umul_overflow) || __GNUC__ >= 5
#if defined(__LP64__)
#define __size_mul_overflow(a, b, result) __builtin_umull_overflow(a, b, result)
#else
#define __size_mul_overflow(a, b, result) __builtin_umul_overflow(a, b, result)
#endif
#else
extern __inline__ __always_inline __attribute__((gnu_inline))
int __size_mul_overflow(__SIZE_TYPE__ a, __SIZE_TYPE__ b, __SIZE_TYPE__ *result) {
    *result = a * b;
    static const __SIZE_TYPE__ mul_no_overflow = 1UL << (sizeof(__SIZE_TYPE__) * 4);
    return (a >= mul_no_overflow || b >= mul_no_overflow) && a > 0 && (__SIZE_TYPE__)-1 / a < b;
}
#endif

#define __unsafe_check_mul_overflow(x, y) ((__SIZE_TYPE__)-1 / (x) < (y))

