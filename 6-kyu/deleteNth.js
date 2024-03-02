/* Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

With list [20,37,20,21] and number 1, the result would be [20,37,21].

https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

*/

//Solution

function deleteNth(arr, n) {

    let cache = {};

    return arr.filter((number) => {
        cache[number] = (cache[number] || 0) + 1;
        return cache[number] <= n;
    });

}