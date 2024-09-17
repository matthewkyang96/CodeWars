#include <stddef.h> // NULL

const char **fix_the_meerkat(const char **arr)
{
    const char *temp = arr[0];
    arr[0] = arr[2];
    arr[2] = temp;

    return arr;
}