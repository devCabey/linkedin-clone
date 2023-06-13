import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		data: [],
	},
	reducers: {
		updatePosts: (state, action) => {
			state.data = action.payload;
		},
		resetPosts: (state) => {
			state.data = [];
		},
	},
});

export const { updatePosts, resetPosts } = postsSlice.actions;

export const selectPost = (state) => state.posts.data;

export default postsSlice.reducer;
