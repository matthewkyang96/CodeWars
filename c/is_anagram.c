#include <stdbool.h>

bool is_anagram(const char *s1, const char *s2)
{
    if (strlen(s1) != strlen(s2))
    {
        return false;
    }

    int sum = 0;

    while (*s1 && *s2)
    {
        sum += tolower(*s1++);
        sum -= tolower(*s2++);
    }

    return sum == 0 ? true : false;
}