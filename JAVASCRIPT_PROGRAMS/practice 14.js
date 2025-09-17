function evenORodd(number) {
  if (number === 0) {
    result = "0";
  } else if (number % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
}
let num = 5;
let no = evenORodd(num);
console.log(`\nThe given number ${num} is ${no}.\n`);
