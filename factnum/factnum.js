function displayFact(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
let output=displayFact(4);
console.log("output",output)
