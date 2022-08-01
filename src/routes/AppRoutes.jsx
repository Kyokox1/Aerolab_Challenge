import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import { Home } from "../pages/home/Home";
import { ProductHistory } from "../pages/product-history/ProductHistory";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="product-history" element={<ProductHistory />} />
			</Route>
		</Routes>
	);
};
