// // To Uncomment: press [ctrl + /]         To Uncomment all: press [ctrl + a] then press [ctrl + /]

// // 1- Print "Hello, World!" to the console.
console.log('Hello, World!')

// // 2- Declare a variable and prints its value
let a = 5;
console.log(a);

// // 3- Add two numbers and print the result
let b = 4;
let c = a + b;
console.log(c);

// // 4- Subtract two numbers and print the result
let d = a - b;
console.log(d);

// // 5- Multiply two numbers and print the result
let e = a * b;
console.log(e);

// // 6- Divide two numbers and print the result
if(b === 0) {
    console.log('Can\'t divide on Zero');
} else {
    let f = a / b;
    console.log(f);
}

// // 7- Find the remainder of two numbers using the modulus operator (%)
let g = a % b;
console.log(g);

// // 8- Swap two variables without using a temporary variable
let x = 5;
let y = 10;

x = x + y;  // x = 15
y = x - y;  // y = 15 - 10 = 5
x = x - y;  // x = 15 - 5 = 10

console.log('x is: ' + x + '\ny is: ' + y);

// // 9- Check if the number is even or odd
let t = 4;
if(t % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}

// // 10- Convert Celsius to Fahrenheit -- Fahrenheit = (degreeInCelsius * 9/5) + 32
let tempInCelsius = 18;
let tempInFahrenheit = (tempInCelsius * (9/5)) + 32;
console.log(Math.round(tempInFahrenheit));  
// // Math.round() is a built-in function to get the nearest integer without decimal points

// // 11- Covert Fahrenheit to Celsius -- Celsius = (degreeInFahrenheit - 32) * 5/9
let tempInFah = 64;
let tempInCel = (tempInFah - 32) * (5 / 9);
console.log(Math.round(tempInCel));