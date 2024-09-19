#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool is_uppercase(const char *source)
{

    while (*source)
    {
        if (*source != toupper(*source))
        {
            return false;
        }
        source++;
    }
    return true;
};