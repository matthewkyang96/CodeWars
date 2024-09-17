#include <stdlib.h>

char *smash(const char *const words[/* count */], size_t count)
{
    size_t total_length = 0;
    size_t i;

    for (i = 0; i < count; i++)
    {
        total_length += strlen(words[i]);
    }

    total_length += count;

    char *sentence = (char *)malloc(total_length * sizeof(char));

    char *ptr = sentence;

    for (i = 0; i < count; i++)
    {
        const char *word = words[i];

        while (*word)
        {
            *ptr++ = *word++;
        }
        if (i < count - 1)
        {
            *ptr++ = ' ';
        }
    }

    *ptr = '\0';

    return sentence;
}