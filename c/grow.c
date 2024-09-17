#include <stddef.h>

int grow(size_t size, const int arr[size])
{
    int prod = 1;
    for (int i = 0; i < size; i++)
    {
        prod *= arr[i];
    }
    return prod; // Your code comes here
}