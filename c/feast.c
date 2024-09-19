#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

bool feast(const char *beast, const char *dish)
{
    char bfirst = beast[0];
    char blast = beast[strlen(beast) - 1];

    char dfirst = dish[0];
    char dlast = dish[strlen(dish) - 1];

    if (bfirst == dfirst && blast == dlast)
    {
        return true;
    }

    return false;
}