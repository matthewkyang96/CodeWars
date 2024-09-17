#include <stddef.h>

void count_positives_sum_negatives(
    int *values, size_t count, int *positivesCount, int *negativesSum)
{
    // Please store the positives count in the memory, pointed to
    // by the positivesCount parameter.

    // Please store the negatives sum in the memory, pointed to
    // by the negativesSum parameter.

    for (size_t i = 0; i < count; i++)
    {
        if (values[i] > 0)
        {
            (*positivesCount)++;
        }
        else
        {
            *negativesSum += values[i];
        }
    }
}