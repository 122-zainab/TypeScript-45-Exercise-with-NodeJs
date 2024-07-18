let apple = "apple";
let uppercaseApple = "APPLE";
let num1 = 22;
let num2 = 11;
let fruits = ["apple", "mango", "banana", "orange"];



//test for equality and inequality wih strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("is apple is not equal to apple?");
console.log(apple != apple);

// using lowerCase function
console.log("is APPLE is equal to apple after converting to lowerCase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("is  APPLE is not equal to apple after converting lowerCase");
console.log(uppercaseApple.toLowerCase() != "apple");

// numerical test
console.log("num1 is equal to num2")
console.log(num1 == num2);

console.log("num1 is not equal to num2")
console.log(num1 != num2);

// Greater than or less than
console.log("is num1 is greater than 10?   ")
console.log(num1 > 10);

console.log("is num1 is less than 11?")
console.log(num1 < 11);


// Greater than or equal to & less than equal to
console.log("is num1 is greater than or equal to 22?");
console.log(num1 >= 22);

console.log("is num1 is less than or equal to 11? ");
console.log(num1 <= 11);

// tests using "and" & "or" operators
console.log("\n num1 is not equal to num2 and num1 is greater than num2");
console.log(num1 != num2 && num1 > num2);

console.log("num1 is not equal to num2 and num1 is less than num2");
console.log(num1 != num2 && num1 < num2);

// || operators
console.log("\n num1 is less than than 44 or num1 is not equal to 22");
console.log(num1 < 44 || num1 != 22);

console.log("\n num1 is greater than 44 and num1 is not equal to 22");
console.log(num1 > 44 || num1 != 22);

// Test whether an item is in an array

console.log("\nis orange include in my array");
console.log(fruits.includes("orange"));

// Test whether an item is not in an array
console.log("is mango not include in my fruit array ");
console.log(!fruits.includes("mango"));

