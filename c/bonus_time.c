#include <stdbool.h>
#include <stdlib.h>

typedef unsigned long long ull;

char *bonus_time(ull salary, bool bonus)
{
    char *money;

    asprintf(&money, "$%llu", bonus ? salary * 10 : salary);

    return money;
}