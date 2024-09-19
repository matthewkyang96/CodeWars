#include <stdlib.h>
#include <string.h>

char *reverse_words(const char *words, size_t length, char *reversed)
{
    reversed[length] = '\0';
    char *r = reversed;
    size_t end_index = length - 1;
    size_t start_index = length;

    while (start_index != 0)
    {
        start_index--;
        if (words[start_index] == ' ')
        {
            strncpy(r, words + start_index + 1, end_index - start_index);
            r += end_index - start_index;
            *r++ = ' ';
            end_index = start_index - 1;
        }

        if (start_index == 0)
        {
            strncpy(r, words, end_index + 1);
        }
    }

    return reversed;
}