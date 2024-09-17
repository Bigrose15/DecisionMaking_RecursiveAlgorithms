//Decision Making (if-else and switch)

//Leap Year Checker

function isLeapYear(year) {
  if (year % 4 == 0) return year + " LEAP YEAR"; //if the year is divisible by 4, it is a leap year
  if (year % 100 !== 0) return year + " is not a leap year"; //if the year is not divisble by 100, it is not a leap year
  if (year % 400 == 0) return year + " LEAP YEAR"; // if the year is divisible by 400, it is a leap year
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2019)); // false
console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2012)); // true
console.log(isLeapYear(2011)); // false
console.log(isLeapYear(2008)); // true
console.log(isLeapYear(2007)); // false
console.log(isLeapYear(2004)); // true
console.log(isLeapYear(2003)); // false
console.log(isLeapYear(2000)); // true
