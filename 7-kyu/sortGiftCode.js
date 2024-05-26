function sortGiftCode(code){
    let x = code.split('')
    x.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
   return x.join('')
 }