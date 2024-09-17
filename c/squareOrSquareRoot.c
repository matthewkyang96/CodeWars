#include <math.h>

int *squareOrSquareRoot(int *array, int length)
{
    int *narray = malloc(sizeof(int) * length);
    for (int i = 0; i < length; i++)
    {
        int num = array[i];
        if (sqrt(num) == (int)(sqrt(num)))
        {
            narray[i] = (int)(sqrt(num));
        }
        else
        {
            narray[i] = num * num;
        }
    }
    return narray;
}