function toggleCase(s){
	let res="";
	let ch,i,n;
	n= s.length;
	for (i=0;i<=n-1; i++){
		ch = s.charAt(i);
		if (ch>='a' && ch <='z')
			res = res + ch.toUpperCase();
		else if (ch>='A' && ch <='Z')
			res = res + ch.toLowerCase();
		else
			res = res + ch;
	}

return res;
}

console.log(toggleCase("Hello World")) //expect "hELLO wORLD"
console.log(toggleCase("77 Sunset String")) //expect "77 sUNSET sTRIP"


function getAreaCode(s){
	let res;
	res = s.substring(1, 4); // substring(startIndex, endIndex)
	return res;
}

console.log(getAreaCode("(541)222-4444")) //expect 541

function getAreaCode2(s){
	let res;
	res = s.substr(1, 3); // substr(startIndex, length)
	return res;
}

console.log(getAreaCode2("(541)222-4444")) //expect 541

function isMathOperator(ch){
	let res;

	if (ch == '+')
		res = 'add';
	else if (ch == '-')
		res = 'subtract';
	else if (ch == '*')
		res = 'multiply';
	else if (ch == '/')
		res = 'divide';
	else if (ch == '%')
		res = 'modulus';
	else 
		res = 'Not a Math Operator';

	return res;

}

console.log(isMathOperator ("%")) //expect "modulus"
console.log(isMathOperator ("test")) //expect "Not a Math Operator"