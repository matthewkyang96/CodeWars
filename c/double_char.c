char *double_char(const char *string, char *doubled)
{
    char *ptr = doubled;

    while (*string)
    {
        *(ptr++) = *string;
        *(ptr++) = *string;
        string++;
    }

    *ptr = '\0';

    return doubled; // return it
}