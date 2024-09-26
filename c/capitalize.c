#include <stdlib.h>
#include <string.h>

char **capitalize(const char *test_str)
{
    int len = strlen(test_str);

    char **res = malloc(2 * sizeof(char *));
    res[0] = malloc((len + 1) * sizeof(char));
    res[1] = malloc((len + 1) * sizeof(char));

    int i;
    for (i = 0; i < len; i++)
    {
        if (i % 2)
        {
            res[1][i] = toupper(test_str[i]);
            res[0][i] = test_str[i];
        }
        else
        {
            res[0][i] = toupper(test_str[i]);
            res[1][i] = test_str[i];
        }
    }
    res[0][i] = 0;
    res[1][i] = 0;

    return res;
}