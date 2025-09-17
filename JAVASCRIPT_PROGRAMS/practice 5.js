console.log("This is the practice no 5 program");

// This is the program 1
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// function CalculateDaysInMonth(month, year) {
//   let days;
//   if (month === 2) {
//     if (year % 4 == 0) {
//       console.log("The year is leap year");
//       days = 29;
//     } else {
//       console.log("The year is not the leap");
//       days = 28;
//     }
//   } else if ([4, 6, 9, 11].includes(month)) {
//     days = 30;
//   } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
//     days = 31;
//   } else {
//     console.log("Inavlid Month");
//     return;
//   }
//   console.log(monthNames[month - 1], year, "has", days, "days.");
//   return;
// }
// CalculateDaysInMonth(12, 2028);

// This is the program no 2
// function InterestRateCalculator(principle, rate, time) {
//   Interest_Rate = (principle * rate * time) / 100;
//   final_amount = principle + Interest_Rate;
//   console.log("The principle amount is:", principle);
//   console.log(
//     "The total interest rate w.r.t to your amount according to the interest rate",
//     rate,
//     "% is:",
//     Interest_Rate
//   );
//   console.log("The total amount including the interest rate is:", final_amount);
//   return;
// }
// let principle = 20500;
// rate = 12;
// time = 5;
// InterestRateCalculator(principle, rate, time);

// // Even and odd numbers addition from 1 to n is
// function isEven(number) {
//   return number % 2 === 0;
// }
// function countEvenOddNumbers(count) {
//   let EvenCount = 0;
//   let OddCount = 0;
//   for (let i = 0; i <= count; i++) {
//     if (isEven(i)) {
//       EvenCount += i;
//     } else {
//       OddCount += i;
//     }
//   }
//   console.log("The even count is:", EvenCount);
//   console.log("The odd count is:", OddCount);
//   return;
// }
// let count = 20;
// countEvenOddNumbers(count);

function ConvertTemp(value, unit) {
  if (unit === "celcius") {
    console.log("The temp is coverted from celcius to farenheit");
    farenheit = (value * 9) / 5 + 32;
    console.log(value, "celcius", "=", farenheit.toFixed(2), "farenheit");
  } else {
    console.log("The unot is converted from farenheit to celcius.");
    celcius = ((value - 32) * 5) / 9;
    console.log(value, "farenheit", "=", celcius.toFixed(2) + "celcius");
  }
  return;
}
ConvertTemp(98.6, "farenheit");
