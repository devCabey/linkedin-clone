import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		data: null,
	},
	reducers: {
		getPost: (state, action) => {
			state.data = action.payload;
		},
		getPosts: (state) => {
			state.data = null;
		},
	},
});

export const { getPost, getPosts } = postSlice.actions;

export const selectPost = (state) => state.post.data;
export default postSlice.reducer;
