import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceType = {
	access: string | null;
	refresh: string | null;
};

const initialState: AuthSliceType = {
	access: localStorage.getItem("token") || null,
	refresh: localStorage.getItem("refresh") || null,
};

export const AuthSlice = createSlice({
	name: "Auth",
	initialState,
	reducers: {
		AuthLogin: (state, action: PayloadAction<AuthSliceType>) => {
			state.access = action.payload.access;
			state.refresh = action.payload.refresh;

			localStorage.setItem("token", `${action.payload.access}`);
			localStorage.setItem("refresh", `${action.payload.refresh}`);
		},

		AuthLogout: (state) => {
			state.access = null;
			state.refresh = null;
			localStorage.removeItem("token");
			localStorage.removeItem("refresh");
		},
	},
});

export const { AuthLogin, AuthLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
