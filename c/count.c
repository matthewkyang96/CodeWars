#define COUNTS_SIZE 128

//  assign char counts to the provided pre-allocated array
//  pre-existing values in array aren't guaranteed to be 0
//  from test string: "aaa", counts['a'] should be == to 3

void count(const char *string, unsigned counts[COUNTS_SIZE])
{
    memset(counts, 0, COUNTS_SIZE * sizeof(unsigned));
    while (*string)
    {
        counts[*string]++;
        string++;
    }
}