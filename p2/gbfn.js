function greetByFullName(fName, lName){
	return`Hello, ${fName} ${lName}! Welcome to JavaScript!`; 
	//output 2lines with backticks
}

let fn, ln, out1;

fn="John";
ln="Brophy";

out1= greetByFullName(fn, ln);
console.log(out1);

fn="Trevor";
ln="Bergs";

out1= greetByFullName(fn, ln);
console.log(out1);