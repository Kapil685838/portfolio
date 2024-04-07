import { configureStore } from '@reduxjs/toolkit';
import experienceReducer from './slices/experience';

export const store = configureStore({
    reducer: {
        experience: experienceReducer,
    },
})