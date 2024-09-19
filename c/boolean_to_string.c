#include <stdbool.h>

// The returned string should be statically allocated and it won't be freed
const char *boolean_to_string(bool b)
{
    if (b)
    {
        return "true";
    }
    return "false"; // your code here
}