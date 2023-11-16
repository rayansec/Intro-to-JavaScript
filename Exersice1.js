let pi = 0;
let value = 10000;
let result = value;

for (let i = 1; i <= value; i++) {
  let term = (-1) ** (i + 1) / (2 * i - 1);
  pi += term;
}
result = 4 * pi;
console.log("Approximate value of π:", result);

let value2 = 20000;
let pi2 = 0;
let result2 = value2;
for (let i = 1; i <= value2; i++) {
  let term = (-1) ** (i + 1) / (2 * i - 1);
  pi2 += term;
}
result2 = 4 * pi2;
console.log("Approximate value of π:", result2);

let value3 = 100000;
let pi3 = 0;
let result3 = value3;
for (let i = 1; i <= value3; i++) {
  let term = (-1) ** (i + 1) / (2 * i - 1);
  pi3 += term;
}
result3 = 4 * pi3;
console.log("Approximate value of π:", result3);
