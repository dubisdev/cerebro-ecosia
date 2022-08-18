import Preview from "./Preview";
import iconPath from "./icon.png";

const id = "search-ecosia";
export const order = 10;
export const icon = iconPath;

/**
 * Search term in ecosia
 *
 * @param  {String} options.term
 * @param  {Object} options.actions
 * @param  {Function} options.display
 */
export const fn = ({ term, actions, display }) => {
	const search = (searchTerm) => {
		const q = encodeURIComponent(searchTerm);
		actions.open(`https://www.ecosia.org/search?newwindow=1&q=${q}&cad=h`);
		actions.hideWindow();
	};

	display({
		id,
		icon,
		order,
		title: `Search "${term}" with Ecosia 🌲`,
		onSelect: () => search(term),
		getPreview: () => <Preview query={term} key={term} search={search} />,
	});
};
