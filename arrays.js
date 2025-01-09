let fruits = ["banana","cherry","Orange"];
console.log(fruits)

// Accessing an element in an array

console.log("Second Fruit is",fruits[1])


// Adding new fruit to the array

fruits.push("Apple");
console.log("New array:",fruits);

// Loop through the array
for (let fruit of fruits) {
    console.log(fruit);
}