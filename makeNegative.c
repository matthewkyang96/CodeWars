int makeNegative(int num)
{
    if ((num >> sizeof(int) * 8 - 1) & 1)
    {
        return num;
    }

    return ~num + 1;
}