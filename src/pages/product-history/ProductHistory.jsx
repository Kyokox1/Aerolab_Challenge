import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsHistory } from "../../redux/slices/productsHistory";

import { ProductHistoryCard } from "../../components/product-history-card/ProductHistoryCard";

import styles from "./productHistory.module.css";

export const ProductHistory = () => {
	// ? Redux
	const isLoading = useSelector((state) => state.productsHistory.isLoading);
	const products = useSelector((state) => state.productsHistory.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsHistory());
	}, []);

	return (
		<main className={styles.container}>
			{isLoading ? (
				<span>Loading...</span>
			) : (
				products.map(
					(product, i) =>
						i < 5 && (
							<ProductHistoryCard
								key={product._id}
								{...product}
							/>
						)
				)
			)}
		</main>
	);
};
