import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import addPointsReducer from "../slices/addPoints";

export const store = configureStore({
	reducer: {
		user: userReducer,
		points: addPointsReducer
	}
});