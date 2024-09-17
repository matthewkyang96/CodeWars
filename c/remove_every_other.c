#include <stddef.h>

void remove_every_other(size_t *length, int array[*length])
{
    size_t new_length = 0;

    for (size_t i = 0; i < *length; i += 2)
    {
        array[new_length] = array[i];
        new_length++;
    }

    *length = new_length;
}