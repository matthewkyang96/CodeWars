#include <stddef.h>

const char *well(size_t n, const char *ideas[n])
{
    int count = 0;
    for (int i = 0; i < n; i++)
    {
        if (!strncmp(ideas[i], "good", 4))
        {
            count++;
        }
    }

    if (count > 2)
    {
        return "I smell a series!";
    }

    if (count >= 1)
    {
        return "Publish!";
    }

    return "Fail!";
}