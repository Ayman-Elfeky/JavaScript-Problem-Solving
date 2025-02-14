// // To Uncomment: press [ctrl + /]         To Uncomment all: press [ctrl + a] then press [ctrl + /]
// Reminder: Try to solve on your own first

// 1- Print "Hello, World!" to the console.
console.log('Hello, World!')

// 2- Declare a variable and prints its value
let a = 5;
console.log(a);

// 3- Add two numbers and print the result
let b = 4;
let c = a + b;
console.log(c);

// 4- Subtract two numbers and print the result
let d = a - b;
console.log(d);

// 5- Multiply two numbers and print the result
let e = a * b;
console.log(e);

// 6- Divide two numbers and print the result
if(b === 0) {
    console.log('Can\'t divide on Zero');
} else {
    let f = a / b;
    console.log(f);
}

// 7- Find the remainder of two numbers using the modulus operator (%)
let g = a % b;
console.log(g);

// 8- Swap two variables without using a temporary variable
let x = 5;
let y = 10;

x = x + y;  // x = 15
y = x - y;  // y = 15 - 10 = 5
x = x - y;  // x = 15 - 5 = 10

console.log('x is: ' + x + '\ny is: ' + y);

// 9- Check if the number is even or odd
let t = 4;
if(t % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}

// 10- Convert Celsius to Fahrenheit -- Fahrenheit = (degreeInCelsius * 9/5) + 32
let tempInCelsius = 18;
let tempInFahrenheit = (tempInCelsius * (9/5)) + 32;
console.log(Math.round(tempInFahrenheit));  
// // Math.round() is a built-in function to get the nearest integer without decimal points

// 11- Covert Fahrenheit to Celsius -- Celsius = (degreeInFahrenheit - 32) * 5/9
let tempInFah = 64;
let tempInCel = (tempInFah - 32) * (5 / 9);
console.log(Math.round(tempInCel));



// Reminder: Try to solve on your own first

// 12- Find the largest of two numbers
let num1 = 12;
let num2 = 123;
// // This is called ternary condition
(num1 > num2) ? console.log('num1 is the largest: ' + num1) : console.log('num2 is the largest: ' + num2)

// 13- Find the largest of three numbers
let n1 = 10;
let n2 = 20;
let n3 = 30;

(n1 > n2 && n1 > n3) ?
    console.log('n1 is the largest: ' + n1) :
(n2 > n3) ?
    console.log('n2 is the largest: ' + n2) : console.log('n3 is the largest: ' + n3)

// 14- Check if number is positive, negative or zero
let number = -232;

if(number > 0) {
    console.log('The number: ' + number + ' is positive');
} else if (number < 0) {
    console.log('The number: ' + number + ' is negative');
} else {
    console.log('The number is Zero');
}

// 15- Print the first 10 natural numbers
let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push(i)
}
console.log(arr);

// 16- print the multiplication table for a number
let num = 6
for(let i = 0; i <= 12; i++) {
    console.log(num + ' * ' + i + ' = ' + i*num)
}

// 17- Check if a year is a leap year 
// (A year is a leap year if it is divisible by 4 and It is not divisible by 100, or It is divisible by 400.)
let year = 2005;
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}


// 18- find the factorial of a number
// put it block scope to not interfere with any variables above -- only allowed with (let) and (const) -- (var) is a function scope so not allowed
{ // block scope
    let num = 5;
    let result = 1;
    for(let i = 1; i <= 5; i++) {
        result *= i;
    }
    console.log(result);
} // end of block scope

// 19- Find the fibonnaci sequence up to a given number
{
    let num = 8;
    let a = 0, b = 1;
    let next;
    for(let i = 0; i < num; i++) {
        console.log(a);
        next = a + b;
        a = b;
        b = next;
    }
}

// 20- Convert Minutes into seconds
let minutes = 5;
let seconds = minutes * 60;
console.log(seconds);