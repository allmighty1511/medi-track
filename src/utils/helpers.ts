export function truncateText(
	text: string,
	maxLength: number,
) {
	// Chequea si el texto se encuentra en el limite de caracteres
	if (text.length <= maxLength) {
		return text;
	}

	// Corta el text hasta el limite
	let trimmedText = text.substr(0, maxLength);

	return trimmedText + "...";
}
