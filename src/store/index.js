import { configureStore } from '@reduxjs/toolkit';

import languageSlice from './reducers/languageSlice.js';

export const store = configureStore({
	reducer: {
		language: languageSlice,
	},
});
