#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

bool validate_pin(const char *pin)
{
    int pin_len = strlen(pin);
    char *nums = "0123456789";

    if (pin_len == 4 || pin_len == 6)
    {
        for (int i = 0; i < pin_len; i++)
        {
            if (strchr(nums, pin[i]) == NULL)
            {
                return false;
            }
        }
        return true;
    }

    return false;
}