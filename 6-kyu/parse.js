// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  let res = 0;
  let arr = [];
  data.split('').forEach(op =>{
    switch(op){
        case 'i':
          res++;
          break;
        case 'd':
          res--
          break;
        case 's':
          res = res * res
          break;
        case 'o':
          arr.push(res)
          break;
    }
  })
  
  return arr
  
}