#include <stdbool.h>

bool xo (const char* str)
{
  int count = 0;
  do{
    char norm = tolower(*str);
    if(norm == 'x'){
      count++;
    } else if(norm == 'o'){
      count--;
    }
  } while(*str++);
  
  return count ? false : true;
}