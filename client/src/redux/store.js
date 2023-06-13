import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postSlice';
import postsReducer from './postsSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		post: postReducer,
		posts: postsReducer,
	},
});
