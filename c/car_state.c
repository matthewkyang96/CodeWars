enum outcome
{
    WOOHOO,
    CAR_DEAD
};

enum outcome car_state(const char *road)
{
    int count = 0;
    while (*road)
    {
        if (*road == 'n')
        {
            count++;
        }
        road++;
    }

    return count <= 15 ? WOOHOO : CAR_DEAD;
}