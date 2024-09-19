void remove_exclamation_marks(const char *str_in, char *str_out)
{
    char *ptr = str_in;
    char *ptr2 = str_out;
    while (*ptr)
    {
        if (*ptr != '!')
        {
            *ptr2 = *ptr;
            ptr2++;
        }
        ptr++;
    }
    *ptr2 = '\0';
}