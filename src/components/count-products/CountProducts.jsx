import React from "react";

import styles from "./countProducts.module.css";

export const CountProducts = ({ products }) => {
	return <p className={styles.count}>32 of {products.length} products</p>;
};
