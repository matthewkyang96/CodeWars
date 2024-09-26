#include <stdlib.h>

char *spacify(const char *str_in)
{
    char *s = malloc(sizeof(char) * strlen(str_in) * 2 + 1);
    *s = '\0';
    while (*str_in)
    {
        char ss[3] = {*str_in, ' ', '\0'};
        strcat(s, ss);
        str_in++;
    }

    s[strlen(s) - 1] = '\0';

    return s;
}