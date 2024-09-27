int nbYear(int p0, double percent, int aug, int p)
{

    int year = 0;
    while (p0 < p)
    {
        year++;
        p0 += p0 * percent / 100 + aug;
    }

    return year;
}