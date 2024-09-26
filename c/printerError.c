#include <stdlib.h>
#include <string.h>

char *printerError(const char *s)
{
    char *colors = "abcdefghijklm";
    int len = strlen(s);
    int err = 0;

    for (int i = 0; i < len; i++)
    {
        if (strchr(colors, s[i]) == NULL)
        {
            err++;
        }
    }

    char *buffer;

    asprintf(&buffer, "%d/%d", err, len);

    return buffer;
}