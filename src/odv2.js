FindFriendNumbers;

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
