/*[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]*/

function multipleOfIndex(arr) {
    // create a new empty array to add the filtered elements to
    let newArr = [];
    // loop over the array
    for (let i = 0; i < arr.length; i++) {
        // check if the current element (arr[i]) is a multiple of it's index (i) and if it is add it to the newArr
        if (arr[i] % i === 0) {
            // add it to the resulting array
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));

// Using the arrow function with filter()
const multipleOfIndex = (array) =>
    array.filter((elem, idx) => elem % idx === 0);
