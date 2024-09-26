#include <stdbool.h>
#include <string.h>

bool has_unique_chars(const char *str)
{
    char *map[255] = {0};

    while (*str)
    {
        map[*str++]++;
    }

    for (int i = 0; i < 255; i++)
    {
        if (map[i] > 1)
        {
            return false;
        }
    }

    return true;
}