function cleanTheRoom (array) {
	array.sort(function(a,b) { return a - b; });
	var length = array.length;
	var cleanedArray = [];
	var counter = -1;

	for (var i = 0; i < length; i++){


		if (array[i-1] !== array[i]) {

			cleanedArray.push([array[i]]);
			counter++;
		}
		else {
			cleanedArray[counter].push(array[i]);
		}

	}
	return cleanedArray;
}