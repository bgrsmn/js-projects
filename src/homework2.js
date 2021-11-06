//PRİME OR NOT:
//A prime number is a number that can only be divided by itself and 1 without remainders.

let findPrime = (...number) => {
	number.forEach((number) => {
		let i,
			flag = 0;
		//non-prime operation if the number is less than or equal to one
		if (number <= 1) {
			console.log('----------------------');
			console.log(number + ' ' + 'is not a prime number.');
			return;
		}
		//the process of checking whether the entered numbers are prime
		for (let i = 2; i < number; i++) {
			console.log('----------------------');
			if (number % i == 0) {
				console.log(number + ' ' + 'is not a prime number.');
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			console.log(number + ' ' + 'is a prime number.');
		}
	});
};

findPrime(1, 4, 8, 17, 24, 0, 58, 97, -2);


//--------------------------------------------------------
	

//FindFriendNumbers:
//In number theory, friendly numbers are two or more natural numbers with a common abundancy index, the ratio between the sum of divisors of a number and the number itself.


function findFriendship(number1, number2) {
	let sum1 = 0;
	let sum2 = 0;
	//factoring and summing
	for (let i = 1; i <= number1; i++) {
		if (number1 % i == 0 && number1 / i != number1) {
			sum1 = sum1 + number1 / i;
		}
	}
	console.log('----------------------------------------');
	//factoring and summing
	for (let i = 1; i <= number2; i++) {
		if (number2 % i == 0 && number2 / i != number2) {
			sum2 = sum2 + number2 / i;
		}
	}
	//the process of checking friendship
	if (sum1 == number2 && sum2 == number1) {
		console.log(
			number1 + ' ' + 'and' + ' ' + number2 + ' ' + 'friends are numbers.'
		);
	} else {
		console.log(
			number1 + ' ' + 'and' + ' ' + number2 + ' ' + 'friends are not numbers.'
		);
	}
}

findFriendship(220, 284);
findFriendship(578, 956);
findFriendship(1184, 1210);
findFriendship(12386, 14695);

//--------------------------------------------------------


//Finding The Perfect Number:
//In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.


function findPerfectNumber(limit) {
	//printed up to given limits
	for (let x = 1; x < limit; x++) {
		let sum = 0;
		for (let y = 1; y <= x; y++) {
			//found and added the positive divisors of the number except itself
			if (x % y == 0 && x / y != x) {
				sum = sum + x / y;
			}
		}
		//checked if the number is a perfect number
		if (sum == x) {
			console.log(sum + ' ' + 'is' + ' ' + 'Perfect Number');
		}
	}
}

findPerfectNumber(1000);

//--------------------------------------------------------


//Finding Prime Numbers Up To Given Limit:
//A prime number is a number that can only be divided by itself and 1 without remainders.

function findPrimeNumber(limit) {
	//print numbers up to given limit
	for (let x = 2; x < limit; x++) {
		let flag = 0;
		for (let y = 2; y < x; y++)
			//check if number is prime
			if (x % y == 0) {
				flag = 1;
				break;
			}
		if (flag == 0) {
			console.log(x + ' ' + 'is a prime number');
		}
	}
}

findPrimeNumber(1000);