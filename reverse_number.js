let reverse = 0;
let number = prompt("Enter the number which you want to reverse: ");
let lastDigit;
function reverseNumber() {
  while (number != 0) {
    lastDigit = number % 10;
    reverse = reverse * 10 + lastDigit;
    number = Math.floor(number / 10);
  }
  console.log("The reversed number is: " + reverse);
}
reverseNumber();
