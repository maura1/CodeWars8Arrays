/*Given two arrays, merge them and return the sum of the elements

1. Use the spread operator to merge the two arrays, the output will be a flat array
2. Use an arrow function and the higher function reduce() to sum together the elements

An example of the input and output:
[1,2,3,4],[4,5,6] output 21
[-1,-2,-3,],[-4,-5,-6] output -21*/

const arrayPlusArray = (arr1, arr2) =>
    [...arr1, ...arr2].reduce((a, b) => a + b);
