#include <stddef.h>

const char *odd_or_even(const int *v, size_t sz)
{
    int sum = 0;

    for (int i = 0; i < sz; i++)
    {
        sum += v[i];
    }

    return sum % 2 ? "odd" : "even";
}