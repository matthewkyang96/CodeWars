#include <stdint.h>

int digits(uint64_t n)
{
    int digits = 0;
    if (n == 0)
    {
        return 1;
    }

    while (n > 0)
    {
        n /= 10;
        digits++;
    }
    return digits;
}