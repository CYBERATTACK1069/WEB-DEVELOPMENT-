console.log(
  "This is the practice no 4 program containing only limited practice program\n"
);

// Program to check the day of the week
// let day_number = 5;
// let day_name;
// if (day_number === 1) {
//   day_name = "Monday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else if (day_number === 2) {
//   day_name = "Tuesday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else if (day_number === 3) {
//   day_name = "Wednesday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else if (day_number === 4) {
//   day_name = "Thursday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else if (day_number === 5) {
//   day_name = "Friday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else if (day_number === 6) {
//   day_name = "Saturday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else if (day_number === 7) {
//   day_name = "Sunday";
//   console.log("The day number is:", day_number, "and the day is:", day_name);
// } else {
//   console.log("You entered an invalid choice");
// }

// Generate a multiplication table for a number
// let number = 70;
// for (let i = 1; i <= 10; i++) {
//   console.log(number + " * " + i + " = " + number * i);
// }

// Similar to your previous shopping cart example but with more conditions
// let item1_price = 43.99;
// let item2_price = 36.55;
// let item3_price = 26.66;
// let total_items = 3;
// let total_price = item1_price + item2_price + item3_price;
// let final_price;
// let discount;
// if (total_price >= 90) {
//   discount = total_price * 0.2;
//   console.log("You are qualified for the 20% discount.");
// } else if (total_price >= 50) {
//   discount = total_price * 0.05; //20% discount
//   console.log("You ar qualified for 5% discount.");
// } else {
//   console.log("PLz enter the correct amount.");
// }
// final_price = total_price - discount;
// console.log("The total price without the discount is:", total_price.toFixed(2));
// console.log("The total items ordered by you are:", total_items.toFixed(2));
// console.log("The total discount you got is:", discount.toFixed(2));
// console.log(
//   "The final price including the discount is: PKR",
//   final_price.toFixed(2)
// );

// Print a number pattern using nested loops
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + j + "-";
//   }
//   console.log(row);
// }

// simple atm simulator for cash withdrawl
// let account_balance = 1200.0;
// let withdrawl_amount = 166.57;
// // let reamining_balance = 0;
// console.log("The total account balance is:", account_balance.toFixed(2));
// console.log("\t");
// if (withdrawl_amount <= account_balance) {
//   account_balance -= withdrawl_amount;
//   console.log(
//     "The amount",
//     withdrawl_amount.toFixed(2),
//     "has been successfully credited from your account"
//   );
//   console.log("The remianing balance is:", account_balance.toFixed(2));
// } else {
//   console.log("Insufficient funds!Withdrawl failed.");
//   console.log(
//     "You need",
//     (withdrawl_amount - account_balance).toFixed(2),
//     "more."
//   );
// }

// calculate the sum of even and odd numbers frok 1 to n
// let n = 230;
// let even_sum = 0;
// let odd_sum = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     even_sum += i;
//   } else {
//     odd_sum += i;
//   }
// }
// console.log("The sum of even number from 1 to", n, "is:", even_sum);
// console.log("THe sum of odd numbers from 1 to", n, "is:", odd_sum);

// Calculate the no of days in a single given month
// let month = 10;
// let year = 2028;
// let days = 0;
// if (month === 2) {
//   if (year % 4 == 0) {
//     days = 29;
//     console.log("The year is a leap year");
//   } else {
//     days = 28;
//   }
// } else if ([4, 6, 9, 11].includes(month)) {
//   days = 30;
// } else if ([1, 3, 5, 78, 10, 12].includes(month)) {
//   days = 31;
// } else {
//   console.log("Invalid Month");
// }
// let monthNames = [
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
// console.log(monthNames[month - 1], year, "has", days, "Days.");

// Calculate the simple interest on the loan ot investment
// let principle = 1200;
// let rate = 8;
// let time = 2;
// let simpleInterest = (principle * rate * time) / 100;
// let new_total_amount = principle + simpleInterest;
// console.log("The amount without interest is:", principle);
// console.log("The total interest w.r.t to the principle is:", simpleInterest);
// console.log("The total amount including the interest is:", new_total_amount);

// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log("\nFruit list:");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + 1 + ". " + fruits[i]);
// }

let marks = 90;
let Marks = marks > 90 ? "Passed" : "Fail";
console.log(Marks);
