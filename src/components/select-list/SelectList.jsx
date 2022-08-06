import React from "react";

import styles from "./selectList.module.css";

export const SelectList = ({ categories, setSelect }) => {
	return (
		<>
			<label className={styles.label} htmlFor="category">
				Filter By:
			</label>
			<select
				className={styles.select}
				name="category"
				id="category"
				onChange={(e) => setSelect(e.target.value)}
			>
				<option value="" defaultChecked>
					All Products
				</option>
				{categories.map((category) => (
					<option value={category} key={category}>
						{category}
					</option>
				))}
			</select>
		</>
	);
};
