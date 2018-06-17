function sumToTarget(arrayOfNumbers, targetNumber) {
	arrayLength = arrayOfNumbers.length;

	for (var i = 0; i < arrayLength; i++) {
		for (var j = 0; j < arrayLength; j++) {
			if ((arrayOfNumbers[i] + arrayOfNumbers[j] === targetNumber) &
				arrayOfNumbers[i] !== arrayOfNumbers[j]) {

				return [arrayOfNumbers[i], arrayOfNumbers[j]];
			}
		}
	}
}

function sumToTargetNew(arrayOfNumbers, targetNumber) {

	var arrayOfNumbers = Array.from(new Set(arrayOfNumbers));
	var arrayLength = arrayOfNumbers.length;

	while (arrayLength !== 0) {
		var currentNumber = arrayOfNumbers.pop();
		arrayLength--;

		for (var i = 0; i < arrayLength; i++) {
			if (currentNumber + arrayOfNumbers[i] === targetNumber) {

				return [currentNumber, arrayOfNumbers[i]];
			}
		}
	}
}