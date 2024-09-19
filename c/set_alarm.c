#include <stdbool.h>
#include <stdlib.h>

bool set_alarm(bool employed, bool vacation)
{

    if (employed == true)
    {
        if (employed ^ vacation)
            return true;
    }

    return false;
}