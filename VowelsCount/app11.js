/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.split('');

    strArr.forEach((el) => {
        for (let i = 0; i < vowels.length; i++) {
            if (el === vowels[i]) {
                vowelsCount++;
            }
        }
    });
    return vowelsCount;
}

//Using the arrow function and filter

function getCount(str) {
    return str.split('').filter((el) => 'aeiouAEIOU'.includes(el)).length;
}
