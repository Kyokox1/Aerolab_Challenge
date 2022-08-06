import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import styles from "./home.module.css";

import { Banner } from "../../sections/banner/Banner";
import { Filters } from "../../sections/filters/Filters";
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

	// ? status to know which select is active
	const [select, setSelect] = useState();

	// ? this function sorts the array of products brought from the API
	const sortedProducts = useMemo(() => {
		const filteredProducts = products.filter((product) =>
			select ? product.category === select : products
		);

		switch (activeFilter) {
			case FILTERS.LowestPrice:
				return filteredProducts.sort((a, b) => a.cost - b.cost);

			case FILTERS.HighestPrice:
				return filteredProducts.sort((a, b) => b.cost - a.cost);

			case FILTERS.MostRecent:
			default:
				return filteredProducts;
		}
	}, [products, activeFilter, select]);

	return (
		<main className={styles.container}>
			<Banner />
			<Filters
				sortedProducts={sortedProducts}
				products={products}
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				FILTERS={FILTERS}
				setSelect={setSelect}
			/>
			<Outlet context={{ sortedProducts }} />
			{/* <ProductList sortedProducts={sortedProducts} /> */}
			<footer className={styles.footer}>
				<CountProducts products={sortedProducts} />
			</footer>
		</main>
	);
};
