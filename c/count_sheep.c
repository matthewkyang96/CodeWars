#include <stdlib.h>
#include <string.h>

char *count_sheep(unsigned n)
{

    char *result = malloc(sizeof(char) * n * (9 + 2) + 1);
    result[0] = '\0';
    for (unsigned i = 1; i <= n; i++)
    {
        char buffer[16];
        snprintf(buffer, sizeof(buffer), "%d sheep...", i);
        strcat(result, buffer);
    }

    return result; // return a heap-allocated string
}