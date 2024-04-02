import { configureStore } from '@reduxjs/toolkit';
import experienceSlice from './slices/experience';

export const store = configureStore({
    reducer: {
        experience: experienceSlice,
    },
})