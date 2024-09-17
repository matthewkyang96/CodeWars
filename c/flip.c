#include <stddef.h>
#include <string.h>
//  do not allocate memory for the return value
//  assign output to preallocated array *result

void flip(char d, const int *array, size_t n, int *result)
{
    memcpy(result, array, n * sizeof(int));
    int flipped;
    if (d == 'R')
    {
        do
        {
            flipped = 0;
            for (int i = 0; i < n - 1; i++)
            {
                if (result[i] > result[i + 1])
                {
                    int temp = result[i];
                    result[i] = result[i + 1];
                    result[i + 1] = temp;
                    flipped = 1;
                }
            }
        } while (flipped);

        return;
    }
    else
    {
        do
        {
            flipped = 0;
            for (int i = 0; i < n - 1; i++)
            {
                if (result[i] < result[i + 1])
                {
                    int temp = result[i];
                    result[i] = result[i + 1];
                    result[i + 1] = temp;
                    flipped = 1;
                }
            }
        } while (flipped);
    }
}