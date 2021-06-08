let countEcho = function(str) {
	count= 0;  //initialize count
	//count number of "e" in the string str
	for (var i = 0; i < str.length; ++i)
		if (str.charAt(i) === "e")
			++count;
	return count;   //return the result
};

//test countEcho
console.log(countEcho("The time has come.")); // 3



let countOccurrences = function(str, c) {
	count= 0;  //initialize count
	//count number of c in the string str
	for (var i = 0; i < str.length; ++i)
		if (str.charAt(i) === c)
			++count;
	return count;   //return the result
};

//test countOccurences
console.log(countOccurrences("JavaScript is not boring!", "e")) // 0
console.log(countOccurrences("JavaScript is not boring!", "a")) // 2
console.log(countOccurrences("JavaScript is not boring!", "J")) // 1
console.log(countOccurrences("The albatross ate your lunch!!", "!")) // 2


let isAlpha = function(ch){
	if(ch >= "A" && ch <= "Z")
		return true;
	else if(ch >= "a" && ch <= "z")
		return true;
	else
		return false;
};

console.log(isAlpha("R"));  // expect true
console.log(isAlpha("r"));   // expect true

let countLetters = function(str) {
	count= 0;  //initialize count
	//count number of letters in the string str
	for (var i = 0; i < str.length; ++i)
		if (isAlpha(str.charAt(i)) === true)
			++count;
	return count;   //return the result
};

//test countLetters
console.log(countLetters("LB/FB!!")); // 4
console.log(countLetters("Let's split a Lyft!")) //expect 14
