import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: null,
	},
	reducers: {
		updateUser: (state, action) => {
			state.data = action.payload;
		},
		resetUser: (state) => {
			state.data = {};
		},
	},
});

export const { updateUser, resetUser } = userSlice.actions;

export const selectUser = (state) => state.user.data;

export default userSlice.reducer;
