void count_by(unsigned x, unsigned n, unsigned result[n])
{
    // fill the array result passed as argument with your answer
    unsigned num = 0;
    unsigned *ptr = result;
    while (n != 0)
    {
        num += x;
        *ptr++ = num;
        n--;
    }
}