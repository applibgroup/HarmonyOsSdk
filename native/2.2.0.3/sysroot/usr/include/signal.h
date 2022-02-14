/*
 * Copyright (C) 2008 The Android Open Source Project
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
 * OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

#ifndef _SIGNAL_H_
#define _SIGNAL_H_

#include <sys/cdefs.h>
#include <sys/types.h>

#include <asm/sigcontext.h>
#include <bits/pthread_types.h>
#include <bits/signal_types.h>
#include <bits/timespec.h>
#include <limits.h>

#include <sys/ucontext.h>
#define __BIONIC_HAVE_UCONTEXT_T

__BEGIN_DECLS

#define SIG_HOLD __BIONIC_CAST(reinterpret_cast, sighandler_t, 2)

#define SIGRTMIN (__libc_current_sigrtmin())
#define SIGRTMAX (__libc_current_sigrtmax())
int __libc_current_sigrtmin(void);
int __libc_current_sigrtmax(void);

extern const char* const sys_siglist[_NSIG];
extern const char* const sys_signame[_NSIG];

#define si_timerid si_tid

int sigaction(int __signal, const struct sigaction* __new_action, struct sigaction* __old_action);
int sigaction64(int __signal, const struct sigaction64* __new_action, struct sigaction64* __old_action);

int siginterrupt(int __signal, int __flag);

sighandler_t signal(int __signal, sighandler_t __handler);
int sigaddset(sigset_t* __set, int __signal);
int sigaddset64(sigset64_t* __set, int __signal);
int sigdelset(sigset_t* __set, int __signal);
int sigdelset64(sigset64_t* __set, int __signal);
int sigemptyset(sigset_t* __set);
int sigemptyset64(sigset64_t* __set);
int sigfillset(sigset_t* __set);
int sigfillset64(sigset64_t* __set);
int sigismember(const sigset_t* __set, int __signal);
int sigismember64(const sigset64_t* __set, int __signal);

int sigpending(sigset_t* __set);
int sigpending64(sigset64_t* __set);
int sigprocmask(int __how, const sigset_t* __new_set, sigset_t* __old_set);
int sigprocmask64(int __how, const sigset64_t* __new_set, sigset64_t* __old_set);
int sigsuspend(const sigset_t* __mask);
int sigsuspend64(const sigset64_t* __mask);
int sigwait(const sigset_t* __set, int* __signal);
int sigwait64(const sigset64_t* __set, int* __signal);

int sighold(int __signal)
  __attribute__((deprecated("use sigprocmask() or pthread_sigmask() instead")))
;
int sigignore(int __signal)
__attribute__((deprecated("use sigaction() instead")));
int sigpause(int __signal)
__attribute__((deprecated("use sigsuspend() instead")));
int sigrelse(int __signal)
  __attribute__((deprecated("use sigprocmask() or pthread_sigmask() instead")))
;
sighandler_t sigset(int __signal, sighandler_t __handler)
__attribute__((deprecated("use sigaction() instead")));

int raise(int __signal);
int kill(pid_t __pid, int __signal);
int killpg(int __pgrp, int __signal);
int tgkill(int __tgid, int __tid, int __signal);

int sigaltstack(const stack_t* __new_signal_stack, stack_t* __old_signal_stack);

void psiginfo(const siginfo_t* __info, const char* __msg);
void psignal(int __signal, const char* __msg);

int pthread_kill(pthread_t __pthread, int __signal);
#if defined(__USE_GNU)
#endif

int pthread_sigmask(int __how, const sigset_t* __new_set, sigset_t* __old_set);
int pthread_sigmask64(int __how, const sigset64_t* __new_set, sigset64_t* __old_set);

int sigqueue(pid_t __pid, int __signal, const union sigval __value);
int sigtimedwait(const sigset_t* __set, siginfo_t* __info, const struct timespec* __timeout);
int sigtimedwait64(const sigset64_t* __set, siginfo_t* __info, const struct timespec* __timeout);
int sigwaitinfo(const sigset_t* __set, siginfo_t* __info);
int sigwaitinfo64(const sigset64_t* __set, siginfo_t* __info);

__END_DECLS


#endif
