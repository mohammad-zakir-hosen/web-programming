function formLetter(fName, lName){
	return `Dear ${fName} ${lName},
	Imagine how surprised your neighbors 
	will be when the Publisher Clearing House 
	van drives up to your house, and unloads $2,000,000!`;
}

function formLetter2(fName, lName, city, state){
	return `Dear ${fName} ${lName},
	Imagine how surprised your neighbors 
	will be when the Publisher Clearing House 
	van drives up to your house in ${city}, ${state}, and unloads $2,000,000!`;
}


let fn,ln, c,s, out1, out2, out3, out4;

fn="John";
ln="Brophy";
c="Eugene";
s="Oregon";

out1= formLetter(fn, ln);
out2 = formLetter2(fn, ln, c,s);


fn="Trevor";
ln="Bergs";
c="Portland";
s="Maine";

out3= formLetter(fn, ln);
out4 = formLetter2(fn, ln, c,s);

console.log(out1);
console.log(out2);
console.log(out3);
console.log(out4);