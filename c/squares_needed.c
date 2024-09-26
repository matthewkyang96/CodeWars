typedef unsigned long long ull;

ull squares_needed(ull grains)
{

    int cell = 0;
    while (grains > 0)
    {
        grains >>= 1;
        cell++;
    }

    return cell;
}