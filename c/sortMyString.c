#include <stdlib.h>

char *sortMyString(const char *s)
{
    int len = strlen(s);
    char *sc = malloc(sizeof(char) * len + 2);
    memset(sc, ' ', sizeof(char) * len + 2);
    char *ptr_even = sc;
    char *ptr_odd = len % 2 ? sc + len / 2 + 2 : sc + len / 2 + 1;

    for (int i = 0; i < len; i++)
    {
        if (i % 2 == 0)
        {
            *ptr_even = s[i];
            ptr_even++;
        }
        else
        {
            *ptr_odd = s[i];
            ptr_odd++;
        }
    }

    *ptr_odd = '\0';

    return sc;
}
