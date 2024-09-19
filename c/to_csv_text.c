#include <stdlib.h>

char *to_csv_text(size_t rows, size_t cols, const int matrix[rows][cols])
{
    /*int commas = (cols - 1) * rows;
    int newlines = rows - 1;
    int negative = 0;

    for(int i = 0; i < rows; i++){
      for(int j = 0; j < cols; j++){
        if(matrix[i][j] < 0){
          negative++;
        }
      }
    }

    int size  = commas + newlines + negative + 1;

    char* result = malloc(sizeof(char) * commas + newlines + );*/
    char *result = malloc(500);
    result[0] = '\0';

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            char buffer[16];
            snprintf(buffer, sizeof(buffer), "%d", matrix[i][j]);
            strcat(result, buffer);

            if (j < cols - 1)
            {
                strcat(result, ",");
            }
        }

        if (i < rows - 1)
        {
            strcat(result, "\n");
        }
    }

    return result;
}