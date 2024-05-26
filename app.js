const markHeight = 1.69;
const markMass = 78;
const johnHight = 1.95;
const johnMass = 92;

function bmiGenarator(mass, height) {
    return mass / height ** 2;
}

const markHigherBMI = bmiGenarator(markMass, markHeight) > bmiGenarator(johnMass, johnHight);
const markHigherBMI2 = bmiGenarator(95, 1.88) > bmiGenarator(85, 1.76);
// console.log(markHigherBMI);
// console.log(markHigherBMI2);

//Challenge --2
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI) {
    console.log(`Mark's
    BMI (${parseFloat(bmiGenarator(markMass, markHeight)).toFixed(2)}) is higher than John's (${parseFloat(bmiGenarator(johnMass, johnHight)).toFixed(2)})`);
} else {
    console.log(`John's
    BMI (${parseFloat(bmiGenarator(johnMass, johnHight)).toFixed(2)}) is higher than Mark's (${parseFloat(bmiGenarator(markMass, markHeight)).toFixed(2)})`);
}











