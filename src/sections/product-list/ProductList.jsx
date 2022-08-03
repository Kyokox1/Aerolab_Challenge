import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../components/product-card/ProductCard";
import { fetchProducts } from "../../redux/slices/products";

import styles from "./productList.module.css";

export const ProductList = ({ sortedProducts }) => {
	const dispatch = useDispatch();
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const points = useSelector((state) => state.user.data.points);
	console.log(points);

	return (
		<section className={styles.grid}>
			{sortedProducts.map((product) => (
				<ProductCard
					setSelectedProduct={setSelectedProduct}
					isSelected={selectedProduct === product._id}
					key={product._id}
					points={points}
					{...product}
				/>
			))}
		</section>
	);
};
