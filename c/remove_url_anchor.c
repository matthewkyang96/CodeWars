#include <stdlib.h>
#include <string.h>

char *remove_url_anchor(const char *url_in)
{
    char *stripped = strdup(url_in);
    char *ptr = strchr(stripped, '#');
    if (ptr != NULL)
    {
        *ptr = '\0';
    }

    return stripped;
}