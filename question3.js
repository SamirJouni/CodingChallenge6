function convertColor (color) {
	var convertedColor;

	function convertRgbToHex(r, g, b) {
    return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b);
	}

	function numberToHex(number) {
    var numberInHex = number.toString(16);
    return numberInHex.length == 1 ? "0" + numberInHex : numberInHex;
	}
	return convertedColor;
}