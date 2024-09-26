#include <string.h>

void filter_friends(const char *names[])
{
    int i;
    int j = 0;

    for (i = 0; names[i] != NULL; i++)
    {
        if (strlen(names[i]) == 4)
        {
            names[j] = names[i];
            j++;
        }
    }
    names[j] = NULL;
}