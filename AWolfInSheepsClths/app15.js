/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1 */

//using reverse and indexOF
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

function warnTheSheep(queue) {
    return queue[queue.length - 1] === 'wolf'
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${
              queue.length - (queue.indexOf('wolf') + 1)
          }! You are about to be eaten by a wolf!`;
}

//Using arrow function with reverse() and indexOf
