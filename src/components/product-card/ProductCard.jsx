import React, { useState } from "react";
import coin from "../../../public/assets/icons/coin.svg";

import styles from "./productCard.module.css";

export const ProductCard = ({
	name,
	_id,
	cost,
	img,
	category,
	isSelected,
	setSelectedProduct
}) => {
	return (
		<div
			onClick={() => setSelectedProduct(_id)}
			className={styles.container}
		>
			<img className={styles.product__img} src={img.url} alt={name} />
			<div className={styles.product__description}>
				<p className={styles.product__category}>{category}</p>
				<p className={styles.product__name}>{name}</p>
			</div>
			{isSelected && (
				<>
					<div className={styles.selected}>
						<div className={styles.selected__price}>
							{cost}
							<img src={coin} alt="coin-product" />{" "}
						</div>
						<button>Redeem now</button>
					</div>
					<div className={styles.selected__background}></div>
				</>
			)}
		</div>
	);
};
