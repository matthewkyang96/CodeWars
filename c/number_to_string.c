#include <stdlib.h>

//  return a dynamically allocated C-string
//  this output will be freed by the tester

char *number_to_string(int number)
{
    int numcpy = number;
    int digit_count = 0;

    if (number == 0)
    {
        digit_count = 1;
    }
    else if (number < 0)
    {
        digit_count++;
        numcpy = -numcpy;
    }
    else
    {
        digit_count = 0;
    }

    while (numcpy != 0)
    {
        numcpy /= 10;
        digit_count++;
    }

    char *ret = (char *)malloc(sizeof(char) * (digit_count + 1));

    ret[digit_count] = '\0';

    if (number == 0)
    {
        ret[0] = '0';
        return ret;
    }

    int is_neg = number < 0;
    if (is_neg)
    {
        number = -number;
    }

    for (int i = digit_count - 1; i >= 0; i--)
    {
        if (is_neg && (i == 0))
        {
            ret[0] = '-';
        }
        else
        {
            ret[i] = (number % 10) + '0';
            number /= 10;
        }
    }

    return ret;
}