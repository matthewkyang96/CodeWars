#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

typedef unsigned long long ull;

char *bonus_time(ull salary, bool bonus)
{
    char *result = malloc(sizeof(char) * 1000);
    result[0] = '\0';
    if (bonus)
    {
        salary *= 10;
    }
    sprintf(result, "$%llu", salary);

    return result;
}