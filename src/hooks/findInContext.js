export const findInContext = (query, array) => {
	return array.find((queryItem) => {
		if (queryItem.query === query) {
			return queryItem;
		} else {
			return undefined;
		}
	});
};
