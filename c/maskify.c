char *maskify(char *masked, const char *string)
{
    int len = strlen(string);
    *masked = '\0'; // write to masked
    int i;
    for (i = 0; i < len; i++)
    {
        if (i < len - 4)
        {
            masked[i] = '#';
        }
        else
        {
            masked[i] = string[i];
        }
    }
    masked[i] = '\0';

    return masked; // return it
}