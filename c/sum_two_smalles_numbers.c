#include <stddef.h>
int compare(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}

long sum_two_smallest_numbers(size_t n, const int numbers[n])
{
    // qsort(numbers, n, compare);
    long glob_min = numbers[0] < numbers[1] ? numbers[0] : numbers[1];
    long local_min = numbers[0] < numbers[1] ? numbers[1] : numbers[0];

    for (size_t i = 2; i < n; i++)
    {
        int num = numbers[i];

        if (num < glob_min)
        {
            // Update local_min before changing glob_min
            local_min = glob_min;
            glob_min = num;
        }
        else if (num < local_min)
        {
            // Update local_min if num is between glob_min and the current local_min
            local_min = num;
        }
    }

    return glob_min + local_min;
}