/*You will need to copy paperwork for classmates.
You will be given the number of classmates and the number of pages per classmate.
There might be no pages, so that must be taken into account

Examples
n= 5, m=5: 25
n=-5, m=5:  0 

1. Use an arrow function with a tenary operator, check if there are no papers to be printed, if there are none return 0, otherwise multiply the number of classmates with the number of papers per student*/

const paperwork = (n, m) => (n <= 0 || m <= 0 ? 0 : n * m);
