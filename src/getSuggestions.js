import { memoize } from "cerebro-tools";

const getSuggestions = (query) => {
	const url = `http://ac.ecosia.org/autocomplete?mkt=en-us&q=${query}`;
	return fetch(url)
		.then((response) => response.json())
		.then((response) => response.suggestions || []);
};

export default memoize(getSuggestions, {
	length: false,
	promise: "then",
	// Expire translation cache in 30 minutes
	maxAge: 30 * 60 * 1000,
	preFetch: true,
});
