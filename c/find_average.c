#include <stdio.h>

double find_average(const double array[/* length */], unsigned length)
{
    double avg = 0;

    for (unsigned i = 0; i < length; i++)
    {
        avg += array[i];
    }
    if (length)
    {
        avg = avg / length;
    }
    return avg;
}