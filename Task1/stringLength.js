function stringLength(string) {
	const strLength = string.length;
	if (strLength >= 1 && strLength < 10) {
		return strLength;
	} else {
		throw new Error("Conditions are not met");
	}
}

module.exports = stringLength;
