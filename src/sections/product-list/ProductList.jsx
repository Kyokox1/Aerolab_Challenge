import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/products";
import { Navigate, useOutletContext, useParams } from "react-router-dom";

import { ProductCard } from "../../components/product-card/ProductCard";

import styles from "./productList.module.css";

export const ProductList = () => {
	const dispatch = useDispatch();
	const [selectedProduct, setSelectedProduct] = useState(null);

	const { page } = useParams();
	const { sortedProducts } = useOutletContext();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const points = useSelector((state) => state.user.data.points);

	if (page !== "2" && page !== "1" && page !== undefined) {
		return <Navigate to="/" />;
	}

	const pageTwoCondition = page === "2" && sortedProducts.length >= 16;
	return (
		<section className={styles.grid}>
			{sortedProducts &&
				sortedProducts.map((product, i) =>
					pageTwoCondition
						? i >= 16 && (
								<ProductCard
									setSelectedProduct={setSelectedProduct}
									isSelected={selectedProduct === product._id}
									key={product._id}
									points={points}
									{...product}
								/>
						  )
						: i < 16 && (
								<ProductCard
									setSelectedProduct={setSelectedProduct}
									isSelected={selectedProduct === product._id}
									key={product._id}
									points={points}
									{...product}
								/>
						  )
				)}
		</section>
	);
};
