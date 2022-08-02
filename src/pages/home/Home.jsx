import React, { useMemo, useState } from "react";

import styles from "./home.module.css";

import { Banner } from "../../sections/banner/Banner";
import { Filters } from "../../sections/filters/Filters";
import { useSelector } from "react-redux";
import { ProductList } from "../../sections/product-list/ProductList";

export const Home = () => {
	const FILTERS = {
		MostRecent: "Most recent",
		LowestPrice: "Lowest price",
		HighestPrice: "Highest price"
	};

	const products = useSelector((state) => state.products.data);
	const [activeFilter, setActiveFilter] = useState(FILTERS.MostRecent);

	// console.log(products);

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
		</main>
	);
};
