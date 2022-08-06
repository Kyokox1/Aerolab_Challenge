import React from "react";
import { Outlet } from "react-router-dom";

import "../reset.css";
import styles from "./layout.module.css";

import { Header } from "../sections/header/Header";

function Layout() {
	return (
		<div className={styles.container}>
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;
