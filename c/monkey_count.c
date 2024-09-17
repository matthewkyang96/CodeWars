#include <stddef.h>

size_t *monkey_count(size_t n, size_t *pResultCount)
{
    size_t *res = (size_t *)malloc(sizeof(size_t) * n);
    for (int i = 0; i < n; i++)
    {
        res[i] = i + 1;
    }
    *pResultCount = n;
    return res;
};
// Please make sure you store the number of values
// in the array you are returning from the function
// in the memory pointed to by the pResultCount
// pointer.