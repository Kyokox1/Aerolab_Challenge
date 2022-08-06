import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import { Home } from "../pages/home/Home";
import { ProductHistory } from "../pages/product-history/ProductHistory";
import { ProductList } from "../sections/product-list/ProductList";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />}>
					<Route index element={<ProductList />} />
					<Route path=":page" element={<ProductList />} />
				</Route>
				<Route path="product-history" element={<ProductHistory />} />
			</Route>
		</Routes>
	);
};
