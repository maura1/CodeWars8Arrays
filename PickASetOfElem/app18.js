/*Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];*/

//The slice method return a shallow copy of a protion of an array into a new array object selected from start to end(end is not included).Start and end represent index items. array(2,4)will start at index two and print out to index 4, but index 4 will not be included in the printout.
//With n = 1 we will print out the first index i.e. index[0]

const first = (arr, n=1)=>arr.slice(0,n)
