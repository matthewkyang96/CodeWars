#include <stddef.h>

int positive_sum(const int *values, size_t count);

positive_sum(const int *values, size_t count)
{
    int *res_array = (int *)malloc(sizeof(int) * count);
    int res_array_count = 0;
    int sum = 0;
    for (int i = 0; i < count; i++)
    {
        if (values[i] > 0)
        {
            sum += values[i];
            res_array[i] = values[i];
            res_array_count++;
        }
    }

    res_array = (int *)realloc(res_array, sizeof(int) * res_array_count);

    for (int j = 0; j < res_array_count; j++)
    {
        printf("%d\n", res_array[j]);
    }

    free(res_array);
    return sum;
}