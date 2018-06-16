function convertColor(color) {
	var convertedColor;

	function convertHexToRgb(hexNumber) {
		var decimalNumber = parseInt(hexNumber, 16);
		var r = (decimalNumber >> 16) & 255;
		var g = (decimalNumber >> 8) & 255;
		var b = decimalNumber & 255;

		return "(" + r + "," + g + "," + b + ")";
	}

	function convertRgbToHex(r, g, b) {
		return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b);
	}

	function numberToHex(number) {
		var numberInHex = number.toString(16);
		return numberInHex.length == 1 ? "0" + numberInHex : numberInHex;
	}
	return convertedColor;
}