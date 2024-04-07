import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slices/hero';
import experienceReducer from './slices/experience';

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        experience: experienceReducer
    },
})