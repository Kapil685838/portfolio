import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {}
})

// export const { } = heroSlice.actions;

export default heroSlice.reducer;