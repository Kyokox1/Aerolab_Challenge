import React from "react";

import styles from "./spinner.module.css";

export const Spinner = ({ size }) => {
	return (
		<div className={styles["spinner-container"]}>
			<div
				className={`${styles["loading-spinner"]}
                    ${size === "small" && styles["loading-spinner-small"]}
                    ${size === "medium" && styles["loading-spinner-medium"]}`}
			/>
		</div>
	);
};
