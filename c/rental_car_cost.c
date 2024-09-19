unsigned rental_car_cost(unsigned d)
{
    unsigned tot = d * 40;
    if (d >= 7)
    {
        return tot - 50;
    }
    else if (d >= 3)
    {
        return tot - 20;
    }
    return tot;
}