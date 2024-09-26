#include <stdbool.h>
#include <math.h>

bool is_square(int n)
{
    if (n < 0)
    {
        return false;
    }

    int i = 0;
    while (i * i <= n)
    {
        if (i * i == n)
        {
            return true;
        }
        i++;
    }

    return false;
}