import React, { Component } from "react";
import PropTypes from "prop-types";
import { Loading, KeyboardNav, KeyboardNavItem } from "cerebro-ui";
import Preload from "./Preload";
import getSuggestions from "../getSuggestions";
import styles from "./styles.css";

class Preview extends Component {
	renderSuggestions(suggestions, searchFn) {
		return (
			<div className={styles.wrapper}>
				<KeyboardNav>
					<ul className={styles.list}>
						{suggestions.map((s) => (
							<KeyboardNavItem
								key={s}
								tagName={"li"}
								onSelect={() => searchFn(s)}>
								{s}
							</KeyboardNavItem>
						))}
					</ul>
				</KeyboardNav>
			</div>
		);
	}
	render() {
		const { query, search } = this.props;
		return (
			<Preload promise={getSuggestions(query)} loader={<Loading />}>
				{(suggestions) => this.renderSuggestions(suggestions || [], search)}
			</Preload>
		);
	}
}

Preview.propTypes = {
	query: PropTypes.string.isRequired,
	search: PropTypes.func.isRequired,
};

export default Preview;
