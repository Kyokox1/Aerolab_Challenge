import { createSlice } from "@reduxjs/toolkit";
import { postRedeem } from "../../services/api";
import { fetchProductsError } from "./products";

const initialState = {
	data: {},
	error: {},
	isLoading: false
};

export const redeemProductsSlice = createSlice({
	name: "Redeem",
	initialState,
	reducers: {
		fetchRedeemProductsStart(state) {
			state.isLoading = true;
		},
		fetchRedeemProductsComplete(state, action) {
			state.isLoading = false;
			state.data = action.payload;
		},
		fetchRedeemProductsError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const addProducts = (productId) => async (dispatch) => {
	try {
		dispatch(fetchRedeemProductsStart());
		dispatch(fetchRedeemProductsComplete(await postRedeem(productId)));
	} catch (error) {
		dispatch(fetchProductsError(error));
	}
};

export const {
	fetchRedeemProductsStart,
	fetchRedeemProductsComplete,
	fetchRedeemProductsError
} = redeemProductsSlice.actions;

export default redeemProductsSlice.reducer;
