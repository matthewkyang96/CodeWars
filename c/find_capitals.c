#include <stddef.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

size_t *find_capitals(const char *word, size_t *uppercase_count)
{
    // report the number of uppercase letters through the
    // 'uppercase_count' pointer:
    *uppercase_count = 0;
    // return a free-able pointer:
    size_t *uppercase_index = malloc(sizeof(size_t) * strlen(word));

    for (int i = 0, j = 0; i < strlen(word); i++)
    {
        if (word[i] > 64 && word[i] < 91)
        {
            (*uppercase_count)++;
            uppercase_index[j] = i;
            j++;
        }
    }
    return uppercase_index;
}