for (let i = 1; i < 6; i++) {
  console.log(i);
}

console.log("====================");

for (let i = 5; i > 0; i--) {
  console.log(i);
}

console.log("====================");

let n1 = 1;
let n2 = 100;
let total = 0;
for (let i = n1; i < n2 + 1; i++) {
  total = total + i;
}

console.log(`${n1}부터 ${n2}까지 더한 결과는 ${total}`);

console.log("====================");

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let i2 = 1;
console.log("====================");
while (true) {
  console.log(i2);
  i2++;
  if (i2 > 5) {
    break;
  }
}

let i3 = 0;
console.log("====================");
while (i3 <= 100) {
  i3++;
  if (i3 % 3 == 0) {
    console.log(i3);
  }
}

let i4 = 0;
console.log("====================");
i4 = 0;
do {
  console.log(i);
} while (i != 0);
