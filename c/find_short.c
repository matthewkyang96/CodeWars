#include <sys/types.h>
#include <string.h>
#include <stdlib.h>

ssize_t find_short(const char *s)
{
    char *scpy = strdup(s);
    int wcnt;
    char *token = strtok(scpy, " ");
    wcnt = strlen(token);

    while ((token = strtok(NULL, " ")) != NULL)
    {
        int len = strlen(token);
        if (len < wcnt)
        {
            wcnt = len;
        }
    }

    return wcnt;
}