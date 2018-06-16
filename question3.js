function convertColor(color) {
	var convertedColor;

	if (color[0] === '#') {

		convertedColor = convertHexToRgb(color);

	} else if (color[0] === '(') {

		convertedColor = convertRgbToHex(color);
	} else {

		return "Error ! \nPlease Enter A Proper Input. \nHex starts with an octothorpe and has 6 trailing numbers, rgb is enclsed in paranthesis and seperated with commas. ";
	}

	function convertHexToRgb(color) {
		var hexNumber = color.slice(1);
		var r = parseInt(hexNumber.substring(0, 2), 16);
		var g = parseInt(hexNumber.substring(2, 4), 16);
		var b = parseInt(hexNumber.substring(4, 6), 16);
		var a = hexNumber.length === 8 ? Math.round(parseInt(hexNumber.substring(6, 8), 16) / 255) : '';

		return "(" + r + "," + g + "," + b + (a !== '' ? ',' : '') + a + ")";
	}

	function convertRgbToHex(color) {
		color = color.slice(1, -1).split(',');
		var r = color[0];
		var g = color[1];
		var b = color[2];
		var a = color.length === 4 ? Math.round(color[3] * 255) : '';
		return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b) + (color.length === 4 ? numberToHex(a) : '');
	}

	function numberToHex(number) {
		var numberInHex = Number(number).toString(16);
		return numberInHex.length == 1 ? "0" + numberInHex : numberInHex;
	}

	return convertedColor;
}