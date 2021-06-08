function formLetter2(fName, lName, city, state){
	return `Dear ${fName} ${lName}
	Imagine how surprised your neighbors 
	will be when the Publisher Clearing House 
	van drives up to your house in ${city}, ${state}, and unloads $2,000,000!`;
}

let fn, ln, c, s, out1, out2;

fn = "Kelly";
ln= "Patty";
c= "Eugene";
s= "Oregen";


out1 = formLetter2(fn, ln, c, s);

console.log(out1);

fn = "John";
ln= "Brophy";
c= "Portland";
s= "Maine";


out2 = formLetter2(fn, ln, c, s);

console.log(out2);

// function formLetter2(fName, lName, city, state){
// 	return "Dear " +fName+ " "+ lName+ ", Imagine how surprised your neighbors will be when the Publisher Clearing House van drives up to your house in " + city + ", " + state+ ", and unloads $2,000,000!";
// }