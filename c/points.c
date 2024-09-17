#include <string.h>
#include <stdio.h>

int points(const char *const games[10])
{
    const char *delim = ":";
    char *token;
    char buffer[4];

    int points = 0;
    int x, y;

    for (int i = 0; i < 10; i++)
    {
        strcpy(buffer, games[i]);
        token = strtok(buffer, delim);
        x = *token - '0';

        token = strtok(NULL, delim);
        y = *token - '0';

        if (x > y)
        {
            points += 3;
        }
        else if (x == y)
        {
            points++;
        }
    }

    return points;
}