/*
The function will accept an array as a parameter
Each numbrer in the array will be checked, if the number can be rooted, return the root, otherwise square the number.
Return a new array with the results

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The first element of the array has a square root of 2, so 2 is returned
The fourth element '7' does not have a square root so 7 is squared (7*7)

1.Use the higher order function map() to iterate and apply a function to each element of the array.
2.Math.sqrt() checks if the element has a square root 
3.Using the modulus % function,if  % 1 return true means it does not have a square root
4.If the item does not have a square root, square the number,ie. multiply the number by itself
5.Otherwise return the square root of the number using Math.sqrt*/

const squareOrSquareRoot = (array) =>
    array.map((num) => (Math.sqrt(num) % 1 ? num * num : Math.sqrt(num)));
