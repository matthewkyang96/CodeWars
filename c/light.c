#include <stddef.h>
enum light
{
    GREEN,
    YELLOW,
    RED
};

enum light update_light(enum light light)
{
    switch (light)
    {
    case (GREEN):
        return YELLOW;
    case (YELLOW):
        return RED;
    case (RED):
        return GREEN;
    default:
        break;
    }
    return NULL;
}