
// const bill = 430
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
// console.log(`the bill was ${bill}, the tip was ${tip}, the total amount is ${bill + tip}.`);






// function calc() {
//     const saleAmount = document.querySelector('#saleAmount').value
//     const percentage = document.querySelector('#royalties').value/100
//     const royalties = saleAmount * percentage
//     const output = document.querySelector('#output')
//     output.innerHTML = `the selling amount = ${saleAmount} sol, the royalties = ${royalties} sol, the total amount credited to your wallet will be ${saleAmount - royalties} sol.`
//     // console.log(`the selling amount was ${saleAmount} sol, the royalties was ${royalties} sol, the total amount credited to your wallet will be ${saleAmount - royalties} sol.`);
//     return;
// }


// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphines = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 49)

// function checkWinner(avgDolphines, avgKoalas) {
    
//     if (avgDolphines >= 2 * avgKoalas) {
//         console.log(`Dolphines win (${avgDolphines} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphines) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
//     } else {
//         console.log('no winner dictated');
//     }
// }
// console.log(checkWinner(avgDolphines, avgKoalas));
// console.log(avgDolphines);
// console.log(avgKoalas);




// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])];

// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//        return this.mass / this.height ** 2;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//      }
// }

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();

// console.log(mark);
// console.log(john);
// console.log(markBMI);
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) .`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) .`)
// }


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 75, 234, 222, 95, 455, 231, 100, 567, 700]
// const tips = []
// const totals  = []

// for (i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip)
//     totals.push(tip + bills[i])
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (i=0; i < arr.length; i++) {
//         // sum = sum + arr[i]
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));


const printForecast = function (arr) {
    let str = '';
    for (i = 0; i < arr.length; i++) {
        let dayCount = i + 1;
        str += `${arr[i]}°C in ${dayCount} days ...  `;
    }
    console.log(str);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);