import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		data: null,
	},
	reducers: {
		updatePost: (state, action) => {
			state.data = action.payload;
		},
		resetPost: (state) => {
			state.data = null;
		},
	},
});

export const { updatePost, resetPost } = postSlice.actions;

export const selectPost = (state) => state.post.data;

export default postSlice.reducer;
