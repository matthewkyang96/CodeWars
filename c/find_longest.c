#include <stddef.h>
int count_digits(int number)
{
    int digits = 0;
    while (number != 0)
    {
        number /= 10;
        digits++;
    }

    return digits;
}

int find_longest(int *numbers, size_t numbers_size)
{
    int digits = 0;
    int index = 0;
    for (int i = 0; i < numbers_size; i++)
    {
        int num = numbers[i];
        if (count_digits(num) > digits)
        {
            digits = count_digits(num);
            index = i;
        }
    }
    return numbers[index];
}