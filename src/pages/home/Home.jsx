import React from "react";

import styles from "./home.module.css";

import { Banner } from "../../sections/banner/Banner";
import { Filters } from "../../sections/filters/Filters";

export const Home = () => {
	return (
		<main className={styles.container}>
			<Banner />
			<Filters />
		</main>
	);
};
