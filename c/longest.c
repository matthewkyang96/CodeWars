#include <stdlib.h>
#include <string.h>

int compare(const void *a, const void *b)
{
    return (*(char *)a - *(char *)b);
}

char *longest(const char *s1, const char *s2)
{
    int s1_len = strlen(s1);
    int s2_len = strlen(s2);

    char *res = malloc(sizeof(char) * (s1_len + s2_len + 1));
    memset(res, 0, (s1_len + s2_len + 1));

    int i;
    int j;
    int k = 0;

    for (i = 0; i < s1_len; i++)
    {
        if (strchr(res, s1[i]) == NULL)
        {
            res[k++] = s1[i];
        }
    }

    for (j = 0; j < s2_len; j++)
    {
        if (strchr(res, s2[j]) == NULL)
        {
            res[k++] = s2[j];
        }
    }
    res[k] = '\0';
    qsort(res, strlen(res), sizeof(char), compare);

    return res;
}