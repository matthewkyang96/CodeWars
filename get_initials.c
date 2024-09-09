char *get_initials(const char *full_name, char initials[4])
{
    initials[0] = toupper(full_name[0]);
    initials[1] = '.';
    for (int i = 0; full_name[i] != '\0'; i++)
    {
        if (full_name[i] == ' ')
        {
            initials[2] = toupper(full_name[i + 1]);
            break;
        }
    }

    initials[3] = '\0'; // write to initials
    return initials;    // return it
}