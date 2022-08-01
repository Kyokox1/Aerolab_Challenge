import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import coin from "../../../public/assets/icons/coin.svg";
import logo from "../../../public/assets/logo.svg";
import { PointsModal } from "../../components/points-modal/PointsModal";
import { fetchUser } from "../../redux/slices/user";
import { postPoints } from "../../services/api";

import styles from "./header.module.css";

export const Header = () => {
	const [showPointsModal, setShowPointsModal] = useState(false);
	const user = useSelector((state) => state.user.data);
	const points = useSelector((state) => state.points.data);
	const isLoadingUser = useSelector((state) => state.user.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [points["New Points"]]);

	// console.log(points["New Points"]);
	// console.log(user);

	return (
		<header className={styles.container}>
			{Object.entries(user).length === 0 ? (
				<span>Loading...</span>
			) : (
				<>
					<div className={styles.logo__container}>
						<img
							className={styles.logo}
							src={logo}
							alt="logo"
						></img>
					</div>
					<nav className={styles.nav}>
						<p>{user.name}</p>
						<p>Redeem History</p>
						<button
							className={styles.points__button}
							onClick={() =>
								setShowPointsModal((prevState) => !prevState)
							}
						>
							{isLoadingUser ? "Loading..." : user.points}
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
