#include <stdlib.h>

int *difference_in_ages(size_t a, const int ages[a])
{
    int *result = malloc(sizeof(int) * 3);
    int min = ages[0];
    int max = ages[0];

    for (int i = 0; i < a; i++)
    {
        if (min > ages[i])
            min = ages[i];
        if (max < ages[i])
            max = ages[i];
    }

    result[0] = min;
    result[1] = max;
    result[2] = max - min;

    return result;
}