#include <stddef.h>

int get_average(const int *marks, size_t count)
{
    int sum = 0;
    for (int i = 0; i < count; i++)
    {
        sum += marks[i];
    }

    return sum / count;
};