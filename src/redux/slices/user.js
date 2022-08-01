import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/api";

const initialState = {
	isLoading: false,
	error: {},
	data: {}
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		fetchUserStart(state) {
			state.isLoading = true;
		},
		fetchUserComplete(state, action) {
			state.isLoading = false;
			state.data = action.payload;
		},
		fetchUserError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const fetchUser = () => async (dispatch) => {
	try {
		dispatch(fetchUserStart());
		dispatch(fetchUserComplete(await getUser()));
	} catch (error) {
		dispatch(fetchUserError(error));
	}
};

export const { fetchUserStart, fetchUserComplete, fetchUserError } =
	userSlice.actions;
export default userSlice.reducer;
