#include <stdlib.h>
#include <string.h>

char *repeat_str(size_t count, const char *src)
{
    int char_count = strlen(src);
    int size = char_count * count + 1; // total byte size needed
    char *res = (char *)malloc(size);

    char *start = res;

    while (count > 0)
    {
        strcpy(res, src);
        res += char_count;
        count--;
    }

    res[0] = '\0';

    return start;
}