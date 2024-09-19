#include <stdlib.h>

unsigned short *reverse_seq(unsigned short num)
{
    unsigned short *arr = (unsigned short *)malloc(sizeof(unsigned short) * num);
    unsigned short lim = num;
    for (int i = 0; i < lim; i++)
    {
        arr[i] = num;
        num--;
    }
    return arr;
}