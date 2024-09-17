#include <stdlib.h>
#include <string.h>

size_t count_words(const char *words)
{
    size_t count = 0;

    // Handle case for when empty string is passed
    if (!*words)
    {
        return count;
    }

    count = 1; // Account for last word, since it is not followed by an empty space

    while (*words)
    {
        count += *words == ' ' ? 1 : 0;
        words++;
    }
    return count;
}

void words_to_array(const char *words, char *words_array[])
{
    size_t count = count_words(words);
    if (count == 0)
    {
        return;
    }

    const char *ptr1 = words;

    for (int i = 0; i < count; i++)
    {
        char *ptr2 = strchr(ptr1, ' ');
        size_t length;

        if (ptr2 == NULL)
        {
            length = strlen(ptr1);
        }
        else
        {
            length = ptr2 - ptr1;
        }

        words_array[i] = (char *)malloc((sizeof(char) * length) + 1);
        memset(words_array[i], 0, length + 1);
        memcpy(words_array[i], ptr1, length);
        ptr1 = ptr2 + 1;
    }
}