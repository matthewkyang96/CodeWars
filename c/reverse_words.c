#include <stdlib.h>

char *reverse_words(const char *words, size_t length, char *reversed)
{
    // Allocate memory for a copy of 'words'
    char *wordscpy = malloc(length + 1); // +1 for null terminator
    if (!wordscpy)
        return NULL; // Handle memory allocation failure
    memcpy(wordscpy, words, length);
    wordscpy[length] = '\0'; // Null-terminate the copied string

    // Tokenize the string to extract words
    char *arr[100]; // Assuming at most 100 words
    char *token = strtok(wordscpy, " ");
    int i = 0;
    while (token != NULL)
    {
        arr[i] = token; // Store each token (word) in the array
        i++;
        token = strtok(NULL, " ");
    }

    // Build the reversed string
    reversed[0] = '\0'; // Start with an empty string
    for (int j = i - 1; j >= 0; j--)
    {
        strcat(reversed, arr[j]); // Concatenate the word
        if (j > 0)
        {
            strcat(reversed, " "); // Add space between words
        }
    }

    // Free the copied memory
    free(wordscpy);

    return reversed;
}