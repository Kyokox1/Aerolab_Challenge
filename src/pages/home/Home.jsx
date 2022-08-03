import React, { useMemo, useState } from "react";

import styles from "./home.module.css";

import { Banner } from "../../sections/banner/Banner";
import { Filters } from "../../sections/filters/Filters";
import { useSelector } from "react-redux";
import { ProductList } from "../../sections/product-list/ProductList";
import { CountProducts } from "../../components/count-products/CountProducts";

export const Home = () => {
	const FILTERS = {
		MostRecent: "Most recent",
		LowestPrice: "Lowest price",
		HighestPrice: "Highest price"
	};
	// ? Redux state
	const products = useSelector((state) => state.products.data);

	// ? status to know which filter is active and which case to run
	const [activeFilter, setActiveFilter] = useState(FILTERS.MostRecent);

	// ? this function sorts the array of products brought from the API
	const sortedProducts = useMemo(() => {
		switch (activeFilter) {
			case FILTERS.LowestPrice:
				return [...products].sort((a, b) => a.cost - b.cost);

			case FILTERS.HighestPrice:
				return [...products].sort((a, b) => b.cost - a.cost);

			case FILTERS.MostRecent:
			default:
				return products;
		}
	}, [products, activeFilter]);

	return (
		<main className={styles.container}>
			<Banner />
			<Filters
				sortedProducts={sortedProducts}
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				FILTERS={FILTERS}
			/>
			<ProductList sortedProducts={sortedProducts} />
			<footer className={styles.footer}>
				<CountProducts products={sortedProducts} />
			</footer>
		</main>
	);
};
