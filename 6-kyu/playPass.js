/* Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

https://www.codewars.com/kata/559536379512a64472000053 */


//Solution
function playPass(s, n) {
    return s.split('').map((char,i)=>{
        let charCode = char.charCodeAt(0)
        
        //Shift char by n
        if(charCode >= 65 && charCode <= 90){
          if((charCode + n) > 90){
            char = String.fromCharCode((charCode - 64 + n) % 26 + 64);
          } else {
            char = String.fromCharCode(charCode + n)
          }
        }
        
        //Replace digit by its complement to 9
        if(!isNaN(parseInt(char))){
          char = (9 - parseInt(char)).toString()
        }
      
        if( i % 2 == 1){
          char = char.toLowerCase()
        }
        
        return char
        
    }).reverse().join('')
  }