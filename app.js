// const markHeight = 1.69;
// const markMass = 78;
// const johnHight = 1.95;
// const johnMass = 92;
//
// function bmiGenarator(mass, height) {
//     return mass / height ** 2;
// }
//
// const markHigherBMI = bmiGenarator(markMass, markHeight) > bmiGenarator(johnMass, johnHight);
// const markHigherBMI2 = bmiGenarator(95, 1.88) > bmiGenarator(85, 1.76);
// console.log(markHigherBMI);
// console.log(markHigherBMI2);

//Challenge --2
// if (markHigherBMI) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }
//
// if (markHigherBMI) {
//     console.log(`Mark's
//     BMI (${parseFloat(bmiGenarator(markMass, markHeight)).toFixed(2)}) is higher than John's (${parseFloat(bmiGenarator(johnMass, johnHight)).toFixed(2)})`);
// } else {
//     console.log(`John's
//     BMI (${parseFloat(bmiGenarator(johnMass, johnHight)).toFixed(2)}) is higher than Mark's (${parseFloat(bmiGenarator(markMass, markHeight)).toFixed(2)})`);
// }


// Challenge --3
// const avgScore = function (score) {
//     return score.reduce((acc, a) => acc + a, 0) / score.length;
// };
//
// const dolphins = [96, 108, 89];
// const dolphinsAvg = parseFloat(avgScore(dolphins)).toFixed(2);
// const koalas = [88, 91, 110];
// const koalasAvg = parseFloat(avgScore(koalas)).toFixed(2);
//
// if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
//     console.log(`Dolphins Win`);
// } else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
//     console.log(`koalas Win`);
// } else {
//     console.log(`Match drawn`);
// }

//
// Challenge ---4
// function tipCalc(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     return `The bill was ${bill}, the tip was ${+parseFloat(tip).toFixed(2)}, and the total value ${bill + +parseFloat(tip).toFixed(2)}`;
// }
//
// console.log(tipCalc(275));
// console.log(tipCalc(40));
// console.log(tipCalc(430));

// Challenge --5

// const calcTeamAvg = (scoreArr) => {
//     return scoreArr.reduce((acc, a) => acc + a, 0) / scoreArr.length;
// };
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins}vs${avgKoalas}) `);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas  win (${avgKoalas}vs${avgDolphins})`);
//     } else {
//         console.log(`No result`);
//     }
// };
// const avgDolphins1 = calcTeamAvg([44, 23, 71]);
// const avgDolphins2 = calcTeamAvg([85, 54, 41]);
// const avgKoalas1 = calcTeamAvg([65, 54, 49]);
// const avgKoalas2 = calcTeamAvg([23, 34, 27]);
//
// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(avgDolphins2, avgKoalas2);

