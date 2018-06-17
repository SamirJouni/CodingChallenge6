function sumToTarget(arrayOfNumbers, targetNumber) {
	var arrayLength = arrayOfNumbers.length;

	for (var i = 0; i < arrayLength; i++) {
		for (var j = 0; j < arrayLength; j++) {
			if ((arrayOfNumbers[i] + arrayOfNumbers[j] === targetNumber) &
				arrayOfNumbers[i] !== arrayOfNumbers[j]) {

				return [arrayOfNumbers[i], arrayOfNumbers[j]];
			}
		}
	}
}