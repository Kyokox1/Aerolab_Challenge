import { createSlice } from "@reduxjs/toolkit";
import { getProductsHistory } from "../../services/api";

const initialState = {
	data: [],
	error: {},
	isLoading: false
};

const productHistorySlice = createSlice({
	name: "product-history",
	initialState,
	reducers: {
		fetchProductsHistoryStart(state) {
			state.isLoading = true;
		},
		fetchProductsHistoryCompleted(state, action) {
			state.isLoading = false;
			state.data = action.payload;
		},
		fetchProductsHistoryError(state, action) {
			state.isLoading = true;
			state.error = action.payload;
		}
	}
});

export const fetchProductsHistory = () => async (dispatch) => {
	try {
		dispatch(fetchProductsHistoryStart());
		dispatch(fetchProductsHistoryCompleted(await getProductsHistory()));
	} catch (error) {
		dispatch(fetchProductsHistoryError(error));
	}
};

export const {
	fetchProductsHistoryStart,
	fetchProductsHistoryCompleted,
	fetchProductsHistoryError
} = productHistorySlice.actions;
export default productHistorySlice.reducer;
