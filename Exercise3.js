console.log("The four perfect numbers less than 10,000 is: ");

let sum;

for (let i = 1; i < 10000; i++) {
  sum = 0;

  for (let k = 1; k < i; k++) {
    if (i % k === 0) sum += k;
  }

  if (i === sum) console.log(i);
}
