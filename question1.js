function cleanTheRoom (array) {
	array.sort(function(a,b) { return a - b; });
	var length = array.length;
	var cleanedArray = [[],[]];
	var counter = -1;

	for (var i = 0; i < length; i++){

		if (array[i-1] !== array[i]) {
			if (typeof array[i] === 'number'){
					cleanedArray[0].push(array[i]);
			}
			else {
				cleanedArray[1].push(array[i]);

			}
			counter++;
		}
		else {
			if (typeof array[i] === 'number'){
				cleanedArray[0][counter] = Array.from(cleanedArray[0][counter]).concat(array[i]);
			}
			else{
				cleanedArray[0][counter] = Array.from(cleanedArray[1][counter]).concat(array[i]);
			}
		}

	}
	if (cleanedArray[1].length === 0){
		cleanedArray.pop([1]);
	}
	if (cleanedArray[0].length === 0) {
		cleanedArray.pop([0]);
	}
	return cleanedArray;
}