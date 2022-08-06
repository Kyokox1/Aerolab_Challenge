import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProducts } from "../../redux/slices/redeemProducts";

import coin from "../../../public/assets/icons/coin.svg";
import buyBlue from "../../../public/assets/icons/buy-blue.svg";
import buyWhite from "../../../public/assets/icons/buy-white.svg";

import styles from "./productCard.module.css";

export const ProductCard = ({
	name,
	_id,
	cost,
	img,
	category,
	isSelected,
	setSelectedProduct
	// points
}) => {
	// ? Redux
	const isLoadingRedeem = useSelector(
		(state) => state.redeemProducts.isLoading
	);

	const dispatch = useDispatch();

	// ? functions
	const buyProduct = (ProductId) => {
		dispatch(addProducts(ProductId));
	};
	const points = 1299;
	const canBuy = points >= cost;

	return (
		<div
			onMouseEnter={() => setSelectedProduct(_id)}
			onMouseLeave={() => setSelectedProduct(null)}
			className={`${styles.container} ${
				isSelected && styles.container__selected
			}`}
		>
			<img className={styles.product__img} src={img.url} alt={name} />
			<div className={styles.product__description}>
				<p className={styles.product__category}>{category}</p>
				<p className={styles.product__name}>{name}</p>
			</div>
			<div className={styles.product__status}>
				{canBuy ? (
					<img
						className={styles.product__buy}
						src={isSelected ? buyWhite : buyBlue}
						alt="buy"
					/>
				) : (
					<div className={styles.product__cost}>
						you need {cost - points} <img src={coin} alt="coin" />
					</div>
				)}
			</div>
			{isSelected && canBuy && (
				<>
					<div className={styles.selected}>
						<div className={styles.selected__price}>
							{cost}
							<img src={coin} alt="coin-product" />{" "}
						</div>
						<button onClick={() => buyProduct(_id)}>
							{isLoadingRedeem ? "Processing" : "Redeem now"}
						</button>
					</div>
					<div className={styles.selected__background}></div>
				</>
			)}
		</div>
	);
};
