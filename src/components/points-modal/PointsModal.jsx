import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addPointsAmount } from "../../redux/slices/addPoints";

import logo from "../../../public/assets/logo.svg";
import coin from "../../../public/assets/icons/coin.svg";

import styles from "./pointsModal.module.css";

export const PointsModal = ({ setShowPointsModal }) => {
	const isLoadingPoints = useSelector((state) => state.points.isLoading);
	const isLoadingUser = useSelector((state) => state.user.isLoading);
	const dispatch = useDispatch();

	const amounts = [1000, 5000, 7500];

	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<img src={logo} alt="logo-amount"></img>
				<span>Aerolab</span>
				{/* icon */}
			</header>
			<div className={styles.amounts}>
				{amounts.map((amount) => (
					<button
						onClick={() => dispatch(addPointsAmount(amount))}
						disabled={isLoadingPoints || isLoadingUser}
						key={`+${amount}`}
					>
						{`+${amount}`}
						<img src={coin} alt="coin-amount" />
					</button>
				))}
			</div>
			<button
				onClick={() => setShowPointsModal(false)}
				className={styles.cancel__button}
			>
				Cancel
			</button>
		</section>
	);
};
