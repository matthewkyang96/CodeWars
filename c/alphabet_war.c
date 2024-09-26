char *alphabet_war(const char *fight)
{
    int left = 0, right = 0;
    while (*fight)
    {
        switch (*fight++)
        {
        case 'w':
            left += 4;
            break;
        case 'p':
            left += 3;
            break;
        case 'b':
            left += 2;
            break;
        case 's':
            left += 1;
            break;
        case 'm':
            right += 4;
            break;
        case 'q':
            right += 3;
            break;
        case 'd':
            right += 2;
            break;
        case 'z':
            right += 1;
            break;
        }
    }

    if (left > right)
    {
        return "Left side wins!";
    }
    else if (right > left)
    {
        return "Right side wins!";
    }

    return "Let's fight again!";
}