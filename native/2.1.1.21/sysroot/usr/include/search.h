/*-
 * Written by J.T. Conklin <jtc@netbsd.org>
 * Public domain.
 *
 *	$NetBSD: search.h,v 1.12 1999/02/22 10:34:28 christos Exp $
 * $FreeBSD: release/9.0.0/include/search.h 105250 2002-10-16 14:29:23Z robert $
 */

#ifndef _SEARCH_H_
#define _SEARCH_H_

#include <sys/cdefs.h>
#include <sys/types.h>

typedef enum {
  FIND,
  ENTER
} ACTION;

typedef struct entry {
  char* key;
  void* data;
} ENTRY;

typedef enum {
  preorder,
  postorder,
  endorder,
  leaf
} VISIT;

#if defined(__USE_BSD) || defined(__USE_GNU)
struct hsearch_data {
  struct __hsearch* __hsearch;
};
#endif

__BEGIN_DECLS

void insque(void* __element, void* __previous);
void remque(void* __element);

int hcreate(size_t);
void hdestroy(void);
ENTRY* hsearch(ENTRY, ACTION);

#if defined(__USE_BSD) || defined(__USE_GNU)
int hcreate_r(size_t, struct hsearch_data*);
void hdestroy_r(struct hsearch_data*);
int hsearch_r(ENTRY, ACTION, ENTRY**, struct hsearch_data*);
#endif

void* lfind(const void* __key, const void* __base, size_t* __count, size_t __size, int (*__comparator)(const void*, const void*))
;
void* lsearch(const void* __key, void* __base, size_t* __count, size_t __size, int (*__comparator)(const void*, const void*))
;

void* tdelete(const void* __key, void** __root_ptr, int (*__comparator)(const void*, const void*));
void tdestroy(void* __root, void (*__free_fn)(void*));
void* tfind(const void* __key, void* const* __root_ptr, int (*__comparator)(const void*, const void*));
void* tsearch(const void* __key, void** __root_ptr, int (*__comparator)(const void*, const void*));
void twalk(const void* __root, void (*__visitor)(const void*, VISIT, int));

__END_DECLS

#endif
