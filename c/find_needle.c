#include <stdlib.h>
#include <string.h>

char *find_needle(const char *const haystack[/* count */], size_t count)
{
    size_t i;
    for (i = 0; i < count; i++)
    {
        if (!strcmp(haystack[i], "needle"))
        {
            break;
        }
    }
    char *message = (char *)malloc(50);
    asprintf(&message, "found the needle at position %zu", i);

    return message;
}