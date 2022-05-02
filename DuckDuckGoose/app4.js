/*The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name*/
//This of the elements as if they were a circle, when everyones head is tapped, then they go to the start of the circle again. No.1 will return the first element of the circle(a), number 2 the second(b), number 5 will tap all four heads in the circle, begin the circle again therefore the fifth head tapped will be (a). Index begins at 0 in arrays therefor we need to minus 1
const duckDuckGoose = (players, goose) =>
    players[(goose - 1) % players.length].name;
