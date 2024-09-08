#include <stdlib.h>
#include <string.h>

//

char *no_space(const char *str_in)
{
    int strleng = strlen(str_in);
    int space_count = 0;
    for (int i = 0; i < strleng; i++)
    {
        if (str_in[i] == ' ')
        {
            space_count++;
        }
    }

    char *ret = (char *)malloc(sizeof(char) * (strleng - space_count + 1));
    char *ptr = ret;

    for (int i = 0; i < strleng; i++)
    {
        if (str_in[i] != ' ')
        {
            *ptr = str_in[i];
            ptr++;
        }
    }

    *ptr = '\0';

    return ret;
}