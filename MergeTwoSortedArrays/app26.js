/*Given two sorted arrays, both with integers, merge them into one array sorted in ascending order. Remove duplicate integers.

1. Using the spread operator the arrays can be flattened into one array.
2. Use the sort function to sort in ascending order.
3. Use the new Set function to remove duplicate integers
4. Use Array.from or the spread operator to create a shadow copy of the array 

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]*/

const mergeArrays = (arr1, arr2) =>
    Array.from(new Set([...arr1, ...arr2].sort((a, b) => a - b)));

//
const mergeArrays1 = (arr1, arr2) =>
    [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
