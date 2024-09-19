#include <stddef.h>

char *reverse_words (const char *words, size_t length, char *reversed)
{
  //initialize reversed array with empty spaces
  memset(reversed, ' ', length);
  
  char* pointer_space; // space pointer
  
  //initialize pointer 1 address beyond the end of the length
  char* pointer_reversedstr = &reversed[length + 1];
   
  do{
    pointer_space = strchr(words, ' '); //point to the address of the first occurence of ' ' character
    int word_len;
    if(pointer_space){
      word_len = pointer_space - words; // pointer arithmetic to find word length
    } else {
      word_len = strlen(words);
    }
    pointer_reversedstr -= word_len + 1;
    memcpy(pointer_reversedstr, words, word_len);
    words += word_len + 1;

  } while(pointer_space);
  
  reversed[length] = '\0';

	return reversed;
}