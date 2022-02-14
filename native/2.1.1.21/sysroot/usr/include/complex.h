/*-
 * Copyright (c) 2001-2011 The FreeBSD Project.
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
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * $FreeBSD$
 */

#ifndef _COMPLEX_H
#define	_COMPLEX_H

#include <sys/cdefs.h>

#ifdef __GNUC__
#define	_Complex_I	((float _Complex)1.0i)
#endif

#ifdef __generic
_Static_assert(__generic(_Complex_I, float _Complex, 1, 0),
    "_Complex_I must be of type float _Complex");
#endif

#define	complex		_Complex
#define	I		_Complex_I

#if __STDC_VERSION__ >= 201112L
#define	CMPLX(x, y)	((double complex){ x, y })
#define	CMPLXF(x, y)	((float complex){ x, y })
#define	CMPLXL(x, y)	((long double complex){ x, y })
#endif

__BEGIN_DECLS

double complex cacos(double complex __z);
float complex cacosf(float complex __z);
long double complex cacosl(long double complex __z);
double complex casin(double complex __z);
float complex casinf(float complex __z);
long double complex casinl(long double complex __z);
double complex catan(double complex __z);
float complex catanf(float complex __z);
long double complex catanl(long double complex __z);
double complex ccos(double complex __z);
float complex ccosf(float complex __z);
long double complex ccosl(long double complex __z);
double complex csin(double complex __z);
float complex csinf(float complex __z);
long double complex csinl(long double complex __z);
double complex ctan(double complex __z);
float complex ctanf(float complex __z);
long double complex ctanl(long double complex __z);

double complex cacosh(double complex __z);
float complex cacoshf(float complex __z);
long double complex cacoshl(long double complex __z);
double complex casinh(double complex __z);
float complex casinhf(float complex __z);
long double complex casinhl(long double complex __z);
double complex catanh(double complex __z);
float complex catanhf(float complex __z);
long double complex catanhl(long double complex __z);
double complex ccosh(double complex __z);
float complex ccoshf(float complex __z);
long double complex ccoshl(long double complex __z);
double complex csinh(double complex __z);
float complex csinhf(float complex __z);
long double complex csinhl(long double complex __z);
double complex ctanh(double complex __z);
float complex ctanhf(float complex __z);
long double complex ctanhl(long double complex __z);

double complex cexp(double complex __z);
float complex cexpf(float complex __z);
long double complex cexpl(long double complex __z);
double complex clog(double complex __z);
float complex clogf(float complex __z);
long double complex clogl(long double complex __z);

double cabs(double complex __z);
float cabsf(float complex __z);
long double cabsl(long double complex __z);
double complex cpow(double complex __x, double complex __z);
float complex cpowf(float complex __x, float complex __z);
long double complex cpowl(long double complex __x, long double complex __z);
double complex csqrt(double complex __z);
float complex csqrtf(float complex __z);
long double complex csqrtl(long double complex __z);

double carg(double complex __z);
float cargf(float complex __z);
long double cargl(long double complex __z);
double cimag(double complex __z);
float cimagf(float complex __z);
long double cimagl(long double complex __z);
double complex conj(double complex __z);
float complex conjf(float complex __z);
long double complex conjl(long double complex __z);
double complex cproj(double complex __z);
float complex cprojf(float complex __z);
long double complex cprojl(long double complex __z);
double creal(double complex __z);
float crealf(float complex __z);
long double creall(long double complex __z);

__END_DECLS

#endif
