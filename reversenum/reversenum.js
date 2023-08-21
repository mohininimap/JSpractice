function reverseNum() {
  let num = 123;
  let reverse = 0;
  let remainder = 0;
  while (num > 0) {
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reverse;
}

let output = reverseNum();
console.log(output);
