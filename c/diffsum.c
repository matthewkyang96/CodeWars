int diffsum(const int *arr, size_t n)
{
    int min = arr[0];
    int max = arr[0];

    for (size_t i = 1; i < n; i++)
    {
        if (min > arr[i])
        {
            min = arr[i];
        }

        if (max < arr[i])
        {
            max = arr[i];
        }
    }

    return max - min;
}