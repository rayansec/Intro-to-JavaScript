let count = 0;
let i = 0;
for (let year = 101; year <= 2100; year++) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    count++;
    i++;

    process.stdout.write(`${year}${count % 10 === 0 ? "\n" : " "}`);
  }
}

console.log(`The number is: ${i}`);
