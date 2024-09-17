#include <stddef.h>

int stairs_in_20(const int stairs[7][52])
{
    int sum = 0;

    for (int i = 0; i < 7; i++)
    {
        for (int j = 0; j < 52; j++)
        {
            sum += stairs[i][j];
        }
    }
    return sum * 20;
}