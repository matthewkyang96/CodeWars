#include <stddef.h>

void invert(int *values, size_t values_size)
{
    for (size_t i = 0; i < values_size; i++)
    {
        values[i] *= -1;
    }
}