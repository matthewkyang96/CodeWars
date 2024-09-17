#include <stdbool.h>
#include <stddef.h>

bool array_madness(size_t n1, const int arr1[n1], size_t n2, const int arr2[n2])
{
    int sum0 = 0;
    int sum1 = 0;

    for (int i = 0; i < n1; i++)
    {
        sum0 += (arr1[i] * arr1[i]);
    }

    for (int i = 0; i < n2; i++)
    {
        sum1 += (arr2[i] * arr2[i] * arr2[i]);
    }

    return sum0 > sum1;
}