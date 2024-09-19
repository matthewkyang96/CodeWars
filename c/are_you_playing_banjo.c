#include <stdlib.h>
#include <string.h>

char *are_you_playing_banjo(const char *name)
{
    char *sent = malloc(sizeof(char) * strlen(name) * 20 + 1);
    char *plays = " plays banjo";
    char *not_plays = " does not play banjo";

    strcpy(sent, name);

    if (tolower(name[0]) == 'r')
    {
        strcpy(sent + strlen(name), plays);
    }
    else
    {
        strcpy(sent + strlen(name), not_plays);
    }
    return sent; // memory will be freed
}