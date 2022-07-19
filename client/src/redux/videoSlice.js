import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentVideo: null,
	loading: false,
	error: false,
};

export const videoSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
		},
		fetchSuccess: (state, action) => {
			state.loading = false;
			state.currentVideo = action.payload;
		},
		fetchFailure: (state) => {
			state.loading = false;
			state.error = true;
		},
		likeVideo: (state, action) => {
			const currentUserId = action.payload;
			// remove from dislike and add to likes
			if (!state.currentVideo.likes?.includes(currentUserId)) {
				state.currentVideo.likes.push(currentUserId);
				state.currentVideo.dislikes.splice(
					state.currentVideo.dislikes.findIndex(
						(userId) => userId === currentUserId,
					),
					1,
				);
			}
		},
		dislikeVideo: (state, action) => {
			const currentUserId = action.payload;
			// remove from likes and add to dislikes
			if (!state.currentVideo.dislikes?.includes(currentUserId)) {
				state.currentVideo.dislikes.push(currentUserId);
				state.currentVideo.likes.splice(
					state.currentVideo.likes.findIndex(
						(userId) => userId === currentUserId,
					),
					1,
				);
			}
		},
	},
});

export const {
	fetchStart,
	fetchSuccess,
	fetchFailure,
	likeVideo,
	dislikeVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
