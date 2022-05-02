/*Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base*/

//using the arrow function.Typeof is used to check that the element is a number,and the tenary opoerator is used to give alternatives for an element that if a number or not The reduce() is used to sum the arrray.
const arr2bin = (arr) =>
    arr
        .reduce((acc, num) => (typeof num === 'number' ? acc + num : acc), 0)
        .toString(2);

//Another option is the use the filter()method to select only number elements
num;
