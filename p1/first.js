/* jshint esversion: 7 */ 

let x,y, sum, prod, output;

x = prompt ("Enter the First Number: ");
y = prompt ("Enter the Second Number: ");

x = Number(x);
y = Number(y);

sum = x+y;
prod = x*y; 

output = "The sum is " + sum + ", The product is " + prod;

console.log(output);