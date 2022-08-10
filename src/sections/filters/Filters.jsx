import React from "react";
import { Link } from "react-router-dom";

import arrowRight from "../../../public/assets/icons/arrow-right.svg";
import arrowLeft from "../../../public/assets/icons/arrow-left.svg";

import { CountProducts } from "../../components/count-products/CountProducts";
import { FilterButton } from "../../components/filter-button/FilterButton";

import styles from "./filters.module.css";
import { SelectList } from "../../components/select-list/SelectList";

export const Filters = ({
	activeFilter,
	setActiveFilter,
	FILTERS,
	sortedProducts,
	setSelect,
	products
}) => {
	const filters = [
		FILTERS.MostRecent,
		FILTERS.LowestPrice,
		FILTERS.HighestPrice
	];

	// const arrayCategory = [];

	// sortedProducts.forEach((curr) => {
	// 	if (!arrayCategory.includes(curr.category))
	// 		arrayCategory.push(curr.category);
	// });

	// ? Array with filtered categories
	const categories = products
		.map((product) => product.category)
		.filter((product, indice, array) => array.indexOf(product) === indice);

	return (
		<nav className={styles.nav}>
			<CountProducts products={sortedProducts} />
			<div className={styles.filters}>
				<span>Sort by:</span>
				<div className={styles.filters__buttons}>
					{filters.map((filter) => (
						<FilterButton
							key={`filter${filter}`}
							activeFilter={activeFilter}
							setActiveFilter={setActiveFilter}
							filter={filter}
						/>
					))}
				</div>
			</div>
			<div className={styles.select__container}>
				<SelectList categories={categories} setSelect={setSelect} />
			</div>
			<div className={styles.arrows}>
				<Link to="/">
					<img
						className={styles.arrows__left}
						src={arrowLeft}
						alt="arrow-right"
					/>
				</Link>
				<Link to="2">
					<img
						className={styles.arrows__right}
						src={arrowRight}
						alt="arrow-left"
					/>
				</Link>
			</div>
		</nav>
	);
};
