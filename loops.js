//Example: Print numbers 1 to 5 using a for loop
let i;
for (i=1;i<=5;i++)
    {
    console.log(i)
}
// for in

const numbers = [10, 20, 30, 40, 50];

for (let index in numbers) {
  console.log(numbers[index]);
}

// for of


for (let number of numbers) {
  console.log(number);
}

//While loop

let j = 0;

while (j < numbers.length) {
  console.log(numbers[i]);
  j++;
}

// do while

let h = 0;

do {
  console.log(numbers[h]);
  h++;
} while (i < numbers.length);




