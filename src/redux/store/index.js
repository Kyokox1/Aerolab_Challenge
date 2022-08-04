import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import addPointsReducer from "../slices/addPoints";
import productsReducer from "../slices/products";
import redeemProductsReducer from "../slices/redeemProducts";
import ProductsHistoryReducer from "../slices/productsHistory";

export const store = configureStore({
	reducer: {
		user: userReducer,
		points: addPointsReducer,
		products: productsReducer,
		redeemProducts: redeemProductsReducer,
		productsHistory: ProductsHistoryReducer
	}
});
