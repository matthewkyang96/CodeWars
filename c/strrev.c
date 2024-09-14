char *strrev(char *string)
{
    int str_length = strlen(string);

    for (int i = 0; i < str_length / 2; i++)
    {
        char temp = string[i];
        string[i] = string[str_length - 1 - i];
        string[str_length - 1 - i] = temp;
    }

    return string; // reverse the string in place and return it
}