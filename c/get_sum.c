int get_sum(int a, int b)
{
    if (a > b)
    {
        int temp = a;
        a = b;
        b = temp;
    }

    int sumB = b * (b + 1) / 2;
    int sumA = (a - 1) * a / 2;

    return sumB - sumA;
}