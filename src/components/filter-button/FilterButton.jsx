import React from "react";

import styles from "./filterButton.module.css";

export const FilterButton = ({ filter, activeFilter, setActiveFilter }) => {
	return (
		<button
			className={`${styles.button} ${
				activeFilter === filter && styles.active
			}`}
			onClick={() => setActiveFilter(filter)}
		>
			{filter}
		</button>
	);
};
