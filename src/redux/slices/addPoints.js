import { createSlice } from "@reduxjs/toolkit";
import { postPoints } from "../../services/api";

const initialState = {
	isLoading: false,
	data: {},
	error: {}
};

export const addPointsSlice = createSlice({
	name: "addPoints",
	initialState,
	reducers: {
		postPointsStart(state) {
			state.isLoading = true;
		},
		postPointsComplete(state, action) {
			state.isLoading = false;
			state.data = action.payload;
		},
		postPointsError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const addPointsAmount = (points) => async (dispatch) => {
	try {
		dispatch(postPointsStart());
		dispatch(postPointsComplete(await postPoints(points)));
	} catch (error) {
		dispatch(postPointsError(error));
	}
};

export const { postPointsStart, postPointsComplete, postPointsError } =
	addPointsSlice.actions;
export default addPointsSlice.reducer;
