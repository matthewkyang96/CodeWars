void neutralize(const char *s1, const char *s2, char *s3)
{
    char *cpys3 = s3;
    while (*s1 && *s2)
    {
        if (*s1 + *s2 == 43 * 2)
        {
            *cpys3++ = '+';
        }
        else if (*s1 + *s2 == 45 * 2)
        {
            *cpys3++ = '-';
        }
        else
        {
            *cpys3++ = '0';
        }
        s1++;
        s2++;
    }
    *cpys3 = '\0';
}