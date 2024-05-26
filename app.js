const markHeight = 1.69;
const markMass = 78;
const johnHight = 1.95;
const johnMass = 92;

function bmiGenarator(mass, height) {
    return mass / height ** 2;
}

const markHigherBMI = bmiGenarator(markMass, markHeight) > bmiGenarator(johnMass, johnHight);
const markHigherBMI2 = bmiGenarator(95, 1.88) > bmiGenarator(85, 1.76);
console.log(markHigherBMI);
console.log(markHigherBMI2);