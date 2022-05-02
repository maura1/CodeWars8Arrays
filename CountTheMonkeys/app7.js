/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]*/

function monkeyCount(n) {
    let arr = [];
    for (let num = 1; num <= n; num++) {
        arr.push(num);
    }
    return arr;
}

console.log(monkeyCount(5));

//Using arrow function and 'from'
//from() method returns an array from any object with a length property

const monkeyCount = (arrLength) =>
    Array.from(Array(arrLength), (_, i) => i + 1);

//Use the spread operator and map()
var monkeyCount1 = (arrLenght) => [...Array(arrLenght)].map((x, i) => i + 1);
