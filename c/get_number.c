unsigned get_number(void)
{
    static unsigned num = 0;

    num = num ? num * 2 : 1;

    return num;
}