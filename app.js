/*Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

//Using if/else

function bmi(weight, height) {
    var result = weight / Math.pow(height, 2);

    if (result <= 18.5) {
        return 'Underweight';
    } else if (result <= 25) {
        return 'Normal';
    } else if (result <= 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

//Using arrow function with the tenary operator. When using the arrow function the 'return' is implicit.
const bmi = (weight, height, bmi = weight / height ** 2) =>
    bmi <= 18.5
        ? 'Underweight'
        : bmi <= 25
        ? 'Normal'
        : bmi <= 30
        ? 'Overweight'
        : 'Obese';
