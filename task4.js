function capitalize(string) {
	return string[0]
		.toUpperCase()
		.concat(string.split("").slice(1).join("").toString());
}

module.exports = capitalize;
