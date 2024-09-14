#include <stddef.h>
#include <inttypes.h>

void digitize(uint64_t n, uint8_t digits[], size_t *length_out)
{
    size_t length = 0;

    do
    {
        digits[length++] = n % 10;
        n /= 10;
    } while (n != 0);

    *length_out = length;
}