import type { RootState } from "@store/store";
import { useDispatch } from "react-redux";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { AuthLogin, AuthLogout } from "@store/Api/AuthSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_URL_API,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.access;

		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

export const BaseQueryWithRefreshToken = async (
	args: any,
	api: any,
	extraOptions: any,
) => {
	const dispatch = useDispatch();
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error && result.error.status === 401) {
		const refreshToken = (api.getState() as RootState).auth.refresh;

		if (refreshToken) {
			const refreshResult = await baseQuery(
				{
					url: "users/token/refresh/",
					method: "POST",
					body: { refresh: refreshToken },
				},
				api,
				extraOptions,
			);

			if (refreshResult.data) {
				dispatch(AuthLogin(refreshResult.data as any));

				result = await baseQuery(args, api, extraOptions);
			} else {
				dispatch(AuthLogout());
			}
		} else {
			dispatch(AuthLogout());
		}
	}
	return result;
};
