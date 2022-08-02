import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/api";

const initialState = {
	data: [],
	isLoading: false,
	error: {}
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		fetchProductsStart(state) {
			state.isLoading = true;
		},
		fetchProductsComplete(state, action) {
			state.data = action.payload;
			state.isLoading = false;
		},
		fetchProductsError(state, action) {
			state.error = action.payload;
			state.isLoading = false;
		}
	}
});

export const fetchProducts = () => async (dispatch) => {
	try {
		dispatch(fetchProductsStart());
		dispatch(fetchProductsComplete(await getProducts()));
	} catch (error) {
		dispatch(fetchProductsError(error));
	}
};

export const { fetchProductsStart, fetchProductsComplete, fetchProductsError } =
	productsSlice.actions;

export default productsSlice.reducer;
