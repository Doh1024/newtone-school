import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: 'language',
	language: 'en',
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLangauge: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { setLangauge } = languageSlice.actions;
export default languageSlice.reducer;