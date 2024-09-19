char *correct(char *string)
{
    char *ptr = string;
    while (*ptr)
    {
        if (*ptr == '0')
        {
            *ptr = 'O';
        }
        if (*ptr == '5')
        {
            *ptr = 'S';
        }
        if (*ptr == '1')
        {
            *ptr = 'I';
        }
        ptr++;
    }

    return string;
};
/* Please modify the string in-place and return it.
 */