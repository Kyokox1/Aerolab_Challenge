import React from "react";

import coin from "../../../public/assets/icons/coin.svg";

import styles from "./productHistoryCard.module.css";

export const ProductHistoryCard = ({
	name,
	img,
	category,
	cost,
	createDate,
	_id
}) => {
	const date = new Date(createDate).toLocaleString();

	return (
		<section className={styles.container}>
			<img className={styles.product__img} src={img.url} alt={name} />
			<div className={styles.container__info}>
				<div className={styles.product__information}>
					<h4>{category}</h4>
					<p>{name}</p>
				</div>
				<div className={styles.product__information}>
					<h4>Redeemed</h4>
					<p>{date}</p>
				</div>
				<div className={styles.product__information}>
					<h4>Transaction ID</h4>
					<p>{_id}</p>
				</div>
			</div>
			<div className={styles.cost}>
				{cost}
				<img src={coin} alt="coin" />
			</div>
		</section>
	);
};
