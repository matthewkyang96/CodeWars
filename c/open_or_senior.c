#include <stddef.h>

enum membership
{
    OPEN = 1,
    SENIOR = 2
};

void open_or_senior(size_t n, const int members[n][2], enum membership memberships[n])
{
    // write to the memberships[] array
    for (int i = 0; i < n; i++)
    {
        if (members[i][0] >= 55 && members[i][1] > 7)
        {
            memberships[i] = SENIOR;
        }
        else
        {
            memberships[i] = OPEN;
        }
    }
}