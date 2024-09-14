char *remove_char(char *dst, const char *src)
{
    int i;
    for (i = 1; src[i] != '\0'; i++)
    {
        dst[i - 1] = src[i];
    }

    dst[i - 2] = '\0';

    return dst;
}