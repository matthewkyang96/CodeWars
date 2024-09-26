long long filter_string(const char *value)
{
    long long d = 1;
    long long num = 0;
    char *ptr = value + strlen(value);

    while (ptr >= value)
    {
        if (*ptr >= '0' && *ptr <= '9')
        {
            long long val = *ptr - '0';
            num += val * d;
            d *= 10;
        }
        ptr--;
    }

    return num; // complete this function :)
}