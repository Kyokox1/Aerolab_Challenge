import React from "react";
import { CountProducts } from "../../components/count-products/CountProducts";
import { FilterButton } from "../../components/filter-button/FilterButton";

import styles from "./filters.module.css";

export const Filters = ({
	activeFilter,
	setActiveFilter,
	FILTERS,
	sortedProducts
}) => {
	const filters = [
		FILTERS.MostRecent,
		FILTERS.LowestPrice,
		FILTERS.HighestPrice
	];

	return (
		<nav className={styles.nav}>
			<CountProducts products={sortedProducts} />
			<div className={styles.filters}>
				<span>Sort by:</span>
				{filters.map((filter) => (
					<FilterButton
						key={`filter${filter}`}
						activeFilter={activeFilter}
						setActiveFilter={setActiveFilter}
						filter={filter}
					/>
				))}
			</div>
			<div className={styles.arrows}>
				<span>a</span>
				<span>b</span>
			</div>
		</nav>
	);
};
