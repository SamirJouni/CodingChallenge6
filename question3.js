function convertColor(color) {
	var convertedColor;

	if ( color[0] === '#' ) {

<<<<<<< HEAD
	convertedColor	= convertHexToRgb(color);
=======
	convertedColor	= convertHexToRgb(color.slice(1));
>>>>>>> ada14b85200480a84a72c97eb779a06f6e0bfda0
	}
	else if ( color[0] === '(' ) {
		convertedColor = convertRgbToHex(color);
	}
	else{
		return "Error ! \nPlease Enter A Proper Input. \nHex starts with an octothorpe and has 6 trailing numbers, rgb is enclsed in paranthesis and seperated with commas. "
	}
<<<<<<< HEAD
	function convertHexToRgb(color) {
		var hexNumber = color.slice(1);
=======
	function convertHexToRgb(hexNumber) {
>>>>>>> ada14b85200480a84a72c97eb779a06f6e0bfda0
		var decimalNumber = parseInt(hexNumber, 16);
		var r = (decimalNumber >> 16) & 255;
		var g = (decimalNumber >> 8) & 255;
		var b = decimalNumber & 255;

		return "(" + r + "," + g + "," + b + ")";
	}

	function convertRgbToHex(color) {
		color = color.slice(1,-1).split(',');
		var r = color[0];
		var g = color[1];
		var b = color[2];
		var a = color[3] ? color[3] : '';
		return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b) + numberToHex(a);
	}

	function numberToHex(number) {
		var numberInHex = number.toString(16);
		return numberInHex.length == 1 ? "0" + numberInHex : numberInHex;
	}

	return convertedColor;
}