/*
 * Copyright (C) 2012 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#pragma once


#include <sys/cdefs.h>
#include <stddef.h>
#include <stdio.h>

__BEGIN_DECLS

#define __BIONIC_ALLOC_SIZE(...) __attribute__((__alloc_size__(__VA_ARGS__)))

void* malloc(size_t __byte_count) __mallocfunc __BIONIC_ALLOC_SIZE(1) __wur;

void* calloc(size_t __item_count, size_t __item_size) __mallocfunc __BIONIC_ALLOC_SIZE(1,2) __wur;

void* realloc(void* __ptr, size_t __byte_count) __BIONIC_ALLOC_SIZE(2) __wur;


void free(void* __ptr);

void* memalign(size_t __alignment, size_t __byte_count) __mallocfunc __BIONIC_ALLOC_SIZE(2) __wur;

size_t malloc_usable_size(const void* __ptr);

#ifndef STRUCT_MALLINFO_DECLARED
#define STRUCT_MALLINFO_DECLARED 1
struct mallinfo {
  size_t arena;
  size_t ordblks;
  size_t smblks;
  size_t hblks;
  size_t hblkhd;
  size_t usmblks;
  size_t fsmblks;
  size_t uordblks;
  size_t fordblks;
  size_t keepcost;
};
#endif

struct mallinfo mallinfo(void);


#define M_DECAY_TIME -100
#define M_PURGE -101


extern void* (*volatile __malloc_hook)(size_t __byte_count, const void* __caller);

extern void* (*volatile __realloc_hook)(void* __ptr, size_t __byte_count, const void* __caller);

extern void (*volatile __free_hook)(void* __ptr, const void* __caller);

extern void* (*volatile __memalign_hook)(size_t __alignment, size_t __byte_count, const void* __caller);

__END_DECLS
