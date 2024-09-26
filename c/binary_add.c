#include <stdio.h>

char *binary_add(unsigned a, unsigned b, char *binary)
{
    unsigned long long sum = (unsigned long long)a + (unsigned long long)b; // Use unsigned long long to handle large sums
    if (sum == 0)
    {
        snprintf(binary, 2, "0"); // Write "0" to the binary buffer
        return binary;
    }

    char buffer[65]; // Temporary buffer to store binary digits in reverse for 64-bit numbers
    int i = 0;

    while (sum != 0)
    {
        buffer[i++] = (sum % 2) ? '1' : '0'; // Get each binary digit
        sum >>= 1;                           // Shift right to process the next bit
    }

    int index = 0;

    // Reverse the order of digits to get the correct binary representation
    while (--i >= 0)
    {
        binary[index++] = buffer[i];
    }

    binary[index] = '\0'; // Null-terminate the binary string

    return binary;
}