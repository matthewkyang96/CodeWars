int get_number_from_string(const char *src)
{
    int num = 0;
    while (*src)
    {
        if (*src > 47 && *src < 58)
        {
            num *= 10;
            num += *src - '0';
        }
        src++;
    }
    return num;
}