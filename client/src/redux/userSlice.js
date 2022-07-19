import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
	loading: false,
	error: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.loading = false;
			state.error = true;
		},
		logout: (state) => {
			state = initialState;
		},
		subscription: (state, action) => {
			const channelId = action.payload;
			// Already subscribed (remove user)
			if (state.currentUser.subscribedUsers.includes(channelId)) {
				state.currentUser.subscribedUsers.splice(
					state.currentUser.subscribedUsers.findIndex(
						(cId) => cId === channelId,
					),
					1,
				);
			} else {
				// unsubscribed yet (add user)
				state.currentUser.subscribedUsers.push(channelId);
			}
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
	userSlice.actions;

export default userSlice.reducer;
