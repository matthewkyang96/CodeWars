char *switcheroo(char *string)
{
    for (int i = 0; i < strlen(string); i++)
    {
        if (string[i] == 'a')
        {
            string[i] = 'b';
        }
        else if (string[i] == 'b')
        {
            string[i] = 'a';
        }
    }
    return string;
}