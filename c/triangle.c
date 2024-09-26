#include <string.h>
char triangle(const char *clrs)
{
    int len = strlen(clrs);
    char *colors = malloc(sizeof(char) * len);

    if (len == 1)
    {
        return *clrs;
    }

    for (int i = 0; i < len - 1; i++)
    {
        if (clrs[i] == clrs[i + 1])
        {
            colors[i] = clrs[i]; // Same color, remains the same
        }
        else if ((clrs[i] == 'G' && clrs[i + 1] == 'B') || (clrs[i] == 'B' && clrs[i + 1] == 'G'))
        {
            colors[i] = 'R';
        }
        else if ((clrs[i] == 'G' && clrs[i + 1] == 'R') || (clrs[i] == 'R' && clrs[i + 1] == 'G'))
        {
            colors[i] = 'B';
        }
        else if ((clrs[i] == 'B' && clrs[i + 1] == 'R') || (clrs[i] == 'R' && clrs[i + 1] == 'B'))
        {
            colors[i] = 'G';
        }
    }
    colors[len - 1] = '\0';

    char result = triangle(colors);
    free(colors);

    return result;
}