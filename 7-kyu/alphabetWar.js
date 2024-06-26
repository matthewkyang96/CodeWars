/* Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins! */

//Solution
function alphabetWar(fight) {
  let leftSidePower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  let rightSidePower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let left = 0;
  let right = 0;
  fight.split("").forEach((char) => {
    if (char in leftSidePower) {
      left += leftSidePower[char];
    } else if (char in rightSidePower) {
      right += rightSidePower[char];
    }
  });

  if (left == right) {
    return "Let's fight again!";
  }

  if (left > right) {
    return "Left side wins!";
  }

  return "Right side wins!";
}
