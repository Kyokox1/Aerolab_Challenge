import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import coin from "../../../public/assets/icons/coin.svg";
import logo from "../../../public/assets/logo.svg";

import { PointsModal } from "../../components/points-modal/PointsModal";
import { fetchUser } from "../../redux/slices/user";

import styles from "./header.module.css";

export const Header = () => {
	const [showPointsModal, setShowPointsModal] = useState(false);
	// ? Redux states
	const user = useSelector((state) => state.user.data);
	const buyProduct = useSelector((state) => state.redeemProducts.data);
	const points = useSelector((state) => state.points.data);
	const isLoadingUser = useSelector((state) => state.user.isLoading);
	const isLoadingPoints = useSelector((state) => state.points.isLoading);
	const isLoadingRedeem = useSelector(
		(state) => state.redeemProducts.isLoading
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [points["New Points"], buyProduct]);

	return (
		<header className={styles.container}>
			{Object.entries(user).length === 0 ? (
				<span>Loading...</span>
			) : (
				<>
					<Link to="/">
						<div className={styles.logo__container}>
							<img
								className={styles.logo}
								src={logo}
								alt="logo"
							></img>
						</div>
					</Link>
					<nav className={styles.nav}>
						<Link to="/">
							<p className={styles.user__name}>{user.name}</p>
						</Link>
						<Link to="/product-history">
							<p>Redeem History</p>
						</Link>
						<button
							className={styles.points__button}
							onClick={() =>
								setShowPointsModal((prevState) => !prevState)
							}
						>
							{isLoadingUser || isLoadingRedeem || isLoadingPoints
								? "Loading..."
								: user.points}
							<img
								className={styles.coin}
								src={coin}
								alt="coin"
							/>
						</button>
						{showPointsModal && (
							<PointsModal
								setShowPointsModal={setShowPointsModal}
							/>
						)}
					</nav>
				</>
			)}
		</header>
	);
};
