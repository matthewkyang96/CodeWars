#include <inttypes.h>
#include <stdlib.h>
#include <string.h>

int compare(const void *a, const void *b)
{
    return (*(char *)b - *(char *)a);
}

uint64_t descendingOrder(uint64_t n)
{
    char *buffer;
    asprintf(&buffer, "%lu", n);

    int len = strlen(buffer);

    qsort(buffer, len, sizeof(char), compare);

    uint64_t res = strtoull(buffer, NULL, 10);

    free(buffer);

    return res;
}